export default function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' }
  const stroke = { stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' }
  const map = {
    car: (
      <svg {...common}>
        <circle cx="8" cy="12" r="4.5" {...stroke} />
        <path d="M12.5 12h8.5M19 10v4M17 11v2" {...stroke} />
      </svg>
    ),
    home: (
      <svg {...common}>
        <path d="M3 11L12 3l9 8v10H3V11z" {...stroke} strokeLinejoin="round" />
        <circle cx="12" cy="14" r="1.5" {...stroke} />
        <path d="M12 15.5V18" {...stroke} />
      </svg>
    ),
    building: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="15" rx="1" {...stroke} />
        <path d="M3 10h18M12 5v15" {...stroke} />
      </svg>
    ),
    safe: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="1" {...stroke} />
        <circle cx="14" cy="12" r="4" {...stroke} />
        <path d="M14 8v8M10 12h8" {...stroke} />
      </svg>
    ),
    smart: (
      <svg {...common}>
        <rect x="5" y="10" width="14" height="11" rx="1.5" {...stroke} />
        <path d="M8 10V7a4 4 0 018 0v3" {...stroke} />
        <circle cx="12" cy="15" r="1.3" fill="currentColor" />
        <path d="M12 16.3V18" {...stroke} />
      </svg>
    ),
    emergency: (
      <svg {...common}>
        <path d="M12 2l11 19H1L12 2z" {...stroke} strokeLinejoin="round" />
        <path d="M12 9v6M12 17.5v1" {...stroke} />
      </svg>
    ),
    arrow: (
      <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    key: (
      <svg {...common}>
        <circle cx="8" cy="12" r="4.5" {...stroke} />
        <path d="M12.5 12h8.5M19 10v4M17 11v2" {...stroke} />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" {...stroke} />
      </svg>
    ),
  }
  return map[name] || map.arrow
}
