import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-stretch">
            <div>
                <Image src="/images/gear-logo-black.png" className="block dark:hidden" alt="Logo" width={50} height={50} />
                <Image src="/images/gear-logo-white.png" className="hidden dark:block" alt="Logo" width={50} height={50} />
            </div>
            <div className="flex flex-col">
                <span className="font-semibold">Engineer</span>
                <span className="font-semibold">
                    <span className="bg-[#FFD740] px-1 pb-[2px] rounded dark:text-black">Dhruv</span>
                </span>
            </div>
        </div>
    )
}
