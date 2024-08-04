import { ReactNode } from "react";
import { Metadata } from "next";

import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "nprogress/nprogress.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import "@/styles/globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ninjasaas: Feel Free To Connect With Therapists",
  description:
    "ninjasaas is a platform that connects you with licensed mental health professionals. Schedule a consultation with an experienced therapist today. We are committed to helping you achieve your goals.",
};

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
