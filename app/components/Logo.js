// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="flex font-bold items-center hover:underline ">
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
        <span className="ml-1 text-xl">Engineered Log </span>
      </Link>     
    );
  }