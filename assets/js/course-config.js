/* ============================================================
   COM COMPUTER VISION — COURSE CONFIGURATION
   ============================================================
   File ini adalah SUMBER KEBENARAN TUNGGAL untuk seluruh website.
   Homepage, sidebar, navigasi previous/next, dan progress bar
   semuanya dibaca dari sini.

   CARA MEMBUKA MATERI  : ubah  material: false  ->  material: true
   CARA MENYEMBUNYIKAN  : ubah  material: true   ->  material: false

   Setelah diubah, simpan lalu jalankan:
       git add .
       git commit -m "Publish Computer Vision Module 06"
       git push

   CATATAN KEAMANAN:
   GitHub Pages adalah static hosting. Menyembunyikan materi di
   sisi klien BUKAN mekanisme keamanan — ini adalah CONTENT
   SCHEDULING. Isi materi yang terkunci memang belum ditulis di
   dalam file HTML-nya, jadi tidak ada yang bisa "diintip" lewat
   view-source. Lihat README.md bagian "Catatan Keamanan".
   ============================================================ */

const courseConfig = {

  week01: {
    title: "Fundamentals of Computer Vision",
    subtitle: "Vision, tugas-tugas CV, dan posisi CV di antara AI, ML, dan Image Processing",
    description:
      "Memahami apa itu vision, bagaimana manusia dan mesin 'melihat', serta memetakan seluruh tugas dasar Computer Vision sebelum menyentuh satu baris kode pun.",
    outcomes: [
      "Menjelaskan perbedaan human vision dan computer vision",
      "Memposisikan Computer Vision terhadap AI, Machine Learning, dan Image Processing",
      "Mengidentifikasi tugas CV: klasifikasi, deteksi, segmentasi, tracking, captioning",
      "Menjelaskan tahapan Computer Vision pipeline secara utuh"
    ],
    unit: "Hugging Face Unit 1 — Fundamentals",
    duration: "90 menit",
    updated: "28 September 2026",
    practical: "practical-01.html",
    material: true
  },

  week02: {
    title: "Digital Image & Image Formation",
    subtitle: "Citra sebagai fungsi f(x,y), pixel, resolusi, kanal warna, dan rantai akuisisi",
    description:
      "Membedah citra digital dari akarnya: representasi visual, fungsi dua dimensi, pixel, intensitas, resolusi spasial dan intensitas, hingga bagaimana cahaya berubah menjadi angka.",
    outcomes: [
      "Menuliskan citra sebagai fungsi f(x,y) dan menjelaskan setiap simbolnya",
      "Membedakan resolusi spasial dan resolusi intensitas",
      "Menjelaskan sampling dan kuantisasi pada digitalisasi citra",
      "Menguraikan pipeline akuisisi dari scene sampai citra digital"
    ],
    unit: "Hugging Face Unit 1 — Image, Imaging",
    duration: "100 menit",
    updated: "28 September 2026",
    practical: "practical-02.html",
    material: true
  },

  week03: {
    title: "Image Processing & Preprocessing",
    subtitle: "Resize, normalisasi, filtering, histogram, thresholding, dan pipeline preprocessing",
    description:
      "Mempelajari operasi-operasi yang menyiapkan citra sebelum masuk ke tahap ekstraksi fitur atau model, beserta alasan di balik setiap operasi.",
    outcomes: [
      "Mengklasifikasikan operasi pengolahan citra dan memilih yang tepat",
      "Menjelaskan cara kerja spatial filtering dengan kernel",
      "Membaca histogram dan menentukan nilai threshold",
      "Menyusun preprocessing pipeline yang dapat dipertanggungjawabkan"
    ],
    unit: "Hugging Face Unit 1 — Pre-processing for CV Tasks",
    duration: "100 menit",
    updated: "28 September 2026",
    practical: "practical-03.html",
    material: true
  },

  week04: {
    title: "Feature Extraction & Feature Matching",
    subtitle: "Edge, corner, texture, deskriptor, dan korespondensi antar citra",
    description:
      "Memahami apa yang membuat sebuah titik pada citra layak disebut fitur, bagaimana fitur dideskripsikan, dan bagaimana fitur dua citra dipasangkan.",
    outcomes: [
      "Membedakan edge, corner, dan texture sebagai jenis fitur",
      "Menyebutkan kriteria deskriptor yang baik",
      "Menjelaskan tahapan SIFT dan karakteristik SURF serta ORB",
      "Menjelaskan brute-force matching, ratio test, dan FLANN"
    ],
    unit: "Hugging Face Unit 1 — Feature Description, Feature Matching",
    duration: "110 menit",
    updated: "28 September 2026",
    practical: "practical-04.html",
    material: true
  },

  week05: {
    title: "Introduction to Convolutional Neural Networks",
    subtitle: "Konvolusi, kernel, feature map, padding, stride, pooling, dan arsitektur CNN",
    description:
      "Menjembatani Computer Vision klasik menuju deep learning dengan menghitung konvolusi secara manual terlebih dahulu, baru kemudian memahami CNN sebagai pencari kernel optimal.",
    outcomes: [
      "Menghitung konvolusi 1D dan 2D secara manual tanpa framework",
      "Menjelaskan pengaruh padding dan stride pada ukuran feature map",
      "Menjelaskan fungsi activation dan pooling dalam CNN",
      "Menjelaskan parameter sharing dan sparse interaction beserta manfaatnya"
    ],
    unit: "Hugging Face Unit 2 — Introduction to CNN",
    duration: "120 menit",
    updated: "28 September 2026",
    practical: "practical-05.html",
    material: true
  },

  week06: {
    title: "CNN Architectures & Transfer Learning",
    subtitle: "VGG, GoogLeNet, ResNet, MobileNet, ConvNeXt, YOLO, dan transfer learning",
    description:
      "Menelusuri evolusi arsitektur CNN dan mempelajari cara memanfaatkan model terlatih untuk dataset baru yang berukuran kecil.",
    outcomes: [
      "Membandingkan karakteristik arsitektur CNN populer",
      "Menjelaskan konsep residual connection dan depthwise separable convolution",
      "Menerapkan transfer learning pada dataset sendiri"
    ],
    unit: "Hugging Face Unit 2 — VGG, GoogLeNet, MobileNet, ConvNeXt, ResNet, YOLO",
    duration: "130 menit",
    updated: "13 Oktober 2026",
    practical: "practical-06.html",
    material: true
  },

  week07: {
    title: "Vision Transformers",
    subtitle: "ViT, Swin, CvT, DINAT, MobileViT, DETR, OneFormer, knowledge distillation",
    description:
      "Memahami pergeseran dari konvolusi ke attention: bagaimana citra dipecah menjadi patch dan diproses seperti barisan token.",
    outcomes: [
      "Menjelaskan mekanisme patch embedding dan self-attention pada citra",
      "Membandingkan ViT dengan CNN dari sisi induktif bias dan kebutuhan data",
      "Menjelaskan peran DETR dan OneFormer pada deteksi serta segmentasi"
    ],
    unit: "Hugging Face Unit 3 — Vision Transformers",
    duration: "120 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week08: {
    title: "Ujian Tengah Semester",
    subtitle: "Asesmen Materi 01–07",
    description:
      "Evaluasi pemahaman konsep fundamental Computer Vision, pengolahan citra, ekstraksi fitur, CNN, dan Vision Transformer.",
    outcomes: [
      "Menunjukkan penguasaan konsep fundamental Materi 01–07",
      "Menyelesaikan persoalan analitis berbasis kasus"
    ],
    unit: "Asesmen",
    duration: "100 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week09: {
    title: "Multimodal Computer Vision",
    subtitle: "Vision Language Models, CLIP, BLIP, OWL-ViT",
    description:
      "Mempelajari model yang menghubungkan citra dan teks dalam satu ruang representasi bersama.",
    outcomes: [
      "Menjelaskan ide contrastive pre-training pada CLIP",
      "Membedakan tugas captioning, retrieval, dan grounded detection",
      "Menjelaskan peran loss function pada model multimodal"
    ],
    unit: "Hugging Face Unit 4 — Multimodal Models",
    duration: "110 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week10: {
    title: "Generative Computer Vision",
    subtitle: "VAE, GAN, StyleGAN, CycleGAN, diffusion models",
    description:
      "Memahami bagaimana model menghasilkan citra baru, dari autoencoder variasional sampai model difusi, beserta implikasi etisnya.",
    outcomes: [
      "Menjelaskan perbedaan prinsip VAE, GAN, dan diffusion model",
      "Menjelaskan proses forward dan reverse diffusion",
      "Mengidentifikasi risiko bias dan privasi pada model generatif"
    ],
    unit: "Hugging Face Unit 5 — Generative Models",
    duration: "110 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week11: {
    title: "Basic Computer Vision Tasks",
    subtitle: "Object detection dan image segmentation secara formal",
    description:
      "Pendalaman formal dua tugas inti Computer Vision yang telah diperkenalkan sejak Materi 01, termasuk metrik evaluasinya.",
    outcomes: [
      "Menjelaskan anatomi detektor objek dan format anotasinya",
      "Membedakan segmentasi semantik, instance, dan panoptic",
      "Menghitung dan menafsirkan IoU serta mAP"
    ],
    unit: "Hugging Face Unit 6 — Basic CV Tasks",
    duration: "110 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week12: {
    title: "Video & Video Processing",
    subtitle: "Dimensi waktu, optical flow, model CNN/RNN/Transformer untuk video",
    description:
      "Menambahkan dimensi waktu pada citra dan mempelajari konsekuensinya terhadap representasi serta biaya komputasi.",
    outcomes: [
      "Menjelaskan video sebagai fungsi F(X,Y,T)",
      "Menjelaskan konsep optical flow dan temporal modeling",
      "Membandingkan pendekatan CNN 3D, RNN, dan transformer untuk video"
    ],
    unit: "Hugging Face Unit 7 — Video and Video Processing",
    duration: "110 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week13: {
    title: "3D Vision & Scene Reconstruction",
    subtitle: "Camera model, stereo vision, depth estimation, point cloud, NeRF",
    description:
      "Kembali ke geometri: bagaimana dunia tiga dimensi diproyeksikan ke citra dan bagaimana kedalaman direkonstruksi kembali.",
    outcomes: [
      "Menjelaskan model kamera pinhole dan parameter intrinsik-ekstrinsik",
      "Menjelaskan prinsip stereo vision dan disparitas",
      "Membandingkan representasi data 3D termasuk point cloud dan NeRF"
    ],
    unit: "Hugging Face Unit 8 (+ Point Clouds dari Unit 10)",
    duration: "120 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week14: {
    title: "Model Optimization & Deployment",
    subtitle: "Quantization, pruning, ONNX, OpenVINO, TensorRT",
    description:
      "Membawa model dari notebook ke perangkat nyata dengan batasan memori, latensi, dan daya.",
    outcomes: [
      "Menjelaskan trade-off akurasi, ukuran model, dan latensi",
      "Menjelaskan quantization dan pruning secara konseptual",
      "Memilih format dan runtime deployment yang sesuai"
    ],
    unit: "Hugging Face Unit 9 — Model Optimization",
    duration: "110 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week15: {
    title: "Synthetic Data, Zero-Shot CV & Ethics",
    subtitle: "Data sintetis, zero-shot learning, bias dan etika Computer Vision",
    description:
      "Tiga topik penutup yang saling terkait: ketika data nyata langka, ketika label tidak tersedia, dan ketika sistem penglihatan mesin berdampak pada manusia.",
    outcomes: [
      "Menjelaskan cara pembuatan data sintetis dan keterbatasannya",
      "Menjelaskan prinsip zero-shot learning pada Computer Vision",
      "Menganalisis risiko bias, privasi, dan dampak sosial sistem CV"
    ],
    unit: "Hugging Face Unit 10, 11, 12",
    duration: "120 menit",
    updated: "—",
    practical: null,
    material: false
  },

  week16: {
    title: "Ujian Akhir Semester / Final Project",
    subtitle: "Presentasi proyek akhir dan outlook Computer Vision",
    description:
      "Demonstrasi proyek akhir, refleksi seluruh perjalanan belajar, dan gambaran arah riset Computer Vision ke depan.",
    outcomes: [
      "Merancang dan mempresentasikan solusi Computer Vision end-to-end",
      "Mempertanggungjawabkan pilihan teknis dan etis pada proyek",
      "Menjelaskan arah perkembangan Computer Vision terkini"
    ],
    unit: "Asesmen + Hugging Face Unit 13 — Outlook",
    duration: "150 menit",
    updated: "—",
    practical: null,
    material: false
  }

};

/* Identitas website — dipakai di header, footer, dan metadata. */
const siteConfig = {
  name: "COM COMPUTER VISION",
  title: "COM Computer Vision Learning",
  subtitle: "Modul Pembelajaran Computer Vision",
  program: "Program Studi Teknik Komputer",
  institution: "Universitas Warmadewa",
  tagline: ["Understand Images.", "Extract Features.", "Build Vision Systems."],
  totalWeeks: 16
};
