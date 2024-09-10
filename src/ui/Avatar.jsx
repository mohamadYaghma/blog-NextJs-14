import Image from "next/image"

export default function Avatar({author , src , width = 24 }) {
    return (
        <Image 
            src={src || "/images/avatar.png"}
            alt={src}
            width={width}
            height={width}
            className="rounded-full ring-1 ring-secondary-300 ml-2"

        />
    )
}
