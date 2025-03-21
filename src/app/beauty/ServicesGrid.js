"use client";
import SplitText from "@/app/components/splittext";
import TiltedCard from "@/app/components/tiltedcard";
import { useRouter } from "next/navigation";
import Image from "next/image";

const services = [
  { name: "Salon Prime", img: "/women_care/salon-prime.webp", link: "/services/women-salon" },
  { name: "Spa for Women", img: "/women_care/spa-for-women.webp", link: "/services/men-salon" },
  { name: "Hair Studio for Women", img: "/women_care/hair-studio.webp", link: "/services/ac-repair" },
  { name: "Makeup & Styling Studio", img: "/women_care/makeup.webp", link: "/services/cleaning" },
  { name: "Salon Prime", img: "/women_care/salon-prime-men.webp", link: "/services/electrician" },
  { name: "Massage for Men", img: "/women_care/massag-for-man.webp", link: "/services/water-purifier" },
];

const mainservices = [
  { name: "Walls & rooms painting", img: "/pngs/construction.png", isNew: true, link: "/services/painting" },
  { name: "Wall Panels", img: "/pngs/bricks.png", link: "/services/wall-panels" },
];

export default function ServicesGrid() {
  const router = useRouter();

  return (
    <div className="px-6 md:px-16 gap-8 flex flex-col lg:flex-row items-center md:items-start justify-center lg:pb-16 bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-1/2 space-y-8 justify-end">
        <SplitText
          text="Beauty services at your doorstep!"
          className="font-bold text-3xl md:text-5xl text-center leading-relaxed md:leading-normal"
          delay={100}
          animationFrom={{ opacity: 0, transform: 'translateY(56px)' }}
          animationTo={{ opacity: 1, transform: 'translateY(0)' }}
          easing="easeOutCubic"
        />

        <div className="max-w-3xl p-6 bg-white border border-gray-200 rounded-xl shadow-md justify-end">
          <h2 className="text-lg md:text-2xl text-gray-700 font-semibold mb-6 text-center md:text-start">
          What are you looking for?
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex flex-col items-center transition hover:shadow-md cursor-pointer"
                onClick={() => router.push(service.link)}
              >
                <Image src={service.img} alt={service.name} width={70} height={70} className="rounded" />
                <p className="text-center text-gray-700 mt-2 text-sm font-medium">{service.name}</p>
              </div>
            ))}
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 justify-start">
            {mainservices.map((main, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex flex-col items-center transition hover:shadow-lg cursor-pointer relative"
                onClick={() => router.push(main.link)}
              >
                <Image src={main.img} alt={main.name} width={80} height={80} />
                <p className="text-center mt-2 text-gray-700 text-sm font-medium">{main.name}</p>

                {main.isNew && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-bold">
                    NEW
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

         {/* Ratings & Customers Section */}
         <div className="flex flex-wrap justify-center gap-10 sm:mt-12 md:mt-16">

{/* Reusable Component */}
{[
  { icon: "/icons/star.png", value: "4.7", label: "Service Rating" },
  { icon: "/icons/review.png", value: "13M+", label: "Customers Globally" },
].map((item, index) => (
  <div key={index} className="flex flex-row items-center gap-4">
    <Image src={item.icon} alt={item.label} width={32} height={32} className="w-8 h-8" />
    <div className="flex flex-col items-start">
      <h3 className="text-xl font-semibold">{item.value}</h3>
      <p className="text-gray-500">{item.label}</p>
    </div>
  </div>
))}


</div>
      </div>

      {/* Right Section - Image (Visible only on larger screens) */}
      <div className="hidden md:flex items-center justify-center w-full lg:w-1/2 mt-20">
        <TiltedCard
          imageSrc="/women_care/main-banner-beauty.webp"
          altText="ProServeX Banner"
          captionText="ProServeX"
          containerHeight="auto"
          containerWidth="600px"
          imageHeight="700px"
          imageWidth="37vw"
          rotateAmplitude={8}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">
              <span className="text-xl font-bold"> ProServe</span>
              <span className="text-orange-600 font-bold text-3xl">X</span>
            </p>
          }
        />
      </div>
    </div>
  );
}
