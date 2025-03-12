"use client"
import ServicesGrid from "@/app/components/ServicesGrid";
import ServiceCarousel from "@/app/components/ServiceCarousel";
import Footer from "@/app/components/footer";

export default function Home() {
  
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
