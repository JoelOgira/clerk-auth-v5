import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <MaxWidthWrapper
        className="flex justify-center items-center"
      >
        <p className="text-base">
          This is the homepage, User not signed in.
        </p>
      </MaxWidthWrapper>
    </main>
  )
}
