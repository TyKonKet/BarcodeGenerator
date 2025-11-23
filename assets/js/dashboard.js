(function () {
    'use strict';

    const THEME_STORAGE_KEY = 'theme';
    const DEFAULT_THEME = 'dark';
    const BENCHMARK_TYPES = ['SimpleInstance', 'AdvancedInstance', 'EncodingWithoutText', 'EncodingWithText'];
    const MAX_OVERVIEW_SERIES_POINTS = 50;
    const OVERVIEW_CARD_CONFIG = {
        SimpleInstance: { prefix: 'simple' },
        AdvancedInstance: { prefix: 'advanced' },
        EncodingWithoutText: { prefix: 'without' },
        EncodingWithText: { prefix: 'with' }
    };

    const getElement = (id) => document.getElementById(id);
    const setTextContent = (id, value) => {
        const el = getElement(id);
        if (el) el.textContent = value;
    };

    // Check if Chart.js loaded from CDN, if not use embedded version
    if (typeof Chart === 'undefined') {
        console.log('Chart.js CDN failed, using embedded fallback');
        // Here you would include the embedded Chart.js code
        // For this implementation, we'll create a simple custom chart if needed
    }

    class BenchmarkDashboard {
        constructor() {
            this.data = null;
            this.charts = new Map();
            this.hiddenEncoders = new Set();
            this.colorCache = new Map();
            // Default to dark theme for first-time visitors; respect saved preference if present
            this.theme = localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
            this.init();
        }

        get encoderNames() {
            if (!this.data || !this.data.entries) {
                return [];
            }
            return Object.keys(this.data.entries);
        }

        getEntriesForEncoder(encoderName) {
            if (!this.data || !this.data.entries) {
                return [];
            }
            return this.data.entries[encoderName] || [];
        }

        extractBenchType(name = '') {
            return name.split('.').pop();
        }

        formatTime(ns) {
            // Helper to format a number to 2 decimals and trim trailing zeros
            const fmt = (num, unit) => {
                // guard NaN
                if (typeof num !== 'number' || Number.isNaN(num)) return `-`;
                let s = num.toFixed(2);
                // remove trailing zeros and optional dot
                s = s.replace(/\.0+$|(?<=\.[0-9]*?)0+$/,'');
                // also remove trailing dot if any
                s = s.replace(/\.$/, '');
                return `${s} ${unit}`;
            };

            if (ns < 1000) return fmt(ns, 'ns');
            if (ns < 1000000) return fmt(ns / 1000, 'μs');
            if (ns < 1000000000) return fmt(ns / 1000000, 'ms');
            return fmt(ns / 1000000000, 's');
        }

        async init() {
            this.setupTheme();
            this.setupEventListeners();
            await this.loadData();
            this.renderDashboard();
        }

        setupTheme() {
            document.documentElement.setAttribute('data-theme', this.theme);
            const themeIcon = document.getElementById('themeIcon');
            if (themeIcon) {
                themeIcon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
            }
        }

        setupEventListeners() {
            const themeToggle = getElement('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => this.toggleTheme());
            }

            const downloadBtn = getElement('download-btn');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', () => this.downloadData());
            }

            // Delegated handler: allow users to collapse/expand per-chart stats by
            // clicking the chart title. This keeps the DOM simple and avoids
            // wiring listeners for every chart element individually.
            // Delegated click handler: support clicks on child elements by using closest()
            document.addEventListener('click', (ev) => {
                const target = /** @type {HTMLElement} */ (ev.target);
                if (!target) return;
                const title = target.closest && target.closest('.chart-stats-title');
                if (title) {
                    const parent = title.closest('.chart-stats');
                    if (parent) {
                        parent.classList.toggle('collapsed');
                        // accessibility: set aria-expanded to true when not collapsed
                        const expanded = parent.classList.contains('collapsed') ? 'false' : 'true';
                        title.setAttribute('aria-expanded', expanded);
                    }
                }
            });

            // Keyboard support for accessibility: Enter or Space toggles the stats
            // Keyboard support: allow Enter/Space to toggle when focus lands on any child of the title
            document.addEventListener('keydown', (ev) => {
                const target = /** @type {HTMLElement} */ (ev.target);
                if (!target) return;
                const title = target.closest && target.closest('.chart-stats-title');
                if (!title) return;
                if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    const parent = title.closest('.chart-stats');
                    if (parent) {
                        parent.classList.toggle('collapsed');
                        const expanded = parent.classList.contains('collapsed') ? 'false' : 'true';
                        title.setAttribute('aria-expanded', expanded);
                    }
                }
            });

            // Global collapse/expand controls (buttons added to the toolbar)
            const collapseBtn = getElement('collapse-stats-btn');
            const expandBtn = getElement('expand-stats-btn');
            if (collapseBtn) collapseBtn.addEventListener('click', () => window.collapseAllStats && window.collapseAllStats());
            if (expandBtn) expandBtn.addEventListener('click', () => window.expandAllStats && window.expandAllStats());

            // create a floating overlay toggle button (similar to theme toggle)
            try {
                // read persisted preference
                const stored = localStorage.getItem('dotnetOverlay');
                // default to true if not set
                window.PROTO_SHOW_DOTNET_OVERLAY = stored === null ? true : stored === 'true';
            } catch (e) {
                window.PROTO_SHOW_DOTNET_OVERLAY = true;
            }
            this.createOverlayToggleButton();
        }

        createOverlayToggleButton() {
            // avoid duplicate button
            if (document.getElementById('overlayToggle')) return;
            const btn = document.createElement('button');
            btn.id = 'overlayToggle';
            btn.type = 'button';
            btn.className = 'overlay-toggle';
            btn.title = 'Toggle .NET version overlay';
            btn.setAttribute('aria-pressed', String(window.PROTO_SHOW_DOTNET_OVERLAY));
            btn.textContent = window.PROTO_SHOW_DOTNET_OVERLAY ? 'OVL On' : 'OVL Off';
            btn.addEventListener('click', () => this.toggleOverlay(btn));
            document.body.appendChild(btn);
        }

        toggleOverlay(button) {
            const next = !(window.PROTO_SHOW_DOTNET_OVERLAY === true);
            window.PROTO_SHOW_DOTNET_OVERLAY = next;
            try { localStorage.setItem('dotnetOverlay', String(next)); } catch (e) {}
            if (button) {
                button.setAttribute('aria-pressed', String(next));
                button.textContent = next ? 'OVL On' : 'OVL Off';
            }

            if (!next) {
                // hide overlays: remove markers and cleanup observers
                document.querySelectorAll('.dotnet-marker').forEach(n => n.remove());
                document.querySelectorAll('[data-encoder]').forEach(section => {
                    if (section._dotnetOverlayCleanup) {
                        try { section._dotnetOverlayCleanup(); } catch (e) {}
                    }
                });
            } else {
                // show overlays: create overlays for existing canvases
                document.querySelectorAll('canvas.benchmark-chart').forEach(canvas => {
                    const chartDiv = canvas.parentElement;
                    if (!chartDiv) return;
                    try { this.createStaticVersionOverlay(chartDiv, canvas); } catch (e) { console.warn(e); }
                });
            }
        }

        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem(THEME_STORAGE_KEY, this.theme);
            this.setupTheme();
        }

        async loadData() {
            try {
                if (typeof window.BENCHMARK_DATA !== 'undefined') {
                    this.data = window.BENCHMARK_DATA;
                } else {
                    throw new Error('Benchmark data not found');
                }
                // attempt to load .NET runtime runs metadata (used for overlay markers)
                try {
                    const resp = await fetch('dotnet-versions.json');
                    if (resp && resp.ok) {
                        const js = await resp.json();
                        this._dotnetRuns = js && js.runs ? js.runs : (Array.isArray(js) ? js : []);
                    } else {
                        this._dotnetRuns = [];
                    }
                } catch (e) {
                    console.warn('Could not load dotnet-versions.json', e);
                    this._dotnetRuns = [];
                }
            } catch (error) {
                console.error('Failed to load benchmark data:', error);
                this.showError('Failed to load benchmark data. Please try refreshing the page.');
            }
        }

        renderDashboard() {
            if (!this.data) return;

            this.renderHeader();
            this.renderOverviewStats();
            this.renderFilters();
            this.renderCharts();
        }

        renderHeader() {
            const lastUpdate = new Date(this.data.lastUpdate);
            setTextContent('last-update', lastUpdate.toLocaleString());

            const repoLink = document.getElementById('repository-link');
            if (repoLink) {
                repoLink.href = this.data.repoUrl;
                repoLink.textContent = this.data.repoUrl;
            }
        }

        renderOverviewStats() {
            const encoders = this.encoderNames;
            if (!encoders.length) return;

            const totalEncoders = encoders.filter(name => name.includes('Encoder')).length;
            const totalBenchmarks = encoders.reduce((acc, encoderName) => acc + this.getEntriesForEncoder(encoderName).length, 0);
            const stats = this.calculateOverviewStats(encoders);

            this.updateOverviewCards(stats, totalEncoders, totalBenchmarks);
            this.renderOverviewSparklines();
        }

        calculateOverviewStats(encoders) {
            const stats = {};

            BENCHMARK_TYPES.forEach(type => {
                const aggregate = {
                    times: [],
                    fastestEncoder: '',
                    fastestTime: Infinity,
                    slowestEncoder: '',
                    slowestTime: 0
                };

                encoders.forEach(encoderName => {
                    this.getEntriesForEncoder(encoderName).forEach(entry => {
                        (entry.benches || []).forEach(bench => {
                            if (this.extractBenchType(bench.name) !== type) return;
                            const value = Number(bench.value);
                            if (Number.isNaN(value)) return;
                            aggregate.times.push(value);
                            if (value < aggregate.fastestTime) {
                                aggregate.fastestTime = value;
                                aggregate.fastestEncoder = encoderName;
                            }
                            if (value > aggregate.slowestTime) {
                                aggregate.slowestTime = value;
                                aggregate.slowestEncoder = encoderName;
                            }
                        });
                    });
                });

                stats[type] = this.buildOverviewStatSnapshot(aggregate);
            });

            return stats;
        }

        buildOverviewStatSnapshot({ times, fastestEncoder, fastestTime, slowestEncoder, slowestTime }) {
            const average = times.length ? (times.reduce((sum, value) => sum + value, 0) / times.length) : 0;

            return {
                fastestEncoder: (fastestEncoder || '').replace('Encoder', ''),
                slowestEncoder: (slowestEncoder || '').replace('Encoder', ''),
                fastestTime: Number.isFinite(fastestTime) && fastestTime !== Infinity ? this.formatTime(fastestTime) : '-',
                slowestTime: slowestTime > 0 ? this.formatTime(slowestTime) : '-',
                averageTime: average > 0 ? this.formatTime(average) : '-'
            };
        }

        updateOverviewCards(stats, totalEncoders, totalBenchmarks) {
            setTextContent('totalEncoders', totalEncoders);
            setTextContent('total-benchmark-runs', totalBenchmarks);

            BENCHMARK_TYPES.forEach(type => {
                const config = OVERVIEW_CARD_CONFIG[type];
                const typeStats = stats[type];
                if (!config || !typeStats) return;

                setTextContent(`${config.prefix}-fastest-encoder`, typeStats.fastestEncoder);
                setTextContent(`${config.prefix}-fastest-time`, typeStats.fastestTime);
                setTextContent(`${config.prefix}-slowest-encoder`, typeStats.slowestEncoder);
                setTextContent(`${config.prefix}-slowest-time`, typeStats.slowestTime);

                const avgEl = getElement(`${config.prefix}-average-time`);
                if (avgEl) {
                    // The chart shows the numeric value; keep the label concise
                    //avgEl.textContent = 'Avg per run';
                    avgEl.title = typeStats.averageTime;
                }
            });
        }

        renderOverviewSparklines() {
            const typeToCanvas = {
                SimpleInstance: getElement('simple-average-chart'),
                AdvancedInstance: getElement('advanced-average-chart'),
                EncodingWithoutText: getElement('without-average-chart'),
                EncodingWithText: getElement('with-average-chart')
            };

            Object.entries(typeToCanvas).forEach(([typeKey, canvas]) => {
                if (!canvas) return;

                const series = this.buildTypeTimeSeries(typeKey, MAX_OVERVIEW_SERIES_POINTS);
                const chartId = `overview-${typeKey}`;
                this.destroyChart(chartId);
                this.createOverviewSparkline(canvas, series.labels, series.values, this.getEncoderColor(typeKey), chartId);
            });
        }

        destroyChart(chartId) {
            if (!this.charts.has(chartId)) return;
            const chart = this.charts.get(chartId);
            if (chart && typeof chart.destroy === 'function') {
                try {
                    chart.destroy();
                } catch (error) {
                    console.warn(`Failed to destroy chart ${chartId}`, error);
                }
            }
            this.charts.delete(chartId);
        }

        buildTypeTimeSeries(typeKey, maxPoints) {
            // Build a time series by run index (snapshot) instead of exact timestamp.
            // Many encoders record benchmarks at slightly different timestamps per run; grouping by index
            // produces one point per run (first run, second run, ...), which matches the dataset semantics.
            const encoders = this.encoderNames;
            const encoderEntries = encoders.map(name => this.getEntriesForEncoder(name));
            const maxRuns = encoderEntries.reduce((m, arr) => Math.max(m, arr.length), 0);

            const labels = [];
            const values = [];
            let unit = '';

            for (let runIndex = 0; runIndex < maxRuns; runIndex++) {
                const bucket = [];
                let labelDate = null;

                encoderEntries.forEach(entries => {
                    const entry = entries[runIndex];
                    if (!entry) return;
                    // find the bench for this type
                    const bench = (entry.benches || []).find(b => this.extractBenchType(b.name) === typeKey);
                    if (!bench) return;
                    bucket.push(bench.value);
                    if (!unit) unit = bench.unit || unit;
                    if (!labelDate) {
                        const commitDate = entry.commit && entry.commit.timestamp ? Date.parse(entry.commit.timestamp) : null;
                        labelDate = entry.date || commitDate;
                    }
                });

                if (bucket.length === 0) {
                    // no data for this run across encoders — skip
                    continue;
                }

                const avg = bucket.reduce((a, b) => a + b, 0) / bucket.length;
                values.push(avg);
                labels.push(labelDate ? new Date(labelDate).toLocaleDateString() : `Run ${runIndex + 1}`);
            }

            // if requested, only keep the last `maxPoints` entries
            if (typeof maxPoints === 'number' && maxPoints > 0 && values.length > maxPoints) {
                const start = values.length - maxPoints;
                const slicedValues = values.slice(start);
                const slicedLabels = labels.slice(start);
                return { labels: slicedLabels, values: slicedValues, unit };
            }

            return { labels, values, unit };
        }

        createOverviewSparkline(canvas, labels, values, color, chartKey) {
            // Build per-run averages are computed in buildTypeTimeSeries.
            // Apply light smoothing to overview sparklines so trends are easier to read.
            try {
                this.drawSparklineFallback(canvas, values || [], color, { smooth: true, latest: true });
            } catch (e) {
                console.error('Sparkline draw failed', e);
            }

            // store a marker so future renders can clear/replace if needed
            if (chartKey) this.charts.set(chartKey, { type: 'sparkline' });
            else this.charts.set(`overview-${canvas.id || Math.random()}`, { type: 'sparkline' });
        }

        // Utility: light moving-average smoothing used for both sparklines and Chart.js datasets
        smoothArray(values, windowSize = 3) {
            if (!values || values.length < 3) return values.slice();
            const w = Math.max(1, Math.floor(windowSize));
            const out = [];
            for (let i = 0; i < values.length; i++) {
                const start = Math.max(0, i - Math.floor(w / 2));
                const end = Math.min(values.length - 1, i + Math.floor(w / 2));
                let sum = 0, count = 0;
                for (let j = start; j <= end; j++) { sum += values[j]; count++; }
                out.push(sum / count);
            }
            return out;
        }

        drawSparklineFallback(canvas, values, color, options = {}) {
            const ctx = canvas.getContext('2d');
            const dpr = window.devicePixelRatio || 1;
            const w = canvas.clientWidth || 240;
            const h = canvas.clientHeight || 68;
            canvas.width = Math.max(1, Math.floor(w * dpr));
            canvas.height = Math.max(1, Math.floor(h * dpr));
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // clear
            ctx.clearRect(0, 0, w, h);

            if (!values || values.length === 0) {
                // draw faint baseline to indicate empty data
                ctx.strokeStyle = 'rgba(255,255,255,0.06)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(6, h / 2);
                ctx.lineTo(w - 6, h / 2);
                ctx.stroke();
                return;
            }

            // optionally apply light smoothing; default is enabled but overview callers pass {smooth:false}
            const shouldSmooth = options.smooth !== false;
            const smoothValues = (vals) => this.smoothArray(vals, 3);

            const plottedValues = shouldSmooth ? smoothValues(values) : values;

            // compute min/max
            const min = Math.min(...plottedValues);
            const max = Math.max(...plottedValues);
            const range = max - min || 1;

            // draw filled area + line
            ctx.beginPath();
            plottedValues.forEach((v, i) => {
                const x = 6 + (i / Math.max(1, plottedValues.length - 1)) * (w - 12);
                const y = 6 + (1 - (v - min) / range) * (h - 12);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.strokeStyle = color || '#888';
            ctx.lineWidth = 2;
            ctx.stroke();

            // draw latest point marker + small label if requested
            if (options.latest) {
                const lastIndex = plottedValues.length - 1;
                if (lastIndex >= 0) {
                    const lastVal = plottedValues[lastIndex];
                    const x = 6 + (lastIndex / Math.max(1, plottedValues.length - 1)) * (w - 12);
                    const y = 6 + (1 - (lastVal - min) / range) * (h - 12);

                    // marker
                    ctx.beginPath();
                    ctx.fillStyle = color || '#888';
                    ctx.strokeStyle = '#fff';
                    ctx.lineWidth = 1.5;
                    ctx.arc(x, y, 4, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();

                    // label background
                    const label = this.formatTime(values[values.length - 1]);
                    ctx.font = '11px sans-serif';
                    const padding = 6;
                    const textWidth = ctx.measureText(label).width;
                    const rectW = textWidth + padding;
                    const rectH = 18;
                    // position label to the top-right of the point, but keep inside canvas
                    let rx = x + 8;
                    let ry = y - rectH - 6;
                    if (rx + rectW > w - 4) rx = w - rectW - 4;
                    if (ry < 4) ry = y + 8;

                    ctx.beginPath();
                    ctx.fillStyle = this.theme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)';
                    ctx.fillRect(rx, ry, rectW, rectH);

                    // text
                    ctx.fillStyle = this.theme === 'dark' ? '#f8f9fa' : '#212529';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(label, rx + padding / 2, ry + rectH / 2 + 1);
                }
            }
        }

        renderFilters() {
            const container = getElement('encoder-filters');
            if (!container) return;
            container.innerHTML = '';

            const fragment = document.createDocumentFragment();
            this.encoderNames.forEach(encoderName => {
                fragment.appendChild(this.createEncoderToggleButton(encoderName));
            });

            container.appendChild(fragment);
        }

        createEncoderToggleButton(encoderName) {
            const button = document.createElement('button');
            button.type = 'button';
            // Start with all encoders shown (primary button style)
            button.className = 'btn btn-primary btn-sm encoder-toggle me-2 mb-2';
            button.textContent = encoderName.replace('Encoder', '');
            button.dataset.encoder = encoderName;
            button.addEventListener('click', () => this.toggleEncoder(encoderName));
            return button;
        }

        renderCharts() {
            const container = document.getElementById('charts-container');
            if (!container) return;
            container.innerHTML = '';
            this.encoderNames.forEach(encoderName => {
                if (this.hiddenEncoders.has(encoderName)) {
                    return;
                }

                const chartSection = this.createChartSection(encoderName);
                container.appendChild(chartSection);
                this.renderEncoderCharts(encoderName, chartSection);
            });
        }

        createChartSection(encoderName) {
            const section = document.createElement('div');
            section.className = 'row mb-4';
            section.dataset.encoder = encoderName;

            // Get performance trend
            const trend = this.calculatePerformanceTrend(encoderName);
            const trendBadge = this.createTrendBadge(trend);

            section.innerHTML = `
                <div class="col-12">
                    <div class="chart-container">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="mb-0">${encoderName.replace('Encoder', '')} Performance ${trendBadge}</h4>
                        </div>
                        <div class="benchmark-charts" id="charts-${encoderName}">
                            <!-- Charts will be rendered here -->
                        </div>
                    </div>
                </div>
            `;

            return section;
        }

        calculatePerformanceTrend(encoderName) {
            const entries = this.getEntriesForEncoder(encoderName);
            if (entries.length < 2) return 'stable';

            const recent = entries.slice(-3); // Last 3 entries
            const older = entries.slice(-6, -3); // Previous 3 entries

            if (recent.length === 0 || older.length === 0) return 'stable';

            const recentAvg = this.calculateAveragePerformance(recent);
            const olderAvg = this.calculateAveragePerformance(older);

            const changePercent = ((recentAvg - olderAvg) / olderAvg) * 100;

            if (changePercent > 10) return 'regression';
            if (changePercent < -10) return 'improvement';
            return 'stable';
        }

        calculateAveragePerformance(entries) {
            let total = 0;
            let count = 0;

            entries.forEach(entry => {
                (entry.benches || []).forEach(bench => {
                    total += bench.value;
                    count++;
                });
            });

            return count > 0 ? total / count : 0;
        }

        createTrendBadge(trend) {
            const trends = {
                improvement: { icon: '📈', text: 'Improved', class: 'badge-improved' },
                regression: { icon: '📉', text: 'Regression', class: 'badge-regression' },
                stable: { icon: '➡️', text: 'Stable', class: 'badge-stable' }
            };

            const t = trends[trend];
            return `<span class="performance-badge ${t.class}">${t.icon} ${t.text}</span>`;
        }

        renderEncoderCharts(encoderName, container) {
            const entries = this.getEntriesForEncoder(encoderName);
            if (!entries.length) return;
            const chartsContainer = container.querySelector(`#charts-${encoderName}`);
            if (!chartsContainer) return;

            // Group benchmarks by name
            const benchmarkGroups = this.groupBenchmarksByName(entries);

            Object.keys(benchmarkGroups).forEach(benchmarkName => {
                const chartDiv = document.createElement('div');
                chartDiv.className = 'col-12 mb-4';

                // renderSeriesStats returns a ready-to-insert stats block

                const canvas = document.createElement('canvas');
                canvas.className = 'benchmark-chart';
                canvas.id = `chart-${encoderName}-${benchmarkName.replace(/[^a-zA-Z0-9]/g, '')}`;

                // compute lightweight stats for this series and render into statRow
                const stats = this.computeSeriesStats(benchmarkGroups[benchmarkName]);
                const statsBlock = this.renderSeriesStats(stats, benchmarkName);
                if (statsBlock) chartDiv.appendChild(statsBlock);
                chartDiv.appendChild(canvas);
                chartsContainer.appendChild(chartDiv);

                // Pass the encoder name so charts for different benchmarks of the same
                // encoder use the same canonical color.
                this.createChart(canvas, encoderName, benchmarkName, benchmarkGroups[benchmarkName]);

                // Prototype overlay: add static .NET version markers so we can review visuals
                // This is a non-invasive prototype that inserts absolutely-positioned DOM
                // markers above the canvas. Later we'll map actual timestamps to x positions.
                try {
                    // Controlled by a global flag so the prototype can be toggled during review
                    if (typeof window.PROTO_SHOW_DOTNET_OVERLAY === 'undefined' || window.PROTO_SHOW_DOTNET_OVERLAY !== false) {
                        this.createStaticVersionOverlay(chartDiv, canvas);
                    }
                } catch (e) {
                    // non-fatal for prototype
                    console.warn('Static version overlay failed', e);
                }
            });
        }

        createStaticVersionOverlay(chartDiv, canvas) {
            // Ensure the parent container is positioned so absolute children align to it
            if (!chartDiv || !canvas) return;
            chartDiv.style.position = chartDiv.style.position || 'relative';

            // Remove any existing prototype markers to avoid duplication on re-render
            chartDiv.querySelectorAll('.dotnet-marker').forEach(n => n.remove());

            // helper to position markers based on chart pixels (if chart exists) or fallback
            // We'll attempt to load real .NET runtime runs from ./dotnet-versions.json
            // and map each run timestamp to the nearest data index in the chart's sorted data.
            const positionMarkers = () => {
                // Use offsetTop/Left so positioning is computed relative to the
                // chartDiv (which we ensure is positioned). This avoids jitter
                // when the document layout shifts during CSS transitions.
                const canvasRect = canvas.getBoundingClientRect();
                // place markers at the bottom of the canvas area: compute distance
                // from the bottom of chartDiv to the bottom of the canvas and use
                // that as 'bottom' in px so markers stay anchored to the canvas bottom.
                // Use a larger minimum offset so pills don't overlap x-axis tick labels.
                const canvasBottom = canvas.offsetTop + canvas.clientHeight; // relative to chartDiv
                const bottomOffset = Math.max(18, chartDiv.clientHeight - canvasBottom + 12);

                // find chart instance if available
                const chart = this.charts.get(canvas.id);

                // compute markers: prefer mapped indices from loaded versions; fall back to static sample
                let markers = [];
                try {
                    if (this._dotnetRuns && this._dotnetRuns.length) {
                        // compress runs to first occurrence of each version to avoid crowding
                        const compressed = [];
                        let prev = null;
                        this._dotnetRuns.forEach(r => {
                            const ver = r.DotNetVersion || r.version || r.DotnetVersion;
                            const ts = Date.parse(r.Timestamp || r.timestamp || r.time || r.Date || r.date);
                            if (!ver || !ts) return;
                            if (prev !== ver) {
                                compressed.push({ ts, label: String(ver) });
                                prev = ver;
                            }
                        });

                        // map compressed runs to nearest data index when possible
                        if (chart && chart._sortedData && chart._sortedData.length) {
                            const sd = chart._sortedData;
                            const getPointTime = (p) => {
                                if (!p) return null;
                                if (p.date) {
                                    const v = Date.parse(p.date);
                                    if (!isNaN(v)) return v;
                                }
                                if (p.commit && p.commit.timestamp) {
                                    const v = Date.parse(p.commit.timestamp);
                                    if (!isNaN(v)) return v;
                                }
                                return null;
                            };

                            markers = compressed.map((c) => {
                                let bestIdx = null;
                                let bestDiff = Infinity;
                                for (let i = 0; i < sd.length; i++) {
                                    const pt = sd[i];
                                    const ptTs = getPointTime(pt);
                                    if (ptTs == null) continue;
                                    const diff = Math.abs(ptTs - c.ts);
                                    if (diff < bestDiff) {
                                        bestDiff = diff;
                                        bestIdx = i;
                                    }
                                }
                                return { index: bestIdx, label: c.label, pos: bestIdx == null ? 0 : null };
                            });
                        } else {
                            // no sortedData available, render by percent across chart width
                            markers = compressed.map((c, i, arr) => ({ pos: Math.round((i / Math.max(1, arr.length - 1)) * 100) / 100, label: c.label }));
                        }
                    }
                } catch (e) {
                    console.warn('Failed to compute markers from dotnet runs', e);
                }

                // if markers empty (no real data), use small static fallback
                if (!markers || markers.length === 0) {
                    markers = [
                        { pos: 0.08, label: '8.0.416' },
                        { pos: 0.48, label: '9.0.308' },
                        { pos: 0.82, label: '10.0.0' }
                    ];
                }

                markers.forEach((m, idx) => {
                    let leftPx = null;

                    if (chart && chart.getDatasetMeta) {
                        try {
                            const meta = chart.getDatasetMeta(0);
                            if (meta && meta.data && meta.data.length) {
                                // map marker to index: use provided marker.index if present, else pick a heuristic
                                const dataIndex = typeof m.index === 'number' ? m.index : (idx === 0 ? 0 : (idx === markers.length - 1 ? Math.max(0, meta.data.length - 1) : Math.floor(meta.data.length / 2)));
                                const point = meta.data[Math.min(dataIndex, meta.data.length - 1)];
                                if (point && typeof point.x === 'number') {
                                    // canvas.offsetLeft is relative to chartDiv because chartDiv is positioned
                                    leftPx = canvas.offsetLeft + point.x;
                                }
                            }
                        } catch (e) {
                            // ignore and fallback to percent
                            leftPx = null;
                        }
                    }

                    const el = document.createElement('div');
                    el.className = 'dotnet-marker';
                    // store metadata for potential later repositioning
                    el.dataset.markerIndex = typeof m.index === 'number' ? String(m.index) : '';

                    // attach to DOM first so we can measure the pill width and avoid
                    // horizontal overflow / clipping at chart edges
                    const pill = document.createElement('span');
                    pill.className = 'dotnet-pill';
                    pill.textContent = m.label;
                    el.appendChild(pill);
                    // ensure bottom-anchored style by default for prototype
                    el.classList.add('bottom');
                    el.style.bottom = bottomOffset + 'px';
                    el.style.top = '';

                    chartDiv.appendChild(el);

                    // compute desired left in pixels (relative to chartDiv)
                    let desiredLeftPx;
                    if (leftPx !== null) {
                        desiredLeftPx = leftPx;
                    } else {
                        desiredLeftPx = Math.round(m.pos * chartDiv.clientWidth);
                    }

                    // measure and clamp so the pill doesn't overflow chart edges
                    const halfW = Math.ceil(el.offsetWidth / 2) || 20;
                    const minLeft = halfW + 8;
                    const maxLeft = Math.max(halfW + 8, chartDiv.clientWidth - halfW - 8);
                    const clamped = Math.min(Math.max(desiredLeftPx, minLeft), maxLeft);

                    el.style.left = clamped + 'px';
                    // center visually over the x coordinate
                    el.style.transform = 'translateX(-50%)';
                });
            };

            // initial positioning after layout
            setTimeout(positionMarkers, 20);

            // store handlers/observer so they can be cleaned if overlay recreated
            if (chartDiv._dotnetOverlayCleanup) chartDiv._dotnetOverlayCleanup();

            const resizeHandler = () => {
                // remove existing markers and recreate to avoid stale px/percent mix
                chartDiv.querySelectorAll('.dotnet-marker').forEach(n => n.remove());
                // run several passes to catch layout/animation-driven shifts
                positionMarkers();
                // small follow-up in case other animations (Chart.js or layout) adjust positions
                setTimeout(() => {
                    chartDiv.querySelectorAll('.dotnet-marker').forEach(n => n.remove());
                    positionMarkers();
                }, 140);
                setTimeout(() => {
                    chartDiv.querySelectorAll('.dotnet-marker').forEach(n => n.remove());
                    positionMarkers();
                }, 420);
            };

            window.addEventListener('resize', resizeHandler);

            // watch for stats collapse/expand changes so markers re-align when layout shifts
            const statsEl = chartDiv.querySelector('.chart-stats');
            let observer = null;
            if (statsEl && typeof MutationObserver !== 'undefined') {
                observer = new MutationObserver((mutations) => {
                    let changed = false;
                    for (const m of mutations) {
                        if (m.attributeName === 'class') { changed = true; break; }
                    }
                    if (changed) {
                        // If the stats element has a transition, wait for it to finish to
                        // ensure layout has settled before repositioning. Otherwise fall
                        // back to a small timeout.
                        const cs = window.getComputedStyle(statsEl || document.body);
                        const td = cs && cs.transitionDuration ? String(cs.transitionDuration).split(',')[0].trim() : '0s';
                        const toMs = (s) => {
                            if (!s) return 0;
                            // handle both 'ms' and 's'
                            if (s.endsWith('ms')) return parseFloat(s);
                            if (s.endsWith('s')) return parseFloat(s) * 1000;
                            return parseFloat(s) || 0;
                        };
                        const duration = toMs(td);

                        if (duration > 0 && statsEl) {
                            const onceHandler = () => {
                                resizeHandler();
                                statsEl.removeEventListener('transitionend', onceHandler);
                            };
                            // reposition after the transition ends (one-time)
                            statsEl.addEventListener('transitionend', onceHandler, { once: true });
                            // safety fallback in case transitionend doesn't fire
                            setTimeout(resizeHandler, duration + 60);
                        } else {
                            // no transition — reposition shortly after the class change
                            setTimeout(resizeHandler, 120);
                        }
                    }
                });
                observer.observe(statsEl, { attributes: true, attributeFilter: ['class'] });
            }

            chartDiv._dotnetOverlayCleanup = () => {
                window.removeEventListener('resize', resizeHandler);
                if (observer) observer.disconnect();
                delete chartDiv._dotnetOverlayCleanup;
            };
        }

        computeSeriesStats(series) {
            // series: array of points with { value, date, commit }
            const values = (series || []).map(s => Number(s.value)).filter(v => Number.isFinite(v));
            if (!values.length) return null;

            const min = Math.min(...values);
            const max = Math.max(...values);
            const sum = values.reduce((a, b) => a + b, 0);
            const avg = sum / values.length;
            const last = values[values.length - 1];

            // median
            const sorted = values.slice().sort((a, b) => a - b);
            let median = null;
            if (sorted.length % 2 === 1) {
                median = sorted[(sorted.length - 1) / 2];
            } else {
                const hi = sorted.length / 2;
                median = (sorted[hi - 1] + sorted[hi]) / 2;
            }

            // standard deviation (sample)
            let stddev = 0;
            if (values.length > 1) {
                const mean = avg;
                const variance = values.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / (values.length - 1);
                stddev = Math.sqrt(variance);
            }

            // change percent: compare last to previous average of up to 3 previous points
            let prevAvg = null;
            if (values.length >= 2) {
                const start = Math.max(0, values.length - 4);
                const slice = values.slice(start, values.length - 1);
                if (slice.length) prevAvg = slice.reduce((a, b) => a + b, 0) / slice.length;
            }

            let changePercent = null;
            if (prevAvg && prevAvg !== 0) {
                changePercent = ((last - prevAvg) / prevAvg) * 100;
            }

            return { min, max, avg, median, stddev, last, changePercent, count: values.length };
        }

        renderSeriesStats(stats, title) {
            // parent wrapper for the title row + stats row
            const parent = document.createElement('div');
            parent.className = 'chart-stats mb-2';

            if (!stats) {
                const span = document.createElement('div');
                span.className = 'text-muted';
                span.textContent = 'No data';
                parent.appendChild(span);
                return parent;
            }

            // Title row (centered)
            if (title) {
                const titleEl = document.createElement('div');
                titleEl.className = 'chart-stats-title text-center w-100 mb-2';
                titleEl.textContent = String(title).replace(/Encoder$/i, '');
                // Accessibility: make title act like a toggle button
                titleEl.setAttribute('role', 'button');
                titleEl.setAttribute('aria-expanded', 'true');
                titleEl.setAttribute('tabindex', '0');
                parent.appendChild(titleEl);
            }

            // Stats row
            const row = document.createElement('div');
            row.className = 'd-flex flex-wrap gap-3 align-items-center chart-stats-row justify-content-center';

            const createItem = (label, value) => {
                const el = document.createElement('div');
                el.className = 'chart-stat-item text-muted';
                const key = String(label).toLowerCase();
                el.dataset.label = key;
                // For min/max include an explicit inline swatch element so it sits beside the label text
                const labelHtml = (key === 'min' || key === 'max')
                    ? `<small class="stat-label"><span class="stat-swatch" aria-hidden="true"></span>${label}</small>`
                    : `<small class="stat-label">${label}</small>`;
                el.innerHTML = `${labelHtml}<div class="stat-value">${value}</div>`;
                return el;
            };

            row.appendChild(createItem('min', this.formatTime(stats.min)));
            row.appendChild(createItem('max', this.formatTime(stats.max)));
            // median and stddev are helpful for distribution insight
            if (typeof stats.median === 'number') row.appendChild(createItem('median', this.formatTime(stats.median)));
            if (typeof stats.stddev === 'number' && stats.stddev > 0) row.appendChild(createItem('stddev', this.formatTime(stats.stddev)));
            row.appendChild(createItem('avg', this.formatTime(stats.avg)));
            row.appendChild(createItem('last', this.formatTime(stats.last)));

            if (typeof stats.changePercent === 'number') {
                const change = stats.changePercent;
                const sign = change > 0 ? '▲' : (change < 0 ? '▼' : '→');
                const pct = `${sign} ${Math.abs(change).toFixed(1)}%`;
                const changeEl = createItem('change', pct);
                // colorize change value depending on direction
                if (change > 0) changeEl.classList.add('stat-change--regress');
                else if (change < 0) changeEl.classList.add('stat-change--improve');
                else changeEl.classList.add('stat-change--stable');
                row.appendChild(changeEl);
            }

            row.appendChild(createItem('samples', stats.count));
            parent.appendChild(row);
            return parent;
        }

        groupBenchmarksByName(entries) {
            const groups = {};

            entries.forEach(entry => {
                (entry.benches || []).forEach(bench => {
                    const name = this.extractBenchType(bench.name);
                    if (!name) return;

                    if (!groups[name]) {
                        groups[name] = [];
                    }

                    groups[name].push({
                        ...bench,
                        commit: entry.commit,
                        date: entry.date
                    });
                });
            });

            return groups;
        }

        createChart(canvas, encoderName, title, data) {
            // Fallback chart implementation if Chart.js is not available
            if (typeof Chart === 'undefined') {
                this.createFallbackChart(canvas, title, data);
                return;
            }

            const ctx = canvas.getContext('2d');
            const sortedData = data.slice().sort((a, b) => (a.date || 0) - (b.date || 0));
            const rawValues = sortedData.map(d => d.value);
            const smoothedValues = this.smoothArray(rawValues, 3);
            const color = this.getEncoderColor(encoderName);
            const chartConfig = this.buildChartConfig({
                title,
                color,
                smoothedValues,
                sortedData,
                encoderName
            });

            const chart = new Chart(ctx, chartConfig);
            // expose the sorted data on the chart instance so overlays can map timestamps
            try { chart._sortedData = sortedData; } catch (e) { /* ignore */ }
            this.charts.set(canvas.id, chart);
        }

        buildChartConfig({ title, color, smoothedValues, sortedData, encoderName }) {
            const self = this;
            return {
                type: 'line',
                data: {
                    labels: sortedData.map(d => (d.commit && d.commit.id ? d.commit.id.slice(0, 7) : 'unknown')),
                    datasets: [{
                        label: title,
                        data: smoothedValues,
                        borderColor: color,
                        backgroundColor: `${color}20`,
                        borderWidth: 2,
                        fill: true,
                        tension: 0.6,
                        cubicInterpolationMode: 'monotone',
                        pointBackgroundColor: color,
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    },
                    plugins: {
                        title: {
                            // Title is rendered in the custom stats box above the canvas —
                            // disable the built-in Chart.js title to avoid duplication.
                            display: false
                        },
                        legend: {
                            display: false
                        },
                        tooltip: this.buildTooltipOptions(sortedData, color)
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Commits'
                            },
                            grid: {
                                color: this.theme === 'dark' ? '#495057' : '#e0e0e0'
                            }
                        },
                        y: {
                            title: {
                                display: false,
                                text: sortedData.length > 0 ? sortedData[0].unit : 'Performance'
                            },
                            beginAtZero: true,
                            ticks: {
                                callback(value) {
                                    return self.formatTime(Number(value));
                                }
                            },
                            grid: {
                                color: this.theme === 'dark' ? '#495057' : '#e0e0e0'
                            }
                        }
                    },
                    onClick: (event, elements) => {
                        if (!elements.length) return;
                        const index = elements[0].index;
                        const point = sortedData[index];
                        if (point && point.commit && point.commit.url) {
                            window.open(point.commit.url, '_blank');
                        }
                    }
                }
            };
        }

        buildTooltipOptions(sortedData, color) {
            const self = this;
            return {
                backgroundColor: this.theme === 'dark' ? 'rgba(52, 58, 64, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                titleColor: this.theme === 'dark' ? '#f8f9fa' : '#212529',
                bodyColor: this.theme === 'dark' ? '#e9ecef' : '#495057',
                borderColor: color,
                borderWidth: 2,
                cornerRadius: 8,
                padding: 12,
                displayColors: false,
                titleFont: {
                    size: 14,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 13
                },
                callbacks: {
                    title(context) {
                        const point = sortedData[context[0].dataIndex];
                        const commitId = point.commit && point.commit.id ? point.commit.id.slice(0, 7) : 'unknown';
                        return `Commit: ${commitId}`;
                    },
                    beforeBody(context) {
                        const point = sortedData[context[0].dataIndex];
                        const dateValue = point.date ? new Date(point.date).toLocaleDateString() : '—';
                        const message = point.commit && point.commit.message ? point.commit.message.split('\n')[0] : 'No message';
                        return [`Date: ${dateValue}`, `Message: ${message}`];
                    },
                    label(context) {
                        const point = sortedData[context.dataIndex];
                        const formatted = self.formatTime(point.value);
                        let rangeText = '';
                        if (typeof point.range !== 'undefined' && point.range !== null) {
                            const rangeVal = Number(point.range);
                            if (!Number.isNaN(rangeVal)) {
                                rangeText = ` (±${self.formatTime(rangeVal)})`;
                            }
                        }
                        return `Performance: ${formatted}${rangeText}`;
                    }
                }
            };
        }

        createFallbackChart(canvas, title, data) {
            // Simple fallback chart when Chart.js is not available
            const ctx = canvas.getContext('2d');
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            ctx.fillStyle = this.theme === 'dark' ? '#343a40' : '#fff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = this.theme === 'dark' ? '#e9ecef' : '#333';
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(title, canvas.width / 2, 30);
            ctx.fillText('Chart.js not available - Using fallback', canvas.width / 2, canvas.height / 2);
            ctx.fillText(`${data.length} data points available`, canvas.width / 2, canvas.height / 2 + 30);
        }

        getEncoderColor(encoderName) {
            const key = String(encoderName || 'default').trim();
            if (this.colorCache.has(key)) {
                return this.colorCache.get(key);
            }

            const color = this.computeEncoderColor(key);
            this.colorCache.set(key, color);
            return color;
        }

        computeEncoderColor(rawName) {
            // Compute a stable, high-variance color solely from the provided
            // encoder/benchmark name. No hardcoded class lists or special cases.
            const tokens = rawName.split(/[^A-Za-z0-9]+/)
                .filter(Boolean)
                .map(t => t.replace(/Encoder$/i, ''));
            const seed = tokens.length ? tokens[tokens.length - 1] : rawName;

            const hashString = (str) => {
                let h = 5381;
                for (let i = 0; i < str.length; i++) {
                    h = ((h << 5) + h) + str.charCodeAt(i);
                    h &= 0xffffffff;
                }
                return h >>> 0;
            };

            const h1 = hashString(seed + '|h');
            const h2 = hashString(seed + '|s');
            const h3 = hashString(seed + '|l');

            const GOLDEN_ANGLE = 137.508; // degrees
            const frac1 = h1 / 4294967295;
            const frac2 = h2 / 4294967295;
            const hue = Math.floor((frac1 * 360 + frac2 * GOLDEN_ANGLE) % 360);

            const sat = 50 + (h2 % 45); // 50-94%
            const light = 28 + (h3 % 44); // 28-71%

            const hslToHex = (H, S, L) => {
                S /= 100; L /= 100;
                const C = (1 - Math.abs(2 * L - 1)) * S;
                const X = C * (1 - Math.abs((H / 60) % 2 - 1));
                const m = L - C / 2;
                let r = 0, g = 0, b = 0;
                if (0 <= H && H < 60) { r = C; g = X; b = 0; }
                else if (60 <= H && H < 120) { r = X; g = C; b = 0; }
                else if (120 <= H && H < 180) { r = 0; g = C; b = X; }
                else if (180 <= H && H < 240) { r = 0; g = X; b = C; }
                else if (240 <= H && H < 300) { r = X; g = 0; b = C; }
                else { r = C; g = 0; b = X; }
                const R = Math.round((r + m) * 255);
                const G = Math.round((g + m) * 255);
                const B = Math.round((b + m) * 255);
                const toHex = (v) => v.toString(16).padStart(2, '0');
                return `#${toHex(R)}${toHex(G)}${toHex(B)}`;
            };

            return hslToHex(hue, sat, light);
        }

        toggleEncoder(encoderName) {
            const button = document.querySelector(`[data-encoder="${encoderName}"]`);
            const chartSection = document.querySelector(`[data-encoder="${encoderName}"]:not(.encoder-toggle)`);

            if (this.hiddenEncoders.has(encoderName)) {
                // Show the encoder
                this.hiddenEncoders.delete(encoderName);
                button.classList.remove('btn-outline-primary');
                button.classList.add('btn-primary');
                if (chartSection) chartSection.classList.remove('hidden');
            } else {
                // Hide the encoder
                this.hiddenEncoders.add(encoderName);
                button.classList.remove('btn-primary');
                button.classList.add('btn-outline-primary');
                if (chartSection) chartSection.classList.add('hidden');
            }
        }

        downloadData() {
            const dataStr = JSON.stringify(this.data, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'benchmark_data.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }

        showError(message) {
            const container = document.getElementById('charts-container');
            container.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">Error</h4>
                        <p>${message}</p>
                    </div>
                </div>
            `;
        }
    }

    window.showAllEncoders = function showAllEncoders() {
        if (!window.dashboard) return;
        window.dashboard.hiddenEncoders.clear();
        document.querySelectorAll('.encoder-toggle').forEach(btn => {
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-primary');
        });
        document.querySelectorAll('[data-encoder]:not(.encoder-toggle)').forEach(section => {
            section.classList.remove('hidden');
        });
    };

    window.hideAllEncoders = function hideAllEncoders() {
        if (!window.dashboard) return;
        const encoders = Object.keys(window.dashboard.data.entries);
        encoders.forEach(encoder => window.dashboard.hiddenEncoders.add(encoder));
        document.querySelectorAll('.encoder-toggle').forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-primary');
        });
        document.querySelectorAll('[data-encoder]:not(.encoder-toggle)').forEach(section => {
            section.classList.add('hidden');
        });
    };

    // Global helpers to collapse or expand all per-chart stats boxes
    window.collapseAllStats = function collapseAllStats() {
        document.querySelectorAll('.chart-stats').forEach(el => {
            el.classList.add('collapsed');
            const title = el.querySelector('.chart-stats-title');
            if (title) title.setAttribute('aria-expanded', 'false');
        });
    };

    window.expandAllStats = function expandAllStats() {
        document.querySelectorAll('.chart-stats').forEach(el => {
            el.classList.remove('collapsed');
            const title = el.querySelector('.chart-stats-title');
            if (title) title.setAttribute('aria-expanded', 'true');
        });
    };

    // Initialize dashboard when page loads
    document.addEventListener('DOMContentLoaded', () => {
        window.dashboard = new BenchmarkDashboard();
    });
})();
