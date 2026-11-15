'use client';
import { useEffect, useRef } from 'react';

export default function HoverPreview() {
  const ref = useRef(null);
  const imref = useRef(null);
  useEffect(() => {
    const fl = ref.current;
    const im = imref.current;
    if (!fl || !im) return;
    let fx = 0, fy = 0, cx = 0, cy = 0, raf;
    const mm = (e) => { cx = e.clientX; cy = e.clientY; };
    document.addEventListener('mousemove', mm);
    const an = () => {
      fx += (cx - fx) * 0.13;
      fy += (cy - fy) * 0.13;
      fl.style.left = fx + 26 + 'px';
      fl.style.top = fy - 150 + 'px';
      raf = requestAnimationFrame(an);
    };
    raf = requestAnimationFrame(an);
    const over = (e) => {
      const r = e.target.closest ? e.target.closest('.rrow') : null;
      if (!r) return;
      const p = r.dataset.photo;
      if (p) {
        if (im.getAttribute('src') !== p) im.src = p;
        im.style.display = 'block';
        fl.style.background = 'var(--accent)';
      } else {
        im.style.display = 'none';
        const i = +(r.dataset.i || 0);
        const ac = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        fl.style.background = `radial-gradient(75% 60% at ${28 + (i * 31) % 45}% 30%,color-mix(in srgb,${ac} 52%,#fff),transparent 62%),radial-gradient(55% 70% at ${60 + (i * 17) % 30}% 78%,color-mix(in srgb,${ac} 70%,#000),transparent 58%),linear-gradient(${150 + i * 9}deg,#0f0f14,color-mix(in srgb,${ac} 40%,#0a0a10) ${46 + (i * 2) % 20}%,#07070b)`;
      }
      fl.classList.add('on');
    };
    const out = (e) => {
      if (!e.target.closest || !e.target.closest('.rrow')) return;
      const to = e.relatedTarget;
      if (to && to.closest && to.closest('.rrow')) return;
      fl.classList.remove('on');
    };
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      document.removeEventListener('mousemove', mm);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="hovflo" ref={ref} aria-hidden="true">
    <img ref={imref} alt="" loading="lazy" />
    </div>
  );
}
