// --- pages/index.tsx ---
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, HTMLMotionProps } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio site" />
      </Head>
      <Header />
      <main className="min-h-screen p-8">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
      </main>
      <Footer />
    </>
  );
}
