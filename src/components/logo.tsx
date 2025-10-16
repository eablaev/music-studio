import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Logo() {
  const logoImage = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <Link
      href="/"
      className="flex flex-col items-center"
      aria-label="Sound Circle Studio Home"
    >
      <Image
        src={logoImage?.imageUrl || '/images/logo.png'}
        alt={logoImage?.description || 'Sound Circle Studio Logo'}
        data-ai-hint={logoImage?.imageHint || 'logo'}
        width={140}
        height={140}
        priority
      />
    </Link>
  );
}
