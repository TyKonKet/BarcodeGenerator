# Changelog

## [2.1.0] - 2025-11-23
### Added
- Added first-class support for the CODE-39, CODE-128, CODABAR, Interleaved 2 of 5 (ITF), and UPC-E encoders so modern barcode scenarios are available out of the box.
- Integrated PolySharp to improve compatibility across the supported framework targets and polyfill any low-level runtime gaps.

### Changed
- Validation APIs now expose richer metadata, making it easier to inspect results programmatically and reduce downstream parsing.
- Text rendering now allows the text color to be configured independently of the bars and background so captions can be styled without extra work.
- **Breaking change:** The legacy `EncodesExtensions` class has been renamed and consolidated into `BarcodeTypeExtensions`; update your using directives and references accordingly.

### Fixed
- Validation pipelines now consistently return structured results, reducing surprises when consumers call `BarcodeValidator.Validate`.

### Removed
- The legacy `EncodesExtensions` helper has been removed in favor of the new `BarcodeTypeExtensions` surface, streamlining the public surface and preventing duplicate functionality.
