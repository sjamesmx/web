'use client';

import { Logo } from './ui/Logo';
import { ClubButton } from './ui/ClubButton';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/soluciones', label: 'Soluciones' },
    { href: '/precios', label: 'Precios' },
    { href: '/vs-playtomic', label: 'vs Playtomic' },
    { href: '/recursos', label: 'Recursos' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-club-bg-primary/90 backdrop-blur-md border-b border-club-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Logo variant="club" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? 'text-club-accent font-medium'
                    : 'text-club-text-secondary hover:text-club-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ClubButton variant="ghost" size="sm" className="hidden md:block">
              Iniciar Sesión
            </ClubButton>
            <Link href="/demo">
              <ClubButton size="sm" className="hidden md:block">
                Agenda Demo
              </ClubButton>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}