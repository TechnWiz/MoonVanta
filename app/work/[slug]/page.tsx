import type { Metadata } from "next";
import Link from "next/link";

const work = {
  noir: ["NOIR", "Digital Experience / Web Design", "A dark digital world built around editorial rhythm and cinematic interaction."],
  lunar: ["LUNAR", "Brand Identity / Art Direction", "A visual identity system inspired by lunar phases, light and tactile contrast."],
  orbit: ["ORBIT", "3D / Creative Development", "A spatial concept where sculptural 3D forms meet an expressive interface."],
  nova: ["NOVA", "Web Development / Interactive", "A fast, tactile web experience designed to make a new signal impossible to miss."],
} as const;

export function generateStaticParams() { return Object.keys(work).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params; const item = work[slug as keyof typeof work];
  return { title: item ? `${item[0]} — MOONVANTA` : "Work — MOONVANTA", description: item?.[2], alternates: { canonical: `/work/${slug}` } };
}
export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params; const item = work[slug as keyof typeof work];
  if (!item) return <main className="detail-page"><Link href="/">← MOONVANTA</Link><h1>Signal unavailable.</h1></main>;
  return <main className="detail-page"><Link href="/#work" className="detail-back">← Selected work</Link><p>CASE STUDY / {item[1]}</p><h1>{item[0]}</h1><div className="detail-orb" /><p className="detail-copy">{item[2]}</p><Link className="detail-link" href="/#contact">Start a similar project ↗</Link></main>;
}
