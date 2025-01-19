import Image from 'next/image';
import Container from '@/components/Container';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="tw-bg-customDarkBlue tw-py-4">
      <Container>
        <Link href={'/'}>
          <Image src={'/images/svg/bobs_logo.svg'} alt="Bob’s Logo" width="95" height="25" />
        </Link>
      </Container>
    </header>
  );
}
