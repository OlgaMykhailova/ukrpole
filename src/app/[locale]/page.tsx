import Hero from "@/components/home/hero/Hero";
import Header from "@/components/shared/header/Header";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <div className="pt-[72px] laptop:pt-[160px]">
        <Hero />
      </div>
    </main>
  );
}
