import { syne } from "@/app/layout";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className={`flex flex-col gap-3 ms-2 ${syne.className}`}>
      <Link href={"#"} className="text-xl">INSTAGRAM</Link>
      <Link href={"#"} className="text-xl">FACEBOOK</Link>
      <Link href={"#"} className="text-xl">TWITTER</Link>
      <Link href={"#"} className="text-xl">WHATSAPP</Link>
      <Link href={"#"} className="text-xl">TIKTOK</Link>
      <Link href={"#"} className="text-xl">YOUTUBE</Link>
    </footer>
  );
}
