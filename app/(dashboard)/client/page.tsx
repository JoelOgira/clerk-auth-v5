"use client"

import MaxWidthWrapper from "@/components/max-width-wrapper"
import { useUser } from "@clerk/nextjs"

export default function Client() {
    const { isLoaded, isSignedIn, user } = useUser()

    if (!isLoaded || !isSignedIn) {
        return null
    }

    return (
        <main className="h-screen flex items-center justify-center">
            <MaxWidthWrapper
                className="flex justify-center items-center"
            >
                <p className="text-base">
                    Welcome back {user?.firstName}, to your client page.
                </p>
            </MaxWidthWrapper>
        </main>
    )
}