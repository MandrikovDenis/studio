import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h1 className="text-2xl font-bold">Личный кабинет</h1>
      <Link href="/form" className="text-blue-600 underline">
        Форма
      </Link>
    </main>
  );
}
