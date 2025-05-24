import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import VideoShowcase from "@/components/video/VideoShowcase";

export const viewport = {
  themeColor: "#000000"
};


export const metadata = {
  title: "Video Portfolio - Wardd Studio",
  description: "Explore our collection of commercial, promotional, and documentary videos showcasing our audiovisual expertise and creative vision.",
  openGraph: {
    title: "Video Portfolio - Wardd Studio",
    description: "Explore our collection of commercial, promotional, and documentary videos showcasing our audiovisual expertise and creative vision.",
    url: "https://warddstudio.com/videos",
    siteName: "Wardd Studio",
    images: [
      {
        url: "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_tleq2p.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function VideosPage() {
  return (
    <>
      <Header />
      <VideoShowcase />
      <Footer />
    </>
  );
}