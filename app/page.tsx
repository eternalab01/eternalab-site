"use client";

import React, { useState, useEffect } from "react";
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
  HelpCircle,
  Cpu,
  Clock,
  Box,
  CreditCard,
  Building2,
  Copy,
  Check
} from "lucide-react";

// =========================================================================
// YENİ ETERNALAB LOGO BİLEŞENİ
// =========================================================================
const EternaLogo = ({ is3D = false }: { is3D?: boolean }) => {
  const accentColor = is3D ? "#22d3ee" : "#f59e0b";
  return (
    <svg
      viewBox="0 0 720 160"
      className="h-9 sm:h-10 w-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Üst Sibernetik Çerçeve */}
      <circle cx="28" cy="46" r="3" fill="#ffffff" />
      <polyline points="31,46 130,46 170,18 430,18" stroke="#ffffff" strokeWidth="2.5" />
      <rect x="610" y="16" width="7" height="7" fill={accentColor} opacity="0.3" />
      <rect x="622" y="16" width="7" height="7" fill={accentColor} opacity="0.6" />
      <rect x="634" y="16" width="7" height="7" fill={accentColor} />

      {/* Geometrik E Amblemi */}
      <g fill="#ffffff">
        <polygon points="105,48 152,48 132,68 85,68" />
        <polygon points="100,75 147,75 130,92 112,92 98,78" />
        <polygon points="85,82 108,105 132,105 152,125 105,125 70,90" />
      </g>

      {/* Tipografi: EternaLab */}
      <text x="175" y="106" fill="#ffffff" fontFamily="sans-serif" fontSize="64" fontWeight="800" letterSpacing="-1.5">
        Eterna<tspan fill={accentColor} fontWeight="900">Lab</tspan>
      </text>

      {/* Tescil İmi */}
      <circle cx="585" cy="62" r="10" stroke="#ffffff" strokeWidth="2" />
      <text x="581" y="67" fill="#ffffff" fontFamily="sans-serif" fontSize="13" fontWeight="bold">R</text>

      {/* Alt Çerçeve Hatları */}
      <polyline points="28,70 28,142 300,142 340,122 550,122" stroke="#ffffff" strokeWidth="2.5" />
      <line x1="333" y1="142" x2="400" y2="142" stroke="#ffffff" strokeWidth="2.5" />
      <polygon points="505,142 522,125 544,125 527,142" fill={accentColor} />
      <polygon points="535,142 552,125 574,125 557,142" fill={accentColor} />
      <polygon points="565,142 582,125 604,125 587,142" fill={accentColor} />
      <polyline points="590,142 660,142 690,105" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="690" cy="105" r="3" fill="#ffffff" />
    </svg>
  );
};

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
  techSpecs?: {
    material: string;
    layerHeight: string;
    leadTime: string;
  };
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
    techSpecs: {
      material: "PETG Endüstriyel Polimer",
      layerHeight: "0.16mm Ultra Hassas",
      leadTime: "24 Saatte Kargoda"
    }
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
    techSpecs: {
      material: "PETG / PLA Tough",
      layerHeight: "0.20mm Standart",
      leadTime: "Aynı Gün Kargo"
    }
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
    techSpecs: {
      material: "PLA Silk (İpeksi Parlak)",
      layerHeight: "0.12mm Yüksek Detay",
      leadTime: "1-2 İş Günü"
    }
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
    techSpecs: {
      material: "Isıya Dayanıklı PETG (75°C)",
      layerHeight: "0.16mm Güçlendirilmiş",
      leadTime: "Aynı Gün Kargo"
    }
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

const FAKE_NOTIFICATIONS = [
  { city: "İstanbul", product: "A'dan Z'ye Master Bakım Paketi", time: "2 dk önce" },
  { city: "Ankara", product: "Kişiye Özel Plaka Anahtarlık", time: "5 dk önce" },
  { city: "İzmir", product: "1200 GSM Twisted Havlu (3 Al 2 Öde)", time: "8 dk önce" },
  { city: "Bursa", product: "pH Nötr Demir Tozu & Jant Temizleyici", time: "11 dk önce" },
  { city: "Antalya", product: "Araç İçi Bardaklık & Telefon Tutucu", time: "14 dk önce" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<MainCategory>("garage");
  const [activeSubTab3D, setActiveSubTab3D] = useState<SubCategory3D>("all");
  const [activeSubTabGarage, setActiveSubTabGarage] = useState<SubCategoryGarage>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGarageDoorActive, setIsGarageDoorActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // ÖDEME VE S
