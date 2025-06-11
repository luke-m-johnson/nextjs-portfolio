// --- components/Footer.tsx ---
export default function Footer() {
  return (
    <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
}
