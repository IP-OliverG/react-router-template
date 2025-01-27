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
        {
            name: 'description',
            content:
                'Streamline operations and boost productivity with our innovative SaaS solutions. Unlock the power of seamless workflows and data-driven decisions. Experience growth with SaaSStellar."',
        },
        {
            name: 'keywords',
            content:
                'SaaS solutions, Streamlined operations, Boost productivity, Data-driven decisions, Workflow optimization, Business growth, Efficiency tools, Cloud-based software, Productivity software, Business innovation, SaaS platform, Seamless workflows, SaaS productivity, Data analytics, Streamline processes, Business efficiency, Growth strategies, SaaS benefits, Cloud solutions, Business software',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'author',
            content: 'Nader Ferjani',
        },
        {
            tagName: 'link',
            rel: 'manifest',
            href: '/site.webmanifest',
        },
        {
            name: 'msapplication-TileColor',
            content: '#da532c',
        },
        {
            name: 'theme-color',
            content: '#ffffff',
        },
        {
            property: 'og:title',
            content:
                'SaaSStellar - Streamline Operations and Boost Productivity',
        },
        {
            property: 'og:description',
            content:
                'Discover how SaaSStellar can help you streamline operations, make data-driven decisions, and drive business growth. Experience the power of seamless workflows and efficiency tools.',
        },
        {
            property: 'og:image',
            name: 'og:image',
            content: 'https://saasstellar.nader.run/saasstellar-og-image.png',
        },
        {
            property: 'og:url',
            content: 'https://saasstellar.nader.run/',
        },
        {
            property: 'og:type',
            content: 'website',
        },
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