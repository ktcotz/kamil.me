import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="text-lg font-bold text-white">
      <span className="text-primary">Kamil</span>.me
    </Link>
  );
};
