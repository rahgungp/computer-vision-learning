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
| `kisumu-street-traffic.jpg` | Foto jalan raya Kisumu, Kenya — dipakai sebagai dasar ilustrasi keluaran detektor objek (Figure 6.4, week-06) | Josep M. Gracia, Wikimedia Commons, [File:KISU - Street traffic and pedestrians in Kisumu, Kenya, 2012.jpg](https://commons.wikimedia.org/wiki/File:KISU_-_Street_traffic_and_pedestrians_in_Kisumu,_Kenya,_2012.jpg), lisensi **CC BY-SA 4.0** |
| `xanthomonas-plant-disease.jpg` | Figur ilmiah gejala penyakit tanaman akibat bakteri *Xanthomonas*, termasuk hawar daun padi (Figure 6.5, week-06) | An, S.Q. et al. (2019), *FEMS Microbiology Reviews*, via Wikimedia Commons, [File:Xanthomonas-disease.jpg](https://commons.wikimedia.org/wiki/File:Xanthomonas-disease.jpg), lisensi **CC BY 4.0** |
| `cat-patch-demo.jpg` | Potret kucing — dasar ilustrasi langkah patchify ViT (Figure 7.3, week-07) | Wasiul Bahar, Wikimedia Commons, [File:Cat in Notre Dame college Dhaka (2022; cropped 2023).jpg](https://commons.wikimedia.org/wiki/File:Cat_in_Notre_Dame_college_Dhaka_(2022;_cropped_2023).jpg), lisensi **CC BY-SA 4.0** |

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
| 6.1 | week-06 | Garis waktu evolusi arsitektur CNN (LeNet → ConvNeXt) |
| 6.2 | week-06 | Blok residual ResNet: jalur pintas identity |
| 6.3 | week-06 | Konvolusi standar vs depthwise separable (MobileNet) |
| 6.4 | week-06 | Foto nyata + anotasi kotak deteksi orisinal (ilustrasi keluaran YOLO) |
| 6.5 | week-06 | Foto nyata gejala penyakit tanaman (contoh transfer learning) |
| 7.1 | week-07 | Garis waktu keluarga Vision Transformer (ViT → OneFormer) |
| 7.2 | week-07 | Arsitektur ViT: patch embedding, posisi, CLS, encoder |
| 7.3 | week-07 | Foto nyata + grid patch orisinal (ilustrasi patchify ViT) |
| 7.4 | week-07 | Window attention vs shifted window attention (Swin) |
| 7.5 | week-07 | Foto nyata + anotasi object query orisinal (ilustrasi DETR) |
| 8.1 | week-08 | Diagram batang ilustratif pembobotan UTS per materi |
| 9.1 | week-09 | Arsitektur CLIP: dual encoder + matriks kemiripan N×N |
| 9.2 | week-09 | Foto nyata (dipakai ulang dari 7.3) + skor zero-shot classification orisinal |
| 9.3 | week-09 | Foto nyata (dipakai ulang dari 6.4/7.5) + anotasi query OWL-ViT orisinal |
| 10.1 | week-10 | Autoencoder vs VAE: reparameterization trick |
| 10.2 | week-10 | Permainan adversarial GAN (Generator vs Discriminator) |
| 10.3 | week-10 | Cycle-consistency pada CycleGAN |
| 10.4 | week-10 | Foto nyata (dipakai ulang dari 7.3) + filter noise SVG orisinal (ilustrasi forward diffusion) |
| 11.1 | week-11 | Anatomi pipeline detektor objek |
| 11.2 | week-11 | Foto nyata (dipakai ulang dari 6.4/7.5/9.3) + visualisasi IoU orisinal |
| 11.3 | week-11 | Perbandingan semantic, instance, dan panoptic segmentation |
| 11.4 | week-11 | Kurva precision-recall dan Average Precision |
| 12.1 | week-12 | Video sebagai tumpukan frame F(x,y,t) |
| 12.2 | week-12 | Medan vektor optical flow (skematik) |
| 12.3 | week-12 | Perbandingan 3D CNN, CNN+RNN, dan Video Transformer |
| 13.1 | week-13 | Model kamera pinhole |
| 13.2 | week-13 | Stereo vision dan disparitas |
| 13.3 | week-13 | Perbandingan point cloud, mesh, voxel, dan NeRF |
| 13.4 | week-13 | Foto nyata (dipakai ulang dari 7.3) + gradien kedalaman ilustratif orisinal |
| 14.1 | week-14 | Ukuran model pada presisi FP32/FP16/INT8 |
| 14.2 | week-14 | Unstructured vs structured pruning |
| 14.3 | week-14 | Alur deployment: ONNX → TensorRT/OpenVINO/TFLite |
| — | index | Ilustrasi hero: pixel → operasi → representasi |

Figure 1.1–7.2, 7.4, 8.1, 9.1, 10.1–10.3, 11.1, 11.3, 11.4, 12.1–12.3, 13.1–13.3, dan 14.1–14.3 seluruhnya SVG orisinal, disusun berdasarkan penjelasan konseptual pada Hugging Face Community Computer Vision Course (Unit 1–9) serta paper arsitektur terkait. Figure 6.4, 6.5, 7.3, 7.5, 9.2, 9.3, 10.4, 11.2, dan 13.4 memakai foto nyata berlisensi bebas dari Wikimedia Commons (lihat tabel berkas gambar di atas) — disimpan lokal, bukan hotlink, dengan atribusi lengkap; foto kucing dan foto jalan raya dipakai ulang lintas-materi (06, 07, 09, 10, 11, 13) untuk membangun perbandingan visual yang konsisten antar-arsitektur. Figure 10.4 memakai filter SVG <code>feTurbulence</code> bawaan browser untuk mensimulasikan noise; Figure 13.4 memakai gradien radial ilustratif untuk mensimulasikan peta kedalaman — keduanya bukan hasil model sungguhan. Tidak ada gambar yang diambil langsung dari hasil pencarian Google.

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
