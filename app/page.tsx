import Image from "next/image";
import Hero from "@/components/home/Hero";
import ProductExplorer from "@/components/home/ProductExplore";
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero/>
      <ProductExplorer/>

      
    </div>
  );
}
