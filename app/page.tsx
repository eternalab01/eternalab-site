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
  CheckCircle2,
  Tag,
  Percent
} from "lucide-react";

type MainCategory = "3d" | "garage";
type SubCategory3D = "all" | "decor" | "fun" | "wall" | "auto";
type SubCategoryGarage = "all" | "deals" | "wheel_tire" | "wash_chem" | "towels" | "brushes";

interface ProductOption {
  label: string;
  priceModifier?: number; // Fiyatı doğrudan belirlemek veya çarpmak için
  discountText?: string;  // Örn: "1 Adet Bedava", "%25 İndirimli"
}

interface Product {
  id: string;
  name: string;
  category: MainCategory;
  subCategory?: SubCategory3D | SubCategoryGarage;
  basePrice: number;
  badge?: string;
  dealBadge?: string;
  description: string;
  image: string;
  options1Label: string;
  options1: { name: string; price: number; discountBadge?: string }[];
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
    basePrice: 220,
    badge: "Masaüstü",
    description: "Atölye ve masa düzeni için modüler, geçmeli kilitleme sistemli kablo kılavuzu.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    options1Label: "Adet / Paket",
    options1: [
      { name: "Tekli Standart", price: 220 },
      { name: "3'lü Set", price: 540, discountBadge: "120 ₺ Tasarruf" }
    ],
    options2Label: "Renk & Malzeme",
    options2: ["Mat Siyah - PETG", "Titanyum Gri - PETG", "Mermer Beyaz - PLA"],
  },
  {
    id: "p2",
    name: "Geometrik Çokgen Sukulent Saksısı",
    category: "3d",
    subCategory: "decor",
    basePrice: 160,
    description: "İç mekan için modern geometrik tasarımlı dekoratif saksı ve kalemlik.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80",
    options1Label: "Paket",
    options1: [
      { name: "1 Adet", price: 160 },
      { name: "3'lü Trio Set", price: 390, discountBadge: "90 ₺ Tasarruf" }
    ],
    options2Label: "Renk",
    options2: ["Mat Siyah", "Mermer Beyaz", "Antrasit Gri"],
  },
  {
    id: "p3",
    name: "Özel Tasarım Logo & Gamer Anahtarlık",
    category: "3d",
    subCategory: "fun",
    basePrice: 180,
    badge: "Popüler",
    description: "Kişiselleştirilebilir çift renkli, darbelere dayanıklı özel üretim anahtarlık.",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=600&auto=format&fit=crop&q=80",
    options1Label: "Adet",
    options1: [
      { name: "1 Adet", price: 180 },
      { name: "2 Al 2.si %50 İndirimli", price: 270, discountBadge: "%25 İndirim" }
    ],
    options2Label: "Renk Kombinasyonu",
    options2: ["Siyah / Kırmızı", "Siyah / Neon Cyan", "Siyah / Beyaz"],
  },
  {
    id: "p4",
    name: "Artikülasyonlu Eklemli Figür",
    category: "3d",
    subCategory: "fun",
    basePrice: 260,
    badge: "Hobi",
    description: "Tam hareketli eklem yapısına sahip, esnek ve pürüzsüz yüzeyli masaüstü figürü.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
    options1Label: "Boyut",
    options1: [
      { name: "Standart (18 cm)", price: 260 },
      { name: "Büyük Boy (26 cm)", price: 380 }
    ],
    options2Label: "Renk",
    options2: ["Parlak Kırmızı", "Mat Siyah", "İpek Altın"],
  },
  {
    id: "p5",
    name: "Kulaklık & Gamepad Duvar / Masa Askısı",
    category: "3d",
    subCategory: "wall",
    basePrice: 210,
    description: "Güçlendirilmiş tırnak yapısıyla kulaklık ve oyun kollarını güvenle asan aparat.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&auto=format&fit=crop&q=80",
    options1Label: "Paket",
    options1: [
      { name: "1 Adet", price: 210 },
      { name: "2'li Çiftli Set", price: 360, discountBadge: "60 ₺ Tasarruf" }
    ],
    options2Label: "Renk",
    options2: ["Mat Siyah", "Beyaz", "Gri"],
  },
  {
    id: "p6",
    name: "Araç İçi Bardaklık & Telefon Tutucu",
    category: "3d",
    subCategory: "auto",
    basePrice: 340,
    badge: "Özel Uyum",
    description: "Araç içi trimlere tam oturan, yüksek kabin sıcaklığına dayanıklı PETG modül.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80",
    options1Label: "Model",
    options1: [
      { name: "Standart Uyum", price: 340 },
      { name: "Genişletilmiş XL Yuva", price: 380 }
    ],
    options2Label: "Malzeme Türü",
    options2: ["PETG (Yüksek Sıcaklık)", "Karbon Katkılı PETG"],
  },

  // ==========================================
  // --- 2. AUTO DETAILING (KAMPANYALAR & PAKETLER) ---
  // ==========================================
  {
    id: "d0_bundle",
    name: "Komple Master Detailing Bakım Seti",
    category: "garage",
    subCategory: "deals",
    badge: "Süper Avantaj",
    dealBadge: "390 ₺ Cepte",
    basePrice: 1190,
    description: "İçerik: 500ml Demir Tozu + 500ml Lastik Parlatıcı + 1200 GSM Twisted Kurulama Bezi + 5'li Çizmez Fırça Seti.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80",
    options1Label: "Paket Seçimi",
    options1: [
      { name: "Full Set (4 Parça)", price: 1190, discountBadge: "%25 İndirimli" },
      { name: "Mega Set (1000ml Boyutlar + Çift Bez)", price: 1750, discountBadge: "En Kapsamlı" }
    ],
    options2Label: "Hediye Seçimi",
    options2: ["Uygulama Süngeri + Valet Fırça Hediyeli", "2x Mikrofiber Bez Hediyeli"],
  },
  {
    id: "d3",
    name: "Twisted Pile Ultra Emici Araç Kurulama Bezi (1200 GSM)",
    category: "garage",
    subCategory: "towels",
    badge: "3 AL 2 ÖDE",
    dealBadge: "1 Adet Bedava",
    basePrice: 360,
    description: "Tek geçişte tüm aracı çizmeden kurutan, hav ve su damlası bırakmayan premium bükümlü mikrofiber havlu.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80",
    options1Label: "Kampanya / Paket",
    options1: [
      { name: "1 Adet (50x70 cm)", price: 360 },
      { name: "2'li Ekonomik Paket", price: 620, discountBadge: "100 ₺ Tasarruf" },
      { name: "3 Al 2 Öde (3 Adet)", price: 720, discountBadge: "360 ₺ Bedava!" },
      { name: "1 Adet Dev Boy (60x90 cm)", price: 460 }
    ],
    options2Label: "Renk Tercihi",
    options2: ["Antrasit Gri", "Neon Turuncu", "Koyu Mavi"],
  },
  {
    id: "d1",
    name: "pH Nötr Jant & Kaporta Demir Tozu Temizleyici",
    category: "garage",
    subCategory: "wheel_tire",
    badge: "Çok Satan",
    basePrice: 380,
    description: "Boya ve verniğe zarar vermeden balata tozu ve metalik kirleri morararak çözen güçlü formül.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=80",
    options1Label: "Boyut / Avantaj Paketi",
    options1: [
      { name: "500 ml Sprey", price: 380 },
      { name: "1000 ml Şişe", price: 590, discountBadge: "%20 Avantaj" },
      { name: "2x 500ml İkili Paket", price: 640, discountBadge: "120 ₺ Tasarruf" },
      { name: "5 Litre Garaj Boyu", price: 1650, discountBadge: "En Ekonomik" }
    ],
    options2Label: "Başlık & Aksesuar",
    options2: ["Tetikli Ağır Hizmet Sprey Başlığı", "Standart Kapak + Yedek Dolum"],
  },
  {
    id: "d2",
    name: "Ultra Parlak & Su İtici Lastik Parlatıcı Jel",
    category: "garage",
    subCategory: "wheel_tire",
    badge: "Uzun Ömürlü",
    basePrice: 290,
    description: "Kahverengileşmeyi önleyen, fırlama yapmayan derin ıslak parlaklık sunan jel formül.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80",
    options1Label: "Paket & Kampanya",
    options1: [
      { name: "500 ml Standart", price: 290 },
      { name: "500 ml + Kavisli Sünger Set", price: 340, discountBadge: "Sünger Dahil" },
      { name: "2x 500ml Çiftli Paket", price: 490, discountBadge: "90 ₺ Tasarruf" },
      { name: "1000 ml Boyut", price: 480 }
    ],
    options2Label: "Uygulama",
    options2: ["Kavisli Lastik Süngeri Hediyeli", "Standart Şişe"],
  },
  {
    id: "d6",
    name: "Lazer Kesim Mikrofiber Cila & Silme Bezi",
    category: "garage",
    subCategory: "towels",
    badge: "3 AL 2 ÖDE",
    dealBadge: "3'lü & 6'lı Paket",
    basePrice: 190,
    description: "Dikişsiz kenarlarıyla kılcal çizik oluşturmayan wax, hızlı cila ve iç mekan silme bezi (450 GSM).",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80",
    options1Label: "Kampanya Paketi",
    options1: [
      { name: "Tekli Paket", price: 190 },
      { name: "3 Al 2 Öde (3'lü Paket)", price: 380, discountBadge: "1 Adet Bedava" },
      { name: "6'lı Detailing Atölye Paketi", price: 690, discountBadge: "%40 İndirim" }
    ],
    options2Label: "Renk Grubu",
    options2: ["Karma Renkler", "Tamamı Koyu Gri", "Sarı / Mavi"],
  },
  {
    id: "d4",
    name: "Çizilmez Profesyonel Detailing Fırça Seti",
    category: "garage",
    subCategory: "brushes",
    badge: "Set",
    basePrice: 240,
    description: "Jant bijon araları, klima ızgaraları, amblemler ve trimler için ultra yumuşak kıl yapısı.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop&q=80",
    options1Label: "Set Tipi",
    options1: [
      { name: "5'li Standart Boy Set", price: 240 },
      { name: "5'li Fırça + Jant Namlu Fırçası", price: 420, discountBadge: "Kombo Set" }
    ],
    options2Label: "Sap Türü",
    options2: ["Plastik Gövde (Metal İçermez - Çizmez)"],
  },
  {
    id: "d5",
    name: "Yüksek Köpüklü Cilalı Şampuan (Carnauba)",
    category: "garage",
    subCategory: "wash_chem",
    badge: "Ph Dengeli",
    basePrice: 310,
    description: "Mevcut seramik ve boya korumaya zarar vermeden üstün kayganlık ve parlaklık sağlar.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80",
    options1Label: "Hacim / Boyut",
    options1: [
      { name: "1000 ml", price: 310 },
      { name: "2x 1000ml Çiftli Paket", price: 540, discountBadge: "80 ₺ Tasarruf" },
      { name: "5 Litre Bidon", price: 980, discountBadge: "Garaj Boyu" }
    ],
    options2Label: "Kullanım Şekli",
    options2: ["Foam Lance (Köpük Tabancası) & Kova Uyumlu"],
  }
];

interface CartItem {
  cartId: string;
  product: Product;
  selectedOpt1: { name: string; price: number };
  selectedOpt2: string;
  quantity: number;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<MainCategory>("garage");
  const [activeSubTab3D, setActiveSubTab3D] = useState<SubCategory3D>("all");
  const [activeSubTabGarage, setActiveSubTabGarage] = useState<SubCategoryGarage>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Başlangıç Seçimleri
  const [selectedVariants, setSelectedVariants] = useState<Record<string, { opt1Index: number; opt2: string }>>({
    p1: { opt1Index: 0, opt2: "Mat Siyah - PETG" },
    p2: { opt1Index: 0, opt2: "Mat Siyah" },
    p3: { opt1Index: 0, opt2: "Siyah / Kırmızı" },
    p4: { opt1Index: 0, opt2: "Parlak Kırmızı" },
    p5: { opt1Index: 0, opt2: "Mat Siyah" },
    p6: { opt1Index: 0, opt2: "PETG (Yüksek Sıcaklık)" },
    d0_bundle: { opt1Index: 0, opt2: "Uygulama Süngeri + Valet Fırça Hediyeli" },
    d1: { opt1Index: 0, opt2: "Tetikli Ağır Hizmet Sprey Başlığı" },
    d2: { opt1Index: 1, opt2: "Kavisli Lastik Süngeri Hediyeli" },
    d3: { opt1Index: 2, opt2: "Antrasit Gri" }, // Varsayılan 3 Al 2 Öde
    d4: { opt1Index: 0, opt2: "Plastik Gövde (Metal İçermez - Çizmez)" },
    d5: { opt1Index: 0, opt2: "Foam Lance (Köpük Tabancası) & Kova Uyumlu" },
    d6: { opt1Index: 1, opt2: "Karma Renkler" }, // Varsayılan 3 Al 2 Öde
  });

  const handleVariantChange = (productId: string, type: "opt1Index" | "opt2", value: any) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [type]: value,
      },
    }));
  };

  const addToCart = (product: Product) => {
    const variantState = selectedVariants[product.id] || { opt1Index: 0, opt2: product.options2[0] };
    const opt1Choice = product.options1[variantState.opt1Index] || product.options1[0];
    const opt2Choice = variantState.opt2 || product.options2[0];

    const cartId = `${product.id}-${opt1Choice.name}-${opt2Choice}`;

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
          selectedOpt1: opt1Choice,
          selectedOpt2: opt2Choice,
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

  const totalAmount = cart.reduce((acc, item) => acc + item.selectedOpt1.price * item.quantity, 0);
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
    { key: "deals", label: "🔥 Fırsat Paketleri & Setler" },
    { key: "towels", label: "Kurulama & Bez (3 Al 2 Öde)" },
    { key: "wheel_tire", label: "Jant & Lastik Bakımı" },
    { key: "wash_chem", label: "Dış Yıkama & Şampuan" },
    { key: "brushes", label: "Fırça & Sünger Setleri" },
  ];

  // WhatsApp Sipariş Yönlendirmesi
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const phone = "905555555555"; // Kendi numaranı buraya yazabilirsin
    let message = `*Yeni Sipariş Talebi - EternaLab*\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   ▫️ Paket/Seçenek: ${item.selectedOpt1.name}\n`;
      message += `   ▫️ Detay: ${item.selectedOpt2}\n`;
      message += `   ▫️ Adet: ${item.quantity} x ${item.selectedOpt1.price} ₺ = ${item.quantity * item.selectedOpt1.price} ₺\n\n`;
    });
    message += `*Toplam Tutar:* ${totalAmount} ₺\n\nSiparişimi onaylamak ve kargo bilgilerimi iletmek istiyorum.`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

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
                3D Lab & Detailing Deals
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

      {/* HERO & KAMPANYA BANNERI */}
      <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400 backdrop-blur animate-pulse">
          <Tag className="h-3.5 w-3.5" />
          <span>🔥 AUTO DETAILING'DE 3 AL 2 ÖDE & SET İNDİRİMLERİ BAŞLADI!</span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {is3D ? (
            <>
              Hassas <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">3D Tasarım</span> & Üretim
            </>
          ) : (
            <>
              Profesyonel <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Auto Detailing</span> & Setler
            </>
          )}
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {is3D 
            ? "Masaüstü, dekorasyon, duvar düzenleme ve araç içi için özel üretim 3D çözümler." 
            : "Bezlerde 3 Al 2 Öde fırsatı, demir tozu sökücüler, lastik jelleri ve avantajlı başlangıç kombo setleri."}
        </p>

        {/* ANA KATEGORİ SEÇİCİ */}
        <div className="mx-auto mt-8 inline-flex rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 shadow-2xl backdrop-blur-lg">
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
            Auto Detailing & Kampanyalar
          </button>

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
        </div>

        {/* ALT KATEGORİ FİLTRE ÇUBUĞU */}
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2 animate-in fade-in zoom-in-95 duration-300">
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
                      ? "border-amber-500 bg-amber-500/20 text-amber-300 shadow-sm"
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
            const variantState = selectedVariants[product.id] || { opt1Index: 0, opt2: product.options2[0] };
            const currentOpt1 = product.options1[variantState.opt1Index] || product.options1[0];
            const currentOpt2 = variantState.opt2 || product.options2[0];

            return (
              <div
                key={product.id}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${themeClasses.cardBorder}`}
              >
                <div>
                  {/* Görsel ve Kampanya Rozetleri */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.badge && (
                        <span className={`rounded-md border px-2 py-0.5 text-[11px] font-bold tracking-wide backdrop-blur-md ${themeClasses.badge}`}>
                          {product.badge}
                        </span>
                      )}
                      {product.dealBadge && (
                        <span className="rounded-md border border-red-500/40 bg-red-500/20 px-2 py-0.5 text-[11px] font-extrabold text-red-400 backdrop-blur-md">
                          {product.dealBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Başlık & Fiyat */}
                  <div className="mt-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base text-white group-hover:text-slate-100">{product.name}</h3>
                      <div className="text-right">
                        <span className={`font-mono text-xl font-black ${themeClasses.price}`}>{currentOpt1.price} ₺</span>
                        {currentOpt1.discountBadge && (
                          <span className="block text-[10px] font-bold text-emerald-400">{currentOpt1.discountBadge}</span>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {product.description}
                    </p>
                  </div>

                  {/* 1. Seçenek (Paket & Kampanya Boyutları) */}
                  <div className="mt-4">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {product.options1Label}: <span className="text-slate-200">{currentOpt1.name}</span>
                    </span>
                    <div className="mt-2 flex flex-col gap-1.5">
                      {product.options1.map((opt, idx) => (
                        <button
                          key={opt.name}
                          onClick={() => handleVariantChange(product.id, "opt1Index", idx)}
                          className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs transition ${
                            variantState.opt1Index === idx
                              ? themeClasses.selectedVariant
                              : "border-slate-800 bg-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          <span className="font-medium">{opt.name}</span>
                          <div className="flex items-center gap-2">
                            {opt.discountBadge && (
                              <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[10px] font-bold text-emerald-300">
                                {opt.discountBadge}
                              </span>
                            )}
                            <span className="font-mono font-bold text-white">{opt.price} ₺</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Seçenek (Renk / Detay Tercihi) */}
                  <div className="mt-3">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {product.options2Label}: <span className="text-slate-200">{currentOpt2}</span>
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {product.options2.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleVariantChange(product.id, "opt2", opt)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentOpt2 === opt
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
                  Sepete Ekle ({currentOpt1.price} ₺)
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* SEPET PANELİ (WHATSAPP SİPARİŞ ENTEGRASYONLU) */}
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
                        <div className="mt-1 flex flex-col gap-0.5 text-[11px] text-slate-400">
                          <span className="text-amber-400 font-medium">{item.selectedOpt1.name}</span>
                          <span className="text-slate-400">{item.selectedOpt2}</span>
                        </div>
                        <p className={`mt-1.5 font-mono text-xs font-bold ${is3D ? "text-cyan-400" : "text-amber-400"}`}>
                          {item.selectedOpt1.price} ₺ x {item.quantity} = {item.selectedOpt1.price * item.quantity} ₺
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

            {/* Sepet Alt Toplam & Sipariş Butonu */}
            {cart.length > 0 && (
              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between font-mono text-base font-bold text-white">
                  <span>Toplam Tutar:</span>
                  <span className={`text-xl ${is3D ? "text-cyan-400" : "text-amber-400"}`}>{totalAmount} ₺</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-lg transition-all duration-300 active:scale-98 ${themeClasses.button}`}
                >
                  <span>Siparişi WhatsApp İle Tamamla</span>
                </button>
                <p className="mt-2 text-center text-[11px] text-slate-500">
                  Sipariş detaylarınız otomatik olarak hazırlanıp WhatsApp hattımıza iletilir.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950/70 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Percent className={`h-6 w-6 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Çok Al Az Öde Fırsatı</h4>
              <p className="text-xs text-slate-400">Bezlerde 3 Al 2 Öde ve set alımlarında %25 indirim.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className={`h-6 w-6 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Güvenli Kargo & Paketleme</h4>
              <p className="text-xs text-slate-400">Sızdırmaz kilitli kapak ve korumalı ambalaj.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className={`h-6 w-6 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Boya Dostu pH Dengesi</h4>
              <p className="text-xs text-slate-400">Aracınızın seramik ve boyasına zarar vermeyen formüller.</p>
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
