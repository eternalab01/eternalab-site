import React from 'react';

// Vektörel Cyber/Garage EternaLab Logosu
const Logo = () => (
  <svg
    viewBox="0 0 720 160"
    className="w-full h-auto max-w-[210px] md:max-w-[240px]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="28" cy="46" r="3" fill="#ffffff" />
    <polyline
      points="31,46 130,46 170,18 430,18"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="610" y="16" width="7" height="7" fill="#ffffff" opacity="0.25" />
    <rect x="622" y="16" width="7" height="7" fill="#ffffff" opacity="0.5" />
    <rect x="634" y="16" width="7" height="7" fill="#ffffff" opacity="0.75" />
    <rect x="646" y="16" width="7" height="7" fill="#ffffff" />

    {/* Geometrik E */}
    <g fill="#ffffff">
      <polygon points="105,48 152,48 132,68 85,68" />
      <polygon points="100,75 147,75 130,92 112,92 98,78" />
      <polygon points="85,82 108,105 132,105 152,125 105,125 70,90" />
    </g>

    {/* EternaLab Tipografi */}
    <text
      x="175"
      y="106"
      fill="#ffffff"
      fontFamily="sans-serif"
      fontSize="64"
      fontWeight="800"
      letterSpacing="-1.5"
    >
      Eterna<tspan fontWeight="900">Lab</tspan>
    </text>

    {/* Tescil İmi */}
    <circle cx="585" cy="62" r="10" stroke="#ffffff" strokeWidth="2" fill="none" />
    <text
      x="581"
      y="67"
      fill="#ffffff"
      fontFamily="sans-serif"
      fontSize="13"
      fontWeight="bold"
    >
      R
    </text>

    {/* Alt Çerçeve Hatları */}
    <polyline
      points="28,70 28,142 300,142 340,122 550,122"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="330" cy="142" r="3" fill="#ffffff" />
    <line
      x1="333"
      y1="142"
      x2="400"
      y2="142"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    <polygon points="505,142 522,125 544,125 527,142" fill="#ffffff" />
    <polygon points="535,142 552,125 574,125 557,142" fill="#ffffff" />
    <polygon points="565,142 582,125 604,125 587,142" fill="#ffffff" />
    <polyline
      points="590,142 660,142 690,105"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="690" cy="105" r="3" fill="#ffffff" />
  </svg>
);

const products = [
  {
    id: 1,
    name: 'FOAM PRO // AKTİF KÖPÜK',
    subtitle: 'Fırçasız Boya Güvenli Ön Yıkama',
    tag: '500 ML HDPE',
    price: '249 TL',
    badge: 'Çok Satan',
    specs: ['pH Dengeli Reçete', 'Krema Köpük Dokusu', 'İndüksiyon Korumalı'],
  },
  {
    id: 2,
    name: 'IRON PURGE // DEMİR TOZU',
    subtitle: 'Reaktif Jant & Boya Temizleyici',
    tag: '500 ML HDPE',
    price: '289 TL',
    badge: 'Yeni Formül',
    specs: ['Hızlı Renk Değişimi', 'Asitsiz pH Nötr', 'Ağır Balata Çözücü'],
  },
  {
    id: 3,
    name: 'TWISTED LOOP // KURULAMA',
    subtitle: 'Yüksek Gramaj Detailing Havlusu',
    tag: '800 GSM // 50x70 CM',
    price: '349 TL',
    badge: 'Premium Doku',
    specs: ['Tek Geçişte Kurulama', 'Çizik Önleyici Dikiş', 'Ultra Su Hapsi'],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#e0e0e0] font-sans antialiased selection:bg-white selection:text-black">
      {/* Üst Bilgi Barı */}
      <div className="w-full bg-[#111] border-b border-neutral-800 text-center py-2 text-xs tracking-widest text-neutral-400 uppercase font-mono">
        Adana İçi Aynı Gün Teslimat // 750 TL Üzeri Ücretsiz Kargo
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#080808]/90 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Logo />
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider text-neutral-400">
            <a href="#products" className="hover:text-white transition-colors">
              // ÜRÜNLER
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              // KALİTE STANDARDI
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              // LABORATUVAR
            </a>
          </nav>
          <div>
            <button className="px-5 py-2.5 bg-neutral-900 border border-neutral-700 hover:border-white text-white text-xs font-mono tracking-wider transition-all duration-200">
              SEPET (0)
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-3 py-1 mb-6 bg-neutral-900 border border-neutral-700 text-neutral-300 text-[11px] font-mono tracking-widest uppercase">
            ENDÜSTRİYEL SINIF OTO DETAY KİMYASALLARI
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[1.05]">
            Maksimum Parlaklık. <br />
            <span className="text-neutral-400">Sıfır Yüzey Kusuru.</span>
          </h1>
          <p className="mt-6 text-neutral-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            EternaLab; mat siyah 500 ml HDPE gövde mimarisi, kimyasal dayanımlı tetikleme sistemleri ve 
            sızdırmaz emniyet folyolu ambalajıyla garajınıza profesyonel detailing standardını getirir.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="px-8 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all font-mono text-center"
            >
              SERİYİ İNCELE
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 bg-neutral-900 border border-neutral-800 text-white font-bold text-xs uppercase tracking-widest hover:border-neutral-500 transition-all font-mono text-center"
            >
              AMBALAJ ÖZELLİKLERİ
            </a>
          </div>
        </div>
      </section>

      {/* Ürün Listesi */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
              // KATALOG V1.0
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-1">
              ÖNE ÇIKAN DETAY GRUBU
            </h2>
          </div>
          <p className="text-neutral-400 text-xs font-mono mt-2 md:mt-0">
            500 ML HDPE // 28/410 ÖLÇÜ STANDARDI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0d0d0d] border border-neutral-800/80 hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono uppercase bg-neutral-900 text-neutral-300 px-2.5 py-1 border border-neutral-800">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Ürün Görsel Alanı (Mat Siyah Konsept) */}
                <div className="w-full h-64 bg-[#141414] border border-neutral-900 flex flex-col items-center justify-center p-4 relative group-hover:bg-[#171717] transition-colors">
                  <div className="w-16 h-40 bg-neutral-950 border border-neutral-700 rounded-sm shadow-2xl flex flex-col items-center justify-between p-2">
                    <div className="w-6 h-3 bg-neutral-800 rounded-xs" />
                    <div className="text-[7px] font-mono tracking-widest text-center text-neutral-400">
                      ETERNALAB
                    </div>
                    <div className="w-full h-1 bg-neutral-800" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 mt-4 tracking-widest">
                    MAT SİYAH ŞİŞE
                  </span>
                </div>

                <h3 className="mt-6 text-sm font-bold tracking-wider text-white uppercase font-mono">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-light">
                  {item.subtitle}
                </p>

                <ul className="mt-6 space-y-2 border-t border-neutral-900 pt-4">
                  {item.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="text-[11px] font-mono text-neutral-400 flex items-center space-x-2"
                    >
                      <span className="w-1 h-1 bg-white block" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
                  <span className="text-lg font-mono font-extrabold text-white tracking-tight">
                    {item.price}
                  </span>
                  <button className="px-4 py-2 bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold tracking-wider uppercase transition-all">
                    SEPETE EKLE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kalite Standartları Grid */}
      <section id="features" className="py-20 border-t border-neutral-900 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-neutral-800 bg-[#0d0d0d]">
            <div className="text-xs font-mono text-neutral-400 mb-2">01 // MATERYAL</div>
            <h4 className="text-base font-bold text-white uppercase tracking-wide">
              500 ML HDPE Şişe
            </h4>
            <p className="text-xs text-neutral-400 mt-3 font-light leading-relaxed">
              Agresif asidik ve alkali detailing kimyasallarına karşı büzüşmeyen, sızdırmayan yüksek yoğunluklu polietilen gövde.
            </p>
          </div>

          <div className="p-6 border border-neutral-800 bg-[#0d0d0d]">
            <div className="text-xs font-mono text-neutral-400 mb-2">02 // SIZDIRMAZLIK</div>
            <h4 className="text-base font-bold text-white uppercase tracking-wide">
              İndüksiyon Emniyet Folyosu
            </h4>
            <p className="text-xs text-neutral-400 mt-3 font-light leading-relaxed">
              Kargo esnasında taşma ve hava temasını kesen, ürünün orijinalliğini ilk açılışa kadar garanti eden mühür.
            </p>
          </div>

          <div className="p-6 border border-neutral-800 bg-[#0d0d0d]">
            <div className="text-xs font-mono text-neutral-400 mb-2">03 // DOKUMA</div>
            <h4 className="text-base font-bold text-white uppercase tracking-wide">
              Twisted Loop & Edgeless
            </h4>
            <p className="text-xs text-neutral-400 mt-3 font-light leading-relaxed">
              Lazer kesim kenarsız cila bezleri ve yüksek su hapseden burgu lifli mikrofiber kurulama havluları.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-6 bg-[#060606]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-[11px] font-mono text-neutral-400 mt-3">
              KİMYA // DETAY TEKNOLOJİLERİ // ETERNALAB
            </p>
          </div>
          <div className="text-center md:text-right text-[11px] font-mono text-neutral-400">
            © 2026 ETERNALAB. TÜM HAKLARI SAKLIDIR.
          </div>
        </div>
      </footer>
    </div>
  );
}
