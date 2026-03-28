import React from 'react'
import Button from "../Components/Button"
import { ArrowRight, ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AnimatedBorder from '../Components/AnimatedBorder'



// const skills = [
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Node.js",
//     "GraphQL",
//     "PostgreSQL",
//     "MongoDB",
//     "Redis",
//     "Docker",
//     "AWS",
//     "Vercel",
//     "Tailwind CSS",
//     "Prisma",
//     "Jest",
//     "Cypress",
//     "Figma",
//     "Git",
//     "GitHub Actions",
// ];

const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6)",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git",
    "GitHub",
    "Deployment",
    "jQuery"
];



const Hero = () => {

    return (
        <section className='relative min-h-screen flex items-center overflow-hidden '>

            {/* background Image */}

            <div className='absolute inset-0'>

                <img src="/hero-bg.jpg" alt="heroImg"
                    className='w-full h-full object-cover opacity-40' />
                {/* <div className='absolute inset-0 bg-gradient-to-b from-[var(--color-background)/20] via-[var(--color-background)/80] to-[var(--color-background)]'/> */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(var(--color-background-rgb),0.2)] via-[rgba(var(--color-background-rgb),0.8)] to-[var(--color-background)]" />

            </div>

            {/* Green Dots */}

            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {[...Array(30)].map((_, i) => (
                    <div key={i}
                        className='absolute w-1.5 h-1.5 rounded-full opacity-60'
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 4}s`
                        }} />
                ))}
            </div>

            {/* Content Hero Sections */}

            <div className='container mx-auto px-6 pt-32 pb-20 relative z-10 '>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Column - Text-coloumn */}

                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--color-primary)]'>
                                <span className='w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse' />MERN Stack Developer   *   React Enthusiast
                            </span>
                        </div>

                        {/* Headline */}

                        <div className='space-y-4'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                                Building <span className='text-[var(--color-primary)] glow-text'>digital</span><br />
                                experiences with.
                                <br />

                                <span className='font-serif italic font-normal text-white'>
                                    clean code & creativity.
                                </span>
                            </h1>

                            <p className='max-w-lg text-lg text-[var(--color-muted-foreground)] animate-fade-in animation-delay-800'>
                                Hi, I'm Manish Mahawar — a passionate MERN stack developer.
                                I build responsive and scalable web applications using modern technologies like React, Node.js, and MongoDB.
                            </p>

                        </div>

                        {/* CTAs Section call to section */}


                        <div className='flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in animation-delay-300'>
                            <Button size='lg'><a href="#contact">Contact Me</a> <ArrowRight className='h-5 w-5' /></Button>
                            <AnimatedBorder />
                        </div>



                        {/* Social links */}

                        <div>
                            {/* <span>Follow: </span> */}
                            {/* {[
                                { icon: "Github", href: "/" },
                                { icon: "Linkedin", href: "/" },
                                { icon: "Twitter", href: "/" },
                            ].map((social, idx) => (
                                <a href={social.href} key={idx}>{<social.icon/>}</a>
                            ))} */}

                            {/* <div className="flex gap-4">
                                <GitHub className="w-5 h-5 hover:text-[var(--color-primary)] cursor-pointer" />
                                <Linkedin className="w-5 h-5 hover:text-[var(--color-primary)] cursor-pointer" />
                                <Twitter className="w-5 h-5 hover:text-[var(--color-primary)] cursor-pointer" />
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

                    {/* Right Column - Profile */}

                    <div className='relative animate-fade-in animation-delay-300 '>

                        {/* profile Pic */}
                        <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] via-transparent to-[var(--color-primary)] blur-2xl animate-pulse' />

                        <div className='relative max-w-md mx-auto'>
                            <div className='relative glass rounded-3xl p-2 glow-border animate-image'>
                                <img src="/my-profile.jpeg" alt="manish mahawar" className='w-full aspect-[4/5] object-cover rounded-2xl' />


                                {/* Floating Batch */}

                                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse' />
                                        <span className='text-sm font-medium'>Available for work</span>
                                    </div>
                                </div>


                                {/* Stats Batch */}

                                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                    <div className='text-2xl font-bold text-[var(--color-primary)]'>Fresher</div>
                                    <div className='text-xs text-[var(--color-muted-foreground)]'>
                                        MERN Stack Developer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Skills Section */}

                <div className='mt-20 animate-fade-in animation-delay-600'>
                    <p className='text-sm text-[var(--color-muted-foreground)] mb-6 text-center'>Teachnologies I work with</p>

                    <div className='relative overflow-hidden'>
                        <div className='flex animate-marquee'>
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className='text-xl font-semibold text-[var(--color-muted-foreground)] hover:text-[var(--color-muted-foreground)] transition-colors'>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* Scroll-to section */}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors group">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>

        </section>
    )
}

export default Hero
