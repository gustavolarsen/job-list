import './globals.css';
import { Overpass } from 'next/font/google';

const inter = Overpass({ subsets: ['latin'] });

export const metadata = {
  title: 'Job Listings with filtering',
  description: 'Frontend Mentor Challenge',
};
interface RootlayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootlayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
