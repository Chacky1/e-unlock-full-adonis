import Footer from "~/components/footer"
import Header from "~/components/header"
import { Toaster } from "~/components/ui/toaster"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />

      <Toaster />
    </>
  )
}

export default AppLayout
