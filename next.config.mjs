/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // site 100% static — fără server, fără suprafață de atac
  trailingSlash: true,       // păstrează formatul /talents/{slug}/ de pe site-ul vechi (SEO)
  images: { unoptimized: true },
};
export default nextConfig;
