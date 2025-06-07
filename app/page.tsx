import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-between py-3 px-6 items-center">
        <Logo />
        <ThemeToggle />
      </div>
      <div className="flex justify-center h-100 gap-15 items-center">
        <div>
          <h2 className="text-2xl italic text-[#f4a261]">HELLO I&apos;M</h2>
          <h1 className="text-4xl font-semibold">Ratnesh Singh</h1>
          <h3 className="text-xl">Senior Software Engineer</h3>
          <button className="rounded-full btn">Download CV</button>
        </div>
        <div>
          <Image src="/images/user.png" alt="Logo" width={150} height={200} />
        </div>
      </div>
    </>
  );
}
