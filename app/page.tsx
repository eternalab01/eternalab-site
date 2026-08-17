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
  Check
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "3d" | "garage";
  price: number;
  description: string;
  image: string;
  colors: string[];
  materials: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Özel Tasarım Logo Anahtarlık",
    category: "3d",
    price: 180,
    description: "Kişiselleştirilebilir, yüksek mukavemetli çift renkli anahtarlık.",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Kırmızı", "Beyaz", "Gri"],
    materials: ["Standart PLA", "Dayanıklı PETG"],
  },
  {
    id: "p2",
    name: "Araç İçi Bardaklık / Tutucu Modülü",
    category: "3d",
    price: 340,
    description: "Araç içi trimlere tam oturan, ısıya ve darbelere dayanıklı özel üretim tutucu.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Karbon Görünüm"],
    materials: ["PETG (Isı Dayanımlı)", "Karbon Katkılı"],
  },
  {
    id: "p3",
    name: "Masaüstü Filament & Kablo Düzenleyici",
    category: "3d",
    price: 220,
    description: "Çalışma masası ve atölye için modüler, geçmeli kablo kılavuzu.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Gri", "Beyaz"],
    materials: ["Standart PLA", "Dayanıklı PETG"],
  },
  {
    id: "p4",
    name: "Polisaj Makinesi Duvar Askı Aparatı",
    category: "garage",
    price: 450,
    description: "Tüm rotary ve orbital polisaj makinelerine uyumlu, güçlendirilmiş duvar montaj askısı.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Kırmızı", "Asker Yeşili"],
    materials: ["Güçlendirilmiş PETG", "Karbon Katkılı"],
  },
  {
    id: "p5",
    name: "Sprey Şişe Duvar Tutucu Seti",
    category: "garage",
    price: 380,
    description: "500ml ve 1000ml detaylandırma sprey şişelerini düzenleyen 3'lü modül.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Kırmızı", "Gri"],
    materials: ["Güçlendirilmiş PETG (Kimyasala Dayanıklı)"],
  },
  {
    id: "p6",
    name: "Basınçlı Yıkama Nozul & Tabanca Askısı",
    category: "garage",
    price: 290,
    description: "Hızlı bağlantı nozulları ve tetikli yıkama tabancaları için garaj tutucusu.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Kırmızı"],
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
  const [activeTab, setActiveTab] = useState<"3d" | "garage">("3d");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [selectedVariants, setSelectedVariants] = useState<Record<string, { color: string; material: string }>>({
    p1: { color: "Mat Siyah", material: "Standart PLA" },
    p2: { color: "Mat Siyah", material: "PETG (Isı Dayanımlı)" },
    p3: { color: "Mat Siyah", material: "Standart PLA" },
    p4: { color: "Mat Siyah", material: "Güçlendirilmiş PETG" },
    p5: { color: "Mat Siyah", material: "Güçlendirilmiş PETG (Kimyasala Dayanıklı)" },
    p6: { color: "Mat Siyah", material: "PETG (Yüksek Mukavemet)" },
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
  const filteredProducts = PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full bg-blue-500 shadow-md shadow-blue-500/50" />
            <h1 className="text-xl font-bold tracking-tight text-white">EternaLab</h1>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 shadow-sm transition hover:bg-slate-700 hover:text-white"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Sepet</span>
            {totalItemCount > 0 && (
              <span className="ml-1 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
                {totalItemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* HERO & KATEGORİ SEÇİCİ */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Hassas Tasarım. <span className="text-blue-400">Garaj Çözümleri.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 md:text-base">
          Yüksek kaliteli 3D baskı aparatlar ve garaj düzenleme sistemleri.
        </p>

        {/* Tab Butonları */}
        <div className="mx-auto mt-8 inline-flex rounded-2xl border border-slate-800 bg-slate-800/80 p-1.5 shadow-lg backdrop-blur">
          <button
            onClick={() => setActiveTab("3d")}
            className={`flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === "3d"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="h-4 w-4" />
            3D Tasarım & Lab
          </button>
          <button
            onClick={() => setActiveTab("garage")}
            className={`flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === "garage"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Wrench className="h-4 w-4" />
            Garage & Detailing
          </button>
        </div>
      </section>

      {/* ÜRÜN LİSTESİ */}
      <main className="mx-auto max-w-6xl px-6 pb-20">
        <div
          key={activeTab}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500 animate-in fade-in"
        >
          {filteredProducts.map((product) => {
            const currentVariant = selectedVariants[product.id] || {
              color: product.colors[0],
              material: product.materials[0],
            };

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-800/40 p-5 shadow-sm transition hover:border-slate-700 hover:bg-slate-800/70"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-white">{product.name}</h3>
                      <span className="font-bold text-blue-400">{product.price} ₺</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {product.description}
                    </p>
                  </div>

                  {/* Renk Seçimi */}
                  <div className="mt-4">
                    <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      Renk: <span className="text-slate-200">{currentVariant.color}</span>
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleVariantChange(product.id, "color", color)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentVariant.color === color
                              ? "border-blue-500 bg-blue-600/20 text-blue-300 font-medium"
                              : "border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Malzeme Seçimi */}
                  <div className="mt-3">
                    <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      Malzeme: <span className="text-slate-200">{currentVariant.material}</span>
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {product.materials.map((mat) => (
                        <button
                          key={mat}
                          onClick={() => handleVariantChange(product.id, "material", mat)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentVariant.material === mat
                              ? "border-blue-500 bg-blue-600/20 text-blue-300 font-medium"
                              : "border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                          }`}
                        >
                          {mat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sepete Ekle Butonu */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-500 active:scale-98"
                >
                  <Plus className="h-4 w-4" />
                  Sepete Ekle
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* SEPET PANELİ (DRAWER) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-white">
                  <ShoppingBag className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-bold">Sepetim ({totalItemCount})</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 max-h-[60vh] space-y-3 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="py-12 text-center text-slate-500">
                    <ShoppingBag className="mx-auto h-10 w-10 opacity-30" />
                    <p className="mt-3 text-sm">Sepetinizde ürün bulunmuyor.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.cartId}
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/60 p-3"
                    >
                      <div className="flex-1 pr-3">
                        <h4 className="text-sm font-semibold text-white">{item.product.name}</h4>
                        <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-slate-400">
                          <span className="rounded bg-slate-800 px-1.5 py-0.5 border border-slate-700">{item.selectedColor}</span>
                          <span className="rounded bg-slate-800 px-1.5 py-0.5 border border-slate-700">{item.selectedMaterial}</span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-blue-400">
                          {item.product.price} ₺ x {item.quantity} = {item.product.price * item.quantity} ₺
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-lg border border-slate-700 bg-slate-800">
                          <button
                            onClick={() => updateQuantity(item.cartId, -1)}
                            className="p-1 text-slate-400 hover:text-white"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-white">{item.quantity}</span>
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

            {cart.length > 0 && (
              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between text-base font-bold text-white">
                  <span>Toplam Tutar:</span>
                  <span className="text-blue-400">{totalAmount} ₺</span>
                </div>
                <button
                  onClick={() => alert("Sipariş adımları yakında aktif edilecek!")}
                  className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 active:scale-98"
                >
                  Siparişi Tamamla
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ALT BİLGİ ALANI */}
      <footer className="border-t border-slate-800 bg-slate-950/60 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-blue-400" />
            <div>
              <h4 className="text-sm font-semibold text-white">Endüstriyel Dayanım</h4>
              <p className="text-xs text-slate-400">Yüksek doluluk oranı ve kaliteli malzeme.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-blue-400" />
            <div>
              <h4 className="text-sm font-semibold text-white">Hızlı & Güvenli Kargo</h4>
              <p className="text-xs text-slate-400">Özel korumalı paketleme ile teslimat.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <div>
              <h4 className="text-sm font-semibold text-white">Kişiye Özel Çözüm</h4>
              <p className="text-xs text-slate-400">İhtiyaca özel modelleme ve renk seçimi.</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} EternaLab. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}
