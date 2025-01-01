import Link from "next/link";

function Navbar() {
    return (
     <div>
      <div className="flex justify-between px-14 items-center bg-blue-950 text-white h-14">
        <div>
          <h1 className="text-xl lg:text-3xl font-bold md:text-xl ">SHER BAZ</h1>
        </div>
        <div>
          <ul className="flex gap-5">
            <Link href={"app"}><li className=" hover:text-yellow-500">Home</li></Link>
            <Link href={"/about"}><li className=" hover:text-yellow-500">About</li></Link>
            <Link href={"/services"}><li className=" hover:text-yellow-500">Services</li></Link>
            <Link href={"/contact"}><li className=" hover:text-yellow-500">Contact</li></Link>
          </ul>
        </div>
      </div>
     </div>
    );
  }
  export default Navbar