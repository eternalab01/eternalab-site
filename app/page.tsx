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
  Wrench,
  CheckCircle2,
  Box,
  Flame
} from "lucide-react";

type MainCategory = "3d" | "garage";
type SubCategory3D = "all" | "decor" | "fun" | "wall" | "auto";

interface Product {
  id: string;
  name: string;
  category: MainCategory;
  subCategory?: SubCategory3D;
  price: number;
  badge?: string;
  description: string;
  image: string;
  colors: string[];
  materials: string[];
}

const PRODUCTS: Product[] = [
  // --- 3D TASARIM: DEKORASYON & MASAÜSTÜ ---
  {
    id: "p1",
    name: "Masaüstü Filament & Kablo Düzenleyici",
    category: "3d",
    subCategory: "decor",
    price: 220,
    badge: "Masaüstü",
    description: "Atölye ve masa düzeni için modüler, geçmeli kilitleme sistemli kablo kılavuzu.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Titanyum Gri", "Beyaz"],
    materials: ["Standart PLA", "Dayanıklı PETG"],
  },
  {
    id: "p2",
    name: "Geometrik Çokgen Sukulent Saksısı",
    category: "3d",
    subCategory: "decor",
    price: 160,
    description: "İç mekan için modern geometrik tasarımlı dekoratif saksı ve kalemlik.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Mermer Beyaz", "Gri"],
    materials: ["Standart PLA"],
  },

  // --- 3D TASARIM: EĞLENCE & HOBİ ---
  {
    id: "p3",
    name: "Özel Tasarım Logo & Gamer Anahtarlık",
    category: "3d",
    subCategory: "fun",
    price: 180,
    badge: "Popüler",
    description: "Kişiselleştirilebilir çift renkli, darbelere dayanıklı özel üretim anahtarlık.",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Kırmızı", "Beyaz", "Gri"],
    materials: ["Standart PLA", "Dayanıklı PETG"],
  },
  {
    id: "p4",
    name: "Artikülasyonlu Eklemli Ejderha / Figür",
    category: "3d",
    subCategory: "fun",
    price: 260,
    badge: "Hobi",
    description: "Tam hareketli eklem yapısına sahip, esnek ve pürüzsüz yüzeyli masaüstü figürü.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
    colors: ["Parlak Kırmızı", "Mat Siyah", "İpek Altın"],
    materials: ["Standart PLA"],
  },

  // --- 3D TASARIM: DUVAR ÜRÜNLERİ ---
  {
    id: "p5",
    name: "Kulaklık & Gamepad Duvar / Masa Askısı",
    category: "3d",
    subCategory: "wall",
    price: 210,
    description: "Güçlendirilmiş tırnak yapısıyla kulaklık ve oyun kollarını güvenle asan duvar aparatı.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Beyaz", "Gri"],
    materials: ["Dayanıklı PETG", "Standart PLA"],
  },
  {
    id: "p6",
    name: "Modüler Altıgen (Hexagon) Duvar Dekoru & Askı",
    category: "3d",
    subCategory: "wall",
    price: 290,
    badge: "Modüler",
    description: "İstenildiği gibi birleştirilebilen petek tasarımlı dekoratif duvar rafı ve düzenleyici seti.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Ahşap Görünüm", "Beyaz"],
    materials: ["Dayanıklı PETG"],
  },

  // --- 3D TASARIM: ARAÇ İÇİ ---
  {
    id: "p7",
    name: "Araç İçi Bardaklık / Tutucu Modülü",
    category: "3d",
    subCategory: "auto",
    price: 340,
    badge: "Özel Uyum",
    description: "Araç içi trimlere tam oturan, yüksek kabin sıcaklığına ve deformasyona dayanıklı modül.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Karbon Siyah"],
    materials: ["PETG (Yüksek Isı)", "Karbon Katkılı"],
  },

  // --- GARAGE LAB & DETAILING ---
  {
    id: "p8",
    name: "Polisaj Makinesi Duvar Askı Aparatı",
    category: "garage",
    badge: "Ağır Hizmet",
    price: 450,
    description: "Rotary ve orbital polisaj makinelerini güvenle taşıyan, güçlendirilmiş garaj askısı.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Garaj Turuncusu", "Kırmızı"],
    materials: ["Güçlendirilmiş PETG", "Karbon Katkılı"],
  },
  {
    id: "p9",
    name: "Sprey Şişe & Kimyasal Duvar Tutucu Seti",
    category: "garage",
    badge: "3'lü Modül",
    price: 380,
    description: "500ml - 1000ml detaylandırma sprey şişelerini düzenleyen kimyasala dayanıklı askılık.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Garaj Turuncusu", "Koyu Gri"],
    materials: ["Güçlendirilmiş PETG (Kimyasal Direnç)"],
  },
  {
    id: "p10",
    name: "Basınçlı Yıkama Nozul & Tabanca Askısı",
    category: "garage",
    price: 290,
    description: "Tetikli yıkama tabancaları ve 5 farklı nozul açısı için kompakt hızlı askı aparatı.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Garaj Turuncusu"],
    materials: ["PETG (Yüksek Mukavemet)"],
  },
];

interface CartItem {
  cartId: string;
  product: Product;
  selectedColor: string;
  selectedMaterial: string;
  quantity: number;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<MainCategory>("3d");
  const [activeSubTab, setActiveSubTab] = useState<SubCategory3D>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [selectedVariants, setSelectedVariants] = useState<Record<string, { color: string; material: string }>>({
    p1: { color: "Mat Siyah", material: "Standart PLA" },
    p2: { color: "Mat Siyah", material: "Standart PLA" },
    p3: { color: "Mat Siyah", material: "Standart PLA" },
    p4: { color: "Parlak Kırmızı", material: "Standart PLA" },
    p5: { color: "Mat Siyah", material: "Dayanıklı PETG" },
    p6: { color: "Mat Siyah", material: "Dayanıklı PETG" },
    p7: { color: "Mat Siyah", material: "PETG (Yüksek Isı)" },
    p8: { color: "Mat Siyah", material: "Güçlendirilmiş PETG" },
    p9: { color: "Mat Siyah", material: "Güçlendirilmiş PETG (Kimyasal Direnç)" },
    p10: { color: "Mat Siyah", material: "PETG (Yüksek Mukavemet)" },
  });

  const handleVariantChange = (productId: string, type: "color" | "material", value: string) => {
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
      color: product.colors[0],
      material: product.materials[0],
    };
    const cartId = `${product.id}-${variant.color}-${variant.material}`;

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
          selectedColor: variant.color,
          selectedMaterial: variant.material,
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

  // Filtreleme Mantığı
  const filteredProducts = PRODUCTS.filter((p) => {
    if (p.category !== activeTab) return false;
    if (activeTab === "3d" && activeSubTab !== "all") {
      return p.subCategory === activeSubTab;
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

  const subCategories: { key: SubCategory3D; label: string }[] = [
    { key: "all", label: "Tüm 3D Ürünleri" },
    { key: "decor", label: "Dekorasyon & Masaüstü" },
    { key: "fun", label: "Eğlence & Hobi" },
    { key: "wall", label: "Duvar & Askı" },
    { key: "auto", label: "Araç İçi Aksesuar" },
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
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <path 
        d="M14 16C8 16 6 24 14 24C22 24 26 16 34 16C42 16 40 24 34 24C26 24 22 32 14 32C6 32 8 24 14 24" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`}
      />
      <circle cx="24" cy="24" r="2.5" fill="white" />
    </svg>
  </div>
  <div className="flex flex-col">
    <div className="flex items-center text-lg font-black tracking-tight text-white leading-none">
      <span>ETERNA</span>
      <span className={`ml-1 font-mono transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`}>LAB</span>
    </div>
    <span className="text-[9px] font-semibold tracking-[0.25em] text-slate-400 uppercase mt-1">Design & Garage</span>
  </div>
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
                Precision & Garage
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
          <span>Yüksek Mukavemetli Mühendislik Filamentleri & Garaj Aksesuarları</span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {is3D ? (
            <>
              Hassas <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">3D Tasarım</span> & Üretim
            </>
          ) : (
            <>
              Profesyonel <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Garaj & Detailing</span>
            </>
          )}
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {is3D 
            ? "Masaüstü, dekorasyon, duvar düzenleme ve araç içi için özel tasarım 3D baskı çözümleri." 
            : "Polisaj, nozul ve kimyasal düzenleyicilerle atölyenizi ve garajınızı kusursuzlaştırın."}
        </p>

        {/* ANA KATEGORİ SEÇİCİ */}
        <div className="mx-auto mt-8 inline-flex rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 shadow-2xl backdrop-blur-lg">
          <button
            onClick={() => {
              setActiveTab("3d");
              setActiveSubTab("all");
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
            onClick={() => setActiveTab("garage")}
            className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              !is3D
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 shadow-lg shadow-amber-500/25 scale-102"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Wrench className="h-4 w-4" />
            Garage & Detailing
          </button>
        </div>

        {/* 3D İÇİN ALT KATEGORİ FİLTRE ÇUBUĞU */}
        {is3D && (
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2 animate-in fade-in zoom-in-95 duration-300">
            {subCategories.map((sub) => (
              <button
                key={sub.key}
                onClick={() => setActiveSubTab(sub.key)}
                className={`rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  activeSubTab === sub.key
                    ? "border-cyan-500 bg-cyan-500/15 text-cyan-300 shadow-sm"
                    : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ÜRÜN VİTRİNİ */}
      <main className="relative mx-auto max-w-6xl px-6 pb-24">
        <div
          key={`${activeTab}-${activeSubTab}`}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in zoom-in-95 duration-500"
        >
          {filteredProducts.map((product) => {
            const currentVariant = selectedVariants[product.id] || {
              color: product.colors[0],
              material: product.materials[0],
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

                  {/* Renk Seçimi */}
                  <div className="mt-4">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      Renk: <span className="text-slate-200">{currentVariant.color}</span>
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleVariantChange(product.id, "color", color)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentVariant.color === color
                              ? themeClasses.selectedVariant
                              : "border-slate-800 bg-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Malzeme Seçimi */}
                  <div className="mt-3">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      Malzeme: <span className="text-slate-200">{currentVariant.material}</span>
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {product.materials.map((mat) => (
                        <button
                          key={mat}
                          onClick={() => handleVariantChange(product.id, "material", mat)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentVariant.material === mat
                              ? themeClasses.selectedVariant
                              : "border-slate-800 bg-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          {mat}
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
                          <span className="rounded border border-slate-700/80 bg-slate-800 px-1.5 py-0.5">{item.selectedColor}</span>
                          <span className="rounded border border-slate-700/80 bg-slate-800 px-1.5 py-0.5">{item.selectedMaterial}</span>
                        </div>
                        <p className={`mt-1.5 font-mono text-xs font-bold ${is3D ? "text-cyan-400" : "text-amber-400"}`}>
                          {item.product.price} ₺ x {item.quantity} = {item.product.price * item.quantity} ₺
                        </p>
                      </div>

                      {/* Artır / Azalt / Sil */}
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
              <h4 className="text-sm font-bold text-white">Mühendislik & Dayanım</h4>
              <p className="text-xs text-slate-400">Yüksek infill doluluk ve kimyasal dayanımlı üretim.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className={`h-6 w-6 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Korumalı Kargo</h4>
              <p className="text-xs text-slate-400">Darbeye dayanıklı özel paketleme.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className={`h-6 w-6 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Birebir Ölçü Uyumu</h4>
              <p className="text-xs text-slate-400">Araca ve ekipmana tam oturan hassas kalıplar.</p>
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
