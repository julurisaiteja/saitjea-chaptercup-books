import productsA from "./products-a.json";
import productsB from "./products-b.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  related: string[];
  faq: [string, string][];
  specs: Record<string, string>;
  variants: string[];
  [key: string]: unknown;
};

export const brand = {
  slug: "chaptercup-books",
  name: "Chapter & Cup",
  tagline: "Stories to keep. Mugs to linger.",
  niche: "Bookstore + cafe merch",
  description: "An independent bookstore with cafe merch — novels, essays, stationery, and cozy drinkware.",
  cta: "Browse shelves",
  checkoutNote: "Local pickup at the cafe or nationwide shipping.",
  heroImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2400&q=80",
  heroVideo: "https://videos.pexels.com/video-files/4863397/4863397-uhd_2560_1440_25fps.mp4",
  categories: ["Fiction","Essays","Kids","Stationery","Cafe Merch"] as string[],
  isBooking: false,
  offer: {"code":"PAGES5","label":"Buy 2 books, $5 cafe credit","ends":"Weekend special"},
  loyalty: "Library Card — stamps toward free pour-overs",
  stats: [["8k+","titles rotated"],["120","cafe seats"],["4.9","reader rating"],["Daily","story hour"]] as [string, string][],
  marquee: ["Indie presses ·","House blend ·","Flip previews ·","Staff picks ·","Quiet corners ·"] as string[],
  reviews: [["Harper J.",5,"Flip preview sold me on Quiet Atlas before I finished my latte."],["Luis G.",5,"Best bookstore cafe vibe. Mug quality is excellent."],["Nina W.",4,"Kids corner is magic. Tiny Astronaut was a hit."]] as [string, number, string][],
  ai: [["Something rainy and coastal?","Harbor Lights — mystery with rain-soaked streets. Pair with House Blend Mug."],["Gift for a new parent?","Moonlit Fox + Poet's Bookmark Set. Gift wrap free in-store."],["Do you roast coffee?","We brew a house blend. Pour-Over Kit includes beans and dripper."],["Can I reserve a table?","Cafe walk-ins welcome; quiet tables after 3pm. Use PAGES5 online."]] as [string, string][],
  blog: [["Staff picks for slow Sundays","Reads"],["How we bind journals","Craft"],["Cafe playlist: October","Cafe"]] as [string, string][],
  stores: ["Chapter & Cup — Pearl District"] as string[],
  nicheKind: "books" as string,
};

export const products: Product[] = [...(productsA as Product[]), ...(productsB as Product[])];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(p: Product) {
  return p.related.map(getProduct).filter(Boolean) as Product[];
}
