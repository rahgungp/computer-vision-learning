# Atribusi Gambar & Ilustrasi — COM Computer Vision

## Kebijakan

Seluruh **diagram konsep** pada situs ini adalah SVG orisinal yang ditulis langsung di dalam berkas HTML. Diagram memakai variabel warna tema (`--dg-*` pada `assets/css/style.css`), sehingga:

- tetap terbaca pada mode terang maupun gelap;
- tetap tajam pada presentation mode fullscreen;
- bebas dari persoalan lisensi;
- dapat disunting tanpa perangkat lunak desain.

## Daftar berkas gambar

| Berkas | Keterangan | Sumber / Lisensi |
|--------|------------|------------------|
| `logo-TKOM.png` | Placeholder logo Program Studi Teknik Komputer, motif aperture kamera | Dibuat untuk proyek ini. **Ganti dengan logo resmi** memakai nama berkas yang sama. |

## Daftar ilustrasi SVG (inline di halaman materi)

| Figure | Halaman | Isi |
|--------|---------|-----|
| 1.1 | week-01 | Perbandingan alur penglihatan manusia dan mesin |
| 1.2 | week-01 | Posisi CV terhadap AI, ML, DL, dan Image Processing |
| 1.3 | week-01 | Tiga tingkat image understanding |
| 1.4 | week-01 | Taksonomi lima tugas Computer Vision |
| 1.5 | week-01 | Computer Vision pipeline |
| 2.1 | week-02 | Pipeline akuisisi citra digital |
| 2.2 | week-02 | Citra sebagai fungsi f(x, y) dengan nilai pixel |
| 2.3 | week-02 | Sampling vs kuantisasi |
| 2.4 | week-02 | Pemisahan kanal warna RGB |
| 3.1 | week-03 | Kedudukan preprocessing dalam pipeline |
| 3.2 | week-03 | Spatial filtering langkah demi langkah |
| 3.3 | week-03 | Membaca histogram dan penentuan ambang |
| 3.4 | week-03 | Perbandingan sebelum/sesudah empat operasi |
| 4.1 | week-04 | Rantai Detection → Description → Matching |
| 4.2 | week-04 | Jendela pengamatan pada area datar, tepi, dan sudut |
| 4.3 | week-04 | Korespondensi fitur antara dua citra + outlier |
| 5.1 | week-05 | Konvolusi 1D langkah demi langkah |
| 5.2 | week-05 | Konvolusi 2D: perkalian, penjumlahan, feature map |
| 5.3 | week-05 | Pengaruh padding dan stride |
| 5.4 | week-05 | Arsitektur CNN lengkap |
| — | index | Ilustrasi hero: pixel → operasi → representasi |

Seluruhnya orisinal, disusun berdasarkan penjelasan konseptual pada Hugging Face Community Computer Vision Course (Unit 1 dan Unit 2). Tidak ada gambar dari sumber tersebut yang disalin atau di-hotlink.

## Bila kelak menambahkan gambar eksternal

Urutan prioritas sumber:

1. Aset resmi Hugging Face Community Computer Vision Course
2. Wikimedia Commons
3. Unsplash
4. Pexels
5. Dokumentasi resmi (OpenCV, PyTorch, dan sejenisnya)
6. Repositori open-source dengan lisensi yang sesuai
7. SVG/diagram buatan sendiri

Aturan yang wajib diikuti:

- **Simpan berkasnya secara lokal** di `assets/img/` — jangan hotlink.
- **Catat di tabel di atas**: nama berkas, keterangan, sumber, dan lisensi.
- **Cantumkan di halaman**: nomor figure, caption, dan baris sumber, memakai struktur `<figure class="figure">` yang sudah ada.
- **Sertakan `alt` yang deskriptif**, bukan sekadar "gambar" atau nama berkas.
- **Jangan mengambil gambar dari hasil pencarian Google** lalu memasangnya langsung. Pencarian gambar hanya untuk menemukan referensi visual; sumber dan lisensinya tetap harus ditelusuri.
