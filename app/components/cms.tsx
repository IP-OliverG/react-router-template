import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'
import Intercom from './icons/intercom'
import Microsoft from './icons/microsoft'
import ServiceNow from './icons/servicenow'
import Salesforce from './icons/salesforce'
import Zendesk from './icons/zendesk'
import Freshworks from './icons/freshworks'

const Cms = () => {
    const cms = [
        {
            component: <Microsoft height={42} width={42} />,
            name: 'Microsoft Dynamics',
        },
        {
            component: <ServiceNow height={42} width={42} />,
            name: 'Service Now',
        },
        {
            component: <Salesforce height={42} width={42} />,
            name: 'Salesforce',
        },
        {
            component: <Zendesk height={42} width={42} />,
            name: 'Zendesk',
        },
        {
            component: <Freshworks height={42} width={42} />,
            name: 'Freshworks',
        },
        {
            component: <Intercom height={42} width={42} />,
            name: 'Intercom',
        },
    ]

    return (
        <div className='mx-5'>
            <p className='mb-8 text-center text-sm font-medium text-muted-foreground'>
                INTEGRATED WITH MARKET LEADING CUSTOMER SERVICE SOLUTIONS
            </p>
            <div className='mx-auto flex flex-wrap items-center justify-center gap-8 fill-foreground lg:gap-x-14'>
                {cms.map((item) => (
                    <React.Fragment key={item.name}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger
                                    aria-label={item.name}
                                    className='cursor-default'
                                >
                                    {item.component}
                                </TooltipTrigger>
                                <TooltipContent side='bottom'>
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Cms