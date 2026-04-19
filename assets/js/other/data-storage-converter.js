const toBits = {
  bits:        1,
  nibbles:     4,
  bytes:       8,
  kilobits:    1e3,
  kibibits:    1024,
  kilobytes:   8e3,
  kibibytes:   8192,
  megabits:    1e6,
  mebibits:    1048576,
  megabytes:   8e6,
  mebibytes:   8388608,
  gigabits:    1e9,
  gibibits:    1073741824,
  gigabytes:   8e9,
  gibibytes:   8589934592,
  terabits:    1e12,
  tebibits:    1099511627776,
  terabytes:   8e12,
  tebibytes:   8796093022208,
  petabits:    1e15,
  pebibits:    1125899906842624,
  petabytes:   8e15,
  pebibytes:   9007199254740992,
  exabits:     1e18,
  exbibits:    2**60,
  exabytes:    8e18,
  exbibytes:   2**63,
  zettabits:   1e21,
  zebibits:    2**70,
  zettabytes:  8e21,
  zebibytes:   2**73,
  yottabits:   1e24,
  yobibits:    2**80,
  yottabytes:  8e24,
  yobibytes:   2**83,
};

// Unit descriptions
const unitDescriptions = {
  bits: {
    name: "Bit",
    description: "The bit (b) is the fundamental unit of digital information - a single binary digit: 0 or 1. Coined by John Tukey in 1948; formalised by Claude Shannon. Physically realised as transistor states (SRAM/DRAM), magnetic domains (HDD), charge levels in NAND flash (MLC=2, TLC=3, QLC=4 bits per cell). Shannon entropy: a coin flip = 1 bit; a card drawn from a 52-card deck ≈ 5.7 bits. 1 bit = 1/4 nibble = 1/8 byte.",
    symbol: "b"
  },
  nibbles: {
    name: "Nibble",
    description: "A nibble is exactly 4 bits = half a byte, representing 2⁴ = 16 values - one hexadecimal digit (0-F). Used in BCD encoding (each decimal digit = 1 nibble; 2 nibbles per byte packs two BCD digits), financial/mainframe packed-decimal formats, and CSS hex colours (#RRGGBB = 2 nibbles per channel). 4-bit processors (Intel 4004, TI TMS1000) processed one nibble per cycle. 1 nibble = 4 bits = 0.5 bytes.",
    symbol: "nibble"
  },
  bytes: {
    name: "Byte",
    description: "The byte (B) is the fundamental addressable memory unit - 8 bits, 256 values (0-255). Standardised by the IBM System/360 (1964). UTF-8 encodes ASCII in 1 byte; Unicode in 1-4 bytes. One byte = 1 ASCII character, 1 RGB channel value, 1 PCM audio sample (8-bit). All mainstream CPU architectures (x86-64, ARM64, RISC-V) increment addresses by 1 byte. 1 byte = 8 bits = 2 nibbles.",
    symbol: "B"
  },
  kilobits: {
    name: "Kilobit",
    description: "A kilobit (kbit) = 1,000 bits (SI). Standard unit for connection speeds: dial-up 9.6-56 kbit/s; ISDN 64-128 kbit/s; early ADSL 256 kbit/s. VoIP codecs: G.711 = 64 kbit/s; Opus (WhatsApp, Discord) = 6-510 kbit/s adaptive. Bluetooth LE up to 1,000 kbit/s; Zigbee/Z-Wave 20-250 kbit/s. 'kbit/s' = strictly decimal 1,000 bits/s (ITU/IEEE). 1 kbit = 1,000 bits = 125 bytes.",
    symbol: "kbit"
  },
  kibibits: {
    name: "Kibibit",
    description: "A kibibit (Kibit) = 2¹⁰ = 1,024 bits (IEC 80000-13) - the binary counterpart to the kilobit. Defined to eliminate ambiguity between 1,000-bit and 1,024-bit 'kilobits'. Used in FPGA/ASIC block RAM sizing (a 32 Kibit block RAM = 4,096 bytes) and JEDEC DRAM specs. RSA key lengths (e.g. '4096-bit') are exact counts, unaffected by the kib/kb distinction. 1 Kibit = 1,024 bits = 128 bytes.",
    symbol: "Kibit"
  },
  kilobytes: {
    name: "Kilobyte",
    description: "A kilobyte (KB) = 1,000 bytes (SI). Used by all storage manufacturers (HDD, SSD, USB, SD) and endorsed by the IEC and FTC. Typical sizes: plain-text email 2-5 KB; HTML page 10-100 KB; Word document 10-30 KB. Ethernet MTU = 1,500 bytes ≈ 1.5 KB; jumbo frames 9 KB. MP3 at 128 kbit/s = 16 KB/s of audio. 1 KB = 1,000 bytes = 8,000 bits.",
    symbol: "KB"
  },
  kibibytes: {
    name: "Kibibyte",
    description: "A kibibyte (KiB) = 2¹⁰ = 1,024 bytes (IEC 80000-13) - the binary kilobyte used by OS memory management. Linux/Windows page size = 4 KiB (4,096 bytes); default NTFS/ext4/APFS cluster size = 4 KiB. CPU L1-D cache: 16-64 KiB. Arduino AVR flash: 2-32 KiB. Windows labels KiB as 'KB'. 1 KiB = 1,024 bytes = 8,192 bits.",
    symbol: "KiB"
  },
  megabits: {
    name: "Megabit",
    description: "A megabit (Mbit) = 1,000,000 bits (SI). Everyday unit for broadband speeds: ADSL2+ up to 24 Mbit/s; VDSL2 up to 100 Mbit/s; GPON fibre 100-10,000 Mbit/s; 5G NR 100-400 Mbit/s. Streaming: Netflix 1080p = 5 Mbit/s; 4K HDR = 15-25 Mbit/s. Wi-Fi 7 = 46,120 Mbit/s theoretical. ISP 'Mbps' = megabits/s; 'MB/s' (megabytes) is 8× larger. 1 Mbit = 1,000,000 bits = 125,000 bytes.",
    symbol: "Mbit"
  },
  mebibits: {
    name: "Mebibit",
    description: "A mebibit (Mibit) = 2²⁰ = 1,048,576 bits (IEC 80000-13). Used in JEDEC DRAM die specs (DDR5 16-Gibit die = 2 GiB) and FPGA block RAM. NVIDIA Ampere SM: 128 KiB = 1 Mibit of L1 cache/shared memory per SM. STM32H7 Cortex-M7: 1 Mibit tightly coupled data RAM. The 6502 (Apple II, C64) addressed 512 Kibit = 64 KiB of RAM. 1 Mibit = 1,048,576 bits = 128 KiB.",
    symbol: "Mibit"
  },
  megabytes: {
    name: "Megabyte",
    description: "A megabyte (MB) = 1,000,000 bytes (SI). Used by all storage manufacturers and by macOS (since 10.6), iOS, and Android. Typical file sizes: JPEG photo (50 MP) = 8-20 MB; 3-min MP3 at 128 kbit/s ≈ 2.9 MB; Android productivity APK 10-150 MB; full-frame RAW photo (Sony A7R V, 61 MP) 60-120 MB. H.264/H.265 achieves 30-100× compression vs. raw video. 1 MB = 1,000,000 bytes = 1,000 KB.",
    symbol: "MB"
  },
  mebibytes: {
    name: "Mebibyte",
    description: "A mebibyte (MiB) = 2²⁰ = 1,048,576 bytes (IEC 80000-13). Windows/older macOS report sizes in MiB but label them 'MB'. Linux malloc and kernel pages are power-of-2 aligned. Docker images: Alpine base 5 MiB; Ubuntu 72 MiB. Linux kernel bzImage 8-12 MiB. NVIDIA RTX 4090: 24 GiB GDDR6X in 2-GiB binary chunks. 1 MiB = 1,048,576 bytes = 1,024 KiB.",
    symbol: "MiB"
  },
  gigabits: {
    name: "Gigabit",
    description: "A gigabit (Gbit) = 10⁹ bits (SI). 1 Gbit/s Ethernet (1000BASE-T) is the enterprise baseline; 10/25/100/400 Gbit/s are data-centre standards. Bus speeds: PCIe 4.0 ×16 = 256 Gbit/s; Thunderbolt 4 = 40 Gbit/s; HDMI 2.1 = 48 Gbit/s. NVMe SSDs: PCIe 4 ≈ 57 Gbit/s; PCIe 5 > 112 Gbit/s. Submarine cables: 200 Gbit/s per wavelength × hundreds of wavelengths. 1 Gbit = 10⁹ bits = 125 MB.",
    symbol: "Gbit"
  },
  gibibits: {
    name: "Gibibit",
    description: "A gibibit (Gibit) = 2³⁰ = 1,073,741,824 bits (IEC 80000-13). JEDEC primary capacity unit for DRAM dies: LPDDR5 dies rated at 4/8/16/32 Gibit. HBM2e/HBM3: each die = 16 Gibit = 2 GiB (JEDEC JESD235E); HBM3 12-die stack = 192 Gibit = 24 GiB. NVIDIA H100 SXM 80 GiB = 640 Gibit across 5 HBM3 stacks. 1 Gibit = 2³⁰ bits = 128 MiB.",
    symbol: "Gibit"
  },
  gigabytes: {
    name: "Gigabyte",
    description: "A gigabyte (GB) = 10⁹ bytes (SI). All consumer HDDs, SSDs, SD cards, USB drives, and smartphones advertise in GB. Media sizes: 4K Blu-ray 66-100 GB; 4K Netflix film 10-15 GB; modern AAA PC game 50-200 GB; Google Maps offline country data 5-30 GB. The IBM 350 RAMAC (1956) stored 0.00000375 GB; a Seagate Exos 20 TB holds 20,000 GB - 5.3-million-fold increase in 66 years. 1 GB = 10⁹ bytes = 1,000 MB.",
    symbol: "GB"
  },
  gibibytes: {
    name: "Gibibyte",
    description: "A gibibyte (GiB) = 2³⁰ = 1,073,741,824 bytes (IEC 80000-13). The source of the 'storage discrepancy': a '500 GB' drive contains 500×10⁹ bytes ≈ 465.66 GiB as shown by Windows. RAM is manufactured in exact powers of 2: 4/8/16/32/64 GiB. GPU VRAM: RTX 4090 = 24 GiB; H100 = 80 GiB; MI300X = 192 GiB HBM3. Kubernetes memory limits use Gi suffixes. 1 GiB = 2³⁰ bytes = 1,024 MiB.",
    symbol: "GiB"
  },
  terabits: {
    name: "Terabit",
    description: "A terabit (Tbit) = 10¹² bits (SI). Submarine cable capacity: 2Africa cable (2024) designed at 180 Tbit/s; MAREA (2017) at 160 Tbit/s. Data-centre interconnects use 400 Gbit/s (0.4 Tbit/s) per link. PCIe 6.0 ×16 delivers ≈0.5 Tbit/s aggregate. NVMe RAID arrays with 100+ PCIe 5.0 SSDs approach 1 Tbit/s aggregate sequential read. 1 Tbit = 10¹² bits = 125 GB.",
    symbol: "Tbit"
  },
  tebibits: {
    name: "Tebibit",
    description: "A tebibit (Tibit) = 2⁴⁰ = 1,099,511,627,776 bits (IEC 80000-13). JEDEC NAND roadmap targets: TLC at 300+ layers (2025-2026) aims for 1-2 Tibit per die. Samsung V-NAND 8th gen (2024) targets 1 Tibit/die; 2 TiB per stacked package. HBM3e stacked memory full roadmap projects 4 Tibit HBM stacks post-2030. 1 Tibit = 2⁴⁰ bits = 128 GiB.",
    symbol: "Tibit"
  },
  terabytes: {
    name: "Terabyte",
    description: "A terabyte (TB) = 10¹² bytes (SI). Consumer HDDs: 1-22 TB; consumer NVMe SSDs: 1-8 TB. LTO-9 tape: 18 TB/cartridge; enterprise libraries: hundreds of petabytes. Whole genome sequencing: Illumina NovaSeq 6000 run ≈ 6 TB raw FASTQ. JWST downlinks ≈ 57 GB/day (≈20 TB/year). 4K NVR (64 cameras) ≈ 1 TB/day. 1 TB = 10¹² bytes = 1,000 GB.",
    symbol: "TB"
  },
  tebibytes: {
    name: "Tebibyte",
    description: "A tebibyte (TiB) = 2⁴⁰ bytes = 1,099,511,627,776 bytes (IEC 80000-13). Storage management tools (Hadoop HDFS, Ceph, ZFS) report in TiB. A 16-drive NAS with 20 TB drives in RAID 6 has ≈252 TiB usable. RAID 5 rebuild at 200 MB/s for a 16 TiB drive takes ≈25 hours (risk window). Cloud archive storage (S3 Glacier) costs ≈$0.001/GB-month. 1 TiB = 2⁴⁰ bytes = 1,024 GiB.",
    symbol: "TiB"
  },
  petabits: {
    name: "Petabit",
    description: "A petabit (Pbit) = 10¹⁵ bits (SI). Major internet exchange points (DE-CIX, AMS-IX) handle peak traffic of multi-Tbit/s, accumulating Pbits per hour. Bell Labs (2022) achieved 1.02 Pbit/s over a single fibre pair. CERN LHC distributes ≈ 720 Pbit/year through the WLCG computing grid. 100 wavelengths at 800 Gbit/s each = 80 Tbit/s per fibre; ≈13 such fibres = 1 Pbit/s. 1 Pbit = 10¹⁵ bits = 125 TB.",
    symbol: "Pbit"
  },
  pebibits: {
    name: "Pebibit",
    description: "A pebibit (Pibit) = 2⁵⁰ bits (IEC 80000-13). Intel LA57 5-level paging extends virtual addressing to 57 bits = 128 PiB = 1 Pibit of byte-addressable virtual memory space per process. The Frontier supercomputer (ORNL, 2022) has ≈700 PiB = 5,600 Pibit of total Lustre storage. AMD EPYC Milan-X supports up to 52-bit physical addresses (4 PiB). 1 Pibit = 2⁵⁰ bits = 128 TiB.",
    symbol: "Pibit"
  },
  petabytes: {
    name: "Petabyte",
    description: "A petabyte (PB) = 10¹⁵ bytes (SI). Major platforms operate at PB scale: Meta ingests > 4 PB/day; YouTube adds several PB of video content daily. CERN Run 3 produced ≈ 90 PB in 2022. 1,000-genome cohort (WGS at 30×) ≈ 0.4 PB. English Wikipedia with media ≈ 10 PB. A rack of Blu-ray cold storage (Facebook Project Amber) holds 1 PB. 1 PB = 10¹⁵ bytes = 1,000 TB.",
    symbol: "PB"
  },
  pebibytes: {
    name: "Pebibyte",
    description: "A pebibyte (PiB) = 2⁵⁰ bytes = 1,125,899,906,842,624 bytes (IEC 80000-13). The Frontier exascale supercomputer (ORNL, 2022) has ≈700 PiB of Lustre file system storage across 5,408 HPE EX nodes. IBM Spectrum Scale HPC deployments manage 10-100 PiB namespaces. NASA's active Earth observation archive ≈ 100 PiB. All hyperscale cloud storage combined ≈ 300,000 PiB = 300 EiB as of 2024. 1 PiB = 2⁵⁰ bytes = 1,024 TiB.",
    symbol: "PiB"
  },
  exabits: {
    name: "Exabit",
    description: "An exabit (Ebit) = 10¹⁸ bits (SI). Global IP traffic ≈ 4.8 exabytes/month in 2022 = ≈38.4 Ebit/month. Netflix at peak consumes ≈15% of North American bandwidth, accumulating Ebits/year. All installed cross-Atlantic cable capacity ≈ 2,000 Tbit/s in 2024; 1 Ebit transits in ≈ 500 s at full utilisation. The Square Kilometre Array (SKA) will generate ≈ 7,200 Ebit/year of reduced data. 1 Ebit = 10¹⁸ bits = 125 PB.",
    symbol: "Ebit"
  },
  exbibits: {
    name: "Exbibit",
    description: "An exbibit (Eibit) = 2⁶⁰ ≈ 1.15 × 10¹⁸ bits (IEC 80000-13). A 60-bit physical address bus would address 2⁶⁰ bytes = 128 EiB of byte-addressable memory - far beyond current DRAM. Current x86-64 supports up to 52-bit physical addresses (4 PiB); ARM and Intel roadmaps extend toward 57 bits. Global annual NAND flash production capacity ≈ 500 EB ≈ 4,000 Eibits. IBM tape roadmap targets 580 TB/cartridge by 2030; 1 Eibit ≈ 2,000 such cartridges. 1 Eibit = 2⁶⁰ bits = 128 PiB.",
    symbol: "Eibit"
  },
  exabytes: {
    name: "Exabyte",
    description: "An exabyte (EB) = 10¹⁸ bytes (SI). Global datasphere ≈ 120 EB/year created in 2023, growing ≈ 23%/year. Total installed global storage capacity ≈ 10,000 EB in 2023. AWS total storage estimated > 1,000 EB. Internet Archive stores ≈ 90 PB ≈ 0.09 EB. WGS of all 8 billion humans at 30× would produce ≈ 720 EB of raw FASTQ. Credible NSA Utah Data Centre estimates: 3-100 EB. 1 EB = 10¹⁸ bytes = 1,000 PB.",
    symbol: "EB"
  },
  exbibytes: {
    name: "Exbibyte",
    description: "An exbibyte (EiB) = 2⁶³ bytes ≈ 9.22 × 10¹⁸ bytes (IEC 80000-13). 2⁶³ is also the absolute value of INT64_MIN (the smallest signed 64-bit integer), making 1 EiB the natural upper limit for file systems using signed 64-bit byte offsets. File system theoretical maxima: NTFS 16 EiB; APFS 8 EiB; Btrfs 16 EiB; ZFS 256 quadrillion ZiB. Total hyperscale cloud storage estimated at 500-1,000 EiB as of 2024. 1 EiB = 2⁶⁰ bytes = 1,024 PiB.",
    symbol: "EiB"
  },
  zettabits: {
    name: "Zettabit",
    description: "A zettabit (Zbit) = 10²¹ bits (SI). Global internet traffic crossed 1 ZB/year ≈ 2017; projected to reach 72 Zbit/year by 2030. IDC estimates global data created/consumed could reach 1,400 Zbit/year by 2025 (mostly transient). The theoretical capacity of all installed submarine fibre, running simultaneously at state-of-the-art spectral efficiency, approaches several Zbit/s. 1 Zbit = 10²¹ bits = 125 EB.",
    symbol: "Zbit"
  },
  zebibits: {
    name: "Zebibit",
    description: "A zebibit (Zibit) = 2⁷⁰ bits ≈ 1.18 × 10²¹ bits (IEC 80000-13). Total world manufactured digital storage in 2023 (≈ 10,000 EB ≈ 80,000 Ebit) is ≈ 67,000× smaller than 1 Zibit. A 70-bit byte address space would address 2⁷⁰ bytes = 128 ZiB of memory - far beyond any foreseeable architecture. At projected HDD areal density (10¹² bits/cm²), 1 Zibit would require ≈ 10⁹ cm² ≈ the area of Iceland. 1 Zibit = 2⁷⁰ bits = 128 EiB.",
    symbol: "Zibit"
  },
  zettabytes: {
    name: "Zettabyte",
    description: "A zettabyte (ZB) = 10²¹ bytes (SI). The 'zettabyte era' was declared by Cisco in 2016 when annual IP traffic first crossed 1 ZB. Global IP traffic ≈ 4.8 ZB/year in 2022. Total data-centre capacity worldwide ≈ 10 ZB in 2023. Global datasphere forecast: 175 ZB/year created by 2025 (IDC). Erasing 1 ZB at the Landauer limit (300 K) would require ≈ 22.8 J - a tiny energy cost that thermodynamic limits will not bite for decades. 1 ZB = 10²¹ bytes = 1,000 EB.",
    symbol: "ZB"
  },
  zebibytes: {
    name: "Zebibyte",
    description: "A zebibyte (ZiB) = 2⁷³ bytes ≈ 9.44 × 10²¹ bytes (IEC 80000-13). Total world installed storage in 2023 ≈ 10 ZB ≈ 0.848 ZiB - humanity has barely manufactured enough storage to fill one zebibyte. ZFS (Zettabyte File System, 2001) was named to evoke ZB-scale ambitions; practical deployments remain far below 1 ZiB. At HAMR areal density (10 Tbit/inch²), 1 ZiB would need ≈ 60.9 million km² of magnetic surface - ≈ 12× all Earth's continents. 1 ZiB = 2⁷⁰ bytes = 1,024 EiB.",
    symbol: "ZiB"
  },
  yottabits: {
    name: "Yottabit",
    description: "A yottabit (Ybit) = 10²⁴ bits (SI), using the SI prefix 'yotta-' (Y, 10²⁴). All human digital data from the invention of writing through 2023 ≈ 120 ZB ≈ 0.00012 Ybits. A 'bit per atom' computer filling Earth's oceans (≈ 1.5 × 10²⁷ atoms) could conceivably store ≈ 1,000 Ybits. The SI system added 'ronna-' (10²⁷) and 'quetta-' (10³⁰) prefixes in November 2022 to extend beyond yotta-. 1 Ybit = 10²⁴ bits = 125 ZB.",
    symbol: "Ybit"
  },
  yobibits: {
    name: "Yobibit",
    description: "A yobibit (Yibit) = 2⁸⁰ bits ≈ 1.21 × 10²⁴ bits (IEC 80000-13, 2008). An 80-bit physical address space would provide 2⁸⁰ bytes = 128 YiB of byte-addressable memory - physically preposterous by any current forecast. World manufactured storage in 2023 ≈ 10 ZB ≈ 0.00828 Yibit. A 267-qubit quantum register has a state space of 2²⁶⁷ ≈ 1 Yibit in bits. IEC 2022 added 'ronbi' (Ri, 2⁹⁰) and 'quetti' (Qi, 2¹⁰⁰) for theoretical future use. 1 Yibit = 2⁸⁰ bits = 128 ZiB.",
    symbol: "Yibit"
  },
  yottabytes: {
    name: "Yottabyte",
    description: "A yottabyte (YB) = 10²⁴ bytes (SI) - among the largest original SI named powers. Global annual data generation forecast ≈ 175 ZB = 0.000175 YB by 2025 (IDC) - a yottabyte equals ≈ 5,700 years of data production at 2025 rates. Claims of multi-YB NSA data centres were debunked; credible estimates: 3-100 EB. Erasing 1 YB at the Landauer limit (300 K) would require ≈ 182 J - enough to heat 0.4 mL of water by 1°C. 1 YB = 10²⁴ bytes = 1,000 ZB.",
    symbol: "YB"
  },
  yobibytes: {
    name: "Yobibyte",
    description: "A yobibyte (YiB) = 2⁸⁰ bytes ≈ 1.21 × 10²⁴ bytes (IEC 80000-13) - the largest named binary byte unit (2008 edition); 2022 revision added 'ronbi' (Ri, 2⁹⁰) and 'quetti' (Qi, 2¹⁰⁰). At HAMR areal density (10 Tbit/inch² projected by 2030), 1 YiB would require ≈ 6.24 million km² of magnetic platter surface - modestly exceeding the area of Australia. World total storage in 2023 ≈ 0.00848 YiB. 1 YiB = 2⁸⁰ bytes = 1,024 ZiB.",
    symbol: "YiB"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toBits);
}

function convertData() {
  convertFactorBased(toBits);
}

initConverterPage();
