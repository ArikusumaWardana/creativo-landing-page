import { ReactNode } from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
} 