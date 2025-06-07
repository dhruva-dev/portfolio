import DownloadCVButton from "./components/download";
import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="px-6">
        <div className="flex justify-between py-3 items-center">
          <Logo />
          <ThemeToggle />
        </div>
        <div className="flex justify-center gap-2 h-100 items-center">
          <div>
            <h2 className="text-lg md:text-2xl italic text-[#f4a261]">HELLO I&apos;M</h2>
            <h1 className="text-xl md:text-4xl font-semibold">Ratnesh Singh</h1>
            <h1 className="text-sm md:text-base">Senior Software Engineer</h1>
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
