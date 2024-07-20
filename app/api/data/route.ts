import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const { userId } = auth()
        const user = await currentUser()

        if (!user) {
            return NextResponse.json(
                { Error: "Unauthorized" },
                { status: 401 }
            )
        }

        return NextResponse.json(
            {
                message: "Authenticated",
                data: { userId: userId, firstName: user?.firstName, userEmail: user?.primaryEmailAddress?.emailAddress }
            },
            { status: 200 }
        )
    } catch (error) {
        console.log("[USERS]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}
