import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <div className="header flex items-center bg-[#220046] min-h-[60px]  justify-between">
      <div className="container flex items-center justify-between">
        <Link href="/">
        <Image
          className="filter invert-[100%]"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        </Link>
        <nav className="flex justify-end">
          <ul className="flex space-x-14 text-[#fff]">
            <li className="hover:bg-blue-700 p-5 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-blue-700 p-5 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Link href="/products">Product</Link>
            </li>
            <li className="hover:bg-blue-700 p-5 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Link href="/Recipies">Recipies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
