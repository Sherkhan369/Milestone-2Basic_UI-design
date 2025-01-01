import Image from "next/image";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";

 function Home() {
  return (
   <div>
    <div className="block sm:block lg:flex just justify-around items-center bg-blue-950 text-white h-auto sm:h-auto md:h-[450px]">
      <div className="mt-28">
        <h1 className="text-3xl font-bold ">Better Solutions For <br /> Your Business</h1>
        <p className="mt-8 text-gray-500" >We are team of talanted designers and devolpers making <br />website nextJs</p>
        <div className="flex mt-14 gap-8">
          <button className="bg-blue-600 w-28 h-10 rounded-xl mb-5">Get Started</button>
          <p>Watch Video</p>
        </div>
      </div>
      <div>
      <Image src={"/hero.png"} alt="logo" height={500} width={500}/>
      </div>
    </div>
    <About/>
    <Services/>
    <Contact/>
   </div>
   
  );
}
export default Home