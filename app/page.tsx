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
  Tag,
  Star,
  Flame,
  Gift,
  ChevronRight,
  Sparkle
} from "lucide-react";

type MainCategory = "3d" | "garage";
type SubCategory3D = "all" | "decor" | "fun" | "wall" | "auto";
type SubCategoryGarage = "all" | "bundles" | "wheel_tire" | "wash_foam" | "towels" | "interior" | "brushes";

interface ProductOption {
  name: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  giftText?: string;
}

interface Product {
  id: string;
  name: string;
  category: MainCategory;
  subCategory?: SubCategory3D | SubCategoryGarage;
  rating: number;
  reviewCount: number;
  badge?: string;
  dealBadge?: string;
  description: string;
  image: string;
  options1Label: string;
  options1: ProductOption[];
  options2Label: string;
  options2: string[];
}

const PRODUCTS: Product[] = [
  // =========================================================================
  // --- 1. AUTO DETAILING (SMX Tarzı Zengin Ürünler & Kampanyalı Paketler) ---
  // =========================================================================
  {
    id: "d_master_bundle",
    name: "A'dan Z'ye Komple Master Detailing Bakım Paketi (12 Parça)",
    category: "garage",
    subCategory: "bundles",
    rating: 5.0,
    reviewCount: 148,
    badge: "🏆 EN ÇOK SATAN SET",
    dealBadge: "650 ₺ TASARRUF",
    description: "İçerik: pH Nötr Demir Tozu (1L) + Seramik Katkılı Hızlı Cila (750ml) + Carnauba Şampuan (1L) + Lastik Parlatıcı Jel (500ml) + 1200 GSM Twisted Havlu + 5'li Çizmez Fırça + Süngerler.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80",
    options1Label: "Set Seçeneği",
    options1: [
      { name: "Full Set (12 Parça Standart)", price: 1499, originalPrice: 2150, discountBadge: "%30 İndirim", giftText: "🎁 Bagaj Çantası & Sünger Hediye" },
      { name: "Mega Garaj Boy Set (5L Şampuanlı)", price: 2199, originalPrice: 3100, discountBadge: "%40 İndirim", giftText: "🎁 Bagaj Çantası + 2x Bez Hediye" }
    ],
    options2Label: "Koku / Esans Tercihi",
    options2: ["Bubble Gum (Sakız)", "Fresh Berry", "Karpuz Aromalı"],
  },
  {
    id: "d_wheel_bundle",
    name: "Kusursuz Jant & Lastik Koruma Paketi",
    category: "garage",
    subCategory: "bundles",
    rating: 4.9,
    reviewCount: 94,
    badge: "🔥 ÇİFTLİ AVANTAJ",
    dealBadge: "SÜNGER HEDİYELİ",
    description: "pH Nötr moraran demir tozu sökücü ve fırlama yapmayan ultra parlak silikonlu lastik jeli bir arada.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=80",
    options1Label: "Paket Boyutu",
    options1: [
      { name: "Standart Set (500ml + 500ml)", price: 599, originalPrice: 780, discountBadge: "180 ₺ Tasarruf", giftText: "🎁 Kavisli Aplikatör Sünger Dahil" },
      { name: "Mega Boy Set (1000ml + 1000ml)", price: 949, originalPrice: 1350, discountBadge: "400 ₺ Tasarruf", giftText: "🎁 Jant Fırçası + Sünger Dahil" }
    ],
    options2Label: "Sprey Başlığı",
    options2: ["Endüstriyel Tetikli Başlık", "Standart Kapak + Yedek Başlık"],
  },
  {
    id: "d_iron_cleaner",
    name: "pH Nötr Moraran Demir Tozu & Jant Temizleyici",
    category: "garage",
    subCategory: "wheel_tire",
    rating: 4.9,
    reviewCount: 215,
    badge: "5 AL 3 ÖDE FIRSATI",
    dealBadge: "Vernik Dostu",
    description: "Balata tozu, metal partikülleri ve inatçı jant kirlerini temas anında morararak derinlemesine çözer.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80",
    options1Label: "Avantaj Paketleri",
    options1: [
      { name: "500 ml Sprey", price: 349, originalPrice: 399 },
      { name: "1000 ml Şişe", price: 549, originalPrice: 699, discountBadge: "150 ₺ Cepte" },
      { name: "5 Al 3 Öde (5x 500ml)", price: 999, originalPrice: 1745, discountBadge: "2 Adet Bedava!" },
      { name: "5 Litre Garaj / Bidon", price: 1450, originalPrice: 1950, discountBadge: "Ekonomik Boy" }
    ],
    options2Label: "Uygulama Şekli",
    options2: ["Tetikli Ağır Hizmet Başlık", "Köpük Yapan Nozul Başlığı"],
  },
  {
    id: "d_tire_gel",
    name: "Ultra Parlak & Su İtici Simli Lastik Parlatıcı Jel",
    category: "garage",
    subCategory: "wheel_tire",
    rating: 4.8,
    reviewCount: 182,
    badge: "3 AL 2 ÖDE",
    dealBadge: "Fırlama Yapmaz",
    description: "Yağmurda akmayan, çamur tutmayan, haftalarca derin ıslak siyahlık sağlayan özel polimer jel formülü.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop&q=80",
    options1Label: "Adet & Kampanya",
    options1: [
      { name: "500 ml Standart", price: 289, originalPrice: 349 },
      { name: "3 Al 2 Öde (3x 500ml)", price: 578, originalPrice: 867, discountBadge: "289 ₺ Bedava!" },
      { name: "500 ml + Kavisli Hazneli Sünger", price: 349, originalPrice: 450, giftText: "🎁 Sünger Dahil" },
      { name: "5 Litre Profesyonel Bidon", price: 1199, originalPrice: 1600 }
    ],
    options2Label: "Parlaklık Tipi",
    options2: ["Derin Islak Parlaklık (Wet Look)", "Fabrika Çıkışı Doğal Mat Siyah"],
  },
  {
    id: "d_twisted_towel",
    name: "Twisted Pile Ultra Emici Oto Kurulama Havlusu (1200 GSM)",
    category: "garage",
    subCategory: "towels",
    rating: 5.0,
    reviewCount: 320,
    badge: "3 AL 2 ÖDE 🔥",
    dealBadge: "Çizik & Hav Bırakmaz",
    description: "Tek geçişte tüm aracı sıkmadan kurutan, mikrofiber bükümlü iplik teknolojisi.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80",
    options1Label: "Kampanya Paketi",
    options1: [
      { name: "1 Adet (50x70 cm)", price: 359, originalPrice: 450 },
      { name: "3 Al 2 Öde (3 Adet 50x70 cm)", price: 718, originalPrice: 1077, discountBadge: "1 Adet Bedava!" },
      { name: "1 Adet Jumbo Boy (60x90 cm)", price: 469, originalPrice: 590 },
      { name: "Jumbo İkili Set (2x 60x90 cm)", price: 799, originalPrice: 1180, discountBadge: "380 ₺ Tasarruf" }
    ],
    options2Label: "Renk Seçeneği",
    options2: ["Antrasit Gri", "Neon Amber Turuncu", "Safir Mavi"],
  },
  {
    id: "d_ceramic_wax",
    name: "SiO2 Seramik Katkılı Hızlı & Pratik Cila Spreyi (750 ml)",
    category: "garage",
    subCategory: "wash_foam",
    rating: 4.8,
    reviewCount: 160,
    badge: "Aşırı Su İtici",
    dealBadge: "3 Al 2 Öde",
    description: "Islak veya kuru yüzeye sık-sil! Boyayı canlandırır, ayna parlaklığı ve boncuklama etkisi yaratır.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80",
    options1Label: "Paket Seçenekleri",
    options1: [
      { name: "750 ml Tek Şişe", price: 349, originalPrice: 420 },
      { name: "3 Al 2 Öde (3x 750ml)", price: 698, originalPrice: 1047, discountBadge: "1 Şişe Bedava!" },
      { name: "750ml + Lazer Kesim Cila Bezi", price: 429, originalPrice: 550, giftText: "🎁 Bez Hediye" },
      { name: "5 Litre Bidon", price: 1290, originalPrice: 1750 }
    ],
    options2Label: "Kullanım",
    options2: ["Islak & Kuru Uygulama Uyumlu"],
  },
  {
    id: "d_carnauba_shampoo",
    name: "%90 Carnauba Cilalı & Konsantre Neon Oto Şampuanı",
    category: "garage",
    subCategory: "wash_foam",
    rating: 4.9,
    reviewCount: 135,
    badge: "Bol Köpük",
    description: "pH 5.5 nötr formül, seramik korumaya zarar vermez. Yıkama esnasında ekstra kayganlık ve parlaklık sunar.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop&q=80",
    options1Label: "Hacim Seçimi",
    options1: [
      { name: "1000 ml Şişe", price: 299, originalPrice: 380 },
      { name: "2x 1000ml İkili Paket", price: 499, originalPrice: 760, discountBadge: "260 ₺ İndirim" },
      { name: "5 Litre Bidon + 2L Köpük Pompası Seti", price: 1190, originalPrice: 1650, discountBadge: "Pompa Dahil" },
      { name: "20 Litre Oto Yıkama Boyu", price: 2450, originalPrice: 3200 }
    ],
    options2Label: "Uygulama Tipi",
    options2: ["Kova & Sünger Yıkama", "Foam Lance (Köpük Tabancası) Uyumlu"],
  },
  {
    id: "d_brush_kit",
    name: "Ultra Yumuşak Çizilmez Detay Temizlik Fırça Seti (5 Parça)",
    category: "garage",
    subCategory: "brushes",
    rating: 4.7,
    reviewCount: 88,
    badge: "Çizmez Kıl",
    description: "Klima menfezleri, amblemler, jant bijonları ve deri koltuk dikişleri için metal içermeyen gövde.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=80",
    options1Label: "Set Tipi",
    options1: [
      { name: "5'li Standart Boy Set", price: 249, originalPrice: 320 },
      { name: "5'li Fırça + Jant Namlu Fırçası", price: 429, originalPrice: 580, discountBadge: "Kombo Set" }
    ],
    options2Label: "Gövde Malzemesi",
    options2: ["Polimer Çizmez Gövde (Metal İçermez)"],
  },
  {
    id: "d_interior_spray",
    name: "Torpido & Plastik Aksam Yenileyici ve Koruyucu (Mat Bitiş)",
    category: "garage",
    subCategory: "interior",
    rating: 4.8,
    reviewCount: 92,
    badge: "Antistatik",
    dealBadge: "Toz Tutmaz",
    description: "Güneş çatlaklarını ve solmaları engeller, yağlı ve parlamış yapay görüntü yerine orijinal mat görünüm verir.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80",
    options1Label: "Hacim",
    options1: [
      { name: "500 ml Sprey", price: 279, originalPrice: 340 },
      { name: "2x 500ml Çiftli Paket", price: 469, originalPrice: 680, discountBadge: "210 ₺ Tasarruf" },
      { name: "5 Litre Bidon", price: 990, originalPrice: 1350 }
    ],
    options2Label: "Bitiş Hissi",
    options2: ["Orijinal Mat Görünüm", "Hafif Saten Parlaklık"],
  },

  // ==========================================
  // --- 2. 3D TASARIM & LAB BÖLÜMÜ ---
  // ==========================================
  {
    id: "p1",
    name: "Masaüstü Filament & Kablo Düzenleyici",
    category: "3d",
    subCategory: "decor",
    rating: 4.9,
    reviewCount: 42,
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
    rating: 4.8,
    reviewCount: 29,
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
    rating: 5.0,
    reviewCount: 65,
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
    name: "Artikülasyonlu Eklemli Ejderha Figürü",
    category: "3d",
    subCategory: "fun",
    rating: 4.9,
    reviewCount: 51,
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
    rating: 4.7,
    reviewCount: 38,
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
    rating: 4.9,
    reviewCount: 57,
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
  }
];

interface CartItem {
  cartId: string;
  product: Product;
  selectedOpt1: ProductOption;
  selectedOpt2: string;
  quantity: number;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<MainCategory>("garage");
  const [activeSubTab3D, setActiveSubTab3D] = useState<SubCategory3D>("all");
  const [activeSubTabGarage, setActiveSubTabGarage] = useState<SubCategoryGarage>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFullPageTransitioning, setIsFullPageTransitioning] = useState(false);

  // Başlangıç Seçimleri
  const [selectedVariants, setSelectedVariants] = useState<Record<string, { opt1Index: number; opt2: string }>>({
    d_master_bundle: { opt1Index: 0, opt2: "Bubble Gum (Sakız)" },
    d_wheel_bundle: { opt1Index: 0, opt2: "Endüstriyel Tetikli Başlık" },
    d_iron_cleaner: { opt1Index: 2, opt2: "Tetikli Ağır Hizmet Başlık" },
    d_tire_gel: { opt1Index: 1, opt2: "Derin Islak Parlaklık (Wet Look)" },
    d_twisted_towel: { opt1Index: 1, opt2: "Antrasit Gri" },
    d_ceramic_wax: { opt1Index: 1, opt2: "Islak & Kuru Uygulama Uyumlu" },
    d_carnauba_shampoo: { opt1Index: 0, opt2: "Foam Lance (Köpük Tabancası) Uyumlu" },
    d_brush_kit: { opt1Index: 0, opt2: "Polimer Çizmez Gövde (Metal İçermez)" },
    d_interior_spray: { opt1Index: 0, opt2: "Orijinal Mat Görünüm" },
    p1: { opt1Index: 0, opt2: "Mat Siyah - PETG" },
    p2: { opt1Index: 0, opt2: "Mat Siyah" },
    p3: { opt1Index: 0, opt2: "Siyah / Kırmızı" },
    p4: { opt1Index: 0, opt2: "Parlak Kırmızı" },
    p5: { opt1Index: 0, opt2: "Mat Siyah" },
    p6: { opt1Index: 0, opt2: "PETG (Yüksek Sıcaklık)" },
  });

  // TÜM EKRAN SİNEMATİK GEÇİŞ TETİKLEYİCİSİ
  const handleTabChange = (newTab: MainCategory) => {
    if (newTab === activeTab) return;
    setIsFullPageTransitioning(true);
    setTimeout(() => {
      setActiveTab(newTab);
      if (newTab === "3d") setActiveSubTab3D("all");
      else setActiveSubTabGarage("all");
      setTimeout(() => {
        setIsFullPageTransitioning(false);
      }, 100);
    }, 200);
  };

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
      ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-cyan-500/30 shadow-lg" 
      : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/30 shadow-lg",
    price: is3D ? "text-cyan-400" : "text-amber-400",
    cardBorder: is3D 
      ? "hover:border-cyan-500/50 hover:shadow-cyan-500/15" 
      : "hover:border-amber-500/50 hover:shadow-amber-500/15",
    selectedVariant: is3D 
      ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-sm shadow-cyan-500/20" 
      : "border-amber-400 bg-amber-500/20 text-amber-200 shadow-sm shadow-amber-500/20",
    ambientGlow: is3D
      ? "from-cyan-600/25 via-blue-600/10 to-transparent"
      : "from-amber-600/25 via-orange-600/10 to-transparent",
    laserLine: is3D ? "bg-cyan-400 shadow-[0_0_30px_#22d3ee]" : "bg-amber-400 shadow-[0_0_30px_#f59e0b]",
    fullPageFlash: is3D ? "bg-cyan-500/10" : "bg-amber-500/10",
  };

  const subCategories3D: { key: SubCategory3D; label: string }[] = [
    { key: "all", label: "Tüm 3D Ürünleri" },
    { key: "decor", label: "Dekorasyon & Masaüstü" },
    { key: "fun", label: "Eğlence & Hobi" },
    { key: "wall", label: "Duvar & Askı" },
    { key: "auto", label: "Araç İçi Aksesuar" },
  ];

  const subCategoriesGarage: { key: SubCategoryGarage; label: string }[] = [
    { key: "all", label: "Tüm Ürünler" },
    { key: "bundles", label: "🏆 Fırsat Paketleri & Setler" },
    { key: "wheel_tire", label: "Jant & Lastik Bakımı" },
    { key: "wash_foam", label: "Cila & Şampuanlar" },
    { key: "towels", label: "Bez & Havlular (3 Al 2 Öde)" },
    { key: "interior", label: "İç Detay & Torpido" },
    { key: "brushes", label: "Fırça & Ekipmanlar" },
  ];

  // WhatsApp Sipariş Yönlendirmesi
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const phone = "905555555555";
    let message = `*Yeni Sipariş Talebi - EternaLab*\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   ▫️ Paket: ${item.selectedOpt1.name}\n`;
      message += `   ▫️ Seçim: ${item.selectedOpt2}\n`;
      message += `   ▫️ Adet: ${item.quantity} x ${item.selectedOpt1.price} ₺ = ${item.quantity * item.selectedOpt1.price} ₺\n\n`;
    });
    message += `*Toplam Tutar:* ${totalAmount} ₺\n\nSiparişimi onaylamak ve kargo/adres bilgilerimi iletmek istiyorum.`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#0a0d14] text-slate-100 antialiased selection:bg-slate-700 selection:text-white overflow-x-hidden">
      
      {/* 1. TÜM EKRAN PARLAMA DALGASI (FULL-SCREEN ATMOSPHERE FLASH) */}
      <div 
        className={`pointer-events-none fixed inset-0 z-40 transition-opacity duration-500 ease-out backdrop-blur-[2px] ${themeClasses.fullPageFlash} ${
          isFullPageTransitioning ? "opacity-100" : "opacity-0"
        }`} 
      />

      {/* 2. TEPE LAZER TARAMA IŞIĞI */}
      <div 
        className={`pointer-events-none fixed top-0 left-0 right-0 h-1.5 z-50 transition-all duration-700 ease-out ${themeClasses.laserLine} ${
          isFullPageTransitioning ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`} 
      />

      {/* ÜST DUYURU BARI */}
      <div className={`transition-colors duration-700 px-4 py-2 text-center text-xs font-black tracking-wide text-slate-950 uppercase shadow-md flex items-center justify-center gap-2 ${
        is3D 
          ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400" 
          : "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"
      }`}>
        <Sparkles className="h-3.5 w-3.5" />
        <span>
          {is3D 
            ? "Mühendislik Standartlarında 3D Baskı • Kişiye Özel Tasarım & Hızlı Üretim" 
            : "1.500 ₺ Üzeri Ücretsiz Kargo • Bezlerde 3 Al 2 Öde & 5 Al 3 Öde Fırsatı!"}
        </span>
      </div>

      {/* DINAMIK ARKA PLAN AMBİYANS IŞIĞI */}
      <div 
        className={`pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${themeClasses.ambientGlow} transition-all duration-1000 ease-in-out`} 
      />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0a0d14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-2 shadow-inner transition duration-500 group-hover:scale-105">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path
                  d="M8 8H32V13H14V18H28V23H14V28H32V33H8V8Z"
                  fill="currentColor"
                  className={`transition-colors duration-700 ${is3D ? "text-cyan-400" : "text-amber-400"}`}
                />
                <rect x="22" y="18" width="6" height="5" fill="#0a0d14" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center text-lg font-black tracking-tight text-white leading-none">
                <span>ETERNA</span>
                <span className={`ml-1 font-mono transition-colors duration-700 ${is3D ? "text-cyan-400" : "text-amber-400"}`}>
                  LAB
                </span>
              </div>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-slate-400 uppercase mt-1">
                {is3D ? "Precision 3D Engineering" : "Pro Detailing & Garage"}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-slate-800"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Sepetim</span>
            {totalItemCount > 0 && (
              <span className={`ml-1 rounded-full px-2 py-0.5 text-xs font-bold text-slate-950 transition-all duration-500 ${is3D ? "bg-cyan-400" : "bg-amber-400"}`}>
                {totalItemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* TÜM SAYFA GEÇİŞİNDE YAYLANAN ANA GÖVDE (TRANSITION WRAPPER) */}
      <div className={`transition-all duration-500 ease-out ${
        isFullPageTransitioning ? "opacity-40 scale-[0.99] filter blur-[1px]" : "opacity-100 scale-100 filter blur-0"
      }`}>
        
        {/* HERO & KAMPANYA ALANI */}
        <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-6 text-center">
          
          {/* Rozet */}
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold backdrop-blur transition-all duration-700 ${
            is3D 
              ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300" 
              : "border-amber-500/30 bg-amber-500/10 text-amber-300"
          }`}>
            {is3D ? (
              <>
                <Sparkle className="h-4 w-4 text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />
                <span>3D TASARIM & LAB: MİKRON HASSASİYETİNDE MÜHENDİSLİK ÜRETİMİ</span>
              </>
            ) : (
              <>
                <Flame className="h-4 w-4 text-orange-400 fill-orange-400 animate-bounce" />
                <span>GARAGE DETAILING: SÜPER AVANTAJLI SETLER VE 3 AL 2 ÖDE FIRSATLARI</span>
              </>
            )}
          </div>

          {/* Başlık */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl min-h-[70px] flex items-center justify-center transition-all duration-500">
            {is3D ? (
              <span>
                Hassas <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">3D Tasarım</span> & Üretim
              </span>
            ) : (
              <span>
                Profesyonel <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Auto Detailing</span> Çözümleri
              </span>
            )}
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base min-h-[48px]">
            {is3D 
              ? "Masaüstü, dekorasyon, duvar düzenleme ve araç içi için yüksek mukavemetli PETG/PLA üretimler." 
              : "pH nötr demir tozu sökücüler, fırlama yapmayan lastik jelleri, 1200 GSM twisted bezler ve avantajlı setler."}
          </p>

          {/* 100% HİZALANMIŞ, TAŞMA YAPMAYAN GRID TAB SEÇİCİ */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="grid grid-cols-2 rounded-2xl border border-slate-800 bg-[#0e131f] p-1.5 shadow-2xl backdrop-blur-xl">
              
              <button
                onClick={() => handleTabChange("garage")}
                className={`flex items-center justify-center gap-2.5 rounded-xl py-3 text-sm font-black transition-all duration-500 ${
                  !is3D 
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-[1.02]" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Droplets className={`h-4 w-4 transition-transform duration-500 ${!is3D ? "scale-110 rotate-12" : ""}`} />
                <span>Auto Detailing</span>
              </button>

              <button
                onClick={() => handleTabChange("3d")}
                className={`flex items-center justify-center gap-2.5 rounded-xl py-3 text-sm font-black transition-all duration-500 ${
                  is3D 
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/25 scale-[1.02]" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layers className={`h-4 w-4 transition-transform duration-500 ${is3D ? "scale-110 rotate-12" : ""}`} />
                <span>3D Tasarım & Lab</span>
              </button>

            </div>
          </div>

          {/* ALT KATEGORİ ÇUBUĞU */}
          <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-2">
            {is3D
              ? subCategories3D.map((sub) => (
                  <button
                    key={sub.key}
                    onClick={() => setActiveSubTab3D(sub.key)}
                    className={`rounded-xl border px-4 py-1.5 text-xs font-bold transition-all duration-300 active:scale-95 ${
                      activeSubTab3D === sub.key
                        ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-md shadow-cyan-500/10 scale-105"
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
                    className={`rounded-xl border px-4 py-1.5 text-xs font-bold transition-all duration-300 active:scale-95 ${
                      activeSubTabGarage === sub.key
                        ? "border-amber-400 bg-amber-500/20 text-amber-200 shadow-md shadow-amber-500/10 scale-105"
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
            className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProducts.map((product, index) => {
              const variantState = selectedVariants[product.id] || { opt1Index: 0, opt2: product.options2[0] };
              const currentOpt1 = product.options1[variantState.opt1Index] || product.options1[0];
              const currentOpt2 = variantState.opt2 || product.options2[0];

              return (
                <div
                  key={product.id}
                  style={{
                    animationDelay: `${index * 60}ms`,
                    animationFillMode: "both"
                  }}
                  className={`group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#111622]/90 p-5 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 zoom-in-95 duration-500 ease-out ${themeClasses.cardBorder}`}
                >
                  <div>
                    {/* Görsel, Rozetler & Puan */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.badge && (
                          <span className={`rounded-md border px-2 py-0.5 text-[11px] font-black tracking-wide backdrop-blur-md ${themeClasses.badge}`}>
                            {product.badge}
                          </span>
                        )}
                        {product.dealBadge && (
                          <span className="rounded-md border border-red-500/40 bg-red-500/25 px-2 py-0.5 text-[11px] font-black text-red-400 backdrop-blur-md animate-pulse">
                            {product.dealBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Değerlendirme & Başlık */}
                    <div className="mt-3.5">
                      <div className="flex items-center gap-1.5 text-xs text-amber-400">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="font-bold text-slate-200">{product.rating}</span>
                        <span className="text-[11px] text-slate-500">({product.reviewCount} değerlendirme)</span>
                      </div>

                      <h3 className="mt-1.5 font-bold text-base text-white group-hover:text-slate-100 transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                        {product.description}
                      </p>
                    </div>

                    {/* Fiyat Göstergesi */}
                    <div className="mt-4 flex items-baseline gap-2 border-y border-slate-800/80 py-2.5">
                      <span className={`font-mono text-2xl font-black transition-colors duration-500 ${themeClasses.price}`}>
                        {currentOpt1.price} ₺
                      </span>
                      {currentOpt1.originalPrice && (
                        <span className="font-mono text-sm text-slate-500 line-through">
                          {currentOpt1.originalPrice} ₺
                        </span>
                      )}
                      {currentOpt1.discountBadge && (
                        <span className="ml-auto rounded-md bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400">
                          {currentOpt1.discountBadge}
                        </span>
                      )}
                    </div>

                    {/* 1. Seçenek (Paket & Kampanya Boyutları) */}
                    <div className="mt-4">
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        {product.options1Label}: <span className="text-slate-200 font-semibold">{currentOpt1.name}</span>
                      </span>
                      <div className="mt-2 flex flex-col gap-1.5">
                        {product.options1.map((opt, idx) => (
                          <button
                            key={opt.name}
                            onClick={() => handleVariantChange(product.id, "opt1Index", idx)}
                            className={`flex items-center justify-between rounded-xl border p-2.5 text-xs transition-all duration-300 ${
                              variantState.opt1Index === idx
                                ? themeClasses.selectedVariant
                                : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                            }`}
                          >
                            <div className="text-left">
                              <span className="font-semibold text-slate-200">{opt.name}</span>
                              {opt.giftText && (
                                <span className="block text-[10px] text-amber-400 font-medium">{opt.giftText}</span>
                              )}
                            </div>
                            <div className="text-right font-mono">
                              <span className="font-bold text-white text-sm">{opt.price} ₺</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 2. Seçenek */}
                    <div className="mt-3.5">
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        {product.options2Label}: <span className="text-slate-200">{currentOpt2}</span>
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {product.options2.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleVariantChange(product.id, "opt2", opt)}
                            className={`rounded-lg border px-2.5 py-1 text-xs transition-all duration-300 ${
                              currentOpt2 === opt
                                ? themeClasses.selectedVariant
                                : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sepete Ekle Butonu */}
                  <button
                    onClick={() => addToCart(product)}
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-black transition-all duration-300 active:scale-95 ${themeClasses.button}`}
                  >
                    <Plus className="h-4 w-4" />
                    Sepete Ekle ({currentOpt1.price} ₺)
                  </button>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      {/* SEPET PANELİ (SMX DÜZENİNDE ÖZET & WHATSAPP SİPARİŞİ) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l border-slate-800 bg-[#0a0d14] p-6 shadow-2xl animate-in slide-in-from-right duration-500 ease-out">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className={`h-5 w-5 transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
                  <h3 className="text-lg font-bold text-white">Sepetim ({totalItemCount} Ürün)</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Ücretsiz Kargo İlerleme Çubuğu */}
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Ücretsiz Kargo Hedefi:</span>
                  <span className="font-bold text-amber-400">1.500 ₺</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-700 ease-out" 
                    style={{ width: `${Math.min(100, (totalAmount / 1500) * 100)}%` }}
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-400">
                  {totalAmount >= 1500 ? (
                    <span className="font-bold text-emerald-400">🎉 Tebrikler, kargonuz ÜCRETSİZ!</span>
                  ) : (
                    <span>Ücretsiz kargo için sepetinize <strong>{1500 - totalAmount} ₺</strong> daha ekleyin.</span>
                  )}
                </p>
              </div>

              {/* Sepet İçi Ürünler */}
              <div className="mt-4 max-h-[50vh] space-y-3 overflow-y-auto pr-1">
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
                  <span className={`text-2xl transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`}>{totalAmount} ₺</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-black transition-all duration-300 active:scale-95 ${themeClasses.button}`}
                >
                  <span>Siparişi WhatsApp ile Tamamla</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <p className="mt-2 text-center text-[11px] text-slate-500">
                  Sipariş listeniz otomatik formatlanıp WhatsApp üzerinden iletilecektir.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-[#080b11] py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Gift className={`h-6 w-6 transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">3 Al 2 Öde & Hediyeli Paketler</h4>
              <p className="text-xs text-slate-400">Bezlerde ve setlerde süper tasarruf fırsatları.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className={`h-6 w-6 transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Hızlı & Güvenli Gönderim</h4>
              <p className="text-xs text-slate-400">1.500 ₺ ve üzeri tüm alışverişlerde ücretsiz kargo.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className={`h-6 w-6 transition-colors duration-500 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Boya & Vernik Güvenliği</h4>
              <p className="text-xs text-slate-400">pH dengeli, seramik kaplamayı bozmayan formüller.</p>
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
