import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NavLogix – Predictive Logistics Routing System",
  description:
    "AI-powered route risk analysis that combines real-time weather data and driver performance scores to predict delivery risks.",
  keywords: ["logistics", "route optimization", "risk prediction", "AI", "weather"],
  authors: [{ name: "NavLogix" }],
  openGraph: {
    title: "NavLogix – Predictive Logistics Routing System",
    description: "Smart route risk analysis powered by AI and real-time weather.",
    type: "website",
  },
};

import { AuthProvider } from "@/context/AuthContext";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </AuthProvider>
      </body>
    </html>
  );
}
