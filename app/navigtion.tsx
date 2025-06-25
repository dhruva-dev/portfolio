import Link from "next/link";
import Tooltip from "./components/tooltip";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navigation() {
    return (
        <><div className="flex items-center gap-5 navigation_menu text-sm sm:text-base hidden sm:flex">
            <Tooltip text="Comming Soon!">
                <Link href="/">Home</Link>
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
            <div className="drawer sm:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn drawer-button">
                        <Bars3Icon className="size-6" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <li><Tooltip text="Comming Soon!">
                            <Link href="/">Home</Link>
                        </Tooltip></li>
                        <li><Tooltip text="Comming Soon!">
                            <Link href="/">Courses</Link>
                        </Tooltip></li>
                        <li><Tooltip text="Comming Soon!">
                            <Link href="/">Services</Link>
                        </Tooltip></li>
                        <li><Tooltip text="Comming Soon!">
                            <Link href="/">Contact</Link>
                        </Tooltip></li>
                        <li><Link href="/blogs">Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

