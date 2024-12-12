import * as React from "react"
import { Global } from "@emotion/react"

import Navigation from "../components/navigation"
import Footer from "../components/footer"

type LayoutProps = { children: React.ReactNode; className?: string }

const layoutStyles = {
}

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Navigation />
    <main className={className}>{children}</main>
    <Footer />
  </React.Fragment>
)

export default Layout
