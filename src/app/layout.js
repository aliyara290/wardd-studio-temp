import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  description:
    "A 360° agency crafting exceptional branding, design, marketing, and audiovisual experiences to take your brand to the next level.",
  title: "Wardd studio - 360 agency",
  keywords:
    "stretchedweb, Stretchedweb, Stretchedweb agency, web design, development, digital marketing, creative agency, innovative solutions, branding, online presence, SEO, graphic design, user experience, responsive design, social media management, content creation, brand identity, e-commerce solutions, technology solutions, custom web solutions, digital innovation",
  author: "Wardd studio",
  robots: "index, follow",
  canonical: "https://warddstudio.com",
  language: "en-US",
  distribution: "global",
  rating: "General",
  publisher: "Wardd studio", 
  copyright: "© 2024 Warddstudio",
  themeColor: "#161616",
  icons: {
    icon: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' }
    ],
    manifest: '/site.webmanifest',
    maskIcon: { url: '/safari-pinned-tab.svg', color: '#f15a24' },
  },
  themeColor: '#ffffff',
  msapplicationTileColor: '#da532c',
  openGraph: {
    title: "Wardd Studio - 360 agency",
    description:
      "A 360° agency crafting exceptional branding, design, marketing, and audiovisual experiences to take your brand to the next level.",
    url: "https://warddstudio.com",
    siteName: "Wardd ",
    images: [
      {
        url: "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/og-bg_whldbv.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/og-bg_whldbv.jpg",
        width: 1800,
        height: 1600,
        alt: "Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Analytics/>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
