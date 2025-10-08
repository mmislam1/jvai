import Image from "next/image";
import Footer from "./components/footer";
import RoundedImage from "@/components/roundedImage";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div className="w-full font-sans grid grid-rows-[90px_1fr_130px] items-center min-h-screen  pb-20 ">
      <header className=" w-full">
        <Navbar></Navbar>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      </main>
      <footer className="w-full border border-black row-start-3 flex flex-wrap items-center justify-center">
        <Footer/>
      </footer>
    </div>
  );
}
