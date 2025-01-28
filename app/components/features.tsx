import {
    BlocksIcon,
    Database,
    Brain,
    ThumbsUp,
    ShieldCheckIcon,
    ChartNoAxesCombined,
} from 'lucide-react'
import { type FeatureCardProps } from '~/types/feature-card'
import FeatureCard from './feature-card'

const featuresData: FeatureCardProps[] = [
    {
        title: 'Designed to integrate with your existing systems',
        description:
            'mycomplaints.ai isn’t yet another case management tool. Shouldn’t your complaints data live alongside your other customer information? If your CRM isn’t equipped to handle complaints, mycomplaints.ai bridges the gap. Our AI-powered complaints management solution integrates seamlessly with your CRM, offering a unified workflow for your team. You’ll gain a comprehensive set of complaints data that can be analysed alongside your other customer insights.',
        icon: <BlocksIcon size={28} className='text-blue-500' />,
        backgroundColor: 'from-blue-500/20 to-blue-500/5',
    },
    {
        title: 'Proven track record',
        description: 'mycomplaints.ai is created by the team behind iCasework and Useful Feedback, the first enterprise-grade complaints management solution launched in 2011. With over 25 years of experience delivering complaint management solutions across diverse industries in the US, Europe, the UK, and Australia, we have the knowledge and expertise to help organizations efficiently handle complaints at scale..',
        icon: <ThumbsUp size={28} className='text-green-500' />,
        backgroundColor: 'from-green-500/20 to-green-500/5',
    },
    {
        title: 'Designed for AI augmented complaints management',
        description: 'mycomplaints.ai is built from the ground up to revolutionize enterprise complaint management through the power of generative AI, RAG, and semantic search. Our solution delivers exceptional time-saving capabilities while keeping your team in full control. With configurable RAG data pipelines, it seamlessly integrates with your backend and customer service systems, enabling efficient and informed investigations.',
        icon: <Brain size={28} className='text-yellow-500' />,
        backgroundColor: 'from-yellow-500/20 to-yellow-500/5',
    },
    {
        title: 'An always improving solution',
        description:
            'Your complain handlers and our AI work together and learn from each other. So the more cases you resolve, the smarter your system gets.',
        icon: <ChartNoAxesCombined className='text-red-500' />,
        backgroundColor: 'from-red-500/20 to-red-500/5',
    },
    {
        title: 'Integrated data analysis and real-time intelligence',
        description:
            'Our service offers an integrated data warehouse that provides detailed reporting on resolved complaints, real-time insights on emerging issues, and seamless generation of regulatory returns, ensuring compliance while enabling proactive decision-making and timely responses.',
        icon: <Database className='text-pink-500' />,
        backgroundColor: 'from-pink-500/20 to-pink-500/5',
    },
    {
        title: 'Enterprise grade security',
        description: 'Our platform is hosted on Amazon Web Services (AWS), leveraging their world-class security infrastructure to safeguard your data. We provide secure endpoints in the US, Europe, Canada, Australia, and the UK, so you can choose the location that best meets your compliance and latency requirements. We strictly isolate your data from other clients - we can even configure it to reside within your own AWS account for added control and security. Single Sign-On (SSO) is employed throughout, ensuring secure and seamless authentication while reducing the risk of unauthorized access.',
        icon: <ShieldCheckIcon size={28} className='text-purple-500' />,
        backgroundColor: 'from-purple-500/20 to-purple-500/5',
    },
]

const Features = () => {
    return (
        <section className='mx-auto mt-48 max-w-7xl px-5'>
            <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>
                            Features
                        </span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Advanced{' '}
                        </span>
                        <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Solutions{' '}
                        </span>
                        <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            for{' '}
                        </span>
                        <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Business{' '}
                        </span>
                        <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Excellence
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    <span className='hidden lg:block'>
                        Explore a diverse range of cutting-edge tools
                        meticulously crafted to drive your business towards
                        unparalleled success.
                    </span>
                    <span className='block lg:hidden'>
                        Explore a diverse range of cutting-edge tools crafted
                        for business success.
                    </span>
                </p>
            </div>
            <div>
                <ul className='mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3'>
                    {featuresData.map((feature, i) => (
                        <li key={i}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                backgroundColor={feature.backgroundColor}
                                icon={feature.icon}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features