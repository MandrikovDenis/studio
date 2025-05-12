import Link from 'next/link';
import { Feather } from 'lucide-react'; 
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Feather className="h-6 w-6" />
          <span>Test</span>
        </Link>
      </div>
    </header>
  );
}
