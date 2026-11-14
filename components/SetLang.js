'use client';
import { useEffect } from 'react';

export default function SetLang({ lang = 'en' }) {
    useEffect(() => {
          const prev = document.documentElement.lang;
          document.documentElement.lang = lang;
          return () => { document.documentElement.lang = prev; };
    }, [lang]);
    return null;
}
