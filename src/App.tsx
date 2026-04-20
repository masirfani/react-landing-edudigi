import { motion } from "motion/react";
import { 
  GraduationCap, 
  ShieldCheck, 
  Zap, 
  Globe, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  Clock,
  HeartHandshake
} from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-art-bg selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-decoration-none">
            <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
            <span className="font-bold text-xl tracking-tighter text-slate-800 uppercase">EDUNUSA<span className="text-indigo-600">INDONESIA</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            <a href="#prosedur" className="hover:text-indigo-600 transition-colors">Program</a>
            <a href="#keunggulan" className="hover:text-indigo-600 transition-colors">Legalitas</a>
            <a href="#biaya" className="hover:text-indigo-600 transition-colors">Biaya</a>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-xl shadow-indigo-600/20">
            Klaim Sekarang
          </button>
        </div>
      </nav>

      <main className="pt-40 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-12 grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-8"
          >
            <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full italic">
              Inisiatif Literasi Digital 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.9] tracking-tighter">
              Digitalisasi <br/> <span className="italic text-indigo-600 underline decoration-1 underline-offset-8">Sekolah</span> Anda.
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              Wujudkan wajah digital sekolah profesional tanpa hambatan anggaran. Jasa pembuatan landing page gratis tanpa biaya awal. Cukup fokus pada pendidikan, serahkan urusan teknis kepada kami.
            </p>
            
            <div className="flex items-center gap-10 pt-4">
              <div className="relative">
                <span className="text-[120px] font-serif leading-none font-black text-indigo-900 opacity-5 absolute -top-12 -left-4 pointer-events-none">0</span>
                <div className="relative">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Setelah Rp 0</p>
                  <p className="text-4xl font-serif font-bold text-indigo-900 tracking-tight">Rp 0,-</p>
                </div>
              </div>
              <div className="h-12 w-[1px] bg-slate-200"></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Mulai Dari</p>
                <p className="text-4xl font-serif font-bold tracking-tight text-slate-800">Rp 50rb <span className="text-sm font-sans font-normal text-slate-400">/tahun</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="bg-indigo-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-800 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl font-serif leading-tight">Digitalisasi Tanpa <span className="italic opacity-80">Ribet.</span></h3>
                
                <ul className="space-y-6">
                  {[
                    { title: "Full Support Legalitas", desc: "Bantuan penuh pengurusan dokumen ke Registrar untuk domain .sch.id" },
                    { title: "Server & Maintenance", desc: "Update berkala dan pemeliharaan server Cloud berkecepatan tinggi." },
                    { title: "Tampilan Premium", desc: "Desain Landing Page setara kualitas agensi Rp 15 Juta+." }
                  ].map((feat, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-6 h-6 flex-shrink-0 bg-white/20 rounded-full flex items-center justify-center text-[10px] font-bold">{i+1}</div>
                      <div>
                        <p className="font-bold text-sm tracking-wide">{feat.title}</p>
                        <p className="text-xs text-indigo-200 opacity-80 leading-relaxed mt-1">{feat.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-4 py-4 bg-white text-indigo-900 rounded-2xl font-bold tracking-wider uppercase text-[11px] hover:bg-art-bg transition-colors shadow-lg">
                  Daftarkan Sekolah Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Value Props */}
        <section id="keunggulan" className="max-w-7xl mx-auto px-6 mt-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: "Setup Rp 0",
                desc: "Hapus hambatan biaya. Kami buatkan desain landing page profesional tanpa biaya jasa awal sepeserpun."
              },
              {
                icon: FileText,
                title: "Bantuan Legalitas",
                desc: "Bingung urus dokumen ke PANDI? Admin kami bantu verifikasi SK Pendirian & KTP Kepsek hingga domain aktif."
              },
              {
                icon: Globe,
                title: "Domain .sch.id",
                desc: "Identitas resmi sekolah Indonesia. Meningkatkan kepercayaan orang tua siswa dan prestise lembaga."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-school-green/30 hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Legal Assistance Focus */}
        <section id="prosedur" className="bg-indigo-900 mt-32 py-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-3xl -z-0" />
          <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <h2 className="text-5xl font-serif text-white leading-tight">
                  Urus Dokumen Legalitas? <br />
                  Biar <span className="italic text-indigo-300">Kami Yang Repot.</span>
                </h2>
                <p className="text-indigo-200/80 text-lg leading-relaxed">
                  Pendaftaran domain .sch.id membutuhkan verifikasi ketat dari registrar resmi. Admin kami bantu verifikasi SK Pendirian & KTP Kepsek hingga aktif.
                </p>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Verifikasi SK Pendirian Lembaga/Sekolah",
                    "Validasi KTP Kepala Sekolah/Penanggung Jawab",
                    "Surat Kuasa Pendaftaran Domain",
                    "Korespondensi langsung dengan Registrar (PANDI)"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-indigo-100">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                        {i+1}
                      </div>
                      <span className="text-sm font-medium tracking-wide">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <div className="p-8 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 inline-block">
                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4 text-center">Konsultasi Gratis</p>
                    <button className="bg-white text-indigo-900 px-8 py-3 rounded-2xl font-bold text-sm tracking-wide uppercase hover:scale-105 transition-transform">
                      Hubungi Admin via WA
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-6 pb-12 md:pb-0">
              <div className="space-y-6 pt-12">
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[40px] border border-white/10 group hover:bg-white/10 transition-colors">
                  <ShieldCheck className="text-indigo-400 w-10 h-10 mb-4" />
                  <p className="text-white font-bold tracking-tight">100% Aman</p>
                  <p className="text-[11px] text-indigo-200/60 mt-1 uppercase tracking-widest font-bold">Dokumen Terproteksi</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[40px] border border-white/10 group hover:bg-white/10 transition-colors">
                  <Clock className="text-indigo-400 w-10 h-10 mb-4" />
                  <p className="text-white font-bold tracking-tight">Cepat</p>
                  <p className="text-[11px] text-indigo-200/60 mt-1 uppercase tracking-widest font-bold">1-3 Hari Kerja</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-[40px] border border-white/20 w-full flex flex-col justify-center text-center">
                  <Globe className="text-indigo-400 w-12 h-12 mb-6 mx-auto" />
                  <p className="text-xl text-white font-serif italic mb-2">Akses Global</p>
                  <p className="text-xs text-indigo-100/70 leading-relaxed uppercase tracking-widest font-bold">Bandwidth Tanpa Batas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="biaya" className="max-w-7xl mx-auto px-12 mt-40 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-5xl font-serif text-slate-900 tracking-tight">Satu Harga, <span className="italic text-indigo-600">Tanpa Jebakan.</span></h2>
            <p className="text-slate-400 font-medium uppercase tracking-[0.3em] text-[10px]">Simple & Transparent Pricing</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-8 py-2 rounded-bl-[32px] text-[10px] font-bold uppercase tracking-widest">
                Recommended
              </div>
              <p className="text-[10px] font-bold text-slate-400 mb-6 uppercase tracking-[0.2em]">Paket Tahunan</p>
              <div className="flex items-end justify-center gap-1 mb-10">
                <span className="text-xl font-serif font-bold mb-3 text-indigo-900">Rp</span>
                <span className="text-8xl font-serif font-black text-indigo-900 tracking-tighter">50k</span>
                <span className="text-slate-400 font-bold mb-3 uppercase tracking-widest text-[10px]">/Thn</span>
              </div>
              <ul className="text-left space-y-5 mb-12">
                {[
                  "Biaya Pembuatan Website (Rp 0)",
                  "Domain .sch.id (Resmi Sekolah)",
                  "Managed Hosting & SSL Premium",
                  "Backup Mingguan Otomatis",
                  "Bantuan Update Konten",
                  "Support WhatsApp Prioritas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-indigo-600 w-3 h-3" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-900 text-white py-5 rounded-2xl font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-slate-900 transition-colors shadow-lg">
                Daftarkan Sekolah Anda
              </button>
              <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Harga Flat & Terjamin</p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 mt-32 space-y-12">
          <h2 className="text-3xl font-bold text-center text-slate-900">Tanya Jawab (FAQ)</h2>
          <div className="space-y-6">
            {[
              {
                q: "Benarkah biaya pembuatannya gratis?",
                a: "Betul. Kami tidak menarik biaya jasa pembuatan di awal. Program ini bertujuan membantu sekolah agar bisa tampil profesional di internet secara instan."
              },
              {
                q: "Apa saja syarat dokumen untuk .sch.id?",
                a: "Biasanya diperlukan KTP Kepala Sekolah dan SK Pendirian Lembaga (bisa dari Yayasan atau Dinas Pendidikan). Kami akan memandu Anda detailnya."
              },
              {
                q: "Bagaimana jika sekolah sudah punya domain?",
                a: "Anda tetap bisa ikut program ini. Kami bantu migrasikan ke sistem kami tanpa biaya migrasi."
              },
              {
                q: "Apakah saya bisa mengubah isi website sendiri?",
                a: "Tentu. Jika Anda repot, cukup kirim foto atau teks lewat WA, admin kami yang akan mengupdate-kan untuk Anda secara gratis."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-between h-32 border-b border-slate-50 mb-12">
           <div className="flex gap-16">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-1">Domain Resmi</span>
              <span className="text-sm font-bold tracking-tight text-slate-700">PANDI .sch.id</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-1">Kapasitas</span>
              <span className="text-sm font-bold tracking-tight text-slate-700">Cloud Bandwidth</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-1">Proses</span>
              <span className="text-sm font-bold tracking-tight text-indigo-600 italic">Verifikasi Cepat</span>
            </div>
          </div>
          
          <div className="text-right hidden md:block">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2 italic">Batch April 2026</p>
            <div className="flex justify-end gap-1.5">
              <div className="h-1 w-10 bg-indigo-600 rounded-full"></div>
              <div className="h-1 w-2 bg-slate-200 rounded-full opacity-50"></div>
              <div className="h-1 w-2 bg-slate-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
              <span className="font-bold text-lg tracking-tighter text-slate-800 uppercase">EDUNUSA<span className="text-indigo-600">ID</span></span>
            </div>
            <p className="text-[13px] text-slate-400 font-medium leading-relaxed uppercase tracking-wider">
              Literasi Digital Nasional. <br/>Mempersiapkan sekolah Indonesia menghadapi masa depan informasi.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h5 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em] mb-6">Program</h5>
              <ul className="text-xs font-bold text-slate-400 space-y-4 uppercase tracking-widest">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Digitalisasi</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Pendaftaran</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Legalitas</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em] mb-6">Bantuan</h5>
              <ul className="text-xs font-bold text-slate-400 space-y-4 uppercase tracking-widest">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Support WA</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Email Admin</a></li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1 border-l border-slate-100 pl-12 hidden lg:block">
               <h5 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em] mb-6">Kantor</h5>
               <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-wider">
                 Sudirman Tower A-02<br/>Jakarta Selatan, Indonesia
               </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 pt-32 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-300 font-bold uppercase tracking-[0.4em]">
          <p>© 2026 EDUNUSA INDONESIA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-slate-600">Terms</a>
            <a href="#" className="hover:text-slate-600">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
