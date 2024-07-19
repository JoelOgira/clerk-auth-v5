import { UserProfile } from "@clerk/nextjs"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Loader2 } from "lucide-react"
import { redirect } from "next/navigation"

export default async function UserProfilePage() {
    const { userId } = auth()
    const isAuth = !!userId
    const user = await currentUser()

    if (!isAuth) {
        redirect("/")
    }

    return (
        <main className="h-full flex justify-center items-center">
            <ClerkLoading>
                <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl text-center font-semibold py-6">Welcome to your profile, {user?.firstName}</h1>
                    <UserProfile path="/user-profile" />
                </div>
            </ClerkLoaded>
        </main>
    )
}
