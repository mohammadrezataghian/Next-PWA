import Footer from "@/app/_components/Footer/Footer"
import Head from "@/app/_components/Head/Head"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <Head/>
        {children}
        <Footer/>
        </section>
  }