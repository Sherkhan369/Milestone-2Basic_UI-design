import Image from "next/image";
import Link from "next/link";
function Footer() {
    return(
        <div className="bg-[url('/footer.jpg')] bg-cover ">
           
            <div className="flex justify-between px-12 pt-16 text-black ">
                <div>
                    <h1 className="text-3xl font-semibold text-center mb-12">Sher Baz</h1>
                    <address>h-13336,sindh,Karachi,Pakistan</address>
                    <p>Phone:03434943790</p>
                    <p>Email: <a href="mailto:sherkhanllc369@gmail.com">sherkhanllc369@gmail.com </a></p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-12">Useful Links</h1>
                    <ul className=" pl-6 mt-3 ">
                        <Link href={"/app"}><li><a href="">Home</a></li></Link>
                        <Link href={"about"}><li><a href="">About</a></li></Link>
                        <Link href={"services"}><li><a href=""> Services</a></li></Link>
                        <Link href={"contact"}> <li><a href=""></a>Contact</li></Link>
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold text-center mb-12">Our Services</h1>
                    <ul className=" pl-6 mt-3">
                        <li><a href="">Web Designing</a></li>
                        <li><a href="">Web Development</a></li>
                        <li><a href=""> Marketing</a></li>
                        <li><a href=""></a>Product Manager</li>
                    </ul>
                </div>
            </div>
            <div className="  text-black pt-10">
                <h1 className="text-3xl font-semibold  mb-12">Follow Us</h1>
                <div className="flex  gap-3">
                <Image src={"/facebook.png"} alt="logo" height={25} width={25}/>
                <a href="">Facebook</a>
                </div>
                <div className="flex gap-3">
                <Image src={"/instagram.png"} alt="logo" height={25} width={25}/>
                <a href="">Instagram</a>
                </div>
                <div className="flex gap-3">
                <Image src={"/twitter.png"} alt="logo" height={25} width={25}/>
                <a href="">Instagram</a>
            </div>
            </div>
            
        </div>
    );
}
export default Footer