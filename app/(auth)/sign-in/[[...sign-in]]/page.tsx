import { SignIn } from "@clerk/nextjs"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"

export default function SignInPage() {
    return (
        <main className="h-full flex justify-center items-center">
            <ClerkLoading>
                <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
                <SignIn path="/sign-in"/>
            </ClerkLoaded>
        </main>
    )
}
