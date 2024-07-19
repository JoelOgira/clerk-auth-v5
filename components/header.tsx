import MaxWidthWrapper from "./max-width-wrapper"
import Navigation from "./navigation"

export default function Header() {
    return (
        <nav className='sticky z-[40] inset-x-0 top-0 w-full border-b border-gray-200 opacity-75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <Navigation />
            </MaxWidthWrapper>
        </nav>
    )
}
