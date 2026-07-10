import type { Metadata } from 'next';
import '../styles.css';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { Toaster } from '@/components/ui/sonner';
import { ClientFooterWrapper } from '@/components/site/ClientFooterWrapper';

export const metadata: Metadata = {
  title: "Sunny Ceylon Travels · Luxury Sri Lanka Journeys",
  description: "Bespoke luxury tours across Sri Lanka — cultural triangles, tea country, southern beaches, wildlife safaris and Ayurveda retreats crafted by local experts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e.filename && e.filename.includes('frame_start.js')) {
                  e.stopImmediatePropagation();
                }
                if (e.message && e.message.includes("Failed to execute 'removeChild' on 'Node'")) {
                  e.stopImmediatePropagation();
                }
              }, true);
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <ClientFooterWrapper />
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
