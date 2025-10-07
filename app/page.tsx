import Image from "next/image";
import Footer from "./components/footer";
import RoundedImage from "@/components/roundedImage";


export default function Home() {
  return (
    <div className=" font-sans grid grid-rows-[20px_1fr_300px] items-center justify-items-center min-h-screen  pb-20 gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        
      </main>
      <footer className="w-full row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Footer/>
      </footer>
    </div>
  );
}
