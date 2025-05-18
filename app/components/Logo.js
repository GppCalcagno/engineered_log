// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="flex font-semibold items-center hover:underline underline-offset-4 ">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="ml-1 text-lg">Engineered Log </span>
      </Link>     
    );
  }