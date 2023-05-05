import Navbar from "@/components/navbar"
import LeftBar from "@/components/leftBar"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Router from 'next/router'

Router.events.on('routeChangeComplete', () => {
  const links = document.querySelectorAll('.nav-link')
  links.forEach(link => link.classList.remove("active"))
  const currentPath = window.location.pathname
  const link = document.querySelector(`.nav-link[href="${currentPath}"]`)
  if (link) {
    link.classList.add('active')
  }
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight 
      overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <LeftBar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App