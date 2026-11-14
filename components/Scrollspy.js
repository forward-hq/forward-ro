'use client';
import { useEffect } from 'react';

export default function Scrollspy() {
    useEffect(() => {
          const links = [...document.querySelectorAll('.toc a.ch')];
          if (!links.length) return;
          const map = new Map();
          links.forEach((l) => {
                  const sec = document.getElementById((l.getAttribute('href') || '').slice(1));
                  if (sec) map.set(sec, l);
          });
          const set = (active) =>
                  links.forEach((l) => {
                            l.classList.toggle('on', l === active);
                            if (l === active) l.setAttribute('aria-current', 'true');
                            else l.removeAttribute('aria-current');
                  });
          const obs = new IntersectionObserver(
                  (entries) => {
                            const vis = entries
                              .filter((e) => e.isIntersecting)
                              .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                            if (vis[0]) set(map.get(vis[0].target));
                  },
            { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
                );
          map.forEach((_, sec) => obs.observe(sec));
          return () => obs.disconnect();
    }, []);
    return null;
}
