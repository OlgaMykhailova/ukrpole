import Advantages from "@/components/home/advantages/Advantages";
import Hero from "@/components/home/hero/Hero";
import Products from "@/components/home/products/Products";
import Partners from "@/components/home/partners/Partners";
import Cooperation from "@/components/home/cooperation/Cooperation";
import News from "@/components/home/news/News";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Advantages />
      <Cooperation />
      <Partners />
      <News />
    </>
  );
}
