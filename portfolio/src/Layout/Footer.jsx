// import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const socialLinks = [
//     { icon: Github, href: "#", label: "GitHub" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Twitter, href: "#", label: "Twitter" },
// ];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-[var(--color-border)]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            Dev.<span className="text-[var(--color-primary)]"> Manish</span>
                        </a>
                        <p className="text-sm text-[var(--color-muted-foreground)] mt-2">
                            © {currentYear} Manish Kumar. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    {/* <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div> */}


                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-[var(--color-muted-foreground)]">
                            Follow:
                        </span>

                        <a href="https://github.com/manishmahawar1" target="_blank" rel="noopener noreferrer" className='glass rounded-full p-2'>
                            <FaGithub className=" w-5 h-5 hover:text-[var(--color-primary)] transition-all duration-300 hover:scale-110" />
                        </a>

                        <a href="https://www.linkedin.com/in/manish-mahawar" target="_blank" rel="noopener noreferrer" className='glass rounded-full p-2'>
                            <FaLinkedin className=" w-5 h-5 hover:text-[var(--color-primary)] transition-all duration-300 hover:scale-110" />
                        </a>

                        {/* <a href="#" target="_blank" rel="noopener noreferrer" className='glass rounded-full p-2'>
                            <FaTwitter className=" w-5 h-5 hover:text-[var(--color-primary)] transition-all duration-300 hover:scale-110" />
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};



export default Footer;