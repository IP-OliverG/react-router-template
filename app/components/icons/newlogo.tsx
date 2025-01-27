import { type SVGProps } from 'react'

interface NewLogoProps extends SVGProps<SVGSVGElement> {
    linearFrom?: string
    linearTo?: string
}

const NewLogo = ({ linearFrom, linearTo, ...props }: NewLogoProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 14' fill='none' {...props} transform="rotate(180)">
        <path d="M8.59186 7.51375C8.75833 7.6024 23.181 15.2354 34.2526 8.4301C43.5399 2.72171 52.5044 4.6901 52.6749 4.72832C42.0437 1.4285 34.5699 4.03681 27.9149 7.18515C21.2965 10.3163 8.73453 7.54525 8.59186 7.51375Z" fill="url(#paint0_linear_5_150)"/>
        <path d="M19.4277 12.1655C19.5856 12.2332 32.8608 17.0661 41.0192 10.7638C47.8626 5.47735 55.8479 6.73315 56 6.75775C46.352 4.44753 40.2936 6.93665 35.4008 10.0006C29.8756 13.4607 19.5549 12.1857 19.4277 12.1655Z" fill="url(#paint2_linear_5_150)"/>
        <path d="M0 1.35301C0.149639 1.46971 13.1336 11.5209 28.342 5.06145C41.0991 -0.356767 50.3182 2.78359 50.4931 2.84421C39.9596 -1.96064 30.515 0.177372 21.7635 3.00543C13.06 5.81815 0.14662 1.4032 0 1.35301Z" fill="url(#paint4_linear_5_150)"/>
        <defs>
            <linearGradient id="paint0_linear_5_150" x1="8.65874" y1="6.69135" x2="52.4254" y2="7.6266" gradientUnits="userSpaceOnUse">
                <stop stopColor='currentColor' className={linearFrom} />
                <stop offset={1} stopColor='currentColor' className={linearTo}/>
            </linearGradient>
            <linearGradient id="paint2_linear_5_150" x1="19.2206" y1="10.5959" x2="56.3415" y2="9.3813" gradientUnits="userSpaceOnUse">
                <stop stopColor='currentColor' className={linearFrom} />
                <stop offset={1} stopColor='currentColor' className={linearTo}/>
            </linearGradient>
            <linearGradient id="paint4_linear_5_150" x1="0.420581" y1="0.440238" x2="49.0378" y2="6.0164" gradientUnits="userSpaceOnUse">
                <stop stopColor='currentColor' className={linearFrom} />
                <stop offset={1} stopColor='currentColor' className={linearTo}/>
            </linearGradient>
        </defs>
    </svg>

)
export default NewLogo