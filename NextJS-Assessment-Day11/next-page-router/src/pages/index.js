import dynamic from "next/dynamic";
import { useState } from "react";
const Popup = dynamic(() => import("./components/Popup"), { ssr: false });

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <div className="flex justify-center items-center w-full min-h-[500px]">
        {/* <h3 className="text-center mb-5 font-extrabold text-[100px]">Home Page</h3> */}
        <button
          onClick={() => setShowPopup(true)}
          className="button text-white px-6 py-3 rounded"
        >
          Open Popup
        </button>
        {showPopup && <Popup close={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}
