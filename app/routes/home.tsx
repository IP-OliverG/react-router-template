import type { Route } from "./+types/home";
//import Banner from '~/components/banner'
//import Cms from '~/components/cms'
import Contact from '~/components/contact'
import FAQs from '~/components/faqs'
import Features from '~/components/features'
import Footer from '~/components/footer'
//import Hero from '~/components/hero'
import Navbar from '~/components/navbar'

export function meta({}: Route.MetaArgs ) {
    return [
        { title: 'mycomplaints.ai' },
    ]
}

export default function IndexRoute() {
    return (
        <div className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <Navbar />
            {/* <Hero /> */}
            {/* <Cms /> */}
            <Features />
            {/* <Banner /> */}
            <FAQs />
            <Contact />
            <Footer />
        </div>
        
    )
}