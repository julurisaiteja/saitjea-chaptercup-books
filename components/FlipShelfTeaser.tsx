"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/data";

const SAMPLE_BACK =
  "The map was wrong on purpose — that was the first kindness the city offered her. She folded it along a crease only locals knew and stepped into the alley where the rain smelled like ink and oranges.";

export function FlipShelfTeaser() {
  const book = products.find((p) => p.category === "Fiction") || products[0];
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="border-y border-brand-border bg-brand-surface/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c47b3a]">Signature tool</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Flip Shelf</h2>
          <p className="mt-3 text-brand-muted">
            Turn a real sample page before you commit shelf space. Fiction, essays, and kids titles include voice-led excerpts — a literary preview, not a product WebGL spin.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#1f4b7a]">Tap the cover · feel the page turn</p>
          <Link href="/flip" className="btn-primary mt-6 inline-flex">Open full flip desk</Link>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            aria-label="Flip sample page"
            onClick={() => setFlipped((v) => !v)}
            className="relative h-72 w-52 md:h-80 md:w-56"
            style={{ perspective: "1400px" }}
          >
            <div
              className="absolute inset-0 rounded-sm border border-brand-border bg-brand-surface shadow-2xl transition duration-700 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(-168deg)" : "rotateY(0deg)",
              }}
            >
              <div className="absolute inset-0 rounded-sm bg-brand-surface p-5 backface-hidden" style={{ backfaceVisibility: "hidden" }}>
                <p className="font-display text-2xl leading-tight">{book.name}</p>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-brand-muted">Cover · {book.category}</p>
                <div className="mt-8 h-1 w-12 bg-brand-accent" />
              </div>
              <div
                className="absolute inset-0 rounded-sm border border-brand-border bg-[#f8faf9] p-5"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              >
                <p className="text-[10px] uppercase tracking-wider text-brand-muted">Sample</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-fg">{String(book.sample || SAMPLE_BACK)}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
