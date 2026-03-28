import React, { useEffect, useState } from 'react'
import Button from '../Components/Button'
import { Menu, X } from 'lucide-react'


const navLink = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
]

const Navbar = () => {
    const [isMobileMenuopen, setIsMobileMenuOpen] = useState(false)
    const [isScroll, setIsScroll] = useState(false)


    useEffect(() => {
        let handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <header className={`fixed z-50 top-0 left-0 right-0 ${isScroll ? "glass-strong" : "bg-transparent"} transition-all duration-800 py-5`} >
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                <a href="/" className='text-xl font-bold tracking-tight hover:text-[var(--color-primary)] transition-colors'>
                    Dev. <span>Manish</span>
                </a>

                {/* desktop Nav */}
                <div className='hidden md:flex items-center gap-1'>
                    <div className='glass rounded-full px-2 py-1 flex items-center gap-1' >
                        {navLink.map((link, index) => (
                            <a href={link.href} key={index} className='px-4 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-full hover:bg-[var(--color-surface)]'>{link.label}</a>
                        ))}

                    </div>
                </div>


                {/*CTA Button  */}

                <div className='hidden md:block'>
                    <Button size='sm'><a href="#contact">Contact Me</a></Button>
                </div>


                {/* Mobile Menu Button */}

                <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className='md:hidden p-2 text-[var(--color-foreground)]'>

                    {isMobileMenuopen ? <X size={24} /> : <Menu size={24} />}


                </button>


            </nav>

            {/* Mobile Menu */}
            {isMobileMenuopen && (
                <div className='md:hidden glass-stong animate-fade-in' style={{ backdropFilter: "blur(16px)" }}>
                    <div className='container flex mx-auto px-6 py-6 flex-col gap-4'>
                        {navLink.map((link, index) => (
                            <a href={link.href} key={index} className='text-lg text-[var(--color-muted-foreground)] py-2' onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
                        ))}


                        <Button ><a href="#contact"> Contact Me</a></Button>

                    </div>
                </div>

            )}
        </header>
    )
}

export default Navbar
