'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long.',
  }),
});

export function AuthenticationForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log('Form submitted with values:', values);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Replace with actual authentication logic (e.g., Firebase, Supabase, custom backend)
    // Example: try { await signInWithEmailAndPassword(auth, values.email, values.password); ... } catch (error) { ... }

    setIsLoading(false);
    toast({
      title: 'Authentication Successful',
      description: `Welcome back, ${values.email}! (Simulated)`,
      variant: 'default', // Use default variant styled by globals.css
    });
    // Optionally redirect user upon successful login
    // router.push('/dashboard');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <div className="relative">
                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                 <FormControl>
                   <Input placeholder="you@example.com" {...field} className="pl-10" />
                 </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
               <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} className="pl-10" />
                </FormControl>
               </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
          {isLoading ? 'Authenticating...' : 'Sign In / Sign Up'}
        </Button>
         {/* Optional: Add links for password reset or social logins */}
         {/* <div className="text-center text-sm text-muted-foreground">
            <a href="#" className="underline hover:text-accent">Forgot password?</a>
         </div> */}
      </form>
    </Form>
  );
}
