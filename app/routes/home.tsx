import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs ) {
    return [
        { title: 'mycomplaints.ai' },
    ]
}

export default function IndexRoute() {
    return (
        <div className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
        </div>    
    )
}