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
  Wrench, 
  Layers 
} from "lucide-react";

// --- ÜRÜN VERİLERİ ---
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
  // 3D Tasarım & Aksesuar
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
    name: "Araç İçi Bardaklık / Telefon Tutucu Modülü",
    category: "3d",
    price: 340,
    description: "Araç içi trimlere tam oturan, ısıya ve darbelere dayanıklı özel üretim tutucu.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Karbon Görünüm"],
    materials: ["PETG (Yüksek Isı Dayanımlı)", "Karbon Katkılı"],
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

  // Garage Lab & Detailing
  {
    id: "p4",
    name: "Polisaj Makinesi Duvar Askı Aparatı",
    category: "garage",
    price: 450,
    description: "Tüm rotary ve orbital polisaj makinelerine uyumlu, güçlendirilmiş duvar montaj askısı.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=80",
    colors: ["Mat Siyah", "Kırmızı", "Asker Yeşili"],
    materials: ["Güçlendirilmiş PETG (Garaj Tipi)", "Karbon Katkılı"],
  },
  {
    id: "p5",
    name: "Sprey Şişe & Kimyasal Duvar Tutucu Seti",
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
    description: "Hızlı bağlantı nozulları ve tetikli yıkama tabancaları için kompakt garaj tutucusu.",
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

  // Seçili ürün varyasyon state'leri
  const [selectedVariants, setSelectedVariants] = useState<Record<string, { color: string; material: string }>>({
    p1: { color: "Mat Siyah", material: "Standart PLA" },
    p2: { color: "Mat Siyah", material: "PETG (Yüksek Isı Dayanımlı)" },
    p3: { color: "Mat Siyah", material: "Standart PLA" },
    p4: { color: "Mat Siyah", material: "Güçlendirilmiş PETG (Garaj Tipi)" },
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

  // Sepete Ekleme
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

  // Adet Güncelleme
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

  // Sepetten Çıkarma
  const removeFromCart = (cartId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  // Toplam Hesaplamaları
  const totalAmount = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white">
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-40 border-b border-neutral-900 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 rounded-full bg-white animate-pulse" />
            <h1 className="text-xl font-bold tracking-wider uppercase">EternaLab</h1>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium transition hover:border-neutral-700"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Sepet</span>
            {totalItemCount > 0 && (
              <span className="ml-1 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-black">
                {totalItemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* --- HERO & KATEGORİ SEÇİCİ --- */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Hassas Üretim. <span className="text-neutral-500">Kusursuz Garaj.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
          Yüksek mukavemetli 3D baskı parçalar ve profesyonel garaj organizasyon aparatları.
        </p>

        {/* Sekme Geçiş Butonları */}
        <div className="mx-auto mt-10 inline-flex rounded-full border border-neutral-800 bg-neutral-950 p-1.5 shadow-2xl">
          <button
            onClick={() => setActiveTab("3d")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeTab === "3d"
                ? "bg-white text-black shadow-lg scale-105"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Layers className="h-4 w-4" />
            3D Design & Lab
          </button>
          <button
            onClick={() => setActiveTab("garage")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeTab === "garage"
                ? "bg-white text-black shadow-lg scale-105"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Wrench className="h-4 w-4" />
            Garage & Detailing
          </button>
        </div>
      </section>

      {/* --- ÜRÜN VİTRİNİ (EFEKTLİ GEÇİŞ) --- */}
      <main className="mx-auto max-w-7xl px-6 pb-24">
        <div
          key={activeTab}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in zoom-in-95 duration-500"
        >
          {filteredProducts.map((product) => {
            const currentVariant = selectedVariants[product.id] || {
              color: product.colors[0],
              material: product.materials[0],
            };

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/60 p-5 transition duration-300 hover:border-neutral-700"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <span className="font-mono text-lg font-bold">{product.price} ₺</span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Varyasyon: Renk Seçimi */}
                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Renk: <span className="text-neutral-300">{currentVariant.color}</span>
                    </label>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleVariantChange(product.id, "color", color)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentVariant.color === color
                              ? "border-white bg-white text-black font-semibold"
                              : "border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Varyasyon: Malzeme Seçimi */}
                  <div className="mt-3">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Malzeme: <span className="text-neutral-300">{currentVariant.material}</span>
                    </label>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      {product.materials.map((mat) => (
                        <button
                          key={mat}
                          onClick={() => handleVariantChange(product.id, "material", mat)}
                          className={`rounded-lg border px-2.5 py-1 text-xs transition ${
                            currentVariant.material === mat
                              ? "border-white bg-white text-black font-semibold"
                              : "border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700"
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
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-black transition hover:bg-neutral-200 active:scale-95"
                >
                  <Plus className="h-4 w-4" />
                  Sepete Ekle
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* --- SLIDE-OVER SEPET PANELİ --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l border-neutral-900 bg-neutral-950 p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  <h3 className="text-lg font-bold">Sepetim ({totalItemCount})</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-900 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Sepet Ürün Listesi */}
              <div className="mt-6 max-h-[58vh] space-y-4 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="py-12 text-center text-neutral-500">
                    <ShoppingBag className="mx-auto h-12 w-12 opacity-30" />
                    <p className="mt-3 text-sm">Sepetinizde ürün bulunmuyor.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.cartId}
                      className="flex items-center justify-between rounded-xl border border-neutral-900 bg-neutral-900/50 p-3.5"
                    >
                      <div className="flex-1 pr-3">
                        <h4 className="text-sm font-semibold">{item.product.name}</h4>
                        <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-neutral-400">
                          <span className="rounded bg-neutral-800 px-1.5 py-0.5">{item.selectedColor}</span>
                          <span className="rounded bg-neutral-800 px-1.5 py-0.5">{item.selectedMaterial}</span>
                        </div>
                        <p className="mt-1.5 font-mono text-xs font-semibold text-neutral-300">
                          {item.product.price} ₺ x {item.quantity} = {item.product.price * item.quantity} ₺
                        </p>
                      </div>

                      {/* Adet Kontrolü ve Silme Butonları */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-950">
                          <button
                            onClick={() => updateQuantity(item.cartId, -1)}
                            className="p-1 text-neutral-400 hover:text-white"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-2 font-mono text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, 1)}
                            className="p-1 text-neutral-400 hover:text-white"
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

            {/* Sepet Alt Toplam & Sipariş */}
            {cart.length > 0 && (
              <div className="border-t border-neutral-900 pt-4">
                <div className="flex items-center justify-between font-mono text-lg font-bold">
                  <span>Toplam Tutar:</span>
                  <span>{totalAmount} ₺</span>
                </div>
                <button
                  onClick={() => alert("Sipariş adımları yakında aktif edilecek!")}
                  className="mt-4 w-full rounded-xl bg-white py-3.5 text-sm font-bold text-black transition hover:bg-neutral-200 active:scale-95"
                >
                  Siparişi Tamamla
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- FOOTER & ROZETLER --- */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-neutral-400" />
            <div>
              <h4 className="text-sm font-semibold">Garantili Üretim</h4>
              <p className="text-xs text-neutral-500">Yüksek doluluk ve dayanıklı endüstriyel filamentler.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-6 w-6 text-neutral-400" />
            <div>
              <h4 className="text-sm font-semibold">Özenli Paketleme</h4>
              <p className="text-xs text-neutral-500">Kırılmaya karşı korumalı hızlı teslimat.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-neutral-400" />
            <div>
              <h4 className="text-sm font-semibold">Kişiselleştirme</h4>
              <p className="text-xs text-neutral-500">İsteğe özel renk ve araç uyumlu tasarımlar.</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} EternaLab. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}
