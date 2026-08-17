'use client';

import React, { useState } from 'react';
import { ShoppingCart, Car, Box, ShieldCheck, Zap, Sparkles, Check } from 'lucide-react';

export default function HomePage() {
  const [mode, setMode] = useState<'garage' | 'lab'>('garage');
  const [cart, setCart] = useState<{ id: number; name: string; price: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const garageProducts = [
    {
      id: 1,
      name: 'Duvar Tipi Detailing Sprey Askılığı',
      price: 249,
      tag: '3D Üretim / PETG',
      desc: '500ml ve 1L şişeler için dayanıklı modüler garaj askılığı.',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Lastik Altı Hortum Kaydırma Takozu (4 Adet)',
      price: 389,
      tag: '3D Üretim / Darbeye Dayanıklı',
      desc: 'Yıkama hortumunun lastik altına sıkışmasını engelleyen kilit tasarım.',
      badge: 'Garage Essential'
    },
    {
      id: 3,
      name: 'Seramik Takviyeli Hızlı Cila Spreyi (500 ml)',
      price: 320,
      tag: 'Boya Koruma & Parlaklık',
      desc: 'Derin ıslak görünüm ve 3 aya kadar hidrofobik su itici koruma.',
      badge: 'Premium Kimyasal'
    },
    {
      id: 4,
      name: 'Manyetik Kurulama Havlusu (1200 GSM)',
      price: 290,
      tag: 'Mikrofiber Bez',
      desc: 'Çizik bırakmayan çift taraflı bükümlü fiber yapısı.',
      badge: 'Çizik Önleyici'
    }
  ];

  const labProducts = [
    {
      id: 101,
      name: 'Nürburgring Nordschleife 3D Pist Dekoru',
      price: 420,
      tag: 'Duvar Dekoru / Stand Dahil',
      desc: 'Yüksek çözünürlüklü yarış pisti silüeti ve masaüstü ayaklığı.',
      badge: 'Masaüstü / Duvar'
    },
    {
      id: 102,
      name: 'Modüler Masaüstü Kumanda & Kulaklık Standı',
      price: 310,
      tag: 'Workspace Setup',
      desc: 'Kablo kanallı ve şık mat yüzeyli kulaklık düzenleyici.',
      badge: 'Minimalist'
    },
    {
      id: 103,
      name: 'Araç Kasa Kodu Özel Tasarım Anahtarlık',
      price: 149,
      tag: 'Kişiye Özel / Çok Renkli',
      desc: 'Hassas katman detayı ve yüksek dayanımlı alaşım halka.',
      badge: 'Kişiselleştirilebilir'
    },
    {
      id: 104,
      name: 'Filament Rulo Düzenleyici & Nem Önleyici Kutu Standı',
      price: 260,
      tag: '3D Maker Tool',
      desc: 'Rulmanlı pürüzsüz besleme mekanizmalı makara yuvası.',
      badge: 'Maker Özel'
    }
  ];

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  const currentProducts = mode === 'garage' ? garageProducts : labProducts;
  const isGarage = mode === 'garage';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 text-slate-100 ${
        isGarage ? 'bg-neutral-950' : 'bg-slate-950'
      }`}
    >
      {/* Üst Bar */}
      <header className="border-b border-neutral-800/80 sticky top-0 z-40 backdrop-blur-md bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl transition-all shadow-lg ${
                isGarage
                  ? 'bg-red-600 shadow-red-900/40 text-white'
                  : 'bg-emerald-500 shadow-emerald-900/40 text-neutral-950'
              }`}
            >
              E
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-wider">
                ETERNA<span className={isGarage ? 'text-red-500' : 'text-emerald-400'}>LAB</span>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400">
                {isGarage ? 'Garage & Detailing Division' : '3D Studio & Maker Division'}
              </p>
            </div>
          </div>

          {/* Mod Değiştirici (Toggle) */}
          <div className="bg-neutral-900 p-1.5 rounded-full border border-neutral-800 flex items-center shadow-inner">
            <button
              onClick={() => setMode('garage')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isGarage
                  ? 'bg-red-600 text-white shadow-md shadow-red-900/50'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>GARAGE</span>
            </button>
            <button
              onClick={() => setMode('lab')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                !isGarage
                  ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-900/50 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>3D STUDIO</span>
            </button>
          </div>

          {/* Sepet Butonu */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition"
          >
            <ShoppingCart className="w-5 h-5 text-neutral-300" />
            {cart.length > 0 && (
              <span
                className={`absolute -top-1 -right-1 w-5 h-5 text-[11px] font-bold rounded-full flex items-center justify-center ${
                  isGarage ? 'bg-red-600 text-white' : 'bg-emerald-500 text-neutral-950 font-black'
                }`}
              >
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div
          className={`rounded-3xl p-8 sm:p-12 relative overflow-hidden border transition-all duration-500 ${
            isGarage
              ? 'bg-gradient-to-r from-neutral-900 via-neutral-900 to-red-950/40 border-red-900/30'
              : 'bg-gradient-to-r from-neutral-900 via-slate-900 to-emerald-950/40 border-emerald-900/30'
          }`}
        >
          <div className="relative z-10 max-w-2xl space-y-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                isGarage
                  ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {isGarage ? 'Otomotiv Detay & Bakım' : 'Hassas 3D Üretim Atölyesi'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {isGarage
                ? 'Garajına Profesyonel Bakım ve Akıllı Aparatlar.'
                : 'Masan ve Yaşam Alanın İçin Özel Üretim 3D Sanat.'}
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base">
              {isGarage
                ? 'Kendi üretimimiz fonksiyonel garaj tutucuları, yüksek kaliteli kurulama havluları ve boya koruma ürünleri.'
                : 'Yüksek mukavemetli mühendislik filamentleriyle üretilen dekor, düzenleyici ve kişiye özel koleksiyon parçaları.'}
            </p>
          </div>
        </div>
      </section>

      {/* Ürün Vitrini */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold tracking-wide">
            {isGarage ? 'Garaj & Detailing Vitrini' : '3D Koleksiyon & Modeller'}
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            {currentProducts.length} Ürün Listeleniyor
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-neutral-900/60 rounded-2xl p-5 border border-neutral-800/80 hover:border-neutral-700 transition flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-full h-44 rounded-xl bg-neutral-950 border border-neutral-800/50 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                  {isGarage ? (
                    <Car className="w-12 h-12 text-neutral-700 group-hover:text-red-500 transition-colors" />
                  ) : (
                    <Box className="w-12 h-12 text-neutral-700 group-hover:text-emerald-400 transition-colors" />
                  )}
                  <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-md bg-neutral-900/90 text-neutral-300 border border-neutral-800">
                    {product.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    {product.tag}
                  </span>
                  <h3 className="font-bold text-base text-neutral-100 group-hover:text-white transition">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">{product.desc}</p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-lg font-black text-neutral-100">{product.price} ₺</span>
                <button
                  onClick={() => addToCart(product)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                    isGarage
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-950'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-950'
                  }`}
                >
                  <span>Sepete Ekle</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sepet Çekmecesi (Modal) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-neutral-900 h-full p-6 flex flex-col justify-between border-l border-neutral-800 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Sepetiniz ({cart.length})
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-neutral-400 hover:text-white text-sm"
                >
                  Kapat ✕
                </button>
              </div>

              <div className="py-4 space-y-3 max-h-[65vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-neutral-500 text-sm text-center py-8">Sepetinizde ürün bulunmuyor.</p>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm"
                    >
                      <span className="font-medium text-neutral-200">{item.name}</span>
                      <span className="font-bold">{item.price} ₺</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <div className="flex justify-between font-bold text-base">
                <span>Toplam Tutar:</span>
                <span>{cart.reduce((total, item) => total + item.price, 0)} ₺</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full py-3.5 rounded-xl font-bold bg-white text-neutral-950 hover:bg-neutral-200 disabled:opacity-50 transition"
              >
                Siparişi Tamamla & Öde (İyzico)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}