'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function CartDrawer() {
  const pathname = usePathname();

  useEffect(() => {
    // Drawer logic handled by useCartStore
  }, [pathname]);

  return null;
}
