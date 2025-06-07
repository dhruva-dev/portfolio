import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex items-center gap-5 navigation_menu text-sm sm:text-base">
            <Link href="/blogs">About</Link>
            <Link href="/blogs">Services</Link>
            <Link href="/blogs">Contact</Link>
            <Link href="/blogs">Blogs</Link>
        </div>
    )
}