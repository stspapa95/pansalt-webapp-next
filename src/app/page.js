import Script from "next/script";
//= Scripts
import generateStylesheetObject from "@/common/generateStylesheetsObject";
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Navbar from "@/components/Common/Navbar";
import SliderHeader from "@/components/Headers/SliderHeader";
import AboutUs from "@/components/AboutUs/AboutUs1";
import Services from "@/components/Services/Services1";
import Works from "@/components/Works/Works1";
import Numbers from "@/components/Numbers/Numbers1";
import Testimonials from "@/components/Testimonials/TestimonialsWithVideo";
import SkillsCircle from "@/components/Skills/SkillsCircle";
import Clients from "@/components/Clients/Clients1";
import Blogs from "@/components/Blogs/Blogs1";
import CallToAction from "@/components/Others/CallToAction";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "Pansuola - Main Page",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: generateStylesheetObject([
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
      "/css/dark.css",
    ]),
  },
};

export default function LandingPreview() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <Navbar />
      <SliderHeader />

      <div className="main-content">
        <AboutUs />
        <Services />
        <Works />
        <Numbers />
        <Testimonials />
        <SkillsCircle theme="light" />
        <Clients theme="light" />
        <Blogs />
        <CallToAction />
        <Footer />
      </div>

      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/simpleParallax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/wowInit.js"></Script>
    </>
  );
}
