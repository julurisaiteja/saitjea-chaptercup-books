import Link from "next/link";
import Image from "next/image";
import { brand, products, formatPrice } from "@/lib/data";
import { HeroCinema } from "@/components/HeroCinema";
import { FlipShelfTeaser } from "@/components/FlipShelfTeaser";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 6);
  const shelf = products.slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
        <HeroCinema video={brand.heroVideo} image={brand.heroImage} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4ead4]/55 via-[#ebe0c8]/75 to-[#f7efe0]" />
        <div className="absolute -right-10 top-10 h-64 w-64 rotate-3 torn opacity-50" aria-hidden>
          <img src={brand.heroImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="tape absolute -left-2 top-0 px-6 py-1 text-[10px] font-bold uppercase tracking-widest text-[#1e2430]/80">
            Staff collage · Indie presses
          </div>
          <div className="mt-10 grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="collage-card torn p-8 md:p-12 animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c47b3a]">Pearl District scrapbook</p>
              <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">{brand.name}</h1>
              <p className="mt-4 font-display text-xl italic text-[#1f4b7a] animate-rise-delay">{brand.tagline}</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#5c6575] animate-rise-late">{brand.description}</p>
              <div className="mt-8 flex flex-wrap gap-3 animate-rise-late">
                <Link className="btn-primary" href="/flip">Try Flip Shelf</Link>
                <Link className="btn-ghost" href="/shop">{brand.cta}</Link>
              </div>
            </div>
            <div className="relative min-h-[360px] animate-rise-delay">
              {shelf.map((p, i) => (
                <Link key={p.id} href={`/product/${p.id}`}
                  className={`collage-card absolute overflow-hidden ${i===0?"left-0 top-0 w-[70%] rotate-n2":i===1?"right-0 top-16 w-[55%] rotate-2":"bottom-0 left-10 w-[60%] rotate-3"}`}>
                  <div className="relative aspect-[4/5]">
                    <Image src={p.image} alt={p.name} fill className="object-cover" sizes="280px" />
                  </div>
                  <div className="flex items-center justify-between gap-2 p-3 text-sm">
                    <span className="font-display">{p.name}</span>
                    <span className="text-[#5c6575]">{formatPrice(p.price)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden border-y border-[#d9cdb4] bg-[#1f4b7a] py-3 text-white">
        <div className="marquee-track text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
          {[...brand.marquee, ...brand.marquee].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c47b3a]">Staff shelves</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Featured from the collage</h2>
            <p className="mt-2 max-w-md text-sm text-[#5c6575]">Fiction, essays, and cafe merch — scrapbook merchandising, not a sterile grid alone.</p>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-[#1f4b7a] hover:underline">All shelves →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <FlipShelfTeaser />
      <Newsletter />
    </>
  );
}
