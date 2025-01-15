import Advantages from "@/components/home/advantages/Advantages";
import Cooperation from "@/components/home/cooperation/Cooperation";
import Hero from "@/components/home/hero/Hero";
import News from "@/components/home/news/News";
import Partners from "@/components/home/partners/Partners";
import Products from "@/components/home/products/Products";

export default function HomePage() {
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
