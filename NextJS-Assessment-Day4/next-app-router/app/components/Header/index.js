import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <div className="header flex items-center bg-[#220046] min-h-[60px]  justify-between">
      <div className="container flex items-center justify-between">
        <Image
          className="filter invert-[100%]"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <nav className="flex justify-end">
          <ul className="flex space-x-14 text-[#fff]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Recipies">Recipies</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
