import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import StickyROICTA from '../components/StickyROICTA';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://club.padelyzer.com'),
  title: {
    default: 'Padelyzer Club - Software #1 para Gestión de Clubes de Pádel | ROI Garantizado',
    template: '%s | Padelyzer Club'
  },
  description: 'Software completo para gestión de clubes de pádel. Aumenta ingresos 25% garantizado o te devolvemos tu dinero. Sin comisiones, sin sorpresas. Dashboard en tiempo real, reservas online, ligas de 500+ jugadores, torneos profesionales, finanzas completas y BI con IA. Migración gratuita desde Playtomic en 24h.',
  keywords: 'software padel, gestión club padel, sistema reservas padel, software deportivo mexico, administración club deportivo, padelyzer, playtomic alternativa, software clubes tenis, gestión canchas padel, sistema ligas padel, organizar torneos padel, finanzas club deportivo, business intelligence deportes',
  authors: [{ name: 'Padelyzer' }],
  creator: 'Padelyzer',
  publisher: 'Padelyzer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://club.padelyzer.com',
  },
  openGraph: {
    title: 'Padelyzer Club - Software #1 para Gestión de Clubes de Pádel',
    description: 'Aumenta ingresos 25% garantizado. Software completo sin comisiones. Dashboard, reservas, ligas 500+ jugadores, torneos, finanzas, BI. Demo personalizada gratis.',
    url: 'https://club.padelyzer.com',
    siteName: 'Padelyzer Club',
    images: [
      {
        url: '/og-image-club.png',
        width: 1200,
        height: 630,
        alt: 'Padelyzer Club - Software de Gestión para Clubes de Pádel',
      }
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padelyzer Club - Software #1 Gestión Clubes Pádel',
    description: 'Aumenta ingresos 25% garantizado. Sin comisiones. Dashboard, reservas, ligas, torneos, finanzas, BI.',
    images: ['/twitter-image-club.png'],
    creator: '@padelyzer',
    site: '@padelyzer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-verificacion-google',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Padelyzer',
    url: 'https://padelyzer.com',
    logo: 'https://club.padelyzer.com/logo.png',
    sameAs: [
      'https://facebook.com/padelyzer',
      'https://instagram.com/padelyzer',
      'https://linkedin.com/company/padelyzer'
    ]
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Padelyzer Club',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '5999',
      highPrice: '12999',
      priceCurrency: 'MXN',
      priceValidUntil: '2024-12-31',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'Plan Starter',
          price: '5999',
          priceCurrency: 'MXN'
        },
        {
          '@type': 'Offer',
          name: 'Plan Professional',
          price: '12999',
          priceCurrency: 'MXN'
        },
        {
          '@type': 'Offer',
          name: 'Plan Enterprise',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: 'Custom',
            priceCurrency: 'MXN'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127',
      reviewCount: '89',
      bestRating: '5',
      worstRating: '1'
    },
    description: 'Software completo para gestión de clubes de pádel con garantía de ROI del 25% en 90 días',
    url: 'https://club.padelyzer.com',
    screenshot: 'https://club.padelyzer.com/screenshot-dashboard.png',
    featureList: [
      'Dashboard en tiempo real',
      'Reservas online 24/7',
      'Gestión de ligas (500+ jugadores)',
      'Organización de torneos profesionales',
      'Módulo financiero completo',
      'Business Intelligence con IA',
      'Soporte 24/7 en español',
      'Sin comisiones por reserva',
      'Migración gratuita desde otros sistemas'
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Padelyzer',
      url: 'https://padelyzer.com'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://padelyzer.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Clubes',
        item: 'https://club.padelyzer.com'
      }
    ]
  };

  return (
    <html lang="es-MX">
      <head>
        <link rel="canonical" href="https://club.padelyzer.com" />
        <link rel="alternate" hrefLang="es-MX" href="https://club.padelyzer.com" />
        <link rel="alternate" hrefLang="es" href="https://club.padelyzer.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>
        {children}
        <StickyROICTA />
        <WhatsAppButton />
      </body>
    </html>
  );
}