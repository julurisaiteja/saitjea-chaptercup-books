"use client";
import Link from "next/link";
import { brand } from "@/lib/data";

export function StickyCta() {
  return (
    <>
      <div className="fixed bottom-5 left-5 z-40 hidden sm:block">
        <Link href={brand.isBooking ? "/quote" : "/shop"} className="btn-primary shadow-lg">
          {brand.cta}
        </Link>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d9cdb4] bg-[#fffdf8]/95 px-4 py-3 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-lg gap-3">
          <Link href="/flip" className="btn-primary flex-1 text-center text-sm">
            Flip Shelf
          </Link>
          <Link href="/shop" className="btn-ghost flex-1 text-center text-sm">
            {brand.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
