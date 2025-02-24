import Banner from "@/components/Banner";
import NaturalCollections from "@/components/NaturalCollection";
import ProductCard from "@/components/ProductCard";
import ReviewSection from "@/components/Review";
import Image from "next/image";

export default function Home() {
  return (
   <div className="">
    <Banner />
    <ProductCard />
    <ReviewSection />
    <NaturalCollections />
   </div>
  );
}
