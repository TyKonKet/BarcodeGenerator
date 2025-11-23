(function () {
    'use strict';

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
            // Default to dark theme for first-time visitors; respect saved preference if present
            this.theme = localStorage.getItem('theme') || 'dark';
            this.init();
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
            themeIcon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
        }

        setupEventListeners() {
            document.getElementById('themeToggle').addEventListener('click', () => {
                this.toggleTheme();
            });

            document.getElementById('download-btn').addEventListener('click', () => {
                this.downloadData();
            });
        }

        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.theme);
            this.setupTheme();
        }

        async loadData() {
            try {
                if (typeof window.BENCHMARK_DATA !== 'undefined') {
                    this.data = window.BENCHMARK_DATA;
                } else {
                    throw new Error('Benchmark data not found');
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
            document.getElementById('last-update').textContent = lastUpdate.toLocaleString();

            const repoLink = document.getElementById('repository-link');
            repoLink.href = this.data.repoUrl;
            repoLink.textContent = this.data.repoUrl;
        }

        renderOverviewStats() {
            const encoders = Object.keys(this.data.entries);
            const totalEncoders = encoders.filter(name => name.includes('Encoder')).length;

            // Calculate total benchmarks
            let totalBenchmarks = 0;
            encoders.forEach(encoderName => {
                const entries = this.data.entries[encoderName];
                totalBenchmarks += entries.length;
            });

            // Benchmark types
            const benchmarkTypes = ['SimpleInstance', 'AdvancedInstance', 'EncodingWithoutText', 'EncodingWithText'];

            // Compute stats for each type
            const stats = {};
            benchmarkTypes.forEach(type => {
                let fastestEncoder = '';
                let fastestTime = Infinity;
                let slowestEncoder = '';
                let slowestTime = 0;
                let allTimes = [];

                encoders.forEach(encoderName => {
                    const entries = this.data.entries[encoderName];
                    entries.forEach(entry => {
                        entry.benches.forEach(bench => {
                            const benchType = bench.name.split('.').pop();
                            if (benchType === type) {
                                allTimes.push(bench.value);
                                if (bench.value < fastestTime) {
                                    fastestTime = bench.value;
                                    fastestEncoder = encoderName;
                                }
                                if (bench.value > slowestTime) {
                                    slowestTime = bench.value;
                                    slowestEncoder = encoderName;
                                }
                            }
                        });
                    });
                });

                const averageTime = allTimes.length > 0 ?
                    allTimes.reduce((a, b) => a + b, 0) / allTimes.length : 0;

                stats[type] = {
                    fastestEncoder: fastestEncoder.replace('Encoder', ''),
                    slowestEncoder: slowestEncoder.replace('Encoder', ''),
                    fastestTime: fastestTime !== Infinity ? this.formatTime(fastestTime) : '-',
                    slowestTime: slowestTime > 0 ? this.formatTime(slowestTime) : '-',
                    averageTime: averageTime > 0 ? this.formatTime(averageTime) : '-'
                };
            });

            // Update DOM
            document.getElementById('totalEncoders').textContent = totalEncoders;
            document.getElementById('simple-fastest-encoder').textContent = stats.SimpleInstance.fastestEncoder;
            document.getElementById('simple-fastest-time').textContent = stats.SimpleInstance.fastestTime;
            document.getElementById('simple-slowest-encoder').textContent = stats.SimpleInstance.slowestEncoder;
            document.getElementById('simple-slowest-time').textContent = stats.SimpleInstance.slowestTime;
            // show a concise descriptor here — the chart's latest-point label shows the numeric value
            const simpleAvgEl = document.getElementById('simple-average-time');
            simpleAvgEl.textContent = 'Avg per run';
            simpleAvgEl.title = stats.SimpleInstance.averageTime;
            document.getElementById('advanced-fastest-encoder').textContent = stats.AdvancedInstance.fastestEncoder;
            document.getElementById('advanced-fastest-time').textContent = stats.AdvancedInstance.fastestTime;
            document.getElementById('advanced-slowest-encoder').textContent = stats.AdvancedInstance.slowestEncoder;
            document.getElementById('advanced-slowest-time').textContent = stats.AdvancedInstance.slowestTime;
            const advancedAvgEl = document.getElementById('advanced-average-time');
            advancedAvgEl.textContent = 'Avg per run';
            advancedAvgEl.title = stats.AdvancedInstance.averageTime;
            document.getElementById('without-fastest-encoder').textContent = stats.EncodingWithoutText.fastestEncoder;
            document.getElementById('without-fastest-time').textContent = stats.EncodingWithoutText.fastestTime;
            document.getElementById('without-slowest-encoder').textContent = stats.EncodingWithoutText.slowestEncoder;
            document.getElementById('without-slowest-time').textContent = stats.EncodingWithoutText.slowestTime;
            const withoutAvgEl = document.getElementById('without-average-time');
            withoutAvgEl.textContent = 'Avg per run';
            withoutAvgEl.title = stats.EncodingWithoutText.averageTime;
            document.getElementById('with-fastest-encoder').textContent = stats.EncodingWithText.fastestEncoder;
            document.getElementById('with-fastest-time').textContent = stats.EncodingWithText.fastestTime;
            document.getElementById('with-slowest-encoder').textContent = stats.EncodingWithText.slowestEncoder;
            document.getElementById('with-slowest-time').textContent = stats.EncodingWithText.slowestTime;
            const withAvgEl = document.getElementById('with-average-time');
            withAvgEl.textContent = 'Avg per run';
            withAvgEl.title = stats.EncodingWithText.averageTime;
            document.getElementById('total-benchmark-runs').textContent = totalBenchmarks;

            // Render small sparklines showing average per-commit for each benchmark type
            const typeToCanvas = {
                SimpleInstance: document.getElementById('simple-average-chart'),
                AdvancedInstance: document.getElementById('advanced-average-chart'),
                EncodingWithoutText: document.getElementById('without-average-chart'),
                EncodingWithText: document.getElementById('with-average-chart')
            };

            Object.keys(typeToCanvas).forEach(typeKey => {
                const canvas = typeToCanvas[typeKey];
                if (!canvas) return;
                // limit sparklines to the most recent N runs for clarity
                const series = this.buildTypeTimeSeries(typeKey, 50);
                // destroy previous chart if exists
                const chartId = `overview-${typeKey}`;
                if (this.charts.has(chartId)) {
                    try { this.charts.get(chartId).destroy(); } catch (e) { /* ignore */ }
                    this.charts.delete(chartId);
                }
                // create small chart (keyed by type)
                const chartIdKey = `overview-${typeKey}`;
                this.createOverviewSparkline(canvas, series.labels, series.values, this.getEncoderColor(typeKey), chartIdKey);
                // store a lightweight reference (Chart instance stored by createOverviewSparkline)
            });
        }

        buildTypeTimeSeries(typeKey, maxPoints) {
            // Build a time series by run index (snapshot) instead of exact timestamp.
            // Many encoders record benchmarks at slightly different timestamps per run; grouping by index
            // produces one point per run (first run, second run, ...), which matches the dataset semantics.
            const encoders = Object.keys(this.data.entries);
            const encoderEntries = encoders.map(name => this.data.entries[name] || []);
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
                    const bench = (entry.benches || []).find(b => b.name.split('.').pop() === typeKey);
                    if (!bench) return;
                    bucket.push(bench.value);
                    if (!unit) unit = bench.unit || unit;
                    if (!labelDate) labelDate = entry.date || (entry.commit && entry.commit.timestamp ? Date.parse(entry.commit.timestamp) : null);
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
            const container = document.getElementById('encoder-filters');
            container.innerHTML = ''; // Clear existing filters
            const encoders = Object.keys(this.data.entries);

            encoders.forEach(encoderName => {
                const button = document.createElement('button');
                // Start with all encoders shown (primary button style)
                button.className = 'btn btn-primary btn-sm encoder-toggle me-2 mb-2';
                button.textContent = encoderName.replace('Encoder', '');
                button.dataset.encoder = encoderName;
                button.onclick = () => this.toggleEncoder(encoderName);
                container.appendChild(button);
            });
        }

        renderCharts() {
            const container = document.getElementById('charts-container');
            container.innerHTML = '';
            const encoders = Object.keys(this.data.entries);

            encoders.forEach(encoderName => {
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
                            <small class="text-muted">Click points to view commit details</small>
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
            const entries = this.data.entries[encoderName];
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
                entry.benches.forEach(bench => {
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
            const entries = this.data.entries[encoderName];
            const chartsContainer = container.querySelector(`#charts-${encoderName}`);

            // Group benchmarks by name
            const benchmarkGroups = this.groupBenchmarksByName(entries);

            Object.keys(benchmarkGroups).forEach(benchmarkName => {
                const chartDiv = document.createElement('div');
                chartDiv.className = 'col-12 mb-4';

                const canvas = document.createElement('canvas');
                canvas.className = 'benchmark-chart';
                canvas.id = `chart-${encoderName}-${benchmarkName.replace(/[^a-zA-Z0-9]/g, '')}`;

                chartDiv.appendChild(canvas);
                chartsContainer.appendChild(chartDiv);

                // Pass the encoder name so charts for different benchmarks of the same
                // encoder use the same canonical color.
                this.createChart(canvas, encoderName, benchmarkName, benchmarkGroups[benchmarkName]);
            });
        }

        groupBenchmarksByName(entries) {
            const groups = {};

            entries.forEach(entry => {
                entry.benches.forEach(bench => {
                    const name = bench.name.split('.').pop(); // Get the last part of the name
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

            // Sort data by date
            data.sort((a, b) => a.date - b.date);

            // Prepare numeric series and a smoothed series for nicer visual trends
            const rawValues = data.map(d => d.value);
            const smoothedValues = this.smoothArray(rawValues, 3);

            // capture `this` for use in Chart callbacks
            const self = this;

            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(d => d.commit.id.slice(0, 7)),
                    datasets: [{
                        label: title,
                        // Use the smoothed series for the line so the chart appears less noisy.
                        // Tooltips and click handlers still reference the original `data` array.
                        data: smoothedValues,
                        // Use encoderName to determine color so all benchmarks for the same
                        // encoder share the same canonical color.
                        borderColor: this.getEncoderColor(encoderName),
                        backgroundColor: this.getEncoderColor(encoderName) + '20',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.6,
                        cubicInterpolationMode: 'monotone',
                        pointBackgroundColor: this.getEncoderColor(encoderName),
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
                            display: true,
                            text: title,
                            font: {
                                size: 16,
                                weight: 'bold'
                            }
                        },
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: this.theme === 'dark' ? 'rgba(52, 58, 64, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: this.theme === 'dark' ? '#f8f9fa' : '#212529',
                            bodyColor: this.theme === 'dark' ? '#e9ecef' : '#495057',
                            borderColor: this.getEncoderColor(encoderName),
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
                                title: (context) => {
                                    const point = data[context[0].dataIndex];
                                    return `Commit: ${point.commit.id.slice(0, 7)}`;
                                },
                                beforeBody: (context) => {
                                    const point = data[context[0].dataIndex];
                                    return [
                                        `Date: ${new Date(point.date).toLocaleDateString()}`,
                                        `Message: ${point.commit.message.split('\n')[0]}`
                                    ];
                                },
                                label: (context) => {
                                    const point = data[context.dataIndex];
                                    // Use dashboard.formatTime to render the numeric value with unit
                                    const formatted = self.formatTime(point.value);
                                    let rangeText = '';
                                    if (typeof point.range !== 'undefined' && point.range !== null) {
                                        // Ensure numeric and format the ± range using the same formatTime helper
                                        const rangeVal = Number(point.range);
                                        if (!Number.isNaN(rangeVal)) {
                                            rangeText = ` (±${self.formatTime(rangeVal)})`;
                                        }
                                    }
                                    return `Performance: ${formatted}${rangeText}`;
                                }
                            }
                        }
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
                            // hide the y-axis title/description (unit is shown in tooltips)
                            title: {
                                display: false,
                                text: data.length > 0 ? data[0].unit : 'Performance'
                            },
                            beginAtZero: true,
                            ticks: {
                                // format numeric tick labels using formatTime
                                callback: function (value, index, ticks) {
                                    return self.formatTime(Number(value));
                                }
                            },
                            grid: {
                                color: this.theme === 'dark' ? '#495057' : '#e0e0e0'
                            }
                        }
                    },
                    onClick: (event, elements) => {
                        if (elements.length > 0) {
                            const index = elements[0].index;
                            const point = data[index];
                            window.open(point.commit.url, '_blank');
                        }
                    }
                }
            });

            this.charts.set(canvas.id, chart);
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
            // Compute a stable, high-variance color solely from the provided
            // encoder/benchmark name. No hardcoded class lists or special cases.
            const name = String(encoderName || 'default').trim();

            // Tokenize and pick a canonical token as seed (last token is usually
            // the most specific, e.g. 'Code128' from 'Bench.Code128' or
            // 'Code128Encoder')
            const tokens = name.split(/[^A-Za-z0-9]+/).filter(Boolean).map(t => t.replace(/Encoder$/i, ''));
            const seed = tokens.length ? tokens[tokens.length - 1] : name;

            // djb2 string hash (stable)
            const hashString = (str) => {
                let h = 5381;
                for (let i = 0; i < str.length; i++) {
                    h = ((h << 5) + h) + str.charCodeAt(i);
                    h = h & 0xffffffff;
                }
                return h >>> 0;
            };

            // Generate several independent 32-bit hashes (different salts) so
            // hue/sat/light are derived from distinct bits of entropy. This
            // reduces collisions where many seeds accidentally map to similar
            // hues (e.g., many green-ish values).
            const h1 = hashString(seed + '|h');
            const h2 = hashString(seed + '|s');
            const h3 = hashString(seed + '|l');

            const GOLDEN_ANGLE = 137.508; // degrees
            // Mix fractional hashes and golden angle to spread hues.
            const frac1 = h1 / 4294967295; // in [0,1]
            const frac2 = h2 / 4294967295;
            const hue = Math.floor((frac1 * 360 + frac2 * GOLDEN_ANGLE) % 360);

            // Use independent hashes for saturation and lightness with wider ranges
            // to improve perceptual separation.
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

    // Initialize dashboard when page loads
    document.addEventListener('DOMContentLoaded', () => {
        window.dashboard = new BenchmarkDashboard();
    });
})();
