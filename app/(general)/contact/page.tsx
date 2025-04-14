import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Esta es la pagina de contacto de mi servicio",
  keywords: ["Contact page", "Max"],
};

export default function ContactPage() {
  return <span className="text-7xl">Contact page!!</span>;
}
