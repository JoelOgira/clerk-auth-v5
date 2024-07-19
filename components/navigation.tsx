"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useMedia } from "react-use"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Loader2 } from "lucide-react"
import {
    UserButton,
    SignedIn,
    ClerkLoading,
    ClerkLoaded,
    SignedOut,
} from "@clerk/nextjs"
import { ModeToggle } from "@/components/ui/mode-toggle"

export const routes = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/client",
        label: "Client"
    },
    {
        href: "/user-profile",
        label: "Profile"
    },
    {
        href: "/sign-in",
        label: "Sign In"
    },
    {
        href: "/sign-up",
        label: "Sign Up"
    },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const router = useRouter()
    const pathname = usePathname()
    const isMobile = useMedia("(max-width: 768px)", false)

    const handleClick = (href: string) => {
        router.push(href)
        setIsOpen(false)
    }

    return (
        <div className="flex items-center justify-between py-4">
            {isMobile && (
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size={"sm"}>
                            <Menu className="size-4" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetTitle>Clerk Auth V5</SheetTitle>
                            <div className="flex flex-col space-y-4 justify-center">
                                {routes.map(route => (
                                    <Button
                                        key={route.href}
                                        size="sm"
                                        className="w-full"
                                        variant={pathname === route?.href ? "default" : "outline"}
                                        onClick={() => handleClick(route?.href)}
                                    >
                                        {route?.label}
                                    </Button>
                                ))}
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            )}
            <div className="hidden md:flex md:space-x-3">
                {routes.slice(0, 3).map(route => (
                    <Button
                        key={route.href}
                        size="sm"
                        className="w-full"
                        variant={pathname === route?.href ? "default" : "ghost"}
                        onClick={() => handleClick(route?.href)}
                    >
                        {route?.label}
                    </Button>
                ))}
            </div>

            <div className="flex items-center space-x-3">
                <ClerkLoading>
                    <Loader2 className="size-4 animate-spin text-muted-foreground" />
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedIn>
                        <div className="flex space-x-3 items-center">
                            <UserButton />
                        </div>
                    </SignedIn>
                </ClerkLoaded>

                <SignedOut>
                    <div className="flex space-x-2 items-center">
                        {routes.slice(-2).map(route => (
                            <Button
                                key={route.href}
                                size="sm"
                                className="w-full"
                                variant={pathname === route?.href ? "default" : "ghost"}
                                onClick={() => handleClick(route?.href)}
                            >
                                {route?.label}
                            </Button>
                        ))}
                    </div>
                </SignedOut>

                <div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}
