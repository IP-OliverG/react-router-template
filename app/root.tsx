//import { Partytown } from '@builder.io/partytown/react'
import { type LinksFunction } from 'react-router'
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'react-router'
import stylesheet from '~/app.css?url'
import TailwindIndicator from './components/tailwind-indicator'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
]

export default function App() {
    return (
        <html lang='en' className='dark'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1'
                />
                {/* <Partytown debug={true} forward={['dataLayer.push']} /> */}
                <script
                    type='text/partytown'
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-6JV9TN499V'
                />
                <script
                    type='text/partytown'
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6JV9TN499V');`,
                    }}
                />
                <Meta />
                <Links />
            </head>
            <body className='relative overflow-x-hidden bg-background font-dm antialiased'>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <TailwindIndicator />
            </body>
        </html>
    )
}