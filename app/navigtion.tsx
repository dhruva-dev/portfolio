import Link from "next/link";
import Tooltip from "./components/tooltip";

export default function Navigation() {
    return (
        <div className="flex items-center gap-5 navigation_menu text-sm sm:text-base">
            <Tooltip text="Comming Soon!">
                <Link href="/">About</Link>
            </Tooltip>
            <Tooltip text="Comming Soon!">
                <Link href="/">Courses</Link>
            </Tooltip>
            <Tooltip text="Comming Soon!">
                <Link href="/">Services</Link>
            </Tooltip>
            <Tooltip text="Comming Soon!">
                <Link href="/">Contact</Link>
            </Tooltip>
            <Link href="/blogs">Blogs</Link>
        </div>
    )
}
