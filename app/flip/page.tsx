"use client";

import { useMemo, useState } from "react";
import { products, formatPrice } from "@/lib/data";
import Link from "next/link";
import { useCart } from "@/lib/cart";

type Zone = "shelves" | "cafe";

export default function FlipPage() {
  const books = useMemo(
    () => products.filter((p) => ["Fiction", "Essays", "Kids"].includes(p.category)),
    []
  );
  const cafe = useMemo(() => products.filter((p) => p.category === "Cafe Merch"), []);
  const [zone, setZone] = useState<Zone>("shelves");
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { add } = useCart();

  const list = zone === "shelves" ? books : cafe;
  const item = list[i] || products[0];
  const sample =
    zone === "shelves"
      ? String(item.sample || item.description)
      : `House note: ${item.description} — ask the barista for a demo pour when you pick up.`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted">Signature experience</p>
          <h1 className="font-display text-4xl md:text-5xl">Flip Shelf</h1>
          <p className="mt-2 max-w-xl text-brand-muted">
            Dual-world desk — browse the reading shelves or lean on the cafe counter. Flip for sample copy, then ship or pickup at checkout.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => { setZone("shelves"); setI(0); setFlipped(false); }}
            className={`btn-ghost !py-2 text-xs ${zone === "shelves" ? "!border-brand-primary !bg-brand-primary/5" : ""}`}
          >
            Shelves
          </button>
          <button
            type="button"
            onClick={() => { setZone("cafe"); setI(0); setFlipped(false); }}
            className={`btn-ghost !py-2 text-xs ${zone === "cafe" ? "!border-brand-accent !bg-brand-accent/10" : ""}`}
          >
            Cafe counter
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div
          className={`relative flex min-h-[360px] items-center justify-center rounded-sm border p-8 shelf-shadow ${
            zone === "shelves" ? "border-brand-primary/30 bg-brand-primary/5" : "border-brand-accent/40 bg-brand-cafe/5"
          }`}
        >
          <button
            type="button"
            aria-label="Flip page"
            onClick={() => setFlipped((v) => !v)}
            className="relative h-80 w-56"
            style={{ perspective: "1600px" }}
          >
            <div
              className="absolute inset-0 rounded-sm border border-brand-border bg-brand-surface shadow-2xl transition duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(-172deg)" : "rotateY(-4deg)",
              }}
            >
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-brand-surface to-brand-bg p-6" style={{ backfaceVisibility: "hidden" }}>
                <p className="font-display text-2xl leading-tight">{item.name}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-brand-muted">{item.category}</p>
                <div className="mt-10 h-px w-full bg-brand-border" />
                <p className="mt-4 text-xs text-brand-muted">{zone === "shelves" ? "Tap to read sample" : "Tap for cafe notes"}</p>
              </div>
              <div
                className="absolute inset-0 rounded-sm border border-brand-border bg-[#f8faf9] p-6"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted">Sample</p>
                <p className="mt-4 text-sm leading-relaxed">{sample}</p>
              </div>
            </div>
          </button>
        </div>

        <div className="card-soft rounded-sm p-6">
          <p className="text-xs uppercase tracking-wider text-brand-muted">Now viewing</p>
          <p className="mt-2 font-display text-3xl">{item.name}</p>
          <p className="mt-1 text-sm text-brand-muted">{formatPrice(item.price)}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {list.map((x, idx) => (
              <button
                key={x.id}
                type="button"
                onClick={() => { setI(idx); setFlipped(false); }}
                className={`btn-ghost !py-2 text-xs ${i === idx ? "!border-brand-primary" : ""}`}
              >
                {x.name}
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="btn-primary" onClick={() => add(item, 1, item.variants[0])}>
              Add to cart
            </button>
            <Link href={`/product/${item.id}`} className="btn-ghost">Deep PDP</Link>
          </div>
          <p className="mt-6 text-xs text-brand-muted">
            {brandCheckoutNote(zone)}
          </p>
        </div>
      </div>
    </div>
  );
}

function brandCheckoutNote(zone: Zone) {
  return zone === "shelves"
    ? "Ship nationwide or hold at the cafe desk — code PAGES5 adds $5 credit when you buy two books."
    : "Cafe merch ready for pickup in 2 hours — mugs ship in 3–5 days.";
}
