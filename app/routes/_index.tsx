import type { Route } from "./+types/_index";
import Navbar from "~/components/navbar";
import Cms from "~/components/cms";
import Footer from "~/components/footer";
import FAQs from "~/components/faqs";
import Banner from "~/components/banner";
import Contact from "~/components/contact";
import Features from "~/components/features";
import Hero from "~/components/hero";

export function meta({}: Route.MetaArgs ) {
    return [
        { title: 'mycomplaints.ai' },
    ]
}

export default function IndexRoute() {
    return (
        <div className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <Navbar />
            <Hero />
            <Cms />
            <Features />
            <Banner />
            <FAQs />
            <Contact />
            <Footer />
        </div>    
    )
}