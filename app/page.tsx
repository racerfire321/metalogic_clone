import Image from "next/image";
import Hero from "@/components/home/Hero";
import ProductExplorer from "@/components/home/ProductExplore";
import Logic from "@/components/home/Logic";
import ServicesSection from "@/components/home/ServiceSection";
export default function Home() {
  return (
    <div className=" mt-0">
      <Hero/>
      <Logic/>
      <ProductExplorer/>
      <ServicesSection/>           

      
    </div>
  );
}
