import React from "react"
import Navbar from "./Layout/Navbar"
import Hero from "./Sections/Hero"
import About from './Sections/About'
import Project from "./Sections/Project"
import Experience from "./Sections/Expreinece"
import Testimonial from "./Sections/Testimonial"
import Contact from "./Sections/Contact"
import Footer from "./Layout/Footer"


function App() {


  return (
    <div className="min-h-screen overflow-x-hidden">

      <Navbar />

      <main>

        <Hero />
        <About />
        <Project />
        <Experience />
        <Testimonial />
        <Contact />

      </main>

      <Footer />

    </div>
  )
}

export default App
