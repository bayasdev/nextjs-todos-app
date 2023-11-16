'use client';

import * as React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const items: { title: string; href: string; disabled?: boolean }[] = [
  {
    title: 'Codestrats',
    href: 'https://codestrats.com',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/bayasdev/nextjs-todos-app',
  },
];

export function Navbar() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex flex-wrap gap-6 md:gap-10 py-6">
      <Link href="/" className="items-center space-x-2 flex">
        <span className="font-bold">Todos App</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`/${segment}`)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
