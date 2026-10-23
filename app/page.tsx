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
