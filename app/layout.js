import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FCI Institute of Management - Premier Education in Dehradun',
  description: 'FCI Institute of Management, Dehradun - India\'s oldest continuously run educational institution providing academically rigorous education for leadership and community service since 2000.',
  keywords: 'FCI Institute, Management Education, Dehradun, India, Hospitality Management, Business Studies',
  robots: 'index, follow',
  author: 'FCI Institute of Management',
  openGraph: {
    title: 'FCI Institute of Management - Premier Education in Dehradun',
    description: 'Join India\'s oldest continuously run educational institution for quality management and hospitality education.',
    type: 'website',
    locale: 'en_IN',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main >
          {children}
        </main>
        <Footer />
        
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
          {typeof window !== 'undefined' && window.AOS?.init({
            duration: 800,
            easing: 'ease-in-out-sine',
            delay: 100,
            once: true
          })}
        </script>
      </body>
    </html>
  );
}