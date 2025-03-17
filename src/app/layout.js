import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "IT Consulting And CTO Services in Mumbai | Headless Ecommerce Platform | Best Headless ECommerce Platforms In 2025 | Arnnima",
  description: "Arnnima is a leading provider of IT consulting and CTO services in Mumbai, offering a range of solutions tailored to meet the specific needs of businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NG0VGM8HP9"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NG0VGM8HP9');
  `}
      </Script>

      <body className={poppins.variable}>{children}</body>
    </html>
  );
}