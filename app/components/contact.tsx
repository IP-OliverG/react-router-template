import { Loader2Icon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { useForm } from '@formspree/react'

const Contact = () => {
    const [state, handleSubmit] = useForm('meoeonrg')
    return (
        <section className='mx-auto mt-48 flex max-w-7xl flex-col items-start gap-20 px-5 lg:flex-row'>
            <div className='mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6'>
                <div>
                    <h1 className='mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                        <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Request{' '}
                        </span>
                        <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            a{' '}
                        </span>
                        <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Demo
                        </span>
                    </h1>
                </div>
                <p className='text-center text-lg text-muted-foreground lg:text-left'>
                    <span className='hidden lg:block'>
                        If you have any questions, suggestions, or would like to
                        discuss potential collaborations, please don't hesitate
                        to reach out. We'd love to hear from you!
                    </span>
                    <span className='block lg:hidden'>
                        Questions, ideas, or collaborations? Reach out—I'm all
                        ears!
                    </span>
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className='gradient-border relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-4 rounded-md bg-gradient-to-br from-white/5 to-transparent p-6 before:bg-gradient-to-br before:from-white/5 before:to-transparent'
            >
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='name'
                    >
                        Full name
                    </Label>
                    <Input
                        required
                        type='text'
                        id='name'
                        placeholder='John Doe'
                        name='fullname'
                        className='w-full text-white'
                    />
                </div>
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='contact-email'
                    >
                        Email
                    </Label>
                    <Input
                        required
                        type='email'
                        placeholder='john.doe@example.com'
                        name='contact-email'
                        id='contact-email'
                        className='w-full text-white'
                    />
                </div>
                <div className='grid w-full gap-1.5'>
                    <Label
                        htmlFor='message'
                        className='text-left text-muted-foreground'
                    >
                        Message
                    </Label>
                    <Textarea
                        required
                        placeholder='Your message here...'
                        id='message'
                        name='message'
                        className='text-white'
                    />
                </div>
                {!state.succeeded && (
                    <Button variant={'secondary'} disabled={state.submitting}>
                        {state.submitting && (
                            <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        {state.submitting && 'Sending'}
                        {!state.succeeded &&
                            !state.submitting &&
                            'Send message'}
                    </Button>
                )}
                {state.succeeded && (
                    <Button
                        variant={'secondary'}
                        className='pointer-events-none'
                    >
                        Message sent!
                    </Button>
                )}
            </form>
        </section>
    )
}

export default Contact