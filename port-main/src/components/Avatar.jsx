import { useState } from "react";
import { motion } from "framer-motion";

export default function Avatar({
  src = "/manshi.jpg",
  alt = "Manshi Swaroop",
  size = 240,
}) {
  const [ok, setOk] = useState(true);
  const style = { width: size, height: size };

  return (
    <motion.div
      className="avatar"
      style={style}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {ok ? (
        <img
          className="avatar__img"
          src={src}
          alt={alt}
          onError={() => setOk(false)}
        />
      ) : (
        <div className="avatar__fallback" aria-label={alt}>
          {/* Simple female SVG avatar (no external calls) */}
          <svg viewBox="0 0 128 128" role="img" aria-label={alt}>
            <defs>
              <linearGradient id="bgGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#ffd6e7" />
                <stop offset="1" stopColor="#d1e3ff" />
              </linearGradient>
            </defs>
            <rect width="128" height="128" fill="url(#bgGrad)" />
            {/* Hair */}
            <path
              d="M24 62c0-26 16-38 40-38s40 12 40 38-12 30-40 30-40-4-40-30z"
              fill="#2b2b2b"
            />
            {/* Face */}
            <circle cx="64" cy="62" r="24" fill="#f7cbbd" />
            {/* Bangs */}
            <path
              d="M40 56c4-14 18-20 24-20s20 6 24 20c-8-4-26-8-48 0z"
              fill="#2b2b2b"
              opacity="0.9"
            />
            {/* Eyes */}
            <circle cx="54" cy="64" r="2.6" fill="#2b2b2b" />
            <circle cx="74" cy="64" r="2.6" fill="#2b2b2b" />
            {/* Smile */}
            <path d="M54 74c6 6 14 6 20 0" stroke="#b55a55" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Neck */}
            <rect x="58" y="80" width="12" height="10" rx="3" fill="#f0b9a9" />
            {/* Shirt */}
            <path d="M28 120c4-18 20-30 36-30s32 12 36 30" fill="#7a5cff" />
            {/* Shoulders overlay */}
            <path d="M28 120c10-10 24-18 36-18s26 8 36 18" fill="#6b50f0" opacity="0.75"/>
          </svg>
          <div className="avatar__initials">MS</div>
        </div>
      )}
    </motion.div>
  );
}
