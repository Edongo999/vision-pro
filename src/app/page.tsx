import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import InfoBanner from "@/components/InfoBanner";
import Formations from "@/components/Formations";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/Bouton/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <InfoBanner />
        <About />
        <Formations />
        <WhatsAppFloatingButton />
      </main>

      <Footer />
    </>
  );
}
