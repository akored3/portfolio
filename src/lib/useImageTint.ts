"use client";

import { useEffect, useState } from "react";

/**
 * Samples an image's dominant background color by averaging its corner and
 * edge-midpoint pixels (for avatars, the edges are the backdrop). Returns an
 * "R G B" string for use in rgb(R G B / alpha). Falls back to the muted token
 * until the image loads, and adapts automatically if `src` changes.
 */
export function useImageTint(src: string, fallback = "33 37 49") {
  const [tint, setTint] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      try {
        const s = 24;
        const canvas = document.createElement("canvas");
        canvas.width = s;
        canvas.height = s;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, s, s);
        const m = Math.floor(s / 2);
        const points = [
          [1, 1],
          [s - 2, 1],
          [1, s - 2],
          [s - 2, s - 2],
          [m, 1],
          [1, m],
          [s - 2, m],
        ];
        let r = 0;
        let g = 0;
        let b = 0;
        for (const [x, y] of points) {
          const d = ctx.getImageData(x, y, 1, 1).data;
          r += d[0];
          g += d[1];
          b += d[2];
        }
        const n = points.length;
        if (!cancelled) {
          setTint(
            `${Math.round(r / n)} ${Math.round(g / n)} ${Math.round(b / n)}`,
          );
        }
      } catch {
        /* canvas blocked (shouldn't happen for same-origin); keep fallback */
      }
    };
    return () => {
      cancelled = true;
    };
  }, [src]);

  return tint;
}
