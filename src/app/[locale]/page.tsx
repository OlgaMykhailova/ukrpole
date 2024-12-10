import Advantages from "@/components/home/advantages/Advantages";
import Hero from "@/components/home/hero/Hero";
import Header from "@/components/shared/header/Header";
import Products from "@/components/home/products/Products";
import Footer from "@/components/shared/footer/Footer";
import Partners from "@/components/home/partners/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[72px] laptop:pt-[160px]">
        <Hero />
        <Products />
        <Advantages />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
