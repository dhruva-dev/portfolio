import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="flex justify-between py-3 px-6 items-center">
        <Logo/>
        <ThemeToggle/>
      </div>
    </>
  );
}
