import "@/styles/globals.css";
import Layout from "@/components/layout";
export const metadata = {
  description:
    "Delivering innovative web design and development with impactful digital marketing campaigns that catapult brands forward.",
  title: "Stretchedweb - Creative agency",
  keywords:
    "stretchedweb, Stretchedweb, Stretchedweb agency, web design, development, digital marketing, creative agency, innovative solutions, branding, online presence, SEO, graphic design, user experience, responsive design, social media management, content creation, brand identity, e-commerce solutions, technology solutions, custom web solutions, digital innovation",
  author: "Stretchedweb",
  robots: "index, follow",
  canonical: "https://stretchedweb.com",
  language: "en-US",
  distribution: "global",
  rating: "General",
  publisher: "Stretchedweb",
  copyright: "© 2024 Stretchedweb",
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
    title: "Stretchedweb Studio - Creative agency",
    description:
      "Delivering innovative web design and development with impactful digital marketing campaigns that catapult brands forward.",
    url: "https://stretchedweb.com",
    siteName: "Stretchedweb",
    images: [
      {
        url: "https://stretchedweb.com/images/og/og-bg.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://stretchedweb.com/images/og/og-bg.jpg",
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
