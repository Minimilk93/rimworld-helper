import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-800 mb-3 lg:mb-6">
        <div className="flex justify-between items-center mx-auto">
          <div className="w-3/4 lg:1/4">
            <Link href="/">
              <span className="flex">
                <span className="w-36 lg:-mb-2">
                  <Image
                    src="/logo.png"
                    layout="responsive"
                    width={200}
                    height={50}
                    objectFit="contain"
                    alt="Rimworld"
                  />
                </span>

                <span className="ml-1 inline-block self-center text-sm mt-2 text-white">
                  Library
                </span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
