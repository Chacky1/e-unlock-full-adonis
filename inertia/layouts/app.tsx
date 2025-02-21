import Header from "~/components/header"
import { Toaster } from "~/components/ui/toaster"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Toaster />
    </>
  )
}

export default AppLayout
