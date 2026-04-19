// Base unit: pixels per inch (PPI)
// All factors express how many PPI equal 1 unit of the given measure.
// Exact inch relations (international inch, defined 1959): 1 in = 25.4 mm = 2.54 cm = 0.0254 m
// CSS point: 1 pt = 1/72 in (Adobe PostScript / W3C CSS)
// PostScript pica: 1 pica = 12 pt = 1/6 in
// CSS pixel: 1 CSS px = 1/96 CSS in (W3C CSS Level 3 spec)

const toPPI = {
  pixels_per_metre:       0.0254,   // 1 px/m     = 0.0254  PPI  (1 in = 0.0254 m, exact)
  pixels_per_yard:        1/36,     // 1 px/yd    = 1/36    PPI  (1 yd = 36 in, exact)
  pixels_per_foot:        1/12,     // 1 px/ft    = 1/12    PPI  (1 ft = 12 in, exact)
  lines_per_inch:         1,        // 1 lpi      = 1       PPI  (same dimension, halftone context)
  pixels_per_inch:        1,        // base unit
  dots_per_inch:          1,        // 1 DPI      = 1       PPI  (same dimension, print context)
  dots_per_centimetre:    2.54,     // 1 dpcm     = 2.54    PPI  (1 in = 2.54 cm, exact)
  pixels_per_centimetre:  2.54,     // 1 px/cm    = 2.54    PPI  (1 in = 2.54 cm, exact)
  dots_per_pica:          6,        // 1 dot/pica = 6       PPI  (1 pica = 1/6 in, PostScript)
  pixels_per_millimetre:  25.4,     // 1 px/mm    = 25.4    PPI  (1 in = 25.4 mm, exact)
  lines_per_millimetre:   25.4,     // 1 lp/mm    = 25.4    PPI  (same dimension, optics context)
  dots_per_point:         72,       // 1 dot/pt   = 72      PPI  (1 pt = 1/72 in, PostScript/CSS)
  dots_per_pixel:         96,       // 1 dppx     = 96      PPI  (1 CSS px = 1/96 CSS in, W3C spec)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  pixels_per_metre: {
    name: "Pixel per metre",
    description: "The pixel per metre (px/m) is the SI-coherent form of image resolution. Because 1 inch = 0.0254 m exactly (international inch, 1959), 1 PPI = 1/0.0254 ≈ 39.37 px/m and 1 px/m = 0.0254 PPI. EXIF (IEC 61966-3) stores resolution as pixels per inch (ResolutionUnit = 2) or pixels per centimetre (ResolutionUnit = 3); px/m is used when normalising to SI for scientific or GIS workflows. Satellite remote-sensing GSD is often given in metres per pixel (the inverse); WorldView-3 at 0.31 m/px panchromatic ≈ 3.23 px/m. An A4 document scanned at 300 PPI ≈ 11,811 px/m. 1 px/m = 0.0254 PPI ≈ 0.00254 px/cm.",
    symbol: "px/m"
  },
  pixels_per_yard: {
    name: "Pixel per yard",
    description: "The pixel per yard (px/yd) is an imperial resolution unit used in textile printing, wide-format graphics, and fabric digitising, where roll widths and run lengths are measured in yards. The yard is exactly 0.9144 m = 36 in (Weights and Measures Act 1963; NIST Handbook 44), giving 1 px/yd = 1/36 PPI ≈ 0.02778 PPI. Wide-format inkjet printers (Roland RE-640, Mimaki JFX200) resolve up to 1440 DPI = 51,840 px/yd. Fabric digital printers for dye-sublimation operate at 300-600 DPI ≈ 10,800-21,600 px/yd. Flag and banner printing standard for photographic quality at 1 m viewing distance is ≈ 720 px/yd. 1 px/yd = 1/36 PPI ≈ 0.027778 PPI ≈ 1.111 px/m.",
    symbol: "px/yd"
  },
  pixels_per_foot: {
    name: "Pixel per foot",
    description: "The pixel per foot (px/ft) is an imperial resolution unit used in architectural visualisation, large-format display engineering, and document scanning where distances are measured in feet. The foot is exactly 0.3048 m = 12 in (international foot, 1959), giving 1 px/ft = 1/12 PPI ≈ 0.08333 PPI. Microfilm scanners for engineering drawing digitisation (ANSI/AIIM MS23) are specified in px/ft; a 200 px/ft scan of a 24-inch D-size drawing yields 400 pixels across the 2-foot width. Outdoor LED walls at P6 pixel pitch (6 mm) covering one foot ≈ 50.8 px/ft. Building plans at 1:48 scale reduce 1 actual foot to 0.25 in on paper, requiring ≥ 3 px/ft for legibility. 1 px/ft = 1/12 PPI ≈ 0.083333 PPI ≈ 3.281 px/m.",
    symbol: "px/ft"
  },
  lines_per_inch: {
    name: "Line per inch",
    description: "The line per inch (lpi) is the standard unit of halftone screen frequency in offset, flexographic, gravure, and screen printing. Each halftone cell varies in dot size to simulate grey tones; a 150 lpi screen on a 1200 DPI printer allocates 1200/150 = 8 printer dots per cell row, giving an 8×8 = 64-level grey matrix. Industry benchmarks: newsprint 85-100 lpi; magazines 133-175 lpi; fine-art offset 175-200 lpi; screen printing (textiles) 35-65 lpi. Rule of thumb: required DPI ≥ 1.5 × lpi for acceptable AM halftone; ≥ 2 × lpi for high quality - so 150 lpi offset needs at least 300 DPI raster data. As a dimensional quantity, 1 lpi = 1 PPI = 1 DPI; lpi designates screen frequency in print. 1 lpi = 1 PPI = 2.54 lpcm.",
    symbol: "lpi"
  },
  pixels_per_inch: {
    name: "Pixel per inch",
    description: "The pixel per inch (PPI) is the universal standard for digital image resolution, defining how many pixels occupy one linear inch in a digital image, sensor, or display. Formally referenced in ISO 12232 (digital still cameras) and EXIF/TIFF (tags 0x011A/0x011B), PPI is both a capture parameter (scanner/sensor density) and a display characteristic. Display milestones: Macintosh 128K (1984): 72 PPI; Apple iPhone 4 Retina (2010): 326 PPI - above the human perceptual threshold at 25 cm; iPhone 15 Pro (2023): 460 PPI. Print benchmarks: 150 PPI (large-format, 1 m viewing); 300 PPI (standard offset, ISO 12647-2); 400-600 PPI (fine-art Giclée). EXIF stores PPI as unsigned RATIONAL; the historical default is 72/1, a carry-over from the original Macintosh screen standard. 1 PPI = 1/0.0254 px/m ≈ 39.37 px/m = 2.54 px/cm.",
    symbol: "PPI"
  },
  dots_per_inch: {
    name: "Dot per inch",
    description: "The dot per inch (DPI) is the standard resolution metric for printed output, specifying how many individual ink or toner dots a printing device places per linear inch. Unlike a pixel, a printed dot is a physical deposit of ink variable in size and subject to dot gain (ink spread into substrate). Inkjet photo printers: Epson SureColor SC-P900 up to 5760 DPI; HP DesignJet Z9+Pro at 2400 DPI. Laser printers: HP LaserJet standard 600 DPI; enterprise class 1200 DPI. Offset CTP plate imaging: 2400-3600 DPI. Rule of thumb: required DPI ≥ 1.5 × LPI for acceptable halftone; ≥ 2 × LPI for high quality - a 175 lpi magazine job needs ≥ 350 DPI raster data. Thermal dye-sublimation printers achieve continuous-tone output at 300 DPI because dye diffuses to fill each cell. As a dimensional unit, 1 DPI = 1 PPI; DPI implies physical print output. 1 DPI = 2.54 dots/cm = 25.4 dots/mm.",
    symbol: "DPI"
  },
  dots_per_centimetre: {
    name: "Dot per centimetre",
    description: "The dot per centimetre (dpcm) is the metric equivalent of DPI, defined as a CSS resolution unit in the W3C CSS Images Level 3 specification alongside dpi and dppx. A 96 DPI reference screen (CSS Media Queries Level 4 reference device) corresponds to 96/2.54 ≈ 37.795 dpcm. ITU-T T.4 (Group 3 facsimile, 1980) defines scan line density in metric units: standard resolution 3.85 lines/mm = 38.5 dpcm; fine resolution 7.7 lines/mm = 77 dpcm. ITU-T T.85 (JBIG compression) standardised these metric resolutions for cross-border interoperability. ISO 216 A4 scanned at 77 dpcm fine fax resolution yields 1617 pixels across page width. The CSS specification recommends dppx over dpcm for screen media queries, reserving dpcm for print stylesheets targeting metric-resolution printers. 1 dpcm = 2.54 DPI = 2.54 PPI exactly (since 1 in = 2.54 cm). 1 dpcm = 0.1 dot/mm.",
    symbol: "dpcm"
  },
  pixels_per_centimetre: {
    name: "Pixel per centimetre",
    description: "The pixel per centimetre (px/cm) is the metric counterpart of PPI, measuring pixel density per centimetre. EXIF assigns ResolutionUnit = 3 when resolution is stored in px/cm; Canon, Fujifilm, and Nikon cameras can output EXIF data in px/cm. GIMP stores and displays image resolution in px/cm in its XCF format and Image Properties dialog. DICOM (NEMA PS 3.3) stores spatial resolution as PixelSpacing in mm/pixel; a radiograph at 0.2 mm/px = 5 px/mm = 50 px/cm = 127 PPI. At 10×15 cm print size, a 12 MP image (4000×3000 px) prints at 4000/15 ≈ 266.7 px/cm ≈ 677 PPI - well above the ISO 12647-2 minimum of ≈ 118 px/cm (300 PPI). Since 1 inch = 2.54 cm exactly, 1 px/cm = 2.54 PPI exactly. 1 px/cm = 2.54 PPI = 10 px/dm = 100 px/m.",
    symbol: "px/cm"
  },
  dots_per_pica: {
    name: "Dot per pica",
    description: "The dot per pica (dot/pica) is a typographic resolution unit linking printer DPI to the pica - exactly 1/6 inch in the PostScript standard (Adobe, 1985). A 72 DPI Macintosh screen placed exactly 12 dots per pica (1 dot per point); a 300 DPI LaserWriter placed 300/6 = 50 dot/pica, providing 50-level halftone cells per pica. High-end digital imagesetter platemakers: Agfa Selectset Avantra 45 at 3600 DPI = 600 dot/pica; modern 2400 DPI proofers produce 400 dot/pica. Desktop publishing software - Adobe InDesign, QuarkXPress, Affinity Publisher - defaults to pica+point rulers (e.g., 4p6 = 4 picas 6 points = 0.75 inch), making dot/pica a natural precision unit for typographic rasterisation quality assessment. 1 dot/pica = 6 DPI = 6 PPI (since 1 pica = 1/6 in). 1 dot/pica = 6 PPI = 15.24 dot/m.",
    symbol: "dot/pica"
  },
  pixels_per_millimetre: {
    name: "Pixel per millimetre",
    description: "The pixel per millimetre (px/mm) is the resolution unit of precision in machine vision, flatbed scanning, and microscopy, where working distances are in millimetres. Industrial camera datasheets (Basler acA5472-17um, FLIR BFS-U3-200S6M-C) specify resolution in px/mm at defined field widths; a 20 MP sensor over a 100 mm field resolves 54.96 px/mm. ISO 12654 (archival scanning) specifies minimum 8 px/mm (≈ 200 PPI) for standard digitisation and 24 px/mm (≈ 600 PPI) for fine-detail originals. Digital pathology: Leica Aperio GT450 at 40× magnification achieves ≈ 4,405 px/mm. CMOS sensor pixel pitch has shrunk from 7.4 µm/px (≈ 135 px/mm, mid-2000s) to 0.64 µm/px (≈ 15,625 px/mm) for smartphone sensors in 2024. Since 1 in = 25.4 mm exactly, 1 px/mm = 25.4 PPI exactly. A 300 PPI photo print = 300/25.4 ≈ 11.81 px/mm.",
    symbol: "px/mm"
  },
  lines_per_millimetre: {
    name: "Line per millimetre",
    description: "The line pair per millimetre (lp/mm) is the fundamental unit of spatial resolution in classical optics, characterising the resolving power of a lens, film emulsion, sensor, or microscope objective. A resolving power of N lp/mm means adjacent line pairs separated by 1/(2N) mm can be distinguished - derived from the Abbe diffraction limit (Ernst Abbe, 1873) and Rayleigh criterion (Lord Rayleigh, 1879). Film benchmarks at MTF50: Kodak Tri-X 400: 63 lp/mm; Fujifilm Velvia 50: 160 lp/mm; Kodak Technical Pan: 320 lp/mm. Lens benchmarks: Leica APO-Summicron-M 50 mm f/2 ASPH: ≈ 75 lp/mm at centre. CMOS sensor Nyquist frequency: for pixel pitch p mm, f_Nyquist = 1/(2p) lp/mm - a 4.63 µm pixel limits at ≈ 108 lp/mm. As a dimensional unit, 1 lp/mm = 25.4 LPI = 25.4 PPI exactly. 1 lp/mm = 25.4 PPI.",
    symbol: "lp/mm"
  },
  dots_per_point: {
    name: "Dot per point",
    description: "The dot per point (dot/pt) expresses output resolution relative to the PostScript point - exactly 1/72 inch, codified by Adobe in the PostScript Language Reference (1985). The Apple Macintosh 128K (1984) ran its built-in CRT at exactly 72 DPI, placing 1 dot per point - an intentional WYSIWYG design: a 12-point character on screen measured 12 pixels tall and printed at 12 points on the Apple LaserWriter. Device resolution milestones: Apple LaserWriter (1985) 300 DPI = 300/72 ≈ 4.17 dot/pt; HP LaserJet 4 (1992) 600 DPI ≈ 8.33 dot/pt; Linotronic 300 imagesetter (1985) 1270 DPI ≈ 17.64 dot/pt; Agfa Selectset 5000 at 2400 DPI = 33.33 dot/pt. TrueType and OpenType font hinting instructions align outline points to raster device pixels at the current dot/pt ratio. The CSS pt unit equals the PostScript point: 1 CSS pt = 1/72 CSS in = 4/3 CSS px at 1 dppx. 1 dot/pt = 72 DPI = 72 PPI.",
    symbol: "dot/pt"
  },
  dots_per_pixel: {
    name: "Dot per CSS pixel",
    description: "The dot per CSS-pixel unit (dppx, or the x descriptor in CSS) is defined in W3C CSS Images Level 3 / Media Queries Level 4 as the ratio of physical device pixels to CSS reference pixels, where the CSS spec fixes 1 CSS inch ≡ 96 CSS px exactly. Therefore 1 dppx = 96 DPI = 96 PPI exactly; a screen reporting device pixel ratio (DPR) of 2 has 2 dppx = 192 physical dots per CSS inch. JavaScript exposes DPR as window.devicePixelRatio, numerically equal to dppx. Reference values: standard laptop (96-110 PPI): 1 dppx; MacBook Pro 13-inch Retina (227 PPI): 2 dppx; iPhone 15 Pro 6.1-inch (460 PPI): 3 dppx; Samsung Galaxy S24 Ultra (501 PPI): ≈ 3.09 dppx. The HTML img srcset x descriptor (photo@2x.jpg 2x) is numerically equal to dppx, serving higher-resolution images for HiDPI screens. The CSS @media (min-resolution: 2dppx) query targets any display with DPR ≥ 2. 1 dppx = 96 DPI = 96 PPI.",
    symbol: "dppx"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toPPI);
}

function convertResolution() {
  convertFactorBased(toPPI);
}

initConverterPage();
