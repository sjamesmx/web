import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';

export const metadata: Metadata = {
  title: 'Padelyzer CLUBES - Software de Gestión para Clubes de Pádel',
  description: 'El único sistema que GARANTIZA +30% más ingresos en 90 días. Sin comisiones ocultas. Con soporte 24/7 en español.',
  keywords: 'software, gestión, clubes, pádel, padel, reservas, torneos, ligas, business intelligence',
  metadataBase: new URL('https://web-club-3jowth3zz-jaime-alcazars-projects.vercel.app'),
  openGraph: {
    title: 'Padelyzer CLUBES - Tu Club Como Negocio Profesional',
    description: 'Software completo de gestión para clubes de pádel - 6 módulos integrados',
    images: ['/og-club.jpg'],
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padelyzer CLUBES - Gestión Profesional',
    description: 'Software completo para clubes de pádel - +30% más ingresos garantizados',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}