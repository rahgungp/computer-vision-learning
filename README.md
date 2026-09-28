# COM Computer Vision Learning

**Modul Pembelajaran Computer Vision**
Program Studi Teknik Komputer · Universitas Warmadewa

Digital codelab untuk mata kuliah Computer Vision. Dibangun dengan HTML5, CSS3, dan JavaScript vanilla — tanpa framework, tanpa proses build — sehingga dapat langsung di-deploy ke GitHub Pages.

---

## Overview

Website ini menggabungkan **theory + visual explanation + illustration + example + practice + reflection** dalam satu alur belajar. Fokus utamanya memperkuat pemahaman dasar: mahasiswa memahami **WHAT → WHY → HOW → WHEN** sebelum menyentuh **CODE**.

Konvolusi, misalnya, dihitung manual dengan matriks kecil terlebih dahulu. Fungsi `Conv2D()` baru diperkenalkan setelah mahasiswa memahami apa yang terjadi di baliknya.

---

## Learning Path

| # | Materi | Basis akademik | Status |
|---|--------|----------------|--------|
| 01 | Fundamentals of Computer Vision | HF Unit 1 — Vision, What Is CV, Applications | ✅ Tersedia |
| 02 | Digital Image & Image Formation | HF Unit 1 — Image, Imaging | ✅ Tersedia |
| 03 | Image Processing & Preprocessing | HF Unit 1 — Pre-processing | ✅ Tersedia |
| 04 | Feature Extraction & Feature Matching | HF Unit 1 — Feature Description, Matching | ✅ Tersedia |
| 05 | Introduction to CNN | HF Unit 2 — Introduction to CNN | ✅ Tersedia |
| 06 | CNN Architectures & Transfer Learning | HF Unit 2 | 🔒 Coming Soon |
| 07 | Vision Transformers | HF Unit 3 | 🔒 Coming Soon |
| 08 | Ujian Tengah Semester | Asesmen | 🔒 Coming Soon |
| 09 | Multimodal Computer Vision | HF Unit 4 | 🔒 Coming Soon |
| 10 | Generative Computer Vision | HF Unit 5 | 🔒 Coming Soon |
| 11 | Basic Computer Vision Tasks | HF Unit 6 | 🔒 Coming Soon |
| 12 | Video & Video Processing | HF Unit 7 | 🔒 Coming Soon |
| 13 | 3D Vision & Scene Reconstruction | HF Unit 8 + Point Clouds (Unit 10) | 🔒 Coming Soon |
| 14 | Model Optimization & Deployment | HF Unit 9 | 🔒 Coming Soon |
| 15 | Synthetic Data, Zero-Shot CV & Ethics | HF Unit 10, 11, 12 | 🔒 Coming Soon |
| 16 | UAS / Final Project | Asesmen + HF Unit 13 | 🔒 Coming Soon |

Setiap materi disusun dalam 15 blok yang sama: Learning Objectives → Why This Matters → Prerequisite → Core Concept → Detailed Explanation → Mathematical/Technical Foundation → Illustration → Example → Real-world Application → Common Misconceptions → Key Takeaways → Preparation for Practice → Practice → Reflection → References.

---

## Sources

**Hugging Face Community Computer Vision Course**
<https://huggingface.co/learn/computer-vision-course/en/unit0/welcome/TableOfContents>
Sumber utama untuk struktur pembelajaran, terminologi, urutan konsep, model, task, dan notebook hands-on.

**JTI Polinema Flutter Codelab**
<https://jti-polinema.github.io/flutter-codelab/>
Sumber inspirasi format penyajian codelab: daftar modul, struktur langkah, dan pola penjadwalan materi.

Seluruh identitas visual, tata letak, kode, dan ilustrasi pada situs ini dibuat sendiri untuk COM Computer Vision. Tidak ada source code, desain, logo, atau identitas dari kedua sumber yang disalin.

---

## Features

- **16 learning modules** — seluruhnya terdaftar sepanjang semester
- **Theory** — 15 blok terstruktur per materi
- **Illustration** — 20+ diagram SVG buatan sendiri, ber-theme dan bebas lisensi
- **Practice** — 5 halaman praktikum + tautan notebook resmi Hugging Face
- **Fullscreen Presentation Mode** — halaman materi dapat dipakai langsung sebagai media mengajar
- **Dark Mode** — preferensi tersimpan di `localStorage`
- **Progress** — dihitung hanya terhadap materi yang sudah dibuka
- **Responsive** — desktop, tablet, dan mobile
- **Coming Soon** — penjadwalan materi lewat satu berkas konfigurasi
- **GitHub Pages** — path relatif seluruhnya, tanpa build step
- **Accessibility** — semantic HTML, `aria-label`, skip link, `focus-visible`, alt text, `prefers-reduced-motion`

### Presentation Mode

| Aksi | Cara |
|------|------|
| Masuk / keluar | Tombol **⛶ Fullscreen** pada content toolbar |
| Shortcut | <kbd>F</kbd> atau <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> |
| Keluar | <kbd>Esc</kbd> |
| Pindah bagian | <kbd>←</kbd> <kbd>→</kbd> |

Saat aktif: sidebar dan header disembunyikan, tipografi dan ilustrasi diperbesar, navigasi Previous/Next tetap tersedia. Bila browser menolak Fullscreen API, situs otomatis memakai pseudo-fullscreen berbasis CSS dengan perilaku yang sama.

### Progress

Progress dihitung terhadap materi yang **sudah dibuka** saja. Materi Coming Soon tidak dihitung sebagai materi yang belum selesai.

```
Materi 01–05 tersedia, 5 selesai  →  5 / 5  = 100%
Materi 01–05 tersedia, 2 selesai  →  2 / 5  = 40%
```

Bukan 5 / 16.

---

## Content Control

Seluruh penjadwalan materi diatur dari **satu berkas**: `assets/js/course-config.js`. Homepage, sidebar, navigasi Previous/Next, dan progress bar semuanya membaca berkas ini.

Status saat ini:

- **Week 01–05** → `material: true`
- **Week 06–16** → `material: false`

### Publish Materi 06

Buka `assets/js/course-config.js`, cari:

```js
week06: {
    title: "CNN Architectures & Transfer Learning",
    ...
    material: false
}
```

Ubah menjadi:

```js
week06: {
    title: "CNN Architectures & Transfer Learning",
    ...
    material: true
}
```

Simpan, lalu:

```bash
git add .
git commit -m "Publish Computer Vision Module 06"
git push
```

Setelah GitHub Pages selesai melakukan deployment (biasanya di bawah satu menit), Materi 06 menjadi **AVAILABLE**: kartunya di homepage aktif, item sidebarnya dapat diklik, dan progress menyesuaikan penyebutnya secara otomatis.

### Menyembunyikan kembali

Ubah `material: true` menjadi `material: false`, lalu:

```bash
git add .
git commit -m "Hide Computer Vision Module 06"
git push
```

### Menulis isi materi yang baru dibuka

Mengubah `material: true` membuat halaman **dapat diakses**, tetapi isinya tetap perlu ditulis. Untuk itu, salin struktur salah satu materi yang sudah lengkap:

```bash
cp weeks/week-05.html weeks/week-06.html
```

Lalu sesuaikan `data-week="06"`, judul halaman, dan kelima belas blok isinya. Semua elemen navigasi terisi otomatis dari `course-config.js`.

---

## Catatan Keamanan

GitHub Pages adalah **static hosting**. Menyembunyikan materi di sisi klien **bukan mekanisme keamanan**.

Tujuan fitur ini adalah **CONTENT SCHEDULING**, bukan **SECURE CONTENT PROTECTION**.

Siapa pun yang membuka source halaman atau repositori dapat melihat berkas HTML yang ada. Karena itu, pendekatan yang dipakai di sini adalah yang paling jujur: **isi materi yang terkunci memang belum ditulis di dalam berkasnya.** Halaman `week-06.html` sampai `week-16.html` hanya memuat kerangka dan panel Coming Soon — tidak ada konten yang disembunyikan dengan CSS atau JavaScript, sehingga tidak ada yang dapat "diintip" lebih awal.

Bila suatu saat diperlukan proteksi konten yang sesungguhnya (misalnya materi ujian), gunakan hosting dengan autentikasi sisi server, bukan GitHub Pages.

---

## Struktur Folder

```
/
├── index.html                  Homepage: hero, learning path, 16 card
├── about.html                  Tentang modul dan pendekatan pedagogisnya
├── references.html             Referensi dan kebijakan atribusi gambar
├── 404.html                    Halaman tidak ditemukan (mandiri, tanpa aset eksternal)
├── .nojekyll                   Menonaktifkan pemrosesan Jekyll di GitHub Pages
├── README.md
│
├── weeks/
│   ├── week-01.html … week-05.html    Materi lengkap (15 blok + ilustrasi SVG)
│   └── week-06.html … week-16.html    Coming Soon (kerangka saja)
│
├── practical/
│   └── practical-01.html … practical-05.html
│
└── assets/
    ├── css/
    │   └── style.css           Design system: token, layout, komponen, tema, presentation mode
    ├── js/
    │   ├── course-config.js    ← SUMBER KEBENARAN TUNGGAL
    │   ├── main.js             Sidebar, kartu, pager, tema, TOC, coming soon
    │   ├── fullscreen.js       Presentation mode + fallback + shortcut
    │   └── progress.js         Progress terhadap materi yang dibuka
    ├── img/
    │   ├── logo-TKOM.png
    │   └── ATTRIBUTION.md      Catatan sumber dan lisensi gambar
    └── illustrations/          Untuk SVG eksternal bila kelak diperlukan
```

> **Catatan logo:** `assets/img/logo-TKOM.png` saat ini berisi placeholder bermotif aperture. Ganti berkas tersebut dengan logo resmi Program Studi Teknik Komputer menggunakan **nama dan jalur yang sama persis** — tidak ada perubahan kode yang diperlukan.

---

## Menjalankan Secara Lokal

Tidak perlu server. Cukup buka `index.html` di browser.

Bila ingin memakai server lokal (disarankan agar perilakunya identik dengan GitHub Pages):

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

---

## Deploy ke GitHub Pages

1. Buat repositori baru di GitHub, lalu unggah seluruh isi folder ini:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: COM Computer Vision Learning"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

2. Buka repositori → **Settings** → **Pages**.
3. Pada **Source**, pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
5. Tunggu satu sampai dua menit. Situs tersedia di:

   ```
   https://USERNAME.github.io/NAMA-REPO/
   ```

### Catatan penting untuk GitHub Pages

- **Semua path relatif.** Root memakai `./assets/…`, subfolder memakai `../assets/…`. Tidak ada path absolut, `localhost`, maupun jalur mesin lokal.
- **`.nojekyll` wajib ada** agar GitHub tidak memproses berkas lewat Jekyll.
- **Nama berkas bersifat case-sensitive** di server Linux GitHub Pages. `logo-TKOM.png` harus dirujuk dengan kapitalisasi yang persis sama — ini penyebab broken image paling umum ketika repositori dikembangkan di Windows.
- **`course-config.js` dimuat sebagai skrip biasa**, bukan ES module, agar situs tetap berfungsi ketika dibuka langsung lewat `file://`.

---

## Lisensi & Atribusi

Materi pembelajaran disusun oleh Tim Pengajar Computer Vision, Program Studi Teknik Komputer, Universitas Warmadewa, dengan basis akademik Hugging Face Community Computer Vision Course.

Seluruh diagram pada situs ini adalah SVG orisinal yang ditulis langsung di dalam halaman, memakai variabel warna tema sehingga tetap terbaca pada mode terang maupun gelap. Setiap figure memiliki nomor, caption, dan baris sumber.

Bila kelak digunakan gambar eksternal, urutan prioritas sumbernya: aset resmi Hugging Face → Wikimedia Commons → Unsplash → Pexels → dokumentasi resmi → repositori open-source berlisensi sesuai. Berkas disimpan lokal di `assets/img/` (bukan hotlink) dan dicatat di `assets/img/ATTRIBUTION.md`.
