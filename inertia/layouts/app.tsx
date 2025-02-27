import Footer from "~/components/footer"
import Header from "~/components/header"
import { Toaster } from "~/components/ui/toaster"

type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
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
