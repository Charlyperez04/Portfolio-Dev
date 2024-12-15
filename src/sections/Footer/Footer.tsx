import { SOCIAL_MEDIA } from "../../CONSTANTS"

const Footer = () => {
    return (
        <footer className="py-6 bg-dark flex flex-col items-center gap-6">
            <img src="/logo-color.svg" alt="Logo" className='w-20 object-cover h-16' />
            <div className="flex justify-center gap-4">
                {Object.values(SOCIAL_MEDIA).map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-darkLight p-2 rounded-full"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <p className="text-white font-ibm text-xs text-center mb-16 md:mb-2">
                &copy; Carlos Abad Garcia Perez. All rights reserved 2024.
            </p>
        </footer>
    )
}

export default Footer