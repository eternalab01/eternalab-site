"use client";

import React, { useState } from "react";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Layers, 
  Droplets,
  CheckCircle2
} from "lucide-react";

type MainCategory = "3d" | "garage";
type SubCategory3D = "all" | "decor" | "fun" | "wall" | "auto";
type SubCategoryGarage = "all" | "wheel_tire" | "wash_chem" | "towels" | "brushes";

interface Product {
  id: string;
  name: string;
  category: MainCategory;
  subCategory?: SubCategory3D | SubCategoryGarage;
  price: number;
  badge?: string;
  description: string;
  image: string;
  // 3D için: Renk ve Malzeme | Detailing için: Hacim/Ebat ve Uygulama/Paket Türü
  options1Label: string;
  options1: string[];
  options2Label: string;
  options2: string[];
}

const PRODUCTS: Product[] = [
  // ==========================================
  // --- 1. 3D TASARIM & LAB BÖLÜMÜ ---
  // ==========================================
  {
    id: "p1",
    name: "Masaüstü Filament & Kablo Düzenleyici",
    category: "3d",
    subCategory: "decor",
    price: 220,
    badge: "Masaüstü",
    description: "Atölye ve masa düzeni için modüler, geçmeli kilitleme sistemli kablo kılavuzu.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    options1Label: "Renk",
    options1: ["Mat Siyah", "Titanyum Gri", "Beyaz"],
    options2Label: "Malzeme",
    options2: ["Standart PLA", "Dayanıklı PETG"],
  },
  {
    id: "p2",
    name: "Geometrik Çokgen Sukulent Saksısı",
    category: "3d",
    subCategory: "decor",
    price: 160,
    description: "İç mekan için modern geometrik tasarımlı dekoratif saksı ve kalemlik.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80",
    options1Label: "Renk",
    options1: ["Mat Siyah", "Mermer Beyaz", "Gri"],
    options2Label: "Malzeme",
    options2: ["Standart PLA"],
  },
  {
    id: "p3",
    name: "Özel Tasarım Logo & Gamer Anahtarlık",
    category: "3d",
    subCategory: "fun",
    price: 180,
    badge: "Popüler",
    description: "Kişiselleştirilebilir çift renkli, darbelere dayanıklı özel üretim anahtarlık.",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=600&auto=format&fit=crop&q=80",
    options1Label: "Renk",
    options1: ["Mat Siyah", "Kırmızı", "Beyaz", "Gri"],
    options2Label: "Malzeme",
    options2: ["Standart PLA", "Dayanıklı PETG"],
  },
  {
    id: "p4",
    name: "Artikülasyonlu Eklemli Figür",
    category: "3d",
    subCategory: "fun",
    price: 260,
    badge: "Hobi",
    description: "Tam hareketli eklem yapısına sahip, esnek ve pürüzsüz yüzeyli masaüstü figürü.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
    options1Label: "Renk",
    options1: ["Parlak Kırmızı", "Mat Siyah", "İpek Altın"],
    options2Label: "Malzeme",
    options2: ["Standart PLA"],
  },
  {
    id: "p5",
    name: "Kulaklık & Gamepad Duvar / Masa Askısı",
    category: "3d",
    subCategory: "wall",
    price: 210,
    description: "Güçlendirilmiş tırnak yapısıyla kulaklık ve oyun kollarını güvenle asan duvar aparatı.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&auto=format&fit=crop&q=80",
    options1Label: "Renk",
    options1: ["Mat Siyah", "Beyaz", "Gri"],
    options2Label: "Malzeme",
    options2: ["Dayanıklı PETG", "Standart PLA"],
  },
  {
    id: "p6",
    name: "Modüler Altıgen Duvar Dekoru & Askı",
    category: "3d",
    subCategory: "wall",
    price: 290,
    badge: "Modüler",
    description: "İstenildiği gibi birleştirilebilen petek tasarımlı dekoratif duvar rafı ve düzenleyici seti.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    options1Label: "Renk",
    options1: ["Mat Siyah", "Ahşap Görünüm", "Beyaz"],
    options2Label: "Malzeme",
    options2: ["Dayanıklı PETG"],
  },
  {
    id: "p7",
    name: "Araç İçi Bardaklık & Telefon Tutucu",
    category: "3d",
    subCategory: "auto",
    price: 340,
    badge: "Özel Uyum",
    description: "Araç içi trimlere tam oturan, yüksek kabin sıcaklığına dayanıklı modül.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80",
    options1Label: "Renk",
    options1: ["Mat Siyah", "Karbon Siyah"],
    options2Label: "Malzeme",
    options2: ["PETG (Yüksek Isı)", "Karbon Katkılı"],
  },

  // ==========================================
  // --- 2. AUTO DETAILING & BAKIM BÖLÜMÜ ---
  // ==========================================
  {
    id: "d1",
    name: "pH Nötr Jant & Kaporta Demir Tozu Temizleyici",
    category: "garage",
    subCategory: "wheel_tire",
    badge: "Çok Satan",
    price: 380,
    description: "Balata tozu ve metal partiküllerini morararak söken, boya ve vernik dostu formül.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=80",
    options1Label: "Hacim",
    options1: ["500 ml Sprey", "1000 ml", "5 Litre Bidon"],
    options2Label: "Paket Tipi",
    options2: ["Standart Şişe", "Tetikli Sprey Başlıklı"],
  },
  {
    id: "d2",
    name: "Ultra Parlak & Su İtici Lastik Parlatıcı Jel",
    category: "garage",
    subCategory: "wheel_tire",
    badge: "Uzun Ömürlü",
    price: 290,
    description: "Kahverengileşmeyi önleyen, fırlama yapmayan derin ıslak parlaklık sunan jel formül.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80",
    options1Label: "Hacim",
    options1: ["500 ml", "1000 ml"],
    options2Label: "Paket",
    options2: ["Yalnızca Jel", "Uygulama Süngeri Hediyeli"],
  },
  {
    id: "d3",
    name: "Twisted Pile Ultra Emici Araç Kurulama Bezi",
    category: "garage",
    subCategory: "towels",
    badge: "1200 GSM",
    price: 360,
    description: "Tek geçişte tüm aracı çizmeden kurutan, leke ve su damlası bırakmayan mikrofiber havlu.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80",
    options1Label: "Boyut",
    options1: ["50x70 cm", "60x90 cm Dev Boy"],
    options2Label: "Renk",
    options2: ["Antrasit Gri", "Neon Turuncu", "Koyu Mavi"],
  },
  {
    id: "d4",
    name: "Çizilmez Profesyonel Detailing Fırça Seti (5'li)",
    category: "garage",
    subCategory: "brushes",
    badge: "Set",
    price: 240,
    description: "Jant bijon araları, klima ızgaraları, amblemler ve trimler için ultra yumuşak kıl yapısı.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop&q=80",
    options1Label: "Set Tipi",
    options1: ["5'li Standart Boy", "3'lü Sentetik Ultra Soft"],
    options2Label: "Sap Türü",
    options2: ["Plastik Gövde (Çizmez)"],
  },
  {
    id: "d5",
    name: "Yüksek Köpüklü Cilalı Şampuan (Carnauba)",
    category: "garage",
    subCategory: "wash_chem",
    badge: "Ph Dengeli",
    price: 310,
    description: "Mevcut seramik ve boya korumaya zarar vermeden üstün kayganlık ve parlaklık sağlar.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80",
    options1Label: "Hacim",
    options1: ["1000 ml", "5 Litre Bidon"],
    options2Label: "Kullanım",
    options2: ["Foam Lance & Kova Uyumlu"],
  },
  {
    id: "d6",
    name: "Lazer Kesim Mikrofiber Cila & Silme Bezi (3'lü Paket)",
    category: "garage",
    subCategory: "towels",
    price: 190,
    description: "Dikişsiz lazer kesim kenarlarıyla kılcal çizik oluşturmayan wax ve hızlı cila bezi.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80",
    options1Label: "Ebat",
    options1: ["40x40 cm (3'lü Paket)"],
    options2Label: "Ağırlık",
    options2: ["450 GSM Dikişsiz"],
  },
];

interface CartItem {
  cartId: string;
  product: Product;
  selectedOpt1: string;
  selectedOpt2: string;
  quantity: number;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<MainCategory>("3d");
  const [activeSubTab3D, setActiveSubTab3D] = useState<SubCategory3D>("all");
  const [activeSubTabGarage, setActiveSubTabGarage] = useState<SubCategoryGarage>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [selectedVariants, setSelectedVariants] = useState<Record<string, { opt1: string; opt2: string }>>({
    p1: { opt1: "Mat Siyah", opt2: "Standart PLA" },
    p2: { opt1: "Mat Siyah", opt2: "Standart PLA" },
    p3: { opt1: "Mat Siyah", opt2: "Standart PLA" },
    p4: { opt1: "Parlak Kırmızı", opt2: "Standart PLA" },
    p5: { opt1: "Mat Siyah", opt2: "Dayanıklı PETG" },
    p6: { opt1: "Mat Siyah", opt2: "Dayanıklı PETG" },
    p7: { opt1: "Mat Siyah", opt2: "PETG (Yüksek Isı)" },
    d1: { opt1: "500 ml Sprey", opt2: "Tetikli Sprey Başlıklı" },
    d2: { opt1: "500 ml", opt2: "Uygulama Süngeri Hediyeli" },
    d3: { opt1: "50x70 cm", opt2: "Antrasit Gri" },
    d4: { opt1: "5'li Standart Boy", opt2: "Plastik Gövde (Çizmez)" },
    d5: { opt1: "1000 ml", opt2: "Foam Lance & Kova Uyumlu" },
    d6: { opt1: "40x40 cm (3'lü Paket)", opt2: "450 GSM Dikişsiz" },
  });

  const handleVariantChange = (productId: string, type: "opt1" | "opt2", value: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [type]: value,
      },
    }));
  };

  const addToCart = (product: Product) => {
    const variant = selectedVariants[product.id] || {
      opt1: product.options1[0],
      opt2: product.options2[0],
    };
    const cartId = `${product.id}-${variant.opt1}-${variant.opt2}`;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.cartId === cartId);
      if (existing) {
        return prevCart.map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          cartId,
          product,
          selectedOpt1: variant.opt1,
          selectedOpt2: variant.opt2,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId: string, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (cartId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (p.category !== activeTab) return false;
    if (activeTab === "3d" && activeSubTab3D !== "all") {
      return p.subCategory === activeSubTab3D;
    }
    if (activeTab === "garage" && activeSubTabGarage !== "all") {
      return p.subCategory === activeSubTabGarage;
    }
    return true;
  });

  const is3D = activeTab === "3d";
  const themeClasses = {
    badge: is3D 
      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" 
      : "bg-amber-500/10 text-amber-400 border-amber-500/30",
    button: is3D 
      ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/25" 
      : "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/25",
    price: is3D ? "text-cyan-400" : "text-amber-400",
    cardBorder: is3D 
      ? "hover:border-cyan-500/50 hover:shadow-cyan-500/10" 
      : "hover:border-amber-500/50 hover:shadow-amber-500/10",
    selectedVariant: is3D 
      ? "border-cyan-500 bg-cyan-500/20 text-cyan-200" 
      : "border-amber-500 bg-amber-500/20 text-amber-200",
    ambientGlow: is3D
      ? "from-cyan-600/15 via-blue-600/5 to-transparent"
      : "from-amber-600/15 via-orange-600/5 to-transparent",
  };

  const subCategories3D: { key: SubCategory3D; label: string }[] = [
    { key: "all", label: "Tüm 3D Ürünleri" },
    { key: "decor", label: "Dekorasyon & Masaüstü" },
    { key: "fun", label: "Eğlence & Hobi" },
    { key: "wall", label: "Duvar & Askı" },
    { key: "auto", label: "Araç İçi Aksesuar" },
  ];

  const subCategoriesGarage: { key: SubCategoryGarage; label: string }[] = [
    { key: "all", label: "Tüm Detailing Ürünleri" },
    { key: "wheel_tire", label: "Jant & Lastik Bakımı" },
    { key: "wash_chem", label: "Dış Yıkama & Şampuan" },
    { key: "towels", label: "Kurulama & Mikrofiber" },
    { key: "brushes", label: "Fırça & Sünger Setleri" },
  ];

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 antialiased selection:bg-slate-700 selection:text-white">
      {/* DINAMIK ARKA PLAN IŞIKLARI */}
      <div 
        className={`pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${themeClasses.ambientGlow} transition-all duration-700`} 
      />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0d1117]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-2 shadow-inner transition duration-300 group-hover:border-slate-700">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path
                  d="M8 8H32V13H14V18H28V23H14V28H32V33H8V8Z"
                  fill="currentColor"
                  className={`transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`}
                />
                <rect x="22" y="18" width="6" height="5" fill="#0d1117" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center text-lg font-black tracking-tight text-white leading-none">
                <span>ETERNA</span>
                <span className={`ml-1 font-mono transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`}>
                  LAB
                </span>
              </div>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-slate-400 uppercase mt-1">
                3D Lab & Detailing
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition hover:border-slate-600 hover:bg-slate-800"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Sepet</span>
            {totalItemCount > 0 && (
              <span className={`ml-1 rounded-full px-2 py-0.5 text-xs font-bold text-slate-950 transition-all duration-300 ${is3D ? "bg-cyan-400" : "bg-amber-400"}`}>
                {totalItemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* HERO & ANA KATEGORİ GEÇİŞİ */}
      <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3.5 py-1 text-xs font-medium text-slate-300 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-slate-400" />
          <span>{is3D ? "Hassas 3D Baskı Teknolojisi" : "Premium Araç Bakım & Detailing Kimyasalları"}</span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {is3D ? (
            <>
              Hassas <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">3D Tasarım</span> & Üretim
            </>
          ) : (
            <>
              Profesyonel <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Auto Detailing</span> & Bakım
            </>
          )}
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {is3D 
            ? "Masaüstü, dekorasyon, duvar düzenleme ve araç içi için özel üretim 3D çözümler." 
            : "Demir tozu sökücüler, lastik parlatıcılar, yüksek emici havlular ve profesyonel fırçalar."}
        </p>

        {/* ANA KATEGORİ SEÇİCİ */}
        <div className="mx-auto mt-8 inline-flex rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 shadow-2xl backdrop-blur-lg">
          <button
            onClick={() => {
              setActiveTab("3d");
              setActiveSubTab3D("all");
            }}
            className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              is3D
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-102"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="h-4 w-4" />
            3D Tasarım & Lab
          </button>

          <button
            onClick={() => {
              setActiveTab("garage");
              setActiveSubTabGarage("all");
            }}
            className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              !is3D
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 shadow-lg shadow-amber-500/25 scale-102"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Droplets className="h-4 w-4" />
            Auto Detailing & Garaj
          </button>
        </div>

        {/* ALT KATEGORİ FİLTRE ÇUBUĞU */}
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2 animate-in fade-in zoom-in-95 duration-300">
          {is3D
            ? subCategories3D.map((sub) => (
                <button
                  key={sub.key}
                  onClick={() => setActiveSubTab3D(sub.key)}
                  className={`rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeSubTab3D === sub.key
                      ? "border-cyan-500 bg-cyan-500/15 text-cyan-300 shadow-sm"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {sub.label}
                </button>
              ))
            : subCategoriesGarage.map((sub) => (
                <button
                  key={sub.key}
                  onClick={() => setActiveSubTabGarage(sub.key)}
                  className={`rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeSubTabGarage === sub.key
                      ? "border-amber-500 bg-amber-500/15 text-amber-300 shadow-sm"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
        </div>
      </section>

      {/* ÜRÜN VİTRİNİ */}
      <main className="relative mx-auto max-w-6xl px-6 pb-24">
        <div
          key={`${activeTab}-${is3D ? activeSubTab3D : activeSubTabGarage}`}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in zoom-in-95 duration-500"
        >
          {filteredProducts.map((product) => {
            const currentVariant = selectedVariants[product.id] || {
              opt1: product.options1[0],
              opt2: product.options2[0],
            };

            return (
              <div
                key={product.id}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${themeClasses.cardBorder}`}
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className={`absolute top-3 left-3 rounded-md border px-2 py-0.5 text-[11px] font-bold tracking-wide backdrop-blur-md ${themeClasses.badge}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base text-white group-hover:text-slate-100">{product.name}</h3>
                      <span className={`font-mono text-lg font-black ${themeClasses.price}`}>{product.price} ₺</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {product.description}
                    </p>
                  </div>

                  {/* 1. Seçenek (3D için: Renk | Detailing için: Hacim/Ebat) */}
                  <div className="mt-4">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {product.options1Label}: <span className="text-slate-200">{currentVariant.opt1}</span>
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {product.options1.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleVariantChange(product.id, "opt1", opt)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentVariant.opt1 === opt
                              ? themeClasses.selectedVariant
                              : "border-slate-800 bg-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Seçenek (3D için: Malzeme | Detailing için: Paket/Uygulama) */}
                  <div className="mt-3">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {product.options2Label}: <span className="text-slate-200">{currentVariant.opt2}</span>
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {product.options2.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleVariantChange(product.id, "opt2", opt)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentVariant.opt2 === opt
                              ? themeClasses.selectedVariant
                              : "border-slate-800 bg-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sepete Ekle */}
                <button
                  onClick={() => addToCart(product)}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold shadow-lg transition-all duration-300 active:scale-98 ${themeClasses.button}`}
                >
                  <Plus className="h-4 w-4" />
                  Sepete Ekle
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* SEPET PANELİ */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l border-slate-800 bg-[#0d1117] p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className={`h-5 w-5 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
                  <h3 className="text-lg font-bold text-white">Sepetim ({totalItemCount})</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Sepet İçi Ürünler */}
              <div className="mt-4 max-h-[60vh] space-y-3 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="py-16 text-center text-slate-500">
                    <ShoppingBag className="mx-auto h-12 w-12 opacity-30" />
                    <p className="mt-3 text-sm">Sepetinizde ürün bulunmuyor.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.cartId}
                      className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/80 p-3.5 shadow-sm"
                    >
                      <div className="flex-1 pr-3">
                        <h4 className="text-sm font-semibold text-white">{item.product.name}</h4>
                        <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-slate-400">
                          <span className="rounded border border-slate-700/80 bg-slate-800 px-1.5 py-0.5">{item.selectedOpt1}</span>
                          <span className="rounded border border-slate-700/80 bg-slate-800 px-1.5 py-0.5">{item.selectedOpt2}</span>
                        </div>
                        <p className={`mt-1.5 font-mono text-xs font-bold ${is3D ? "text-cyan-400" : "text-amber-400"}`}>
                          {item.product.price} ₺ x {item.quantity} = {item.product.price * item.quantity} ₺
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-lg border border-slate-700 bg-slate-800/90">
                          <button
                            onClick={() => updateQuantity(item.cartId, -1)}
                            className="p-1 text-slate-400 hover:text-white"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-2 font-mono text-xs font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, 1)}
                            className="p-1 text-slate-400 hover:text-white"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="rounded-lg p-1.5 text-red-400 hover:bg-red-950/40"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Sepet Alt Toplam */}
            {cart.length > 0 && (
              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between font-mono text-base font-bold text-white">
                  <span>Toplam Tutar:</span>
                  <span className={`text-xl ${is3D ? "text-cyan-400" : "text-amber-400"}`}>{totalAmount} ₺</span>
                </div>
                <button
                  onClick={() => alert("Sipariş sistemi hazırlanıyor!")}
                  className={`mt-4 w-full rounded-xl py-3.5 text-sm font-bold shadow-lg transition-all duration-300 active:scale-98 ${themeClasses.button}`}
                >
                  Siparişi Onayla
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950/70 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className={`h-6 w-6 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">{is3D ? "Endüstriyel Mukavemet" : "Boya & Vernik Güvenli"}</h4>
              <p className="text-xs text-slate-400">{is3D ? "Yüksek doluluklu dayanıklı parçalar." : "pH dengeli, çizik ve leke bırakmayan formüller."}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className={`h-6 w-6 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Güvenli & Hızlı Kargo</h4>
              <p className="text-xs text-slate-400">Sızdırmaz emniyetli paketleme ile teslimat.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className={`h-6 w-6 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Premium Kalite</h4>
              <p className="text-xs text-slate-400">Detay tutkunları için test edilmiş ürünler.</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} EternaLab. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}
