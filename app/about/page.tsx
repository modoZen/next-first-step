import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Esta es la pagina sobre mi servicio",
  keywords: ["About page", "Max"],
};

export default function AboutPage() {
  return <span className="text-7xl">About page!!</span>;
}
