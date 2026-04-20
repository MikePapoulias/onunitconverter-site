// Base unit: bits per second (bit/s)
// SI decimal: 1 kbit/s = 1,000 bit/s (powers of 10)
// IEC binary: 1 Kibit/s = 1,024 bit/s (powers of 2)
// Byte-based rates: 1 B/s = 8 bit/s

const toBitsPerSecond = {
  // ── Base ──────────────────────────────────────────────────────────
  'bits_per_second':          1,
  'bytes_per_second':         8,
  // ── SI Decimal - bits ────────────────────────────────────────────
  'kilobits_per_second':      1e3,
  'megabits_per_second':      1e6,
  'gigabits_per_second':      1e9,
  'terabits_per_second':      1e12,
  'petabits_per_second':      1e15,
  'exabits_per_second':       1e18,
  'zettabits_per_second':     1e21,
  'yottabits_per_second':     1e24,
  // ── SI Decimal - bytes ───────────────────────────────────────────
  'kilobytes_per_second':     8e3,
  'megabytes_per_second':     8e6,
  'gigabytes_per_second':     8e9,
  'terabytes_per_second':     8e12,
  'petabytes_per_second':     8e15,
  'exabytes_per_second':      8e18,
  'zettabytes_per_second':    8e21,
  'yottabytes_per_second':    8e24,
  // ── IEC Binary - bits ────────────────────────────────────────────
  'kibibits_per_second':      1024,
  'mebibits_per_second':      1048576,
  'gibibits_per_second':      1073741824,
  'tebibits_per_second':      1099511627776,
  'pebibits_per_second':      1125899906842624,
  'exbibits_per_second':      2**60,
  'zebibits_per_second':      2**70,
  'yobibits_per_second':      2**80,
  // ── IEC Binary - bytes ───────────────────────────────────────────
  'kibibytes_per_second':     8192,
  'mebibytes_per_second':     8388608,
  'gibibytes_per_second':     8589934592,
  'tebibytes_per_second':     8796093022208,
  'pebibytes_per_second':     9007199254740992,
  'exbibytes_per_second':     2**63,
  'zebibytes_per_second':     2**73,
  'yobibytes_per_second':     2**83,
};

// Unit descriptions
const unitDescriptions = {
  bits_per_second: {
    name: "Bit per second",
    description: "Bit per second (bit/s) is the fundamental SI data-rate unit - one binary digit transmitted per second. Shannon's channel capacity C = B log₂(1 + S/N) expresses maximum achievable bit/s. Early RS-232 serial links ran at 110-9,600 bit/s; GSM voice uses 13 kbit/s; a coin-flip entropy source produces 1 bit/s per flip. 1 bit/s = 0.125 B/s = 10⁻³ kbit/s.",
    symbol: "bit/s"
  },
  bytes_per_second: {
    name: "Byte per second",
    description: "Byte per second (B/s) = 8 bit/s. The natural unit for file transfer speeds, disk I/O, and memory bandwidth reported by OS tools and storage benchmarks. ISP 'Mbit/s' ÷ 8 = MB/s download speed: a 100 Mbit/s connection delivers ≈ 12.5 MB/s. USB 2.0 = 60 MB/s; SATA III = 600 MB/s; Thunderbolt 4 = 5,000 MB/s. 1 B/s = 8 bit/s.",
    symbol: "B/s"
  },
  kilobits_per_second: {
    name: "Kilobit per second",
    description: "Kilobit per second (kbit/s) = 1,000 bit/s (SI). The classic unit for narrowband telecoms: dial-up (V.90) = 56 kbit/s; ISDN BRI = 64-128 kbit/s; G.711 VoIP = 64 kbit/s; Opus (WhatsApp, Discord) = 6-510 kbit/s adaptive; Bluetooth Classic = 1,000 kbit/s; Zigbee/Z-Wave = 20-250 kbit/s. 1 kbit/s = 1,000 bit/s = 125 B/s.",
    symbol: "kbit/s"
  },
  megabits_per_second: {
    name: "Megabit per second",
    description: "Megabit per second (Mbit/s) = 10⁶ bit/s (SI). Standard consumer broadband unit: ADSL2+ up to 24 Mbit/s; VDSL2 up to 100 Mbit/s; Wi-Fi 6 up to 9,608 Mbit/s; Gigabit Ethernet = 1,000 Mbit/s. Streaming: Netflix 1080p = 5 Mbit/s; 4K HDR = 15-25 Mbit/s; 4K Blu-ray up to 128 Mbit/s. ISP 100 Mbit/s ≈ 12.5 MB/s download. 1 Mbit/s = 10⁶ bit/s = 125 KB/s.",
    symbol: "Mbit/s"
  },
  gigabits_per_second: {
    name: "Gigabit per second",
    description: "Gigabit per second (Gbit/s) = 10⁹ bit/s (SI). Enterprise/data-centre standard: 1/10/25/100/400 Gbit/s Ethernet all deployed. Storage: SATA III = 6 Gbit/s; PCIe 4.0 ×4 = 64 Gbit/s; PCIe 5.0 ×4 = 128 Gbit/s. Display: HDMI 2.1 = 48 Gbit/s; DisplayPort 2.1 = 80 Gbit/s. Memory: DDR5-4800 dual-channel = 76.8 Gbit/s; H100 HBM3 = 26.8 Tbit/s. 1 Gbit/s = 10⁹ bit/s = 125 MB/s.",
    symbol: "Gbit/s"
  },
  terabits_per_second: {
    name: "Terabit per second",
    description: "Terabit per second (Tbit/s) = 10¹² bit/s (SI). Internet backbone scale: MAREA cable (2017) = 200 Tbit/s per fibre pair; 2Africa cable (2024) = 180 Tbit/s. DWDM: 100 wavelengths × 800 Gbit/s = 80 Tbit/s per fibre. H100 GPU HBM3 memory bandwidth = 3.35 Tbit/s per GPU. NTT lab record (2023): 1,200 Tbit/s over a single fibre. 1 Tbit/s = 10¹² bit/s = 125 GB/s.",
    symbol: "Tbit/s"
  },
  petabits_per_second: {
    name: "Petabit per second",
    description: "Petabit per second (Pbit/s) = 10¹⁵ bit/s (SI). Research-scale only: NTT (2024) achieved 1.53 Pbit/s over a single fibre using space + wavelength division multiplexing. The combined peak of the world's largest internet exchange points (DE-CIX, AMS-IX) is multi-Tbit/s. Global IP traffic ≈ 1.8 Pbit/s sustained average in 2030 forecast. 1 Pbit/s = 10¹⁵ bit/s = 125 TB/s.",
    symbol: "Pbit/s"
  },
  exabits_per_second: {
    name: "Exabit per second",
    description: "Exabit per second (Ebit/s) = 10¹⁸ bit/s (SI). Theoretical: Shannon limit for a single-mode fibre over 50 THz optical bandwidth ≈ 100 Pbit/s - still ~10,000× below 1 Ebit/s. Reaching 1 Ebit/s would require ≈1 million parallel fibres each at 1 Pbit/s. Global internet backbone installed capacity in 2024 ≈ 5-10 Pbit/s. 1 Ebit/s = 10¹⁸ bit/s = 125 PB/s.",
    symbol: "Ebit/s"
  },
  zettabits_per_second: {
    name: "Zettabit per second",
    description: "Zettabit per second (Zbit/s) = 10²¹ bit/s (SI). Entirely theoretical. The entire global internet traffic in all of 2024 (≈40 Zbit) could be transferred in ≈40 seconds at 1 Zbit/s. The full electromagnetic spectrum (radio to gamma, ≈10³⁰ Hz bandwidth) at Shannon capacity still cannot sustain 1 Zbit/s with any known physical medium. 1 Zbit/s = 10²¹ bit/s = 125 EB/s.",
    symbol: "Zbit/s"
  },
  yottabits_per_second: {
    name: "Yottabit per second",
    description: "Yottabit per second (Ybit/s) = 10²⁴ bit/s (SI). Theoretical physics scale. Landauer's principle: erasing 10²⁴ bits/s at 300 K dissipates ≈2.85 kW minimum - surprisingly affordable, yet no physical medium can carry this rate. SI added 'ronna-' (10²⁷) and 'quetta-' (10³⁰) prefixes in 2022 for scales beyond yotta. 1 Ybit/s = 10²⁴ bit/s = 125 ZB/s.",
    symbol: "Ybit/s"
  },
  kilobytes_per_second: {
    name: "Kilobyte per second",
    description: "Kilobyte per second (KB/s) = 1,000 B/s = 8,000 bit/s (SI). Legacy modem throughput: 56 kbit/s dial-up ≈ 7 KB/s; ISDN 128 kbit/s = 16 KB/s. RS-232 at 115,200 baud (8N1) = 11.52 KB/s. CD-ROM 1× = 150 KB/s; 52× = 7,800 KB/s. Bluetooth 2.1 EDR ≈ 300 KB/s; USB 1.1 Full Speed = 1,500 KB/s. 1 KB/s = 1,000 B/s = 8 kbit/s.",
    symbol: "KB/s"
  },
  megabytes_per_second: {
    name: "Megabyte per second",
    description: "Megabyte per second (MB/s) = 10⁶ B/s (SI). Standard for storage benchmarks and USB speeds. NVMe SSDs: Samsung 990 Pro (PCIe 4.0) = 7,450 MB/s; PCIe 5.0 drives = 10,000 MB/s; SATA HDD = 80-220 MB/s. USB 3.2 Gen 1 = 625 MB/s; USB4 Gen 3 = 5,000 MB/s. Memory: DDR5-4800 dual-channel = 76,800 MB/s. A 4K RAW cinema camera generates ≈1,000 MB/s. 1 MB/s = 10⁶ B/s = 8 Mbit/s.",
    symbol: "MB/s"
  },
  gigabytes_per_second: {
    name: "Gigabyte per second",
    description: "Gigabyte per second (GB/s) = 10⁹ B/s (SI). Dominant unit for memory bandwidth and GPU interconnects. DRAM: Intel i9-13900K DDR5 = 89.6 GB/s; AMD EPYC Genoa 8-channel = 460.8 GB/s. H100 HBM3 = 3,350 GB/s; RTX 4090 GDDR6X = 1,008 GB/s. PCIe 5.0 ×16 = 128 GB/s. HPC Lustre on Frontier ≈ 5,000 GB/s aggregate. 100 Gbit/s Ethernet = 12.5 GB/s. 1 GB/s = 10⁹ B/s = 8 Gbit/s.",
    symbol: "GB/s"
  },
  terabytes_per_second: {
    name: "Terabyte per second",
    description: "Terabyte per second (TB/s) = 10¹² B/s (SI). Achieved in HPC memory fabrics: NVIDIA GB200 NVL72 rack-scale system ≈ 130 TB/s aggregate memory bandwidth. SK Hynix HBM-PIM ≈ 1.2 TB/s per HBM stack. NTT 2024 fibre record = 1.53 Pbit/s = 191 TB/s. Multi-socket server PCIe 6.0 aggregate approaching TB/s scale. 1 TB/s = 10¹² B/s = 8 Tbit/s.",
    symbol: "TB/s"
  },
  petabytes_per_second: {
    name: "Petabyte per second",
    description: "Petabyte per second (PB/s) = 10¹⁵ B/s (SI). Theoretical for single systems. NTT 2024 fibre lab record = 191 TB/s ≈ 0.19 PB/s. Exascale HPC with 10,000 nodes × 10 TB/s memory bandwidth each = 100,000 TB/s = 100 PB/s in aggregate - plausible as a cluster total but not a single link. Global all-data-centre combined write throughput ≈ 1-10 PB/s. 1 PB/s = 10¹⁵ B/s = 8 Pbit/s.",
    symbol: "PB/s"
  },
  exabytes_per_second: {
    name: "Exabyte per second",
    description: "Exabyte per second (EB/s) = 10¹⁸ B/s (SI). Total global storage write-throughput of all data centres combined in 2024 ≈ 1 EB/s in aggregate - but no single system or link approaches this. A single-mode fibre C-band Shannon limit ≈ 15 Tbit/s; reaching 1 EB/s = 8 Ebit/s would need ≈ 500,000 such fibres. 1 EB/s = 10¹⁸ B/s = 8 Ebit/s.",
    symbol: "EB/s"
  },
  zettabytes_per_second: {
    name: "Zettabyte per second",
    description: "Zettabyte per second (ZB/s) = 10²¹ B/s (SI). Total global internet traffic in 2024 ≈ 5 ZB/year; at 1 ZB/s the entire year's internet traffic would transfer in 5 seconds. LHC raw detector data ≈ 1 PB/s - six orders of magnitude below 1 ZB/s. Purely cosmological in scale. 1 ZB/s = 10²¹ B/s = 8 Zbit/s.",
    symbol: "ZB/s"
  },
  yottabytes_per_second: {
    name: "Yottabyte per second",
    description: "Yottabyte per second (YB/s) = 10²⁴ B/s (SI). The largest named SI byte-rate. The entire global datasphere created from the beginning of history through 2023 (≈ 120 ZB) could be transferred in ≈ 0.00012 seconds at 1 YB/s. Bremermann's limit ≈ 1.36 × 10⁵⁰ bit/s per kg - a microgram of matter at this limit processes ≈ 10²⁸ Ybit/s. 1 YB/s = 10²⁴ B/s = 8 Ybit/s.",
    symbol: "YB/s"
  },
  kibibits_per_second: {
    name: "Kibibit per second",
    description: "Kibibit per second (Kibit/s) = 2¹⁰ = 1,024 bit/s (IEC 80000-13). The binary-precise counterpart to kbit/s for contexts with power-of-2 bus widths. FPGA serial transceivers are clocked at exact powers of 2; embedded UART baud rates sometimes use 1,024-baud increments. Contrasted with kbit/s (= 1,000 bit/s) in ITU/IEEE standards. 1 Kibit/s = 1,024 bit/s = 128 B/s.",
    symbol: "Kibit/s"
  },
  mebibits_per_second: {
    name: "Mebibit per second",
    description: "Mebibit per second (Mibit/s) = 2²⁰ = 1,048,576 bit/s (IEC 80000-13). Used in FPGA-to-memory interface specs and JEDEC memory bus timing documents where bit rates are derived from 2ⁿ clock frequencies. A 100 MHz 8-bit parallel bus = 800 Mibit/s. Contrasted with Mbit/s (= 10⁶ bit/s). 1 Mibit/s = 1,048,576 bit/s ≈ 131 KB/s.",
    symbol: "Mibit/s"
  },
  gibibits_per_second: {
    name: "Gibibit per second",
    description: "Gibibit per second (Gibit/s) = 2³⁰ = 1,073,741,824 bit/s (IEC 80000-13). Preferred over Gbit/s in JEDEC DDR memory bandwidth specs: DDR5-4800 single channel = 38,400 MB/s = 307,200 Mbit/s ≈ 293 Gibit/s. HBM3 per stack = 819 Gbit/s ≈ 763 Gibit/s. LINPACK and memory benchmark literature may use Gibit/s for precision. 1 Gibit/s = 2³⁰ bit/s = 128 MiB/s.",
    symbol: "Gibit/s"
  },
  tebibits_per_second: {
    name: "Tebibit per second",
    description: "Tebibit per second (Tibit/s) = 2⁴⁰ bit/s (IEC 80000-13). Used in exascale HPC academic papers for memory bandwidth: AMD MI300A APU = 5.3 TB/s ≈ 4.82 TiB/s = 38.6 Tibit/s. NVIDIA H100 HBM3 = 3.35 TB/s ≈ 24.5 Tibit/s. GPU-GPU NVLink 4.0 = 900 GB/s ≈ 6.55 Tibit/s. 1 Tibit/s = 2⁴⁰ bit/s = 128 GiB/s.",
    symbol: "Tibit/s"
  },
  pebibits_per_second: {
    name: "Pebibit per second",
    description: "Pebibit per second (Pibit/s) = 2⁵⁰ bit/s ≈ 1.126 × 10¹⁵ bit/s (IEC 80000-13). NTT's 2024 lab record (1.53 Pbit/s ≈ 1.36 Pibit/s) is the only physical system that has approached this range. A full Frontier exascale node cluster would have aggregate memory bandwidth of ≈ 0.09 Pibit/s. Purely research-scale. 1 Pibit/s = 2⁵⁰ bit/s ≈ 125.9 TB/s.",
    symbol: "Pibit/s"
  },
  exbibits_per_second: {
    name: "Exbibit per second",
    description: "Exbibit per second (Eibit/s) = 2⁶⁰ bit/s ≈ 1.153 × 10¹⁸ bit/s (IEC 80000-13) - approximately 750× the current single-fibre world record (1.53 Pbit/s, NTT 2024). Visible light at full Shannon capacity (300 THz bandwidth, 10 dB SNR) ≈ 10¹⁵ bit/s per beam - still three orders below 1 Eibit/s. Theoretical only. 1 Eibit/s = 2⁶⁰ bit/s ≈ 128 PiB/s.",
    symbol: "Eibit/s"
  },
  zebibits_per_second: {
    name: "Zebibit per second",
    description: "Zebibit per second (Zibit/s) = 2⁷⁰ bit/s ≈ 1.181 × 10²¹ bit/s (IEC 80000-13). A 1 Zibit/s link would transmit the entire 2024 annual global internet traffic (≈ 40 Zbit) in ≈ 40 seconds. Single caesium atom oscillates at ≈ 9.2 GHz; reaching 1 Zibit/s by atomic oscillation would require ≈ 10¹¹ atomic channels. Theoretical unit only. 1 Zibit/s = 2⁷⁰ bit/s ≈ 128 EiB/s.",
    symbol: "Zibit/s"
  },
  yobibits_per_second: {
    name: "Yobibit per second",
    description: "Yobibit per second (Yibit/s) = 2⁸⁰ bit/s ≈ 1.209 × 10²⁴ bit/s (IEC 80000-13; 2022 revision adds ronbi Ri=2⁹⁰ and quetti Qi=2¹⁰⁰). Bremermann's limit: 1 kg of matter at maximum theoretical compute rate handles ≈ 1.36 × 10⁵⁰ bit/s - about 10²⁶ Yibit/s - showing 1 Yibit/s is not prohibited by physics but is meaningless for practical data transfer. 1 Yibit/s = 2⁸⁰ bit/s ≈ 128 ZiB/s.",
    symbol: "Yibit/s"
  },
  kibibytes_per_second: {
    name: "Kibibyte per second",
    description: "Kibibyte per second (KiB/s) = 2¹⁰ = 1,024 B/s = 8,192 bit/s (IEC 80000-13). Used in embedded I/O specs and real-time OS throughput documentation. SD card speed classes: Class 10 = 10,000 KB/s ≈ 9,766 KiB/s; UHS-3 = 30,000 KB/s ≈ 29,297 KiB/s. STM32F4 FLASH page write ≈ 16 KiB/s; Arduino Uno SPI at 4 MHz = 500 KiB/s. 1 KiB/s = 1,024 B/s = 8,192 bit/s.",
    symbol: "KiB/s"
  },
  mebibytes_per_second: {
    name: "Mebibyte per second",
    description: "Mebibyte per second (MiB/s) = 2²⁰ = 1,048,576 B/s (IEC 80000-13). Used in Linux fio/dd benchmark output. Optical disc speeds: CD-ROM 1× = 150 KiB/s; 52× ≈ 7.62 MiB/s; Blu-ray 1× ≈ 4.39 MiB/s; 12× Blu-ray ≈ 52.73 MiB/s. SATA II effective throughput ≈ 286 MiB/s. microSD A1 spec = 10 MB/s ≈ 9.54 MiB/s. 1 MiB/s = 1,048,576 B/s = 8 Mibit/s.",
    symbol: "MiB/s"
  },
  gibibytes_per_second: {
    name: "Gibibyte per second",
    description: "Gibibyte per second (GiB/s) = 2³⁰ B/s (IEC 80000-13). Precision unit for STREAM benchmark and LIKWID memory bandwidth measurements. Intel Xeon Platinum 8380 dual-socket STREAM ≈ 400 GiB/s. RTX 4090 GDDR6X = 1,008 GB/s ≈ 939 GiB/s. PCIe 5.0 ×16 = 64 GB/s ≈ 59.6 GiB/s. AMD EPYC Infinity Fabric (4-socket) ≈ 576 GiB/s cross-die. 1 GiB/s = 2³⁰ B/s = 8 Gibit/s.",
    symbol: "GiB/s"
  },
  tebibytes_per_second: {
    name: "Tebibyte per second",
    description: "Tebibyte per second (TiB/s) = 2⁴⁰ B/s (IEC 80000-13). HPC memory scale: AMD MI300A APU = 5.3 TB/s ≈ 4.82 TiB/s; Frontier compute blade (4 GPUs + 1 CPU) ≈ 20 TiB/s aggregate HBM bandwidth. DGX H100 (8 GPUs via NVSwitch) ≈ 6.55 TiB/s GPU-GPU bandwidth. CXL 3.0 rack-scale pooled memory fabric targets low TiB/s. 1 TiB/s = 2⁴⁰ B/s = 8 Tibit/s.",
    symbol: "TiB/s"
  },
  pebibytes_per_second: {
    name: "Pebibyte per second",
    description: "Pebibyte per second (PiB/s) = 2⁵⁰ B/s ≈ 1.126 × 10¹⁵ B/s (IEC 80000-13). NTT's 2024 lab record (1.53 Pbit/s ≈ 191 TB/s ≈ 0.17 PiB/s) is the closest any physical link has come. An exascale cluster with 10,000 nodes × 10 TiB/s each ≈ 97.7 PiB/s aggregate - approaching this range in the aggregate, not a single link. From a physics standpoint, requires ≈ 10 million NVMe SSDs in parallel. 1 PiB/s = 2⁵⁰ B/s ≈ 8 Pibit/s.",
    symbol: "PiB/s"
  },
  exbibytes_per_second: {
    name: "Exbibyte per second",
    description: "Exbibyte per second (EiB/s) = 2⁶⁰ B/s ≈ 1.153 × 10¹⁸ B/s (IEC 80000-13). Total global data-centre write throughput in 2024 ≈ 1 EB/s ≈ 0.87 EiB/s in aggregate across all systems - but no single link approaches this. Shannon limit for a single-mode fibre full C-band ≈ 15 Tbit/s; reaching 1 EiB/s requires ≈ 500,000 such fibres. 1 EiB/s = 2⁶⁰ B/s ≈ 8 Eibit/s.",
    symbol: "EiB/s"
  },
  zebibytes_per_second: {
    name: "Zebibyte per second",
    description: "Zebibyte per second (ZiB/s) = 2⁷⁰ B/s ≈ 1.181 × 10²¹ B/s (IEC 80000-13). Global internet traffic in 2024 ≈ 5 ZB/year; at 1 ZiB/s the year's traffic transfers in ≈ 5 seconds. LHC ATLAS/CMS raw detector output ≈ 1 PB/s - six orders below 1 ZiB/s. Purely cosmological. 1 ZiB/s = 2⁷⁰ B/s ≈ 8 Zibit/s.",
    symbol: "ZiB/s"
  },
  yobibytes_per_second: {
    name: "Yobibyte per second",
    description: "Yobibyte per second (YiB/s) = 2⁸⁰ B/s ≈ 1.209 × 10²⁴ B/s (IEC 80000-13) - the largest named IEC binary byte-rate (2008; 2022 revision adds ronbi Ri=2⁹⁰ and quetti Qi=2¹⁰⁰). At Bremermann's limit (1.36 × 10⁵⁰ bit/s per kg), a single atom of hydrogen could theoretically process ≈ 2.3 × 10²⁴ Yibit/s - showing 1 YiB/s is physically achievable in principle for a particle, but meaningless as a practical data-transfer rate. 1 YiB/s = 2⁸⁰ B/s ≈ 8 Yibit/s.",
    symbol: "YiB/s"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toBitsPerSecond);
}

function convertDataTransfer() {
  convertFactorBased(toBitsPerSecond);
}

initConverterPage();
