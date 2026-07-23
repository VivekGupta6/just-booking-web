import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CarRentalsSection from "@/components/home/CarRentalsSection";
import FlightHotelSection from "@/components/home/FlightHotelSection";
import FlightsSection from "@/components/home/FlightsSection";
import HeroNavigation from "@/components/home/HeroNavigation";
import PopularBlogsSection from "@/components/home/PopularBlogsSection";
import PromoHeroCard from "@/components/home/PromoHeroCard";
import StaysSection from "@/components/home/StaysSection";
import GsapPageEffects from "@/components/motion/GsapPageEffects";
import { NAV_SECTIONS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col">
      <GsapPageEffects />
      <Header />

      <main className="w-full flex-1 pb-10 sm:pb-14 lg:pb-20">
        <HeroNavigation />
        <PromoHeroCard />

        {NAV_SECTIONS.map((section) => {
          if (section.id === "stays") {
            return <StaysSection key={section.id} />;
          }

          if (section.id === "flights") {
            return <FlightsSection key={section.id} />;
          }

          if (section.id === "car-rentals") {
            return <CarRentalsSection key={section.id} />;
          }

          if (section.id === "flight-hotel") {
            return <FlightHotelSection key={section.id} />;
          }

          return null;
        })}

        <PopularBlogsSection />
      </main>

      <Footer />
    </div>
  );
}
