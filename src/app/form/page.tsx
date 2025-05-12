'use client';

import { useState } from 'react';

export default function FormPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Отправлено: ${name}, ${message}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h1 className="text-xl font-bold">Форма</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-64">
        <input
          name="name"
          type="text"
          placeholder="Имя"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="message"
          type="text"
          placeholder="Сообщение"
          className="border p-2 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Отправить
        </button>
      </form>
    </main>
  );
}
