import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center w-full min-h-[500px]">
        <h3 className="text-center mb-5 font-extrabold text-[100px]">Home Page</h3>
      </div>
    </div>
  );
}
