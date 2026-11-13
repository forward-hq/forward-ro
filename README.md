# forward.ro — noul site (Monografia · Klein #002FA7)

Site static Next.js. 1 pagină principală (7 capitole) + 57 pagini de artist
generate automat din `data/roster.json`.

## Rulare locală
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # generează site-ul static în /out
```

## Cum adaugi / modifici un artist (până la interfața de administrare)
Editezi `data/roster.json` → `roster`: nume, cat (Pop / Urban Hip-Hop /
Urban Trap / Rock/Indie/Alternativ / DJ), slug, booking (inițiale agenți din
`agents`), opțional `management: {agent, scope}`, `epicenter: true`, `bio`,
`socials {instagram,youtube,spotify,facebook}`, `videos [url-uri YouTube]`.
Apoi `npm run build` — pagina se generează singură.

## Deploy pe Vercel (15 minute, o singură dată)
1. Creezi cont GitHub pe firmă → urci folderul ăsta ca repo privat `forward-ro`.
2. Creezi cont Vercel cu același cont GitHub → "Import Project" → alegi repo-ul
   → Deploy (zero configurări; detectează Next.js singur).
3. În Vercel → Settings → Domains → adaugi `nou.forward.ro`; în DNS-ul
   OpenVision adaugi CNAME `nou` → `cname.vercel-dns.com`.
4. La lansare: muți `forward.ro` pe Vercel (A record / nameservere) — site-ul
   vechi rămâne neatins până atunci.
După asta, orice modificare urcată în GitHub se publică automat.

## De făcut înainte de lansare (checklist)
- [ ] Bio-uri migrate de pe site-ul vechi (script — le aduce Claude)
- [ ] Socials + video pentru artiștii noi (lista la Cristi)
- [ ] Fotografii artiști (originale din arhivă, NU din WordPress) + duotone
- [ ] Cronologia — reperele reale validate (cele de acum sunt DRAFT)
- [ ] Căsuțele demo@forward.ro și cariere@forward.ro create
- [ ] Analytics (Plausible) + Google Search Console (contul forwardromania)
- [ ] Versiunea EN (scrisă, nu tradusă)
- [ ] Redirecturi 301 pentru paginile vechi care nu mai există (ex. /talents vechi)
