# 🚀 Market Analyzer for Indodax

![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📝 Deskripsi

Script ini adalah alat analisis pasar cryptocurrency sederhana yang mengambil data dari API Indodax untuk menampilkan:
- 💵 Harga terkini
- 📈 Harga tertinggi dan terendah 24 jam
- 🎯 Level support dan resistance
- 🚦 Status pasar (Support/Resistance/Neutral)

Alat ini fokus pada 3 aset crypto:
- ₿ Bitcoin (BTC)
- 🐕 Dogecoin (DOGE)
- 🎁 Wrapped Bitcoin (WBTC)

## 🔧 Teknologi yang Digunakan

- **Node.js** (v18+)
- **Axios** - Untuk HTTP requests ke API Indodax
- **ES Modules** - Sistem modul modern JavaScript

## 🏗️ Struktur Kode

```
market-analyzer/
├── market-analyzer.js  # File utama
├── package.json
└── README.md
```

Fungsi utama dalam script:
1. `getMarketData()` - Mengambil data dari API Indodax
2. `calculateSupportResistance()` - Menghitung level support/resistance
3. `determineStatus()` - Menentukan status pasar
4. `displayData()` - Menampilkan hasil analisis

## ⚙️ Instalasi

1. Pastikan Node.js v18+ terinstall
2. Clone repo atau buat file `market-analyzer.js`
3. Install dependencies:

```bash
pnpm install axios
```

4. Jalankan script:

```bash
node market-analyzer.js
```

## 🛠️ Troubleshooting

Jika terjadi error, cek hal berikut:

1. **🌐 Koneksi Internet**
   - Pastikan perangkat terhubung ke internet
   - Coba ping `indodax.com`

2. **⚠️ Error API**
   - Cek apakah API Indodax sedang down:
     ```bash
     curl https://indodax.com/api/ticker/btcidr
     ```

3. **📦 Error Dependencies**
   - Jika ada error module tidak ditemukan:
     ```bash
     pnpm install
     ```

4. **🔢 Error Format Data**
   - Jika ada error parsing data, cek struktur respons API:
     ```bash
     curl -i https://indodax.com/api/ticker/btcidr
     ```

5. **🔄 Error Node.js Version**
   - Pastikan menggunakan Node.js v18+
     ```bash
     node -v
     ```

## 📊 Contoh Output

```
Market Analyzer - Indodax Data
=============================

Market: BTC
Harga sekarang: Rp 1.234.567.890
Harga H24: Rp 1.245.678.901
Harga L24: Rp 1.220.345.678
Support: Rp 1.225.000.000
Resistance: Rp 1.240.000.000
Status: Resistance (Area jual)
=============================

Market: DOGE
...
```

## 🤝 Kontribusi

Jika ingin berkontribusi, silakan buka issue atau pull request.

## 📜 Lisensi

MIT License

---

Dibuat dengan ❤️ untuk trader crypto Indonesia 🇮🇩
