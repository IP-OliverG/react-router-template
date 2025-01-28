import { useForm } from '@formspree/react'
import { Loader2Icon, MoveRightIcon } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import Anchor from './icons/anchor'

const Hero = () => {
    const [state, handleSubmit] = useForm('mdkakbwq')
    return (
        <main className='mx-auto my-10 flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center gap-6 px-5 text-center lg:my-0'>
            <h1 className={cn(
                    'scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl opacity: 1, y: 0'
                )}
            >
                <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    AI Powered
                </span>{' '}
         
                <span className={cn('relative bg-gradient-to-r from-primary bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl to-purple-600')}>
                    Complaints Management
                </span>
            </h1>
            <p className='text-base text-muted-foreground lg:text-lg' >
            Leveraging AI at every stage, <span className='text-primary'>mycomplaints.ai</span> enhances the analysis, investigation, root cause identification, remediation, and response processes, driving greater efficiency and accuracy throughout.{' '}
            </p>
            <form onSubmit={handleSubmit} className='mx-auto mt-8 flex w-full max-w-sm flex-col items-end space-y-2'>
                <div className='flex w-full max-w-sm flex-col items-start gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='email'
                    >
                        Want an early invite?
                    </Label>
                    <Input
                        required
                        type='email'
                        id='email'
                        placeholder='john.doe@example.com'
                        name='email'
                        className='text-white'
                    />
                </div>
                {!state.succeeded && (
                    <Button
                        className={cn(
                            'flex w-full justify-between',
                            state.submitting && 'justify-center'
                        )}
                        type='submit'
                        disabled={state.submitting}
                    >
                        {state.submitting && (
                            <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        {state.submitting && 'Joining'}
                        {!state.submitting && 'Join the waiting list'}
                        {!state.submitting && (
                            <MoveRightIcon className='h-4 w-4' />
                        )}
                    </Button>
                )}
                {state.succeeded && (
                    <Button
                        variant={'secondary'}
                        className='pointer-events-none w-full'
                    >
                        You've successfully joined the waitlist
                    </Button>
                )}
                {state.succeeded && (
                    <p className='w-full text-center text-sm text-muted-foreground'>
                        Welcome to the future of SaaS!
                    </p>
                )}
                <p className='w-full text-center text-sm text-muted-foreground'></p>
            </form>
            <span className='mx-auto'>
                <Anchor
                    className='h-56'
                    linearFrom='text-primary/10'
                    linearTo='text-primary'
                />
            </span>
        </main>
    )
}

export default Hero