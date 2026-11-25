import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Compliance from './components/Compliance'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Compliance />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
