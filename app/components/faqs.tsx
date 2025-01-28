/* import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion' */
import DotPattern from './dot-pattern'
import { cn } from '~/lib/utils'

const faqs = [
    {
        question:
            'When will the service be available?',
        answer: 'We plan to launch the service in the second quarter of 2025',
    },
    {
        question:
            'Which sectors do you support?',
        answer: "Our team has extensive experience handling complaints across a wide range of regulated sectors and we understand that handling complaints in one sector can be totally different from other sectors and require a dramatically different approach. Whether these differences are due to regulatory frameworks, the types of services provided, the customer profile of complainants or the organisation profile of service providers, we have seen it before! Our solution has been designed from the ground up to embrace these differences and provide a single solution that works effectively across sectors.",
    },
    {
        question:
            'Which CRM and customer service solutions do you integrate with?',
        answer: "We provide standard connectors for the leading CRM and customer service solutions but our REST api easily enables the development of custom connectors for industry specific solutions.",
    },
    {
        question:
            'Will our complaint handlers still be in control?',
        answer: 'Absolutely. We have broken down the process into bite sized steps and although our AI supports every single one of those steps, complaint handlers will review and can fine tune AI generated issues, root causes, actions and responses. Although u will make very significant savings, our solution will also improve both the quality and consistency of your complaint handling process. We combine AI efficiency with human expertise. Let AI do the grunt work so your team can focus on complex investigations and root cause analysis.',
    },
    {
        question:
            'What happens to my data?',
        answer: 'Your data will only ever be used to improve our AI for your own solution. You will always own your own data and should you require it, we can ensure that both your transactional database and your data warehouse reside inside your own AWS account.',
    },
]

const FAQs = () => {
  return (
      <section className='relative mx-auto px-5 pb-8 pt-48'>
          <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
              <div>
                  <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                      <span className='brightness-[1.7]'>FAQs</span>
                  </span>
                  <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                      <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                          Frequently{' '}
                      </span>
                      <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                          asked{' '}
                      </span>
                      <span className='text-white bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                          questions
                      </span>
                  </h1>
              </div>
              <div className='mt-20 flex items-center justify-between'>
                  <DotPattern
                      width={20}
                      height={20}
                      cx={1}
                      cy={1}
                      cr={1}
                      className={cn(
                          'fill-primary/40 [mask-image:linear-gradient(to_bottom,transparent,white,white,transparent,transparent)]'
                      )}
                  />
                  {/* <Accordion
                      collapsible
                      type='single'
                      className='mx-auto w-full max-w-4xl grow basis-28 text-left'
                  >
                      {faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className='text-white text-left text-xl hover:no-underline'>
                                  {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className='text-white text-base text-muted-foreground'>
                                  {faq.answer}
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion> */}
              </div>
          </div>
      </section>
  )
}

export default FAQs