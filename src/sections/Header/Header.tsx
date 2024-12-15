import { SOCIAL_MEDIA } from '../../CONSTANTS'

const Header = () => {
    return (
        <header className='bg-darkLight border-white py-3 border-b-[0.5px] flex justify-around items-center'>
            <img src="/logo-color.svg" alt="Logo" className='w-20 object-cover h-10' />
            <p className='text-sm text-primary'>Portfolio</p>
            <div className='flex gap-4 items-center'>
                {Object.values(SOCIAL_MEDIA).map((socialMedia, index) => (
                    <a key={index} href={socialMedia.link} target='_blank'>
                        {socialMedia.icon}
                    </a>
                ))}
            </div>
        </header>
    )
}

export default Header