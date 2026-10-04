/**
 * Data Konfigurasi & Materi Slide Presentasi
 * Workshop Stitch AI x Antigravity IDE - SMKN 2 Surakarta
 */

window.WORKSHOP_CONFIG = {
  title: "AI-Powered Web Development Workshop: Stitch AI × Antigravity IDE",
  subtitle: "Pelatihan Pengembangan Web Berbasis AI untuk Siswa SMK PPLG",
  school: "SMKN 2 Surakarta",
  department: "Konsentrasi Keahlian PPLG",
  speakerName: "Kelompok 4",
  speakerRole: "PPLG A",
  date: "2026",
  officialDownloadUrl: "https://antigravity.google"
};

window.SLIDES_DATA = [
  {
    id: 1,
    title: "Build Your First AI-Powered Website",
    subtitle: "Workshop Stitch AI × Antigravity IDE",
    category: "👾 Cover Presentasi 🎮",
    speakerNotes: "Buka pelatihan dengan menyapa para siswa SMK PPLG SMKN 2 Surakarta dengan antusias. Jelaskan tujuan utama pelatihan: belajar memanfaatkan AI secara efektif dalam membuat website tanpa kehilangan pemahaman tentang struktur kode dasar.",
    type: "cover"
  },
  {
    id: 2,
    title: "Learning Roadmap",
    subtitle: "Peta Perjalanan Pelatihan Hari Ini",
    category: "Agenda",
    speakerNotes: "Jelaskan alur belajar dari teori awal (Antigravity & Stitch AI), dilanjutkan dengan teknik prompt CROC, konsep integrasi MCP, hingga sesi praktik mandiri dan kuis evaluasi.",
    type: "roadmap",
    steps: [
      { num: "01", title: "Mengenal Antigravity", desc: "Memahami IDE masa depan berbasis AI Agent." },
      { num: "02", title: "Instalasi & Setup", desc: "Langkah download, install, dan login akun." },
      { num: "03", title: "Mengenal Stitch AI", desc: "Generator desain UI dari prompt teks." },
      { num: "04", title: "Prompting CROC", desc: "Teknik prompt efisien Context, Role, Output, Constraint." },
      { num: "05", title: "Integrasi & MCP", desc: "Menghubungkan workflow Stitch AI dengan Antigravity." },
      { num: "06", title: "Praktik Portofolio", desc: "Hands-on membuat website portofolio personal." },
      { num: "07", title: "Evaluasi & Kuis", desc: "Menguji pemahaman dengan kuis interaktif." }
    ]
  },
  {
    id: 3,
    title: "Mengenal Antigravity IDE",
    subtitle: "Lingkungan Pengembangan Modern dengan AI Agent",
    category: "Pengenalan Tools",
    speakerNotes: "Tekankan bahwa Antigravity IDE bukan sekadar teks editor biasa, melainkan lingkungan kerja developer cerdas yang terintegrasi dengan AI Agent autonomous untuk membantu membaca, menulis, dan memutar balikkan kode secara efisien.",
    type: "features",
    features: [
      { icon: "📝", title: "Smart Code Editor", desc: "Editor modern dengan penyorot sintaksis cerdas, auto-completion, dan dukungan multi-bahasa." },
      { icon: "📂", title: "File Explorer", desc: "Manajemen berkas proyek yang cepat dan rapi untuk melacak struktur HTML, CSS, dan JavaScript." },
      { icon: "💻", title: "Integrated Terminal", desc: "Jalankan perintah build, server lokal (Vite/Live Server), dan kontrol versi tanpa berpindah jendela." },
      { icon: "🤖", title: "AI Agent Panel", desc: "Asisten AI cerdas yang memahami konteks seluruh codebase dan dapat mengeksekusi instruksi kompleks." }
    ]
  },
  {
    id: 4,
    title: "Cara Instalasi Antigravity IDE",
    subtitle: "Langkah Praktis Menyiapkan Editor di Perangkat Anda",
    category: "Panduan Instalasi",
    speakerNotes: "Tunjukkan 7 langkah instalasi ini di layar. Pastikan siswa menggunakan installer yang aman dari situs resmi dan sudah login ke akun masing-masing sebelum memulai workshop.",
    type: "installation",
    officialUrl: "https://antigravity.google",
    steps: [
      { num: "1", title: "Buka Situs Resmi", desc: "Kunjungi portal unduhan resmi Antigravity." },
      { num: "2", title: "Pilih Installer OS", desc: "Pilih versi installer sesuai OS (Windows 64-bit / macOS / Linux)." },
      { num: "3", title: "Unduh & Jalankan", desc: "Jalankan berkas setup installer (.exe / .dmg) pada komputer." },
      { num: "4", title: "Ikuti Wizard Setup", desc: "Klik Next dan selesaikan petunjuk instalasi standar hingga akhir." },
      { num: "5", title: "Buka Antigravity IDE", desc: "Jalankan aplikasi dari Start Menu atau Desktop shortcut." },
      { num: "6", title: "Login Akun", desc: "Masuk menggunakan akun yang didukung untuk mengaktifkan AI Agent." },
      { num: "7", title: "Buka Folder Project", desc: "Klik 'Open Folder' untuk menentukan direktori kerja website Anda." }
    ]
  },
  {
    id: 5,
    title: "Mengenal Workspace Antigravity",
    subtitle: "Simulasi Antarmuka Editor & Penjelasan Komponen",
    category: "Eksplorasi IDE",
    speakerNotes: "Gunakan diagram interaktif ini untuk memperlihatkan letak 4 komponen utama IDE. Minta siswa mengklik tiap pin/tab untuk melihat fungsi spesifik dari masing-masing area kerja.",
    type: "workspace",
    panels: [
      { id: "explorer", name: "File Explorer", pos: "Sisi Kiri Atas", color: "#6366F1", desc: "Menampilkan struktur berkas proyek seperti index.html, style.css, dan script.js." },
      { id: "editor", name: "Code Editor", pos: "Area Tengah Utama", color: "#22D3EE", desc: "Tempat menulis kode utama dengan intellisense dan indikator modifikasi AI." },
      { id: "agent", name: "AI Agent Panel", pos: "Sisi Kanan / Overlay", color: "#10B981", desc: "Tempat mengetik instruksi prompt, melihat rencana perbaikan AI, dan aksi agen." },
      { id: "terminal", name: "Terminal Bawah", pos: "Area Bawah", color: "#F59E0B", desc: "Menjalankan dev server lokal, memeriksa log error, dan menjalankan perintah git." }
    ]
  },
  {
    id: 6,
    title: "Mengenal Stitch AI",
    subtitle: "Alat bantu visual untuk menghasilkan rancangan UI dari Teks",
    category: "Pengenalan Tools",
    speakerNotes: "Jelaskan bahwa Stitch AI berfokus pada tahap perancangan visual dan wireframing UI dari deskripsi teks. Ini sangat mempercepat tahap ideasi dan pembuatan layout.",
    type: "stitch_intro",
    points: [
      "Mengubah ide konseptual menjadi rancangan antarmuka visual dalam hitungan detik.",
      "Membantu eksplorasi ide layout UI modern tanpa harus menggambar manual dari nol.",
      "Hasil desain dapat ditinjau, disempurnakan, dan dijadikan acuan pengodingan.",
      "Menyediakan elemen visual yang konsisten untuk dilanjutkan ke tahap HTML/CSS."
    ],
    samplePrompt: "Buatkan halaman landing page portofolio siswa SMK jurusan PPLG dengan tema dark mode, aksen cyan dan indigo, serta bagian hero section, daftar keahlian, dan daftar proyek.",
    mockupElements: ["Header Nav", "Hero Title & Tagline", "Profile Card", "Skills Grid", "Project Showcase"]
  },
  {
    id: 7,
    title: "Workflow Stitch AI",
    subtitle: "Alur Kerja Dari Ide Hingga Menjadi Website Utuh",
    category: "Metodologi Kerja",
    speakerNotes: "Tekankan pesan penting: Hasil generasi AI bukanlah produk akhir yang serta merta sempurna. Selalu lakukan pemeriksaan, validasi, dan penyesuaian kode!",
    type: "workflow",
    flow: [
      { stage: "1. Ideasi", label: "Ide Konsep", desc: "Tentukan kebutuhan & tujuan website" },
      { stage: "2. Prompting", label: "Prompting Stitch", desc: "Gunakan formula CROC untuk hasil presisi" },
      { stage: "3. Generator", label: "Stitch AI Engine", desc: "Membuat visual mockup UI & layout" },
      { stage: "4. Review", label: "Review Desain", desc: "Evaluasi tata letak & struktur visual" },
      { stage: "5. Transfer", label: "Serahkan Hasil", desc: "Pindahkan aset/kode ke Antigravity IDE" },
      { stage: "6. Coding & Test", label: "Dev & Testing", desc: "Penyempurnaan AI Agent & Pengujian browser" }
    ]
  },
  {
    id: 8,
    title: "Teknik Prompting dengan Formula CROC",
    subtitle: "Rahasia Membuat Instruksi AI Presisi dan Efektif",
    category: "Prompt Engineering",
    speakerNotes: "CROC adalah fondasi penting dalam pelatihan ini. Klik tiap kartu C-R-O-C di layar untuk memperjelas maksud masing-masing elemen formula.",
    type: "croc_formula",
    croc: [
      {
        letter: "C",
        title: "Context (Konteks)",
        color: "#6366F1",
        desc: "Latar belakang dan siapa diri Anda serta tujuan umum proyek.",
        example: "Saya siswa SMK jurusan PPLG yang sedang menyiapkan portofolio untuk melamar industri PKL."
      },
      {
        letter: "R",
        title: "Role (Peran)",
        color: "#22D3EE",
        desc: "Tentukan peran spesifik yang harus diambil oleh AI.",
        example: "Bertindaklah sebagai Senior Frontend Developer dan UI/UX Designer profesional."
      },
      {
        letter: "O",
        title: "Output (Hasil)",
        color: "#10B981",
        desc: "Sebutkan komponen dan fitur spesifik yang ingin dibuat.",
        example: "Buat website portofolio 2 kolom berisi header, bio profil, grid skills, 2 kartu proyek, dan formulir kontak."
      },
      {
        letter: "C",
        title: "Constraint (Batasan)",
        color: "#F59E0B",
        desc: "Batasan teknologi, skema warna, gaya desain, dan responsivitas.",
        example: "Gunakan dark mode (navy #0B0C16, indigo #6366F1), HTML, CSS, JS murni, dan pastikan responsif di HP."
      }
    ],
    combinedPrompt: "Saya siswa SMK jurusan PPLG yang ingin membuat website portofolio untuk melamar PKL. Bertindaklah sebagai senior frontend developer dan UI/UX designer. Buat website portofolio dua kolom yang berisi profil, keahlian, minimal dua proyek, dan informasi kontak. Gunakan dark mode dengan aksen indigo, HTML, CSS, dan JavaScript, serta pastikan desain responsif di smartphone."
  },
  {
    id: 9,
    title: "Prompt Buruk vs Prompt Baik",
    subtitle: "Studi Kasus Perbandingan Instruksi Teks",
    category: "Studi Kasus Prompt",
    speakerNotes: "Ajak siswa membandingkan kedua contoh. Prompt buruk terlalu samar sehingga hasil AI menjadi acak, sedangkan Prompt baik memiliki struktur CROC yang lengkap.",
    type: "prompt_comparison",
    badPrompt: {
      text: "Buatkan website portofolio yang keren.",
      reasons: ["Konteks tidak jelas", "Tidak ada batasan teknologi", "Definisi 'keren' terlalu subjektif", "Struktur komponen tidak terdefinisi"]
    },
    goodPrompt: {
      text: "Buat website portofolio siswa SMK PPLG dengan bagian profil, skills, dua showcase proyek, dan kontak. Gunakan dark mode, aksen indigo, layout yang bersih, serta responsivitas untuk layar smartphone.",
      reasons: ["Konteks & sasaran jelas", "Komponen halaman dirinci", "Skema warna & style ditentukan", "Kebutuhan responsivitas ditegaskan"]
    }
  },
  {
    id: 10,
    title: "Apa Itu MCP?",
    subtitle: "Model Context Protocol — Jembatan Penghubung AI & Tools",
    category: "Konsep Lanjutan",
    speakerNotes: "Jelaskan MCP sebagai standar terbuka yang memungkinkan AI Agent membaca data atau mengeksekusi aksi pada tools eksternal (seperti server local, database, atau API eksternal) secara konsisten.",
    type: "mcp_explanation",
    diagram: [
      { name: "Antigravity AI Agent", role: "Otak Pemproses Prompt & Keputusan" },
      { name: "MCP Client / Protocol", role: "Format Komunikasi Standar (JSON-RPC)" },
      { name: "MCP Server", role: "Penyedia Fitur & Layanan Eksternal" },
      { name: "Tools Eksternal", role: "File System, Stitch, Git, Database, API" }
    ],
    benefits: [
      { title: "Standardisasi Hubungan", desc: "Menghubungkan AI dengan berbagai tools tanpa perlu custom code setiap kali." },
      { title: "Otomatisasi Workflow", desc: "Memungkinkan AI melakukan tugas kompleks seperti membuat file dan membaca struktur." },
      { title: "Kemanan & Kontrol", desc: "Pengguna dapat membatasi izin akses yang diberikan kepada MCP server." }
    ],
    note: "Catatan Kritis: MCP adalah protokol standar. Integrasi dengan tools eksternal membutuhkan konfigurasi server MCP yang sah dan terverifikasi."
  },
  {
    id: 11,
    title: "Menghubungkan Stitch AI dan Antigravity",
    subtitle: "Dua Pendekatan Integrasi: Direct Workflow vs MCP Workflow",
    category: "Integrasi Workflow",
    speakerNotes: "Bandingkan Pendekatan A (Manual Direct - cocok untuk pemula) dan Pendekatan B (MCP Integration - lanjutan). Tekankan pentingnya memulai dari dasar yang stabil.",
    type: "integration_approaches",
    approaches: [
      {
        name: "Pendekatan A: Direct Workflow (Rekomendasi Pemula)",
        tag: "Mudah & Cepat",
        color: "#22D3EE",
        steps: [
          "1. Buat desain UI di Stitch AI web platform.",
          "2. Tinjau & selesaikan ide layout visual.",
          "3. Salin/ekspor struktur HTML & CSS yang tersedia.",
          "4. Tempel ke berkas proyek di Antigravity IDE.",
          "5. Instruksikan AI Agent Antigravity untuk menghaluskan kode & responsivitas.",
          "6. Uji tampilan website langsung di browser."
        ]
      },
      {
        name: "Pendekatan B: MCP Workflow (Pendekatan Lanjutan)",
        tag: "Automated Protocol",
        color: "#6366F1",
        steps: [
          "1. Pelajari dokumentasi MCP server Stitch yang sah.",
          "2. Install dependensi runtime MCP pada lingkungan lokal.",
          "3. Daftarkan skema MCP server pada konfigurasi Antigravity IDE.",
          "4. Simpan API Credentials dengan aman pada environment variable.",
          "5. Verifikasi konektivitas tools Stitch pada AI Agent Panel.",
          "6. Eksekusi instruksi langsung melalui prompt agent secara otomatis."
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Praktik Langsung Membuat Portofolio",
    subtitle: "Checklist Kelengkapan Praktik Workshop Sesi Ini",
    category: "Sesi Praktik",
    speakerNotes: "Minta siswa mencentang setiap poin di slide saat mereka menyelesaikan tahapannya pada komputer masing-masing. Progres akan tersimpan otomatis!",
    type: "hands_on_checklist",
    items: [
      { id: "chk_1", label: "Buka folder project baru di Antigravity IDE", category: "Setup" },
      { id: "chk_2", label: "Buat rancangan awal desain portofolio di Stitch AI", category: "Desain" },
      { id: "chk_3", label: "Pindahkan hasil desain / struktur ke berkas index.html & style.css", category: "Coding" },
      { id: "chk_4", label: "Personalisasi data: Nama, Kelas (PPLG), Bio, & Foto Profil", category: "Konten" },
      { id: "chk_5", label: "Tambahkan minimal 2 kartu showcase proyek karya pribadi", category: "Konten" },
      { id: "chk_6", label: "Tambahkan tombol 'Unduh CV' dan bagian formulir Kontak", category: "Fitur" },
      { id: "chk_7", label: "Uji responsivitas pada layar Desktop dan Smartphone", category: "Testing" }
    ]
  },
  {
    id: 13,
    title: "Prompt untuk AI Agent",
    subtitle: "Contoh Instruksi Siap Pakai di Antigravity IDE Panel",
    category: "Prompt Templating",
    speakerNotes: "Siswa bisa langsung mengklik tombol 'Copy Prompt' di slide ini dan menempelkannya ke AI Agent Panel Antigravity IDE untuk menyempurnakan berkas proyek mereka.",
    type: "agent_prompt",
    agentPromptText: "Periksa struktur project portofolio saya. Pertahankan gaya visual yang sudah ada. Ganti semua data dummy dengan data yang saya berikan. Tambahkan bagian proyek, formulir kontak dengan field nama, email, dan pesan, serta tombol unduh CV. Pastikan layout responsif dan jangan menghapus fitur yang sudah berfungsi.",
    codePreview: `<!-- Contoh Output Struktur HTML yang Bersih -->
<section id="projects" class="projects-section">
  <h2 class="section-title">Showcase Proyek Saya</h2>
  <div class="projects-grid">
    <article class="project-card">
      <img src="assets/project1.webp" alt="Aplikasi E-Commerce SMK" />
      <h3>Aplikasi E-Commerce Kantin SMK</h3>
      <p>Dibuat dengan HTML5, CSS Grid, dan JavaScript ES6.</p>
    </article>
  </div>
</section>`
  },
  {
    id: 14,
    title: "Debugging dan Penyempurnaan",
    subtitle: "Langkah Penanganan Masalah & Kode Error Saat Coding",
    category: "Debugging",
    speakerNotes: "Edukasi siswa bahwa hasil AI tidak selalu 100% sempurna tanpa bug. Tunjukkan pentingnya kemampuan debugging menggunakan Inspect Element dan pembacaan log error.",
    type: "debugging_guide",
    scenarios: [
      {
        problem: "Tampilan Layar HP Berantakan / Overflow Horizontal",
        cause: "Lebar elemen gambar atau container menggunakan nilai pixel tetap (px).",
        solution: "Gunakan max-width: 100% dan CSS Flexbox/Grid dengan viewport unit (vw/%)."
      },
      {
        problem: "Tombol / Link Tidak Bisa Diklik",
        cause: "Properti z-index tertutup elemen overlay atau event listener JS belum dipasang.",
        solution: "Buka Developer Tools (F12), periksa tab Elements dan Event Listeners."
      },
      {
        problem: "Gaya CSS Baru Tidak Muncul di Browser",
        cause: "Browser menyimpan cache file CSS lama.",
        solution: "Lakukan Hard Refresh (Ctrl + F5) atau buka situs di tab Incognito."
      },
      {
        problem: "AI Agent Mengubah Kode yang Sudah Benar",
        cause: "Prompt ke AI Agent terlalu luas dan kurang membatasi area edit.",
        solution: "Beri instruksi tegas: 'HANYA ubah bagian #contact dan pertahankan #hero'."
      }
    ]
  },
  {
    id: 15,
    title: "Evaluasi dan Tantangan",
    subtitle: "Kuis Interaktif 5 Pertanyaan Seputar Materi Workshop",
    category: "Kuis Evaluasi",
    speakerNotes: "Pandu siswa menjawab kuis interaktif 5 nomor ini secara rinci. Skor dan pembahasan akan langsung muncul setelah seluruh soal terjawab!",
    type: "interactive_quiz",
    questions: [
      {
        id: 1,
        question: "Apa fungsi utama dari Antigravity IDE?",
        options: [
          "A. Aplikasi edit foto dan manipulasi grafis 3D.",
          "B. Environment pengembangan web cerdas yang terintegrasi dengan AI Agent.",
          "C. Browser internet untuk mencari informasi di web.",
          "D. Program antivirus komputer."
        ],
        correct: 1,
        explanation: "Antigravity IDE adalah code editor cerdas yang dilengkapi AI Agent autonomous untuk membantu penulisan, analisis, dan perbaikan kode."
      },
      {
        id: 2,
        question: "Peran utama Stitch AI dalam workflow pembuatan website adalah...",
        options: [
          "A. Menyediakan hosting web dan nama domain gratis.",
          "B. Memperbaiki koneksi internet komputer.",
          "C. Menghasilkan rancangan desain visual UI berdasarkan prompt teks.",
          "D. Menginstall sistem operasi Windows."
        ],
        correct: 2,
        explanation: "Stitch AI berfungsi sebagai alat bantu perancangan antarmuka visual UI secara cepat dari instruksi teks."
      },
      {
        id: 3,
        question: "Dalam formula prompting CROC, huruf 'R' melambangkan...",
        options: [
          "A. Resolution (Resolusi Layar)",
          "B. Role (Peran yang harus diambil oleh AI)",
          "C. Review (Pemeriksaan Ulang)",
          "D. Reaction (Reaksi Pengguna)"
        ],
        correct: 1,
        explanation: "CROC singkatan dari Context, Role, Output, dan Constraint. 'Role' menentukan sudut pandang/keahlian AI yang diinginkan."
      },
      {
        id: 4,
        question: "Apa kepanjangan dan definisi dari MCP?",
        options: [
          "A. Master Control Program — Perintah khusus terminal.",
          "B. Model Context Protocol — Standar penghubung AI Agent dengan tools/server eksternal.",
          "C. Multi Code Processor — Hardware pemroses CPU.",
          "D. Main Computer Protection — Fitur keamanan browser."
        ],
        correct: 1,
        explanation: "MCP (Model Context Protocol) adalah protokol standar terbuka untuk menghubungkan model AI dengan data & tools eksternal."
      },
      {
        id: 5,
        question: "Sikap yang BENAR setelah menerima hasil kode yang digenerate oleh AI adalah...",
        options: [
          "A. Langsung mengumpulkan tanpa diperiksa sama sekali.",
          "B. Menghapus semua kode dan mengetik ulang dari awal.",
          "C. Memeriksa, menguji di browser, dan menyesuaikan dengan kebutuhan proyek.",
          "D. Menyalahkan AI jika terjadi error."
        ],
        correct: 2,
        explanation: "Kode dari AI harus selalu ditinjau, diuji, dan disesuaikan secara kritis oleh pengembang."
      }
    ]
  },
  {
    id: 16,
    title: "Tugas Mandiri & Rubrik Penilaian",
    subtitle: "Tantangan Pembuatan Website Portofolio Personal SMK",
    category: "Penugasan",
    speakerNotes: "Jelaskan 5 aspek rubrik penilaian ini. Tugas dikumpulkan dalam bentuk folder project yang siap dijalankan.",
    type: "assignment",
    requirements: [
      "Menggunakan identitas asli siswa SMK PPLG.",
      "Memiliki bagian Hero Profil, Skills, Minimal 2 Proyek, & Formulir Kontak.",
      "Menerapkan teknik prompting CROC dalam proses pembuatannya.",
      "Desain bersih, dark mode, dan responsif sempurna di smartphone & desktop.",
      "Kode terstruktur dengan komentar penjelas yang rapi."
    ],
    rubrik: [
      { aspect: "Kelengkapan Fitur", weight: "25%", criteria: "Header, Bio, Skills, 2 Proyek, Unduh CV, Formulir Kontak." },
      { aspect: "Kualitas Desain & UI", weight: "25%", criteria: "Konsistensi warna, hirarki tipografi, efek glow & kontras." },
      { aspect: "Penerapan CROC", weight: "20%", criteria: "Ketetapan prompt dan penggunaan AI Agent yang terarah." },
      { aspect: "Responsivitas", weight: "15%", criteria: "Tampilan rapi tanpa overflow horizontal di layar smartphone." },
      { aspect: "Kerapian Kode", weight: "15%", criteria: "Struktur tag HTML5 bermakna (semantic) dan CSS tertata." }
    ]
  },
  {
    id: 17,
    title: "Closing",
    subtitle: "Your Ideas. Your Prompts. Your Website.",
    category: "Penutup",
    speakerNotes: "Tutup sesi pelatihan dengan quote inspiratif. Tekankan bahwa AI adalah akselerator ide, bukan pengganti fondasi kemampuan logika pemograman.",
    type: "closing",
    quote: "AI bukan pengganti proses belajar. AI adalah alat cerdas untuk membantu kita bereksperimen, memahami kode, dan membangun sesuatu yang bermanfaat bagi banyak orang.",
    actions: [
      { id: "restart", text: "↺ Kembali ke Cover", primary: true },
      { id: "toc", text: "☰ Daftar Slide", primary: false },
    ]
  }
];
