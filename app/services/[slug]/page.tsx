import type { Metadata } from "next";
import Link from "next/link";

const services = {
  "web-design": ["Web Design", "Interfaces and visual systems that make the brand feel immediately distinct."],
  "web-development": ["Web Development", "Fast, responsive websites with considered motion and reliable frontend engineering."],
  "visual-identity": ["Visual Identity", "Graphic language, identity systems and visual codes with a point of view."],
  "3d-motion": ["3D / Motion", "Digital objects and moving image that bring dimensionality to a brand world."],
  "telegram-bots": ["Telegram Bots", "Useful automations and integrations shaped around real product needs."],
  "creative-development": ["Creative Development", "Experimental interactions and creative technology built for memorable launches."],
} as const;

export function generateStaticParams() { return Object.keys(services).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params; const item = services[slug as keyof typeof services];
  return { title: item ? `${item[0]} — MOONVANTA` : "Services — MOONVANTA", description: item?.[1], alternates: { canonical: `/services/${slug}` } };
}
export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params; const item = services[slug as keyof typeof services];
  if (!item) return <main className="detail-page"><Link href="/">← MOONVANTA</Link><h1>Service unavailable.</h1></main>;
  return <main className="detail-page"><Link href="/#services" className="detail-back">← Capabilities</Link><p>SERVICE / MOONVANTA</p><h1>{item[0]}</h1><div className="detail-orb service-orb" /><p className="detail-copy">{item[1]}</p><Link className="detail-link" href="/#contact">Discuss your project ↗</Link></main>;
}
