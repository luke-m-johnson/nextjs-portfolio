// --- components/Header.tsx ---
import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 shadow bg-white dark:bg-gray-900">
      <nav className="flex justify-between">
        <div className="text-lg font-bold">MyPortfolio</div>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}
