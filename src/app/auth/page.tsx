import { AuthenticationForm } from '@/components/auth-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AuthPage() {
  return (
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">Login or Sign Up</CardTitle>
          <CardDescription>Enter your credentials below</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthenticationForm />
        </CardContent>
      </Card>
    </div>
  );
}
