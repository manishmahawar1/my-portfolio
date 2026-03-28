import React from 'react'
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'


const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Excited to collaborate and work with professionals while learning and growing.",

    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];


const About = () => {
    return (
        <section id='about' className='py-32 relative overflow-hidden'>

            <div className='container mx-auto px-6 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>

                    {/* Left Coloumn */}

                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase'>About Me</span>
                        </div>

                        <h2 className='text-4xl md:text-text-5xl font-bold leading-tight animate-fade-in animation-delay-100  text-[var(--color-secondary-foreground)]'>Building the future,
                            <span className='font-serif italic font-normal text-white'> One component at a time.</span>
                        </h2>

                        <div className='space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-400'>
                            <p>
                                I’m a passionate MERN stack developer with over a year and a half of hands-on experience building modern, responsive web applications. Coming from a science background and currently pursuing my degree from DU SOL, I’ve developed a strong analytical mindset along with a deep curiosity for how things work on the web. I enjoy turning ideas into real, functional products and constantly push myself to learn and improve through practical projects and real-world problem solving.
                            </p>

                            <p>
                                On the frontend, I work confidently with HTML5, CSS3, JavaScript (ES6), and modern libraries like React to create clean, user-friendly interfaces. I also use Tailwind CSS to build fast and visually appealing designs. On the backend, I build scalable applications using Node.js, Express, and MongoDB, and I have experience creating and integrating RESTful APIs. I understand the full development cycle—from structuring a project to deploying it and managing code efficiently using GitHub.
                            </p>

                            <p>
                                As a fresher, I bring not just technical skills but also a strong willingness to learn, adapt, and grow in a professional environment. I enjoy working on challenging projects, improving my problem-solving abilities, and staying updated with the latest technologies. My goal is to become a skilled full-stack developer and contribute to building impactful digital solutions while continuously evolving as a developer.
                            </p>

                        </div>

                        <div className='glass rounded-2xl p-6 glow-border animate-fade-in'>

                            <p className='text-lg font-medium italic text-[var(--color-foreground)]'>
                                Passionate about building real-world projects and continuously improving my skills.
                            </p>

                        </div>

                    </div>


                    {/* Right Coloumn - Highlight */}

                    <div className='grid sm:grid-cols-2 gap-6'>
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className='glass p-6 rounded-2xl animate-fade-in'
                                style={{ animationDelay: `${(idx + 1) * 200}ms` }}>

                                <div className='w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-4 hover:bg-[var(--color-primary)]/80 transition-colors'>
                                    <item.icon className='w-6 h-6 text-[var(--color-primary)]' />
                                </div>
                                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                                <p className='text-sm text-[var(--color-muted-foreground)]'>{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About
