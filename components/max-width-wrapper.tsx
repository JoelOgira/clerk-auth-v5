import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
    className?: string,
    children: React.ReactNode
}

export default function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
    return (
        <div className={cn(
            "size-full mx-auto max-w-screen-xl px-2.5 md:px-20",
            className
        )}>
            {children}
        </div>
    )
}
