import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f9fdf0] text-foreground font-sans min-h-screen mt-10 selection">
      <Navbar />

      <div className="flex flex-col items-center justify-center tracking-wide text-center mt-40 px-2">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b to-black/10 bg-clip-text text-text-primary mb-2 mt-5 leading-normal">
          Cash tracking, <span className="tracking-wide gradient">redefined</span>
        </h1>
        <h5 className="text-base md:text-lg text-text-secondary max-w-xl tracking-wide">
          Meet the innovation in cash tracking — our AI-powered platform helps you take control of your money.
        </h5>

        <Link href='/profile' className="mt-10">
          <button className="mt-10 px-4 py-2 bg-accent-500 bg-gradient-to-b to-black/10 text-white rounded-md shadow-md hover:bg-green-700 hover:scale-105 transform transition duration-200 flex items-center gap-2">
            sign up
            <img src="arrow.svg" alt="Arrow Icon" className="w-5 h-6" />
          </button>
        </Link>
      </div>
      <Cards />

      {/* <div>
        <Image src="/wwim1.jpg" alt="Wallet Watch" className="w-[230px] h-auto mt-10" />
      </div> */}

      <Testimonials />

      {/* <div className="motto">@nitpreainternationalcompany2025</div> */}
    </main>
  );
}
