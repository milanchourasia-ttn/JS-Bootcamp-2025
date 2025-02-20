import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer min-h-[500px] border-t-2 border-[#f2f2f2] bg-[#282828] text-[#ffffff] py-5">
    <h3 className="text-center mb-20 text-[50px] font-extrabold">Footer Heading</h3>
    <div className="container flex justify-center">
    <nav className="flex">
        <ul className="flex space-x-14 justify-center text-[#fff]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Recipies">Recipies</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  );
}
