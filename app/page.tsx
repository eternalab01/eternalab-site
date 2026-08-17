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
  Star, 
  Flame, 
  Gift, 
  ChevronRight, 
  Zap, 
  Volume2, 
  VolumeX, 
  Sliders, 
  CheckCircle, 
  HelpCircle 
} from "lucide-react";

type MainCategory = "3d" | "garage";
type SubCategory3D = "all" | "decor" | "fun" | "wall" | "auto";
type SubCategoryGarage = "all" | "bundles" | "wheel_tire" | "wash_foam" | "towels";

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
  isCustomizable?: boolean;
  options1Label: string;
  options1: ProductOption[];
  options2Label: string;
  options2: string[];
}

const PRODUCTS: Product[] = [
  // =========================================================================
  // --- 1. AUTO DETAILING ---
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
    description: "İçerik: pH Nötr Demir Tozu (1L) + Seramik Katkılı Hızlı Cila (750ml) + Carnauba Şampuan (1L) + Lastik Jel (500ml) + 1200 GSM Havlu + 5'li Çizmez Fırça + Süngerler.",
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
      { name: "5 Litre Bidon + 2L Köpük Pompası Seti", price: 1190, originalPrice: 1650, discountBadge: "Pompa Dahil" }
    ],
    options2Label: "Uygulama Tipi",
    options2: ["Kova & Sünger Yıkama", "Foam Lance (Köpük Tabancası) Uyumlu"],
  },

  // ==========================================
  // --- 2. 3D TASARIM & LAB BÖLÜMÜ ---
  // ==========================================
  {
    id: "p3_custom",
    name: "Kişiye Özel Plaka & İsimli Metalik Anahtarlık",
    category: "3d",
    subCategory: "fun",
    rating: 5.0,
    reviewCount: 92,
    badge: "🔥 KİŞİYE ÖZEL",
    isCustomizable: true,
    description: "Kendi plakanızı veya isminizi yazabileceğiniz çift katmanlı darbelere dayanıklı PETG anahtarlık.",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=600&auto=format&fit=crop&q=80",
    options1Label: "Adet",
    options1: [
      { name: "1 Adet Kişiye Özel", price: 190 },
      { name: "2'li Çift Paketi (2 İsim/Plaka)", price: 299, discountBadge: "%25 İndirim" }
    ],
    options2Label: "Gövde / Yazı Rengi",
    options2: ["Siyah Gövde / Neon Cyan", "Siyah Gövde / Garaj Turuncusu", "Karbon Siyah / Beyaz"],
  },
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
  customText?: string;
  quantity: number;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<MainCategory>("garage");
  const [activeSubTab3D, setActiveSubTab3D] = useState<SubCategory3D>("all");
  const [activeSubTabGarage, setActiveSubTabGarage] = useState<SubCategoryGarage>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGarageDoorActive, setIsGarageDoorActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const [sliderPosition, setSliderPosition] = useState(50);
  const [customPlateText, setCustomPlateText] = useState("01 ETL 34");

  const [bundleShampoo, setBundleShampoo] = useState<string>("carnauba");
  const [bundleWheel, setBundleWheel] = useState<string>("iron");
  const [bundleTowel, setBundleTowel] = useState<string>("twisted");

  const [selectedVariants, setSelectedVariants] = useState<Record<string, { opt1Index: number; opt2: string }>>({
    d_master_bundle: { opt1Index: 0, opt2: "Bubble Gum (Sakız)" },
    d_iron_cleaner: { opt1Index: 2, opt2: "Tetikli Ağır Hizmet Başlık" },
    d_tire_gel: { opt1Index: 1, opt2: "Derin Islak Parlaklık (Wet Look)" },
    d_twisted_towel: { opt1Index: 1, opt2: "Antrasit Gri" },
    d_ceramic_wax: { opt1Index: 1, opt2: "Islak & Kuru Uygulama Uyumlu" },
    d_carnauba_shampoo: { opt1Index: 0, opt2: "Foam Lance (Köpük Tabancası) Uyumlu" },
    p3_custom: { opt1Index: 0, opt2: "Siyah Gövde / Neon Cyan" },
    p1: { opt1Index: 0, opt2: "Mat Siyah - PETG" },
    p4: { opt1Index: 0, opt2: "Parlak Kırmızı" },
    p6: { opt1Index: 0, opt2: "PETG (Yüksek Sıcaklık)" },
  });

  // PNÖMATİK GARAJ KAPISI SES MOTORU
  const playSound = (type: "warp" | "click" | "success") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const now = ctx.currentTime;

      if (type === "warp") {
        // Tok sarmal kepenk ve pnömatik basınç sesi
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(70, now + 0.22);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);

      } else if (type === "click") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(300, now);

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);

      } else if (type === "success") {
        [260, 390].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + i * 0.05);

          gain.gain.setValueAtTime(0.05, now + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.18);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.05);
          osc.stop(now + i * 0.05 + 0.18);
        });
      }
    } catch (e) {
      // Audio context policy
    }
  };

  // GARAJ KAPISI GEÇİŞ TETİKLEYİCİSİ
  const handleTabChange = (newTab: MainCategory) => {
    if (newTab === activeTab || isGarageDoorActive) return;
    playSound("warp");
    setIsGarageDoorActive(true);

    // 1. Kapı aşağı iner, kategori arkada değişir
    setTimeout(() => {
      setActiveTab(newTab);
      if (newTab === "3d") setActiveSubTab3D("all");
      else setActiveSubTabGarage("all");
      
      // 2. Kapı yukarı doğru toplanır
      setTimeout(() => {
        setIsGarageDoorActive(false);
      }, 160);
    }, 220);
  };

  const handleVariantChange = (productId: string, type: "opt1Index" | "opt2", value: any) => {
    playSound("click");
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [type]: value,
      },
    }));
  };

  const addToCart = (product: Product, customText?: string) => {
    playSound("success");
    const variantState = selectedVariants[product.id] || { opt1Index: 0, opt2: product.options2[0] };
    const opt1Choice = product.options1[variantState.opt1Index] || product.options1[0];
    const opt2Choice = variantState.opt2 || product.options2[0];

    const cartId = `${product.id}-${opt1Choice.name}-${opt2Choice}-${customText || ""}`;

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
          customText,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const addCustomBundleToCart = () => {
    playSound("success");
    const bundleProduct: Product = {
      id: `custom_bundle_${Date.now()}`,
      name: "🔥 Özel Tasarım 3'lü Garaj Kombo Seti",
      category: "garage",
      rating: 5.0,
      reviewCount: 1,
      description: `Seçilenler: ${bundleShampoo === "carnauba" ? "Carnauba Şampuan (1L)" : "Seramik Cila (750ml)"} + ${bundleWheel === "iron" ? "Demir Tozu (500ml)" : "Lastik Jeli (500ml)"} + ${bundleTowel === "twisted" ? "1200 GSM Twisted Havlu" : "Lazer Bez Paketi"}`,
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80",
      options1Label: "Paket",
      options1: [{ name: "Kombo Set", price: 799, originalPrice: 999, discountBadge: "%20 Tasarruf" }],
      options2Label: "Paket Türü",
      options2: ["Kişiselleştirilmiş Set"]
    };

    addToCart(bundleProduct);
  };

  const updateQuantity = (cartId: string, change: number) => {
    playSound("click");
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
    playSound("click");
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
      ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-md shadow-cyan-500/20" 
      : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-md shadow-amber-500/20",
    price: is3D ? "text-cyan-400" : "text-amber-400",
    cardBorder: is3D 
      ? "hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 hover:bg-[#0f1420]" 
      : "hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5 hover:bg-[#141210]",
    selectedVariant: is3D 
      ? "border-cyan-400 bg-cyan-500/20 text-cyan-100" 
      : "border-amber-400 bg-amber-500/20 text-amber-100",
    ambientGlow: is3D
      ? "from-cyan-500/20 via-blue-600/10 to-transparent"
      : "from-amber-500/20 via-orange-600/10 to-transparent",
    doorSlat: is3D ? "border-cyan-500/20" : "border-amber-500/20"
  };

  const subCategories3D: { key: SubCategory3D; label: string }[] = [
    { key: "all", label: "Tüm 3D Ürünleri" },
    { key: "decor", label: "Dekorasyon & Masaüstü" },
    { key: "fun", label: "Eğlence & Kişiye Özel" },
    { key: "wall", label: "Duvar & Askı" },
    { key: "auto", label: "Araç İçi Aksesuar" },
  ];

  const subCategoriesGarage: { key: SubCategoryGarage; label: string }[] = [
    { key: "all", label: "Tüm Ürünler" },
    { key: "bundles", label: "🏆 Fırsat Paketleri & Setler" },
    { key: "wheel_tire", label: "Jant & Lastik Bakımı" },
    { key: "wash_foam", label: "Cila & Şampuanlar" },
    { key: "towels", label: "Bez & Havlular (3 Al 2 Öde)" },
  ];

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    playSound("success");
    const phone = "905555555555";
    let message = `*Yeni Sipariş Talebi - EternaLab*\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   ▫️ Paket: ${item.selectedOpt1.name}\n`;
      message += `   ▫️ Seçim: ${item.selectedOpt2}\n`;
      if (item.customText) {
        message += `   ▫️ *Kişiye Özel Metin/Plaka:* ${item.customText}\n`;
      }
      message += `   ▫️ Adet: ${item.quantity} x ${item.selectedOpt1.price} ₺ = ${item.quantity * item.selectedOpt1.price} ₺\n\n`;
    });
    message += `*Toplam Tutar:* ${totalAmount} ₺\n\nSiparişimi onaylamak ve kargo bilgilerimi iletmek istiyorum.`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-slate-700 selection:text-white overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* GÖZ ALICI ENDÜSTRİYEL GARAJ SARMAL KAPISI (ROLL-UP GARAGE SHUTTER) */}
      {/* ========================================================================= */}
      <div 
        className={`pointer-events-none fixed inset-0 z-50 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0,0.67,0)] ${
          isGarageDoorActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Sarmal Çelik Paneller (10 Kademeli Panel İllüzyonu) */}
        <div className="flex-1 w-full bg-[#0a0d14] flex flex-col justify-between shadow-2xl border-b border-slate-700/80">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`w-full flex-1 border-b border-t border-black/60 bg-gradient-to-b from-[#161c28] via-[#0e131d] to-[#07090e] flex items-center justify-between px-8 ${themeClasses.doorSlat}`}
            >
              <div className="flex items-center gap-4 opacity-30">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                <div className="h-1.5 w-12 rounded-full bg-slate-700" />
              </div>
              <div className="flex items-center gap-4 opacity-30">
                <div className="h-1.5 w-12 rounded-full bg-slate-700" />
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              </div>
            </div>
          ))}
          
          {/* Garaj Kapısı Alt Ağır Kauçuk Fitil & Neon Lazer Çizgisi */}
          <div className="w-full bg-[#050608] py-2.5 px-8 flex items-center justify-between border-t-2 border-slate-700">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400">
                ETERNA SHUTTER SYSTEM //
              </span>
              <span className={`text-[10px] font-mono font-bold ${is3D ? "text-cyan-400" : "text-amber-400"}`}>
                {is3D ? "3D_LAB_ACTIVE" : "GARAGE_PRO_ACTIVE"}
              </span>
            </div>
            <div className={`h-1.5 w-24 rounded-full ${is3D ? "bg-cyan-400 shadow-[0_0_15px_#22d3ee]" : "bg-amber-400 shadow-[0_0_15px_#f59e0b]"}`} />
          </div>
        </div>
      </div>

      {/* ÜST DUYURU BARI */}
      <div className={`transition-all duration-500 px-4 py-2 text-center text-xs font-black tracking-wide text-slate-950 uppercase shadow-md flex items-center justify-center gap-2 ${
        is3D 
          ? "bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400" 
          : "bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500"
      }`}>
        <Sparkles className="h-3.5 w-3.5" />
        <span>
          {is3D 
            ? "Mühendislik Standartlarında 3D Baskı • Canlı Kişiselleştirilebilir Ürünler" 
            : "1.500 ₺ Üzeri Ücretsiz Kargo • 3 Al 2 Öde & Kombo Garaj İndirimleri!"}
        </span>
      </div>

      {/* ARKA PLAN AMBİYANS IŞIKLARI */}
      <div 
        className={`pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${themeClasses.ambientGlow} transition-all duration-700 ease-out`} 
      />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#07090e]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 cursor-pointer group">
            
            {/* 1. MODEL LOGO */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#08090d] border border-slate-800 p-1.5 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-slate-700">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M10 9H31L26 14H7L10 9Z" fill="#f1f5f9" />
                <path d="M12 16H28L23 22H9L12 16Z" fill="#f59e0b" />
                <path d="M15 24H24L19 31H12L15 24Z" fill="#b45309" />
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
                {is3D ? "Precision 3D Engineering" : "Pro Detailing & Garage"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Sesi kapat" : "Sesi aç"}
              className="rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-slate-400 hover:text-white transition cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="h-4 w-4 text-emerald-400" /> : <VolumeX className="h-4 w-4 text-slate-500" />}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-2.5 text-sm font-bold text-slate-200 shadow-md transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Sepetim</span>
              {totalItemCount > 0 && (
                <span className={`ml-1 rounded-full px-2 py-0.5 text-xs font-black text-slate-950 transition-all duration-300 ${is3D ? "bg-cyan-400" : "bg-amber-400"}`}>
                  {totalItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* GÖVDE (KAPI AÇILIRKEN HİDROLİK SÜZÜLME) */}
      <div className={`transition-all duration-300 ease-out transform-gpu ${
        isGarageDoorActive 
          ? "opacity-40 translate-y-4 scale-[0.99] filter blur-[1px]" 
          : "opacity-100 translate-y-0 scale-100 filter blur-0"
      }`}>
        
        {/* HERO ALANI */}
        <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-4 text-center">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-extrabold backdrop-blur-md transition-all duration-500 ${
            is3D 
              ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300" 
              : "border-amber-400/30 bg-amber-500/10 text-amber-300"
          }`}>
            {is3D ? (
              <>
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>3D TASARIM & LAB: CANLI ÖZELLEŞTİRİLEBİLİR MODÜLLER</span>
              </>
            ) : (
              <>
                <Flame className="h-4 w-4 text-orange-400 fill-orange-400" />
                <span>GARAGE DETAILING: SÜPER AVANTAJLI SETLER VE 3 AL 2 ÖDE FIRSATLARI</span>
              </>
            )}
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl min-h-[70px] flex items-center justify-center transition-all duration-300">
            {is3D ? (
              <span>
                Hassas <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">3D Tasarım</span> & Kişiselleştirme
              </span>
            ) : (
              <span>
                Profesyonel <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Auto Detailing</span> Çözümleri
              </span>
            )}
          </h2>

          {/* TAB SEÇİCİ */}
          <div className="mx-auto mt-6 max-w-md">
            <div className="grid grid-cols-2 rounded-2xl border border-slate-800 bg-[#0e131f] p-1.5 shadow-xl">
              <button
                onClick={() => handleTabChange("garage")}
                className={`flex items-center justify-center gap-2.5 rounded-xl py-3 text-sm font-black transition-all duration-300 cursor-pointer ${
                  !is3D 
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md scale-[1.02]" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Droplets className="h-4 w-4" />
                <span>Auto Detailing</span>
              </button>

              <button
                onClick={() => handleTabChange("3d")}
                className={`flex items-center justify-center gap-2.5 rounded-xl py-3 text-sm font-black transition-all duration-300 cursor-pointer ${
                  is3D 
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md scale-[1.02]" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layers className="h-4 w-4" />
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
                    onClick={() => { playSound("click"); setActiveSubTab3D(sub.key); }}
                    className={`rounded-xl border px-4 py-2 text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                      activeSubTab3D === sub.key
                        ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-sm"
                        : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    {sub.label}
                  </button>
                ))
              : subCategoriesGarage.map((sub) => (
                  <button
                    key={sub.key}
                    onClick={() => { playSound("click"); setActiveSubTabGarage(sub.key); }}
                    className={`rounded-xl border px-4 py-2 text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                      activeSubTabGarage === sub.key
                        ? "border-amber-400 bg-amber-500/20 text-amber-200 shadow-sm"
                        : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
          </div>
        </section>

        {/* BEFORE / AFTER SLIDER */}
        {!is3D && (
          <section className="mx-auto max-w-6xl px-6 py-8">
            <div className="overflow-hidden rounded-3xl border border-slate-800/90 bg-[#0d121c] p-6 shadow-xl">
              <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <span className="text-xs font-black uppercase text-amber-400 tracking-wider">🔬 GÖZLE GÖRÜLÜR ETKİ</span>
                  <h3 className="text-xl font-bold text-white">pH Nötr Demir Tozu & Jant Temizleme Performansı</h3>
                </div>
                <p className="text-xs text-slate-400">Çizgiyi sağa-sola kaydırarak öncesi ve sonrasını karşılaştırın.</p>
              </div>

              <div 
                className="relative aspect-[21/9] w-full select-none overflow-hidden rounded-2xl cursor-ew-resize bg-slate-950"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                  setSliderPosition((x / rect.width) * 100);
                }}
                onTouchMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const touch = e.touches[0];
                  const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                  setSliderPosition((x / rect.width) * 100);
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&auto=format&fit=crop&q=80"
                  alt="Sonrası"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-4 right-4 rounded-lg bg-emerald-500/80 px-3 py-1 text-xs font-black text-slate-950 backdrop-blur">
                  ✨ UYGULAMA SONRASI (PARLAK)
                </span>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop&q=80"
                    alt="Öncesi"
                    className="absolute inset-0 h-full w-full object-cover max-w-none"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <span className="absolute top-4 left-4 rounded-lg bg-red-500/80 px-3 py-1 text-xs font-black text-white backdrop-blur">
                    🛑 UYGULAMA ÖNCESİ (BALATA TOZU)
                  </span>
                </div>

                <div
                  className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-md"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 shadow-md font-bold text-xs">
                    ↔
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* KENDİ GARAJ PAKETİNİ YARAT */}
        {!is3D && (
          <section className="mx-auto max-w-6xl px-6 py-4">
            <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-[#0d121c] to-[#0d121c] p-6 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <Sliders className="h-6 w-6 text-amber-400" />
                  <div>
                    <h3 className="text-lg font-black text-white">🛠️ Kendi Garaj Kombo Paketini Oluştur</h3>
                    <p className="text-xs text-slate-400">3 temel ürünü seç, anında %20 indirimli özel fiyatla sepete at.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xs text-slate-500 line-through">999 ₺</span>
                    <span className="block font-mono text-2xl font-black text-amber-400">799 ₺</span>
                  </div>
                  <button
                    onClick={addCustomBundleToCart}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-xs font-black text-slate-950 shadow-md hover:scale-105 transition cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    Kombo Paketi Sepete Ekle
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <span className="text-[11px] font-bold text-amber-400">ADIM 1: Yıkama & Cila</span>
                  <div className="mt-2 space-y-2">
                    <label 
                      onClick={() => { playSound("click"); setBundleShampoo("carnauba"); }}
                      className={`flex items-center justify-between rounded-xl border p-3 text-xs cursor-pointer transition ${bundleShampoo === "carnauba" ? "border-amber-400 bg-amber-500/20 text-white" : "border-slate-800 text-slate-400"}`}
                    >
                      <span>Carnauba Şampuan (1L)</span>
                      <CheckCircle className={`h-4 w-4 ${bundleShampoo === "carnauba" ? "text-amber-400" : "opacity-0"}`} />
                    </label>
                    <label 
                      onClick={() => { playSound("click"); setBundleShampoo("ceramic"); }}
                      className={`flex items-center justify-between rounded-xl border p-3 text-xs cursor-pointer transition ${bundleShampoo === "ceramic" ? "border-amber-400 bg-amber-500/20 text-white" : "border-slate-800 text-slate-400"}`}
                    >
                      <span>SiO2 Seramik Hızlı Cila (750ml)</span>
                      <CheckCircle className={`h-4 w-4 ${bundleShampoo === "ceramic" ? "text-amber-400" : "opacity-0"}`} />
                    </label>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <span className="text-[11px] font-bold text-amber-400">ADIM 2: Jant & Lastik</span>
                  <div className="mt-2 space-y-2">
                    <label 
                      onClick={() => { playSound("click"); setBundleWheel("iron"); }}
                      className={`flex items-center justify-between rounded-xl border p-3 text-xs cursor-pointer transition ${bundleWheel === "iron" ? "border-amber-400 bg-amber-500/20 text-white" : "border-slate-800 text-slate-400"}`}
                    >
                      <span>pH Nötr Demir Tozu (500ml)</span>
                      <CheckCircle className={`h-4 w-4 ${bundleWheel === "iron" ? "text-amber-400" : "opacity-0"}`} />
                    </label>
                    <label 
                      onClick={() => { playSound("click"); setBundleWheel("tire"); }}
                      className={`flex items-center justify-between rounded-xl border p-3 text-xs cursor-pointer transition ${bundleWheel === "tire" ? "border-amber-400 bg-amber-500/20 text-white" : "border-slate-800 text-slate-400"}`}
                    >
                      <span>Simli Lastik Jeli (500ml)</span>
                      <CheckCircle className={`h-4 w-4 ${bundleWheel === "tire" ? "text-amber-400" : "opacity-0"}`} />
                    </label>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <span className="text-[11px] font-bold text-amber-400">ADIM 3: Kurulama & Bez</span>
                  <div className="mt-2 space-y-2">
                    <label 
                      onClick={() => { playSound("click"); setBundleTowel("twisted"); }}
                      className={`flex items-center justify-between rounded-xl border p-3 text-xs cursor-pointer transition ${bundleTowel === "twisted" ? "border-amber-400 bg-amber-500/20 text-white" : "border-slate-800 text-slate-400"}`}
                    >
                      <span>1200 GSM Twisted Havlu</span>
                      <CheckCircle className={`h-4 w-4 ${bundleTowel === "twisted" ? "text-amber-400" : "opacity-0"}`} />
                    </label>
                    <label 
                      onClick={() => { playSound("click"); setBundleTowel("microfiber"); }}
                      className={`flex items-center justify-between rounded-xl border p-3 text-xs cursor-pointer transition ${bundleTowel === "microfiber" ? "border-amber-400 bg-amber-500/20 text-white" : "border-slate-800 text-slate-400"}`}
                    >
                      <span>Lazer Kesim Cila Bezi (3'lü)</span>
                      <CheckCircle className={`h-4 w-4 ${bundleTowel === "microfiber" ? "text-amber-400" : "opacity-0"}`} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3D CUSTOMIZER */}
        {is3D && (
          <section className="mx-auto max-w-6xl px-6 py-6">
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-[#0d121c] to-[#0d121c] p-6 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <span className="text-xs font-black uppercase text-cyan-400 tracking-wider">✨ ANLIK 3D ÖNİZLEME</span>
                  <h3 className="text-xl font-bold text-white">Kişiye Özel Anahtarlık / Plakalık Tasarla</h3>
                  <p className="mt-1 text-xs text-slate-400">Metin kutusuna isminizi veya araç plakanızı yazın, anlık önizleyin.</p>
                  
                  <div className="mt-4 flex gap-3">
                    <input
                      type="text"
                      value={customPlateText}
                      maxLength={14}
                      onChange={(e) => setCustomPlateText(e.target.value.toUpperCase())}
                      placeholder="Örn: 01 ETL 34"
                      className="rounded-xl border border-cyan-500/40 bg-slate-900/90 px-4 py-2.5 font-mono text-sm font-bold text-cyan-300 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <button
                      onClick={() => {
                        const customProd = PRODUCTS.find((p) => p.id === "p3_custom");
                        if (customProd) addToCart(customProd, customPlateText);
                      }}
                      className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-xs font-black text-slate-950 shadow-md hover:scale-105 transition cursor-pointer"
                    >
                      Özel Baskıyı Sepete Ekle (190 ₺)
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-2xl border border-cyan-500/40 bg-slate-950 p-6 shadow-md min-w-[280px]">
                  <div className="flex items-center gap-3 rounded-lg border-2 border-slate-700 bg-[#0a0d14] px-5 py-3 shadow-inner">
                    <div className="flex flex-col items-center justify-center rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-black text-white">
                      <span>TR</span>
                    </div>
                    <span className="font-mono text-xl font-black tracking-widest text-cyan-400">
                      {customPlateText || "PLAKANIZ"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ÜRÜN VİTRİNİ */}
        <main className="relative mx-auto max-w-6xl px-6 pb-16">
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
                    animationDelay: `${index * 40}ms`,
                    animationFillMode: "both"
                  }}
                  className={`group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0d121c]/90 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out ${themeClasses.cardBorder}`}
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.badge && (
                          <span className={`rounded-md border px-2 py-0.5 text-[11px] font-black tracking-wide backdrop-blur-md ${themeClasses.badge}`}>
                            {product.badge}
                          </span>
                        )}
                        {product.dealBadge && (
                          <span className="rounded-md border border-red-500/40 bg-red-500/25 px-2 py-0.5 text-[11px] font-black text-red-400 backdrop-blur-md">
                            {product.dealBadge}
                          </span>
                        )}
                      </div>
                    </div>

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

                    <div className="mt-4 flex items-baseline gap-2 border-y border-slate-800/80 py-2.5">
                      <span className={`font-mono text-2xl font-black transition-colors duration-300 ${themeClasses.price}`}>
                        {currentOpt1.price} ₺
                      </span>
                      {currentOpt1.originalPrice && (
                        <span className="font-mono text-sm text-slate-500 line-through">
                          {currentOpt1.originalPrice} ₺
                        </span>
                      )}
                      {currentOpt1.discountBadge && (
                        <span className="ml-auto rounded-md bg-emerald-500/20 px-2 py-0.5 text-xs font-black text-emerald-400">
                          {currentOpt1.discountBadge}
                        </span>
                      )}
                    </div>

                    <div className="mt-4">
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        {product.options1Label}: <span className="text-slate-200 font-semibold">{currentOpt1.name}</span>
                      </span>
                      <div className="mt-2 flex flex-col gap-1.5">
                        {product.options1.map((opt, idx) => (
                          <button
                            key={opt.name}
                            onClick={() => handleVariantChange(product.id, "opt1Index", idx)}
                            className={`flex items-center justify-between rounded-xl border p-2.5 text-xs transition-all duration-200 cursor-pointer ${
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

                    <div className="mt-3.5">
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        {product.options2Label}: <span className="text-slate-200">{currentOpt2}</span>
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {product.options2.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleVariantChange(product.id, "opt2", opt)}
                            className={`rounded-lg border px-2.5 py-1 text-xs transition-all duration-200 cursor-pointer ${
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

                  <button
                    onClick={() => addToCart(product)}
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-black transition-all duration-200 active:scale-95 cursor-pointer ${themeClasses.button}`}
                  >
                    <Plus className="h-4 w-4" />
                    Sepete Ekle ({currentOpt1.price} ₺)
                  </button>
                </div>
              );
            })}
          </div>
        </main>

        {/* REHBER */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800/80 bg-[#0c1018] p-8">
            <div className="flex items-center gap-2 text-amber-400 mb-4">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-bold text-base text-white">EternaLab Garaj & Üretim Rehberi</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-xs leading-relaxed text-slate-400">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4">
                <h4 className="font-bold text-slate-200 mb-1">☀️ Güneş Altında Uygulama Yapmayın</h4>
                <p>Demir tozu ve şampuanları direkt güneş altında veya sıcak kaportada kurumaya bırakmayın. Serin gölgede uygulayıp durulayın.</p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4">
                <h4 className="font-bold text-slate-200 mb-1">🧼 Twisted Havlu Bakımı</h4>
                <p>1200 GSM havlunuzu yumuşatıcı kullanmadan, 30 derecede yıkayın. Yumuşatıcı mikrofiber kanalları tıkayarak su emilimini düşürür.</p>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4">
                <h4 className="font-bold text-slate-200 mb-1">🚗 Araç İçi Yüksek Sıcaklık Dayanımı</h4>
                <p>3D araç içi aparatlarımızda standart PLA yerine kabin içi 75°C sıcaklığa dayanıklı güçlendirilmiş PETG hammadde kullanılır.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* SEPET PANELİ */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l border-slate-800 bg-[#07090e] p-6 shadow-2xl animate-in slide-in-from-right duration-300 ease-out">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className={`h-5 w-5 transition-colors duration-300 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
                  <h3 className="text-lg font-bold text-white">Sepetim ({totalItemCount} Ürün)</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Ücretsiz Kargo Hedefi:</span>
                  <span className="font-bold text-amber-400">1.500 ₺</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 ease-out" 
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
                          {item.customText && (
                            <span className="text-cyan-400 font-bold">Özel Plaka/İsim: {item.customText}</span>
                          )}
                        </div>
                        <p className={`mt-1.5 font-mono text-xs font-bold ${is3D ? "text-cyan-400" : "text-amber-400"}`}>
                          {item.selectedOpt1.price} ₺ x {item.quantity} = {item.selectedOpt1.price * item.quantity} ₺
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-lg border border-slate-700 bg-slate-800/90">
                          <button
                            onClick={() => updateQuantity(item.cartId, -1)}
                            className="p-1 text-slate-400 hover:text-white cursor-pointer"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-2 font-mono text-xs font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, 1)}
                            className="p-1 text-slate-400 hover:text-white cursor-pointer"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="rounded-lg p-1.5 text-red-400 hover:bg-red-950/40 cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between font-mono text-base font-bold text-white">
                  <span>Toplam Tutar:</span>
                  <span className={`text-2xl transition-colors duration-300 ${is3D ? "text-cyan-400" : "text-amber-400"}`}>{totalAmount} ₺</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-black transition-all duration-200 active:scale-95 cursor-pointer ${themeClasses.button}`}
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
      <footer className="border-t border-slate-800/80 bg-[#06080c] py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Gift className={`h-6 w-6 transition-colors duration-300 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">3 Al 2 Öde & Kombo Paketler</h4>
              <p className="text-xs text-slate-400">Bezlerde ve setlerde süper tasarruf fırsatları.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className={`h-6 w-6 transition-colors duration-300 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
            <div>
              <h4 className="text-sm font-bold text-white">Hızlı & Güvenli Gönderim</h4>
              <p className="text-xs text-slate-400">1.500 ₺ ve üzeri tüm siparişlerde ücretsiz kargo.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className={`h-6 w-6 transition-colors duration-300 ${is3D ? "text-cyan-400" : "text-amber-400"}`} />
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
