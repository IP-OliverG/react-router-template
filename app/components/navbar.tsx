import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='px-5 py-2'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    {/* <NewLogo
                        aria-label='mycomplaints.ai logo'
                        linearFrom='text-primary'
                        className='w-12 h-12'
                        linearTo='text-primary text-purple-600'
                    /> */}
                    <span className='hidden text-lg font-semibold md:block text-white'>
                        mycomplaints.ai
                    </span>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar