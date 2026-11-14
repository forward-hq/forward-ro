'use client';
import { useState } from 'react';

export default function CopyBtn({ text, label = 'copiază', done = 'copiat ✓' }) {
    const [ok, setOk] = useState(false);
    return (
          <button
        type="button"
        className="copy"
              aria-label={`${label} ${text}`}
      onClick={async () => {
                try {
                            await navigator.clipboard.writeText(text);
                            setOk(true);
                            setTimeout(() => setOk(false), 1600);
                } catch {}
      }}
    >
      {ok ? done : label}
</button>
  );
}
