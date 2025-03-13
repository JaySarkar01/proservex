"use client"
import ServicesGrid from "./ServicesGrid";
import ServiceCarousel from "./ServiceCarousel";
import Footer from "@/app/components/footer";

export default function Beauty() {
  
  return(
    <div>
    <section className="pt-34 bg-gray-50 ">
    <ServicesGrid />
    <ServiceCarousel/>
    </section>
    <footer>
    
      <Footer/>
    </footer>
    </div>
  ) ;
}
