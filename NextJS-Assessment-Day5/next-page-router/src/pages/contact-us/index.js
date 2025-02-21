"use client";
import { useEffect, useState } from "react";

export default function ContactUs() {

  return (
    <div className="container pb-[100px] min-h-[500px]">
      <h1 className="text-center py-[50px] font-extrabold text-[30px]">Contact Us</h1>
      <p className="text-center">
        Address:<br/>
        Keas 69 Str.<br/>
        15234, Chalandri<br/>
        Athens,<br/>
        Greece<br/>

        +30-2106019311 (landline)<br/>
        +30-6977664062 (mobile phone)<br/>
        +30-2106398905 (fax)
        </p>
    </div>
  );
}
