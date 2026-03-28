import React from 'react'
import { Download } from 'lucide-react'

const AnimatedBorder = () => {
    return (

        <a href="http://localhost:5173/Manish_Resume.pdf" target='_blank' rel="noopener noreferrer">
            <button className='relative bg-transparent border border-[var(--color-border)] rounded-full text-[var(--color-foreground)] hover:border-[var(--color-primary)] transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium  overflow-visible animated-border '>
                {/* SVG Border */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                >
                    <rect
                        x="1"
                        y="1"
                        width="98"
                        height="38"
                        rx="15"
                        ry="15"
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="2"
                        strokeDasharray="400 550"
                        strokeDashoffset="400"
                        className="border-animate"
                    />
                </svg>
                <span className='relative z-10 flex items-center justify-center gap-2'><Download className='w-5 h-5' /> Download CV</span>
            </button>
        </a>
    )
}

export default AnimatedBorder
