"use client";

import React from "react";
import { motion } from "framer-motion";

function FloatingPaths({ position = 1 }) {
  const paths = Array.from({ length: 36 }, (_, i) => {
    const offset = i * 5 * position;
    const verticalOffset = i * 6;

    return {
      id: i,
      d: `M-${380 - offset} -${189 + verticalOffset}C-${380 - offset} -${189 + verticalOffset} -${
        312 - offset
      } ${216 - verticalOffset} ${152 - offset} ${343 - verticalOffset}C${
        616 - offset
      } ${470 - verticalOffset} ${684 - offset} ${875 - verticalOffset} ${
        684 - offset
      } ${875 - verticalOffset}`,
      width: 2 + i * 0.1,
      opacity: 0.4 + i * 0.015,
      blur: 2 + (i % 5),
    };
  });

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 696 316"
      fill="none"
    >
      <defs>
        {paths.map((path) => (
          <filter
            id={`glow-${path.id}`}
            key={`glow-${path.id}`}
            x="-100%" y="-100%" width="400%" height="400%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation={path.blur}
              floodColor="white"
              floodOpacity="0.9"
            />
          </filter>
        ))}
      </defs>

      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="#ffffff"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          filter={`url(#glow-${path.id})`}
          initial={{ pathLength: 0.2, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0.5, 0.9, 0.5],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 14 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

export default function BackgroundPaths() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
