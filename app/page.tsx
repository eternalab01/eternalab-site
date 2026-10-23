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
  Check,
  Activity,
  Gauge,
  Thermometer,
  Wind,
  Search
} from "lucide-react";

// =========================================================================
// ETERNALAB LOGO BİLEŞENİ
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
      <circle cx="28" cy="46" r="3" fill="#ffffff" />
      <polyline points="31,46 130,46 170,18 430,18" stroke="#ffffff" strokeWidth="2.5" />
      <rect x="610" y="16" width="7" height="7" fill={accentColor} opacity="0.3" />
      <rect x="622" y="16" width="7" height="7" fill={accentColor} opacity="0.6" />
      <rect x="634" y="16" width="7" height="7" fill={accentColor} />

      <g fill="#ffffff">
        <polygon points="105,48 152,48 132,68 85,68" />
        <polygon points="100,75 147,75 130,92 112,92 98,78" />
        <polygon points="85,82 108,105 132,105 152,125 105,125 70,90" />
      </g>

      <text x="175" y="106" fill="#ffffff" fontFamily="sans-serif" fontSize="64" fontWeight="800" letterSpacing="-1.5">
        Eterna<tspan fill={accentColor} fontWeight="900">Lab</tspan>
      </text>

      <circle cx="585" cy="62" r="10" stroke="#ffffff" strokeWidth="2" />
      <text x="581" y="67" fill="#ffffff" fontFamily="sans-serif" fontSize="13" fontWeight="bold">R</text>

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
  // 1. AUTO DETAILING
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
    options1Label: "
