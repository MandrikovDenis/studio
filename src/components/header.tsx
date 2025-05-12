import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Feather } from 'lucide-react'; // Feather as a placeholder logo

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Feather className="h-6 w-6" />
          <span>AuthFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild className="hover:bg-primary/80 text-primary-foreground">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className="hover:bg-primary/80 text-primary-foreground">
            <Link href="/auth">Authenticate</Link>
          </Button>
          {/* Add more nav items here */}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/80 text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background text-foreground">
              <nav className="flex flex-col space-y-4 pt-6">
                 <Link href="/" className="flex items-center gap-2 font-semibold text-lg px-4 pb-4 border-b">
                    <Feather className="h-6 w-6 text-primary" />
                    <span className="text-primary">AuthFlow</span>
                 </Link>
                <Button variant="ghost" asChild className="justify-start text-base">
                  <Link href="/">Home</Link>
                </Button>
                <Button variant="ghost" asChild className="justify-start text-base">
                  <Link href="/auth">Authenticate</Link>
                </Button>
                {/* Add more mobile nav items here */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
