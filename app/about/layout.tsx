import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Agence Jaraujo',
  description: 'The story of Agence Jaraujo - A journey across borders, shaping digital excellence',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}