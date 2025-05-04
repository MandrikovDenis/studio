import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Welcome to AuthFlow</CardTitle>
          <CardDescription className="text-lg text-muted-foreground pt-2">
            Experience seamless authentication and smooth navigation.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p>
            This application demonstrates a clean authentication flow using modern web technologies.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/auth">Get Started</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
