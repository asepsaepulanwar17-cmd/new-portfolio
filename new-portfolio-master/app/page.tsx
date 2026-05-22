import React from 'react';

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SepDigital WebStudio
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#layanan" className="hover:text-cyan-400 transition">Layanan</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition">Portofolio</a>
            <a href="#pengalaman" className="hover:text-cyan-400 transition">Pengalaman</a>
            <a href="#tech-stack" className="hover:text-cyan-400 transition">Teknologi</a>
            <a href="#harga" className="hover:text-cyan-400 transition">Paket Harga</a>
          </div>
          <div>
            <a 
              href="https://wa.me/6283175687133" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition"
            >
              Hubungi Developer
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="text-left max-w-2xl">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 mb-6 border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Full-Stack Web Developer & IT Educator
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Bangun Sistem Informasi & Website Bisnis <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skala Penuh</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Perkenalkan, saya Asep Saepul Anwar. Berakar pada keilmuan Pendidikan Teknologi Informasi dan Komunikasi dari Universitas Muhammadiyah Kuningan, saya memadukan fondasi akademis dengan keahlian praktis rekayasa perangkat lunak. Visi saya adalah merancang ekosistem digital yang tangguh—mulai dari platform e-commerce dan sistem kasir terintegrasi, hingga arsitektur manajemen institusi yang terstruktur, aman, dan berorientasi pada percepatan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#portfolio" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition text-center"
              >
                Lihat Karya Saya
              </a>
              <a 
                href="#harga" 
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-8 py-4 rounded-xl transition text-center"
              >
                Cek Penawaran
              </a>
            </div>
          </div>
          {/* Hero Illustration (Code Mockup) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-3 border-b border-slate-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-400 font-mono">VS Code - index.php</span>
              </div>
              <div className="p-6 font-mono text-sm text-slate-300">
                <p><span className="text-pink-400">&lt;?php</span></p>
                <p className="ml-4"><span className="text-blue-400">class</span> <span className="text-yellow-300">WebDeveloper</span> &#123;</p>
                <p className="ml-8"><span className="text-blue-400">public</span> <span className="text-cyan-300">$name</span> = <span className="text-orange-300">"Asep Saepul Anwar"</span>;</p>
                <p className="ml-8"><span className="text-blue-400">public</span> <span className="text-cyan-300">$skills</span> = [<span className="text-orange-300">"PHP"</span>, <span className="text-orange-300">"MySQL"</span>, <span className="text-orange-300">"Next.js"</span>];</p>
                <p className="ml-8 mt-2"><span className="text-blue-400">public function</span> <span className="text-yellow-200">buildSystem</span>() &#123;</p>
                <p className="ml-12"><span className="text-pink-400">return</span> <span className="text-orange-300">"Solusi Digital Berkualitas Tinggi"</span>;</p>
                <p className="ml-8">&#125;</p>
                <p className="ml-4">&#125;</p>
                <p><span className="text-pink-400">?&gt;</span></p>
              </div>
            </div>
          </div>
        </div>
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
      </header>

      {/* SERVICES SECTION */}
      <section id="layanan" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Fokus Layanan Development</h2>
            <p className="text-slate-400">Menggabungkan logika pemrograman yang kuat dengan desain UI/UX yang interaktif.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/40 transition group">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Toko Online & POS Kasir</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Sistem e-commerce yang dilengkapi fitur Point of Sale (POS), manajemen stok, hingga pengiriman nota digital instan melalui WhatsApp.</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/40 transition group">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sistem Informasi Akademik</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pengembangan dashboard internal untuk sekolah atau kampus, termasuk manajemen data siswa, rekam jejak SPP, dan pelaporan keuangan otomatis.</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/40 transition group">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.965 11.965 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Portal Organisasi & Web Kustom</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Aplikasi berbasis web dinamis untuk keperluan manajemen internal, kepanitiaan organisasi, hingga integrasi database lokal maupun cloud server.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Karya & Portofolio</h2>
            <p className="text-slate-400">Bukti nyata implementasi dari arsitektur kode dan desain database yang telah saya selesaikan.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1: SepDigital */}
            <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500 transition-colors">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">Featured Project</span>
              <h3 className="text-2xl font-bold text-white mb-3">SepDigital.Net</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Platform e-commerce spesifik untuk jual-beli perangkat mobile dan pulsa. Sistem ini dilengkapi dengan Point of Sale (POS) backend, rekapitulasi data penjualan real-time, dan fitur unggulan pencetakan struk digital yang dikirim otomatis via WhatsApp API.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">PHP</span>
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">MySQL</span>
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">WhatsApp API</span>
              </div>
            </div>

            {/* Project 2: Sistem Edukasi */}
            <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Sistem Administrasi Pendidikan</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Sistem informasi internal yang dirancang untuk melacak rekam jejak siswa dan riwayat pembayaran finansial (SPP bulanan). Menyediakan hak akses yang berbeda antara administrator, staf keuangan, dan laporan rekap yang dapat dicetak.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">XAMPP Env</span>
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">Database Design</span>
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">Report Gen</span>
              </div>
            </div>

            {/* Project 3: NEW Ponpes Admin */}
            <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Sistem Administrasi Pondok Pesantren</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Aplikasi manajemen data santri terpusat yang dirancang untuk mempermudah pengurus mengelola rekam data akademik, pembagian kamar asrama, pencatatan poin kedisiplinan (pelanggaran/prestasi), serta transparansi laporan iuran bulanan syahriah.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">PHP Full-Stack</span>
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">MySQL Database</span>
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">Dashboard Control</span>
              </div>
            </div>

            {/* Project 4: NEW Toko Sembako */}
            <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Sistem Toko Sembako & Manajemen Stok</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Sistem Point of Sale (POS) ritel yang dioptimasi untuk toko kelontong atau sembako. Menyediakan modul entri barang cepat, kalkulasi otomatis total belanja kembalian kasir, pengingat otomatis batas minimum stok menipis, serta grafik omzet bulanan.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">Inventory POS</span>
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">Query Optimization</span>
                <span className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded text-slate-300 font-medium">Local Server Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES & CAMPUS CONTRIBUTION */}
      <section id="pengalaman" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Pengalaman & Kontribusi Digital</h2>
            <p className="text-slate-400">Aktivitas di luar pengembangan kode yang memperluas wawasan tentang edukasi dan manajemen teknologi.</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5" /></svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-400 block mb-1">Edukasi & Kepemimpinan</span>
                <h4 className="text-xl font-bold text-white mb-2">Manajemen Seminar & Literasi Digital</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Berpengalaman dalam mengoordinasikan acara seminar teknologi berskala kampus, termasuk mengonstruksi skrip moderator terstruktur, mengelola jalannya diskusi interaktif, serta berkolaborasi erat dengan pembicara akademis untuk menyebarkan pemahaman literasi digital yang mendalam bagi mahasiswa dan masyarakat.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-400 block mb-1">Aktivitas Fisik & Kedisiplinan</span>
                <h4 className="text-xl font-bold text-white mb-2">Pencak Silat & Kepelatihan Olahraga</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Selain berkutat dengan dunia pemrograman komputer, saya aktif melatih seni bela diri Pencak Silat. Pengalaman kepelatihan ini membentuk karakter disiplin tinggi, ketahanan mental, serta kemampuan komunikasi kepemimpinan yang sangat membantu saya dalam mengelola tim dan manajemen tenggat waktu proyek klien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK & DESIGN SECTION */}
      <section id="tech-stack" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Alat & Teknologi Pengembangan</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Keahlian saya mencakup seluruh siklus pengembangan produk—mulai dari perancangan aset grafis (logo & UI) menggunakan <strong className="text-cyan-400 font-normal">CorelDraw</strong>, penulisan kode bersih di <strong className="text-cyan-400 font-normal">VS Code</strong>, hingga optimasi database menggunakan <strong className="text-cyan-400 font-normal">MySQL</strong> pada lingkungan server <strong className="text-cyan-400 font-normal">XAMPP</strong> sebelum *go-live*.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <span className="font-bold text-lg mb-1">PHP</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Backend</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <span className="font-bold text-lg mb-1">MySQL</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Database</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <span className="font-bold text-lg mb-1">Next.js</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Frontend</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <span className="font-bold text-lg mb-1">VS Code</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">IDE</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <span className="font-bold text-lg mb-1">CorelDraw</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">UI/UX & Branding</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
                  <span className="font-bold text-lg mb-1">XAMPP</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Local Server</span>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="relative h-full w-full bg-slate-950 rounded-3xl border border-slate-800 p-8 flex flex-col justify-center gap-6 shadow-2xl">
                <div className="h-2 w-20 bg-slate-800 rounded-full"></div>
                <div className="h-4 w-3/4 bg-slate-800 rounded-full"></div>
                <div className="h-4 w-1/2 bg-slate-800 rounded-full"></div>
                <div className="my-4 border-t border-slate-800"></div>
                <div className="h-12 w-full bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 font-mono text-sm">
                  ✓ Database Normalized
                </div>
                <div className="h-12 w-full bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 font-mono text-sm">
                  ✓ Responsive Layout
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section id="harga" className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Investasi Digital Anda</h2>
            <p className="text-slate-400">Pilih paket pengembangan yang sesuai dengan kebutuhan dan skala operasional usaha Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Company Profile Dasar</h3>
                <p className="text-slate-400 text-xs mb-6">Website informatif untuk branding UMKM atau organisasi.</p>
                <div className="mb-6"><span className="text-3xl font-bold text-white">Mulai Rp 800rb</span></div>
                <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Desain UI Responsif</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Gratis Logo Sederhana (CorelDraw)</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Integrasi Tombol WhatsApp</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> SEO Friendly</li>
                </ul>
              </div>
              <a href="https://wa.me/6283175687133?text=Halo%20Mas%20Asep,%20saya%20tertarik%20dengan%20Paket%20Company%20Profile" target="_blank" rel="noopener noreferrer" className="mt-8 w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 rounded-xl transition text-center block text-sm">Pilih Paket</a>
            </div>

            {/* Tier 2 */}
            <div className="bg-slate-900 border-2 border-cyan-500 p-8 rounded-2xl flex flex-col justify-between relative shadow-lg shadow-cyan-500/10">
              <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">Rekomendasi</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Toko Online & Kasir</h3>
                <p className="text-slate-400 text-xs mb-6">Sistem penjualan canggih seperti SepDigital.Net.</p>
                <div className="mb-6"><span className="text-3xl font-bold text-white">Mulai Rp 1.5 Jt</span></div>
                <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Backend PHP & Database MySQL</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Fitur Keranjang & Checkout</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Struk Otomatis via WA</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Dashboard Kelola Produk</li>
                </ul>
              </div>
              <a href="https://wa.me/6283175687133?text=Halo%20Mas%20Asep,%20saya%20tertarik%20dengan%20Paket%20Toko%20Online" target="_blank" rel="noopener noreferrer" className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2.5 rounded-xl transition text-center block text-sm">Pilih Paket</a>
            </div>

            {/* Tier 3 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Sistem Administrasi Kustom</h3>
                <p className="text-slate-400 text-xs mb-6">Portal kompleks untuk sekolah, pesantren, atau sistem POS retail bisnis.</p>
                <div className="mb-6"><span className="text-3xl font-bold text-white">Hubungi Saya</span></div>
                <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Arsitektur Database Kompleks</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Fitur Multi-User (Admin, Staf, User)</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Cetak Laporan Keuangan/Data</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Pengujian Keamanan Ketat</li>
                </ul>
              </div>
              <a href="https://wa.me/6283175687133?text=Halo%20Mas%20Asep,%20saya%20ingin%20konsultasi%20pembuatan%20Sistem%20Kustom" target="_blank" rel="noopener noreferrer" className="mt-8 w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 rounded-xl transition text-center block text-sm">Konsultasi Gratis</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <p className="font-semibold text-slate-400">SepDigital WebStudio by Asep Saepul Anwar</p>
          <p>Mendukung literasi digital melalui solusi teknologi yang tepat guna.</p>
          <p>© {new Date().getFullYear()} Hak Cipta Dilindungi.</p>
        </div>
      </footer>

    </div>
  );
}