// --- pages/index.tsx ---
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const MotionH1 = motion<'h1'>('h1');

export default function Home() {
  return (
    <>
      <header>{/* Your Header here */}</header>
      <main className="min-h-screen p-8">
        <MotionH1
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Welcome to My Portfolio
        </MotionH1>
      </main>
    </>
  );
}
