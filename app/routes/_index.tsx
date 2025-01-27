import type { Route } from "./+types/_index";
import Navbar from "~/components/navbar";
import Hero from '~/components/hero'
import Cms from "~/components/cms";
import Features from "~/components/features";
import Banner from "~/components/banner";
import FAQs from "~/components/faqs";
import Contact from "~/components/contact";

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
            <Cms />
            {/* <Features /> */}
            {/* <Banner /> */}
            {/* <FAQs /> */}
            {/* <Contact /> */}
            {/* <Footer /> */}
        </div>    
    )
}