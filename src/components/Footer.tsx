import Container from "@/components/Container";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="tw-bg-customDarkBlue tw-pt-10 tw-pb-6 tw-mt-auto">
            <Container>
                <div className="tw-flex tw-justify-center tw-gap-x-10 tw-gap-y-9 tw-items-center tw-flex-wrap">
                    <Link href={'/'}>
                        <Image src={'/images/svg/bobs_logo.svg'} alt="Bob’s Logo" width="95" height="25" />
                    </Link>

                    <Link href={'https://henriqueamascarin.vercel.app'} target="_blank">
                        <Image src={'/images/picture.webp'} alt="Henrique’s picture" width="538" height="510" className="tw-max-w-[105px] tw-rounded-[30px]" />
                    </Link>
                </div>
            </Container>
        </footer>
    )
}