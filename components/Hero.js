import Link from "next/link"

export default function Hero() {
    return (
        <div className="py-48 mx-auto max-w-7xl px-4 sm:pt-24 md:pt-72 text-center">
            <h1 className="font-extrabold text-[#224229]">
                <p className="text-[#224229] bg-clip-text text-4xl sm;text-6xl md:text-7xl mb-5">UrbanUI🌿</p>
                <p className="text-xl sm:text-3xl md:text-4xl">Find a Perfect Home for those Perfect Plants at</p>
            </h1>

            <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
                <Link href='#' passHref>
                    <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-[#fcf9f3] bg-[#224229] hover:bg-[#64aa85]">
                        Shop All Plants
                    </a>
                </Link>
            </div>
        </div>
    )
}
