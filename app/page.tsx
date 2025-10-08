import Image from "next/image";
import Footer from "./components/footer";
import RoundedImage from "@/components/roundedImage";
import Navbar from "./components/navbar";
import Button from "@/components/button";


export default function Home() {
  return (
    <div className="w-full font-sans grid grid-rows-[100px_1fr_130px] min-h-screen ">
      <header className=" w-full">
        <Navbar></Navbar>
      </header>
      <main className="flex flex-col row-start-2 items-center justify-start self-start">
        <div className="flex flex-row justify-between gap-[75px] w-full h-[495px] bg-[#333333] px-[150px] pt-[32px] pb-[50px]">
          <div className="pt-10 pr-20">
            <p className='title1 text-white'>Simplify Your Parts Delivery </p>
            <p className="title1 text-[#C59325]">-Track, Manage, Deliver</p>
            <div className="flex flex-col items-start justify-start mt-45">
              <div className="flex flex-row items-center justify-between h-[60px] w-[350px]">
                <Button size={60} text='Get Started' className="text1 px-10"/>
                <a href="https/youtube.com" className=""><h3 className=" text1 text-[#ffffff]">Watch Demo</h3></a>
              </div>
            </div>
          </div>
          <div className="">
            <RoundedImage src='/driver2.png' curvature={80} side='left' height={542} width={385}/>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
              <div className="flex gap-4 m-10">
                <p className="title1 text-black">How it </p> 
                <p className="title1 text-[#ddaa33]">Works</p> 
              </div>
              <p className="text1 px-70">Order your truck parts, request a delivery, and get them at your doorstep - fast, reliable, and hassle-free</p>
          </div>
          <div className="flex flex-row items-center justify-between px-[150px] m-10 flex-[1fr-1fr-1fr] h-[350px] w-full ">
              <div className="flex flex-col h-full min-w-[350px] rounded-[10%] overflow-hidden shadow-xl">
                <div className="flex h-[35%] w-full bg-[#ddaa3355]"></div>
                <div className="flex"></div>
              </div>
              <div className="flex flex-col h-full min-w-[350px] rounded-[10%] overflow-hidden shadow-xl">
                <div className="flex h-[35%] w-full bg-[#ddaa3355]"></div>
                <div className="flex"></div>
              </div>
              <div className="flex flex-col h-full min-w-[350px] rounded-[10%] overflow-hidden shadow-xl">
                <div className="flex h-[35%] w-full bg-[#ddaa3355]"></div>
                <div className="flex"></div>
              </div>
              
          </div>
        </div>
      </main>
      <footer className="w-full border border-black row-start-3 flex flex-wrap items-center justify-center">
        <Footer/>
      </footer>
    </div>
  );
}
