import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AdmitVerse - Study Abroad Journey',
  description: 'Your trusted partner for global education success',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}