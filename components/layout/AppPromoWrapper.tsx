
"use client";
import { usePathname } from "next/navigation";
import AppPromo from "@/components/home/AppPromo";

export default function AppPromoWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  if (!isHomePage) {
    return <AppPromo />;
  }
  
  return null;
}