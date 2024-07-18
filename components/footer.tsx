import MaxWidthWrapper from "./max-width-wrapper"

export default function Footer() {
    return (
        <footer className="top-full sticky">
            <MaxWidthWrapper>
                <div className="flex justify-center items-center py-6 border-t border-slate-200">
                    <p className="text-muted-foreground">
                        All Rights Reserved &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}
