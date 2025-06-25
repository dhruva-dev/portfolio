import Image from "next/image";

export default function BlogCard() {
    return (
        <>
            <div className="card bg-base-100 overflow-hidden w-full h-full shadow-sm">
                <div className="relative w-full h-48">
                    <Image
                        src="/images/angular.jpg"
                        alt="Shoes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </div>
        </>
    )
}