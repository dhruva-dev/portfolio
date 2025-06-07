import DownloadCVButton from "./components/download";
import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";
import { ComputerDesktopIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import Navigation from "./navigtion";

export default function Home() {
  return (
    <>
      <div className="px-6">
        <div className="flex justify-between py-3 items-center">
          <Logo />
          <div className="flex gap-10">
            <div className="hidden sm:block">
              <Navigation />
            </div>
            <ThemeToggle />
          </div>
        </div>
        <div className="sm:hidden flex justify-center mt-4">
          <Navigation />
        </div>
        <div className="flex justify-center gap-2 h-100 items-center">
          <div>
            <div className="mb-2">
              <h2 className="text-lg md:text-2xl italic text-[#f4a261]">HELLO I&apos;M</h2>
              <h1 className="text-xl md:text-4xl font-semibold">Ratnesh Singh</h1>
              <h1 className="text-sm md:text-base">Senior Frontend Engineer</h1>
            </div>
            <p className="mb-4 text-xs md:text-sm">Transforming ideas <LightBulbIcon className="size-6 inline" /> into digital reality <ComputerDesktopIcon className="size-6 inline" /></p>
            <DownloadCVButton />
          </div>
          <div>
            <Image src="/images/user.png" alt="Logo" width={150} height={200} />
          </div>
        </div>
      </div>
    </>
  );
}

