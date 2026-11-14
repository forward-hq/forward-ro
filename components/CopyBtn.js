'use client';
import { useState } from 'react';

export default function CopyBtn({ text }) {
    const [ok, setOk] = useState(false);
    return (
          <button
        type="button"
        className="copy"
        aria-label={`Copiază adresa ${text}`}
      onClick={async () => {
                try {
                            await navigator.clipboard.writeText(text);
                            setOk(true);
                            setTimeout(() => setOk(false), 1600);
                } catch {}
      }}
    >
      {ok ? 'copiat ✓' : 'copiază'}
</button>
  );
}
