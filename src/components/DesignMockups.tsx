// SVG-based design mockups that look like real graphic design artifacts.
// Each component renders a self-contained design piece — no external images.

// ─── Mira House — Brand Identity ─────────────────────────────
export function MiraHouseLogo({ className = '', color = '#8B2A1F' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M30 95 L30 55 Q30 30 55 30 L75 30 Q100 30 100 55 L100 95" fill="none" stroke={color} strokeWidth="2.5" />
      <text x="100" y="85" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fill={color} fontStyle="italic">Mira</text>
      <text x="100" y="105" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill={color} letterSpacing="4">HOUSE</text>
      <line x1="60" y1="112" x2="140" y2="112" stroke={color} strokeWidth="0.5" />
    </svg>
  );
}

export function MiraHouseCard({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#F9F6F0" />
      <rect x="0" y="0" width="400" height="240" fill="none" stroke="#8B2A1F" strokeWidth="0.5" opacity="0.15" />
      <path d="M40 180 L40 100 Q40 60 80 60 L120 60 Q160 60 160 100 L160 180" fill="none" stroke="#8B2A1F" strokeWidth="2" />
      <text x="200" y="130" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fill="#8B2A1F" fontStyle="italic">Mira House</text>
      <text x="200" y="155" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#8B2A1F" letterSpacing="6">EST. 2026 — BENGALURU</text>
      <text x="40" y="215" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#8B2A1F" letterSpacing="2">MEERA SHAH — FOUNDER</text>
      <text x="360" y="215" textAnchor="end" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#8B2A1F" letterSpacing="2">+91 80 4567 8901</text>
    </svg>
  );
}

export function MiraHouseMenu({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#F9F6F0" />
      <path d="M50 120 L50 80 Q50 50 80 50 L100 50 Q130 50 130 80 L130 120" fill="none" stroke="#8B2A1F" strokeWidth="1.5" />
      <text x="150" y="90" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill="#8B2A1F" fontStyle="italic">Mira House</text>
      <text x="150" y="108" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#8B2A1F" letterSpacing="4">DINNER MENU</text>
      <line x1="80" y1="140" x2="220" y2="140" stroke="#8B2A1F" strokeWidth="0.5" />
      <text x="150" y="170" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#2B2622" fontStyle="italic">Small Plates</text>
      {['Slow-roasted beet', 'Charred okra, lime', 'Coconut rice, curry leaf', 'Cardamom panna cotta'].map((item, i) => (
        <g key={item}>
          <text x="60" y={200 + i * 28} fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#2B2622">{item}</text>
          <text x="240" y={200 + i * 28} textAnchor="end" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#8B2A1F">₹{[320, 280, 240, 350][i]}</text>
        </g>
      ))}
      <line x1="80" y1="320" x2="220" y2="320" stroke="#8B2A1F" strokeWidth="0.5" />
      <text x="150" y="345" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#8B2A1F" letterSpacing="3">EST. 2026 — BENGALURU</text>
    </svg>
  );
}

// ─── Common Ground — Packaging ─────────────────────────────
export function CoffeeBagFront({ className = '', label = 'HOUSE BLEND', color = '#C8A063' }: { className?: string; label?: string; color?: string }) {
  return (
    <svg viewBox="0 0 300 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bagGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="0.75" />
        </linearGradient>
      </defs>
      {/* Bag body */}
      <path d="M60 50 L240 50 L240 380 L60 380 Z" fill="url(#bagGrad)" />
      {/* Tin tie */}
      <rect x="60" y="40" width="180" height="18" fill="#1a1a1a" />
      <line x1="60" y1="50" x2="240" y2="50" stroke="#000" strokeWidth="0.3" opacity="0.3" />
      {/* Label area */}
      <rect x="80" y="100" width="140" height="200" fill="none" stroke="#111" strokeWidth="0.5" opacity="0.2" />
      <text x="150" y="140" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="9" fill="#111" fontWeight="700" letterSpacing="2">COMMON</text>
      <text x="150" y="155" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="9" fill="#111" fontWeight="700" letterSpacing="2">GROUND</text>
      <line x1="110" y1="170" x2="190" y2="170" stroke="#111" strokeWidth="0.5" />
      <text x="150" y="195" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fill="#111" fontStyle="italic">{label}</text>
      <text x="150" y="225" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#111" opacity="0.6" letterSpacing="1">SINGLE ORIGIN — 250G</text>
      <text x="150" y="245" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#111" opacity="0.5" letterSpacing="1">ROASTED IN BENGALURU</text>
      {/* Bottom valve */}
      <circle cx="150" cy="360" r="12" fill="#111" opacity="0.15" />
      <circle cx="150" cy="360" r="8" fill="#111" opacity="0.2" />
    </svg>
  );
}

export function CoffeeCup({ className = '', color = '#C8A063' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 60 L160 60 L150 220 L50 220 Z" fill="#F9F6F0" stroke="#111" strokeWidth="0.5" />
      <path d="M160 80 Q185 80 185 120 Q185 160 160 160" fill="none" stroke="#111" strokeWidth="0.5" />
      <text x="100" y="120" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="8" fill="#111" fontWeight="700" letterSpacing="1">COMMON</text>
      <text x="100" y="135" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="8" fill="#111" fontWeight="700" letterSpacing="1">GROUND</text>
      <line x1="75" y1="150" x2="125" y2="150" stroke={color} strokeWidth="1" />
      <text x="100" y="170" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill={color} fontStyle="italic">everyday rituals</text>
    </svg>
  );
}

// ─── City / After Dark — Posters ─────────────────────────────
export function AfterDarkPoster({ className = '', variant = 1 }: { className?: string; variant?: number }) {
  const palettes = [
    { bg: '#3157FF', text: '#F04A32', sub: '#F4F0E8' },
    { bg: '#F04A32', text: '#3157FF', sub: '#F4F0E8' },
    { bg: '#111111', text: '#3157FF', sub: '#F04A32' },
  ];
  const p = palettes[variant % 3];
  return (
    <svg viewBox="0 0 300 420" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="420" fill={p.bg} />
      <text x="20" y="50" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill={p.sub} letterSpacing="3" opacity="0.7">CITY / AFTER DARK</text>
      <text x="280" y="50" textAnchor="end" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill={p.sub} letterSpacing="3" opacity="0.7">VOL. {variant}</text>
      <text x="150" y="200" textAnchor="middle" fontFamily="Georgia, serif" fontSize="42" fill={p.text} fontStyle="italic" fontWeight="700">AFTER</text>
      <text x="150" y="250" textAnchor="middle" fontFamily="Georgia, serif" fontSize="42" fill={p.sub} fontStyle="italic" fontWeight="700">DARK</text>
      <line x1="40" y1="280" x2="260" y2="280" stroke={p.sub} strokeWidth="0.5" opacity="0.4" />
      <text x="150" y="305" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill={p.sub} letterSpacing="4" opacity="0.6">A VISUAL CULTURE SERIES</text>
      <text x="20" y="390" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill={p.sub} letterSpacing="2" opacity="0.5">22.02.26 — FRI — 21:00</text>
      <text x="280" y="390" textAnchor="end" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill={p.sub} letterSpacing="2" opacity="0.5">COUNTERCULTURE BLR</text>
      {variant === 2 && (
        <circle cx="150" cy="120" r="30" fill="none" stroke={p.text} strokeWidth="1" opacity="0.4" />
      )}
      {variant === 3 && (
        <rect x="80" y="80" width="140" height="2" fill={p.text} opacity="0.5" />
      )}
    </svg>
  );
}

export function AfterDarkBanner({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="200" fill="#3157FF" />
      <text x="30" y="40" fontFamily="'Helvetica Neue', sans-serif" fontSize="8" fill="#F4F0E8" letterSpacing="3" opacity="0.6">CITY / AFTER DARK — VOL.3</text>
      <text x="300" y="110" textAnchor="middle" fontFamily="Georgia, serif" fontSize="36" fill="#F04A32" fontStyle="italic">After Dark</text>
      <text x="300" y="140" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#F4F0E8" letterSpacing="4" opacity="0.5">A VISUAL CULTURE SERIES — 22.02.26</text>
      <rect x="0" y="195" width="600" height="5" fill="#F04A32" />
    </svg>
  );
}

// ─── Form / Issue 07 — Editorial ─────────────────────────────
export function FormMagazineCover({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#F9F6F0" />
      <text x="20" y="40" fontFamily="'Helvetica Neue', sans-serif" fontSize="8" fill="#111" fontWeight="700" letterSpacing="1">FORM</text>
      <text x="280" y="40" textAnchor="end" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#111" letterSpacing="2">ISSUE 07</text>
      <line x1="20" y1="50" x2="280" y2="50" stroke="#111" strokeWidth="0.5" />
      <text x="20" y="200" fontFamily="Georgia, serif" fontSize="120" fill="#111" fontStyle="italic">f</text>
      <text x="20" y="240" fontFamily="Georgia, serif" fontSize="14" fill="#111" fontStyle="italic">the typography issue</text>
      <text x="20" y="380" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#F04A32" letterSpacing="3">WINTER 2025 — ₹400</text>
      <text x="280" y="380" textAnchor="end" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#111" letterSpacing="2" opacity="0.4">FORMMAG.IN</text>
    </svg>
  );
}

export function FormSpread({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#F9F0E8" />
      <line x1="300" y1="0" x2="300" y2="400" stroke="#111" strokeWidth="0.3" opacity="0.15" />
      {/* Left page */}
      <text x="40" y="50" fontFamily="Georgia, serif" fontSize="9" fill="#111" letterSpacing="1">The Anatomy of a Letter</text>
      <line x1="40" y1="58" x2="260" y2="58" stroke="#111" strokeWidth="0.3" />
      <text x="40" y="85" fontFamily="Georgia, serif" fontSize="7" fill="#333" opacity="0.8">
        <tspan x="40" dy="0">The serif is not decoration.</tspan>
        <tspan x="40" dy="12">It is structure made visible.</tspan>
        <tspan x="40" dy="12">Every curve, every bracket,</tspan>
        <tspan x="40" dy="12">every terminal serves a</tspan>
        <tspan x="40" dy="12">function the eye reads</tspan>
        <tspan x="40" dy="12">before the mind names.</tspan>
      </text>
      <text x="40" y="200" fontFamily="Georgia, serif" fontSize="60" fill="#F04A32" fontStyle="italic">Gg</text>
      <text x="40" y="240" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#111" letterSpacing="2" opacity="0.4">FIG. 03 — GARAMOND, 48PT</text>
      {/* Right page */}
      <text x="340" y="50" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#111" letterSpacing="2" opacity="0.4">FORM 07 / PAGE 24</text>
      <text x="340" y="90" fontFamily="Georgia, serif" fontSize="14" fill="#111" fontStyle="italic">"Type is the visible</text>
      <text x="340" y="110" fontFamily="Georgia, serif" fontSize="14" fill="#111" fontStyle="italic">voice of the page."</text>
      <line x1="340" y1="125" x2="560" y2="125" stroke="#F04A32" strokeWidth="0.5" />
      <text x="340" y="150" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#333" opacity="0.7">
        <tspan x="340" dy="0">In conversation with</tspan>
        <tspan x="340" dy="10">three type designers</tspan>
        <tspan x="340" dy="10">about the future of</tspan>
        <tspan x="340" dy="10">the letterform.</tspan>
      </text>
      <rect x="340" y="220" width="220" height="120" fill="none" stroke="#111" strokeWidth="0.3" opacity="0.2" />
      <text x="450" y="290" textAnchor="middle" fontFamily="Georgia, serif" fontSize="40" fill="#111" fontStyle="italic" opacity="0.15">Aa</text>
    </svg>
  );
}

// ─── Nova Skin — Digital Campaign ─────────────────────────────
export function NovaSkinWebsite({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#F9F6F0" />
      {/* Browser bar */}
      <rect x="0" y="0" width="600" height="30" fill="#E8E4DC" />
      <circle cx="15" cy="15" r="4" fill="#D8D3C8" />
      <circle cx="30" cy="15" r="4" fill="#D8D3C8" />
      <circle cx="45" cy="15" r="4" fill="#D8D3C8" />
      <rect x="60" y="8" width="520" height="14" rx="2" fill="#F9F6F0" />
      <text x="70" y="18" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#999" letterSpacing="1">novaskin.studio</text>
      {/* Hero */}
      <rect x="0" y="30" width="600" height="200" fill="#D8D3C8" opacity="0.3" />
      <text x="300" y="120" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fill="#7BA098" fontStyle="italic">Skin, Considered</text>
      <text x="300" y="150" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#7BA098" letterSpacing="4">A QUIETER APPROACH TO SKINCARE</text>
      <rect x="250" y="170" width="100" height="24" rx="0" fill="#7BA098" />
      <text x="300" y="186" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#F9F6F0" letterSpacing="2">SHOP THE LINE</text>
      {/* Product grid */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={40 + i * 180} y="260" width="140" height="100" fill="#E8E4DC" />
          <rect x={40 + i * 180} y="260" width="140" height="100" fill="none" stroke="#7BA098" strokeWidth="0.3" opacity="0.3" />
          <text x={110 + i * 180} y="320" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#7BA098" letterSpacing="2">SERUM 0{i + 1}</text>
        </g>
      ))}
    </svg>
  );
}

export function NovaSkinSocial({ className = '', variant = 1 }: { className?: string; variant?: number }) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill={variant === 1 ? '#D8D3C8' : '#7BA098'} />
      <text x="150" y="140" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fill={variant === 1 ? '#7BA098' : '#F9F6F0'} fontStyle="italic">considered</text>
      <text x="150" y="170" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill={variant === 1 ? '#7BA098' : '#F9F6F0'} letterSpacing="4" opacity="0.6">NOVA SKIN — 2026</text>
      <line x1="100" y1="200" x2="200" y2="200" stroke={variant === 1 ? '#7BA098' : '#F9F6F0'} strokeWidth="0.5" opacity="0.4" />
      <text x="150" y="220" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill={variant === 1 ? '#7BA098' : '#F9F6F0'} letterSpacing="2" opacity="0.4">SKIN IS A LANDSCAPE</text>
    </svg>
  );
}

// ─── Type / Motion / Form — Experimental ─────────────────────────────
export function TypeExperimentA({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F4F0E8" />
      <text x="0" y="300" fontFamily="Georgia, serif" fontSize="280" fill="#111" fontStyle="italic" fontWeight="700">A</text>
      <text x="180" y="200" fontFamily="Georgia, serif" fontSize="280" fill="#D9FF3F" fontStyle="italic" fontWeight="700">a</text>
      <rect x="0" y="0" width="400" height="400" fill="none" stroke="#111" strokeWidth="0.5" />
    </svg>
  );
}

export function TypeExperimentB({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#111" />
      <text x="200" y="150" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="80" fill="#D9FF3F" fontWeight="700" letterSpacing="-3">FORM</text>
      <text x="200" y="250" textAnchor="middle" fontFamily="Georgia, serif" fontSize="80" fill="#F04A32" fontStyle="italic">motion</text>
      <text x="200" y="350" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="20" fill="#F4F0E8" opacity="0.3" letterSpacing="8">— TYPE / 2026</text>
    </svg>
  );
}

export function TypeExperimentC({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#D9FF3F" />
      <text x="50" y="200" fontFamily="Georgia, serif" fontSize="200" fill="#111" fontStyle="italic">g</text>
      <text x="250" y="300" fontFamily="Georgia, serif" fontSize="200" fill="#111" fontStyle="italic">g</text>
      <line x1="0" y1="200" x2="400" y2="200" stroke="#111" strokeWidth="0.3" opacity="0.2" />
      <line x1="200" y1="0" x2="200" y2="400" stroke="#111" strokeWidth="0.3" opacity="0.2" />
    </svg>
  );
}

// ─── Logo Sketches for Identity Development ─────────────────────────────
export function LogoSketch({ variant = 0, crossed = false, className = '' }: { variant?: number; crossed?: boolean; className?: string }) {
  const marks = [
    <g key="0"><text x="50" y="65" fontFamily="Georgia, serif" fontSize="32" fill="#F4F0E8" fontStyle="italic">MH</text></g>,
    <g key="1"><text x="35" y="65" fontFamily="'Helvetica Neue', sans-serif" fontSize="28" fill="#F4F0E8" fontWeight="700" letterSpacing="-1">MH</text></g>,
    <g key="2"><path d="M30 70 L30 40 Q30 25 45 25 L55 25 Q70 25 70 40 L70 70" fill="none" stroke="#F4F0E8" strokeWidth="2" /><text x="50" y="85" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#F4F0E8" letterSpacing="2">MIRA</text></g>,
    <g key="3"><circle cx="50" cy="50" r="25" fill="none" stroke="#F4F0E8" strokeWidth="2" /><text x="50" y="56" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill="#F4F0E8" fontStyle="italic">m</text></g>,
    <g key="4"><rect x="25" y="25" width="50" height="50" fill="none" stroke="#F4F0E8" strokeWidth="2" /><text x="50" y="60" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="20" fill="#F4F0E8" fontWeight="700">MH</text></g>,
    <g key="5"><text x="50" y="65" fontFamily="Georgia, serif" fontSize="30" fill="#F4F0E8" fontStyle="italic" letterSpacing="-2">mh</text></g>,
    <g key="6"><path d="M30 70 Q50 30 70 70" fill="none" stroke="#F4F0E8" strokeWidth="2" /><text x="50" y="85" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#F4F0E8" letterSpacing="2">MIRA HOUSE</text></g>,
    <g key="7"><text x="50" y="60" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="22" fill="#F4F0E8" fontWeight="300" letterSpacing="3">M.H</text></g>,
    <g key="8"><path d="M35 70 L35 35 L65 70 L65 35" fill="none" stroke="#F4F0E8" strokeWidth="2" /></g>,
    <g key="9"><text x="50" y="58" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fill="#F4F0E8" fontStyle="italic">M</text><line x1="35" y1="65" x2="65" y2="65" stroke="#F4F0E8" strokeWidth="0.5" /><text x="50" y="78" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#F4F0E8" letterSpacing="2">HOUSE</text></g>,
    <g key="10"><circle cx="50" cy="50" r="20" fill="none" stroke="#F4F0E8" strokeWidth="1" /><path d="M40 50 Q50 35 60 50" fill="none" stroke="#F4F0E8" strokeWidth="1" /></g>,
    <g key="11"><path d="M30 70 L30 45 Q30 25 50 25 Q70 25 70 45 L70 70" fill="none" stroke="#F04A32" strokeWidth="2.5" /><text x="50" y="60" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="#F04A32" fontStyle="italic">Mira</text><text x="50" y="78" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#F04A32" letterSpacing="3">HOUSE</text></g>,
  ];
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {marks[variant % marks.length]}
      {crossed && <line x1="15" y1="85" x2="85" y2="15" stroke="#F04A32" strokeWidth="1" opacity="0.5" />}
    </svg>
  );
}

// ─── Packaging Box ─────────────────────────────
export function CoffeeBox({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boxGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A063" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B8904A" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path d="M50 80 L200 30 L350 80 L350 250 L200 280 L50 250 Z" fill="url(#boxGrad)" stroke="#111" strokeWidth="0.5" />
      <path d="M50 80 L200 130 L350 80" fill="none" stroke="#111" strokeWidth="0.5" opacity="0.3" />
      <path d="M200 130 L200 280" fill="none" stroke="#111" strokeWidth="0.5" opacity="0.3" />
      <text x="200" y="180" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="12" fill="#111" fontWeight="700" letterSpacing="2">COMMON</text>
      <text x="200" y="200" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="12" fill="#111" fontWeight="700" letterSpacing="2">GROUND</text>
      <text x="200" y="225" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#111" fontStyle="italic">variety pack</text>
      <text x="200" y="245" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#111" letterSpacing="2" opacity="0.5">6 × 250G — BENGALURU</text>
    </svg>
  );
}

// ─── Business Card Stack ─────────────────────────────
export function BusinessCardStack({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-5 200 140)">
        <rect x="60" y="40" width="280" height="160" fill="#F9F6F0" stroke="#8B2A1F" strokeWidth="0.5" opacity="0.9" />
        <path d="M80 160 L80 110 Q80 80 110 80 L130 80 Q160 80 160 110 L160 160" fill="none" stroke="#8B2A1F" strokeWidth="1.5" />
        <text x="200" y="120" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="#8B2A1F" fontStyle="italic">Mira House</text>
      </g>
      <g transform="rotate(3 200 140)">
        <rect x="60" y="60" width="280" height="160" fill="#8B2A1F" />
        <text x="200" y="130" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="#F9F6F0" fontStyle="italic">Mira House</text>
        <text x="200" y="155" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#F9F6F0" letterSpacing="4">EST. 2026 — BENGALURU</text>
        <line x1="120" y1="170" x2="280" y2="170" stroke="#F9F6F0" strokeWidth="0.3" opacity="0.3" />
      </g>
    </svg>
  );
}

// ─── Sticker Sheet ─────────────────────────────
export function StickerSheet({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#F4F0E8" />
      <circle cx="80" cy="80" r="40" fill="#3157FF" />
      <text x="80" y="86" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fill="#F4F0E8" fontStyle="italic">CG</text>
      <rect x="150" y="50" width="80" height="50" fill="#F04A32" />
      <text x="190" y="80" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="8" fill="#F4F0E8" fontWeight="700">COMMON</text>
      <text x="190" y="92" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="8" fill="#F4F0E8" fontWeight="700">GROUND</text>
      <circle cx="320" cy="80" r="30" fill="none" stroke="#111" strokeWidth="2" />
      <text x="320" y="86" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#111" fontStyle="italic">ritual</text>
      <rect x="50" y="150" width="100" height="40" fill="#111" />
      <text x="100" y="175" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="7" fill="#D9FF3F" fontWeight="700" letterSpacing="1">EVERYDAY</text>
      <ellipse cx="250" cy="170" rx="50" ry="25" fill="#D9FF3F" />
      <text x="250" y="176" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#111" fontStyle="italic">coffee</text>
      <text x="350" y="176" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#111" letterSpacing="2" opacity="0.3">2025</text>
      <text x="200" y="270" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="5" fill="#111" letterSpacing="3" opacity="0.3">COMMON GROUND — STICKER SHEET — 2025</text>
    </svg>
  );
}

// ─── Signage ─────────────────────────────
export function MiraHouseSignage({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#2B2622" />
      <path d="M100 280 L100 150 Q100 100 150 100 L180 100 Q230 100 230 150 L230 280" fill="none" stroke="#8B2A1F" strokeWidth="3" />
      <text x="165" y="200" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fill="#8B2A1F" fontStyle="italic">Mira</text>
      <text x="165" y="225" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fill="#8B2A1F" fontStyle="italic">House</text>
      <text x="165" y="320" textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" fontSize="6" fill="#8B2A1F" letterSpacing="5">RECEPTION →</text>
      <circle cx="165" cy="360" r="3" fill="#8B2A1F" opacity="0.6" />
    </svg>
  );
}
