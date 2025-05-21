// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="flex font-semibold items-center hover:underline underline-offset-4 ">
        <Image src="/logo.png" alt="Logo" width={28} height={28} />
        <span className="ml-3 text-lg">Engineered Log </span>
      </Link>     
    );
  }