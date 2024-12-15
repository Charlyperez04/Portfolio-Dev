import Animation from '../../animations/Animation'
import { AboutMe as text } from '../../CONSTANTS'
import styles from './aboutme.module.css'
const AboutMe = () => {
    return (
        <section className={`py-12 md:py-24 px-6 ${styles.aboutMe} overflow-x-hidden`} id='about-me'>
            <Animation direction='up' className="bg-darkLight px-6 py-3 rounded-tl-[30px] rounded-br-[30px] border-2 border-primary w-fit">
                <p className='text-4xl'>About Me</p>
            </Animation>
            <Animation direction='left' cascade>

                <div className='md:flex items-center justify-between gap-3'>
                    <div className="bg-darkLight rounded-xl p-4 my-10 w-full">
                        <p className="text-primary font-ibm text-xs">&lt;p&gt;</p>
                        <p className="text-3xl text-primary mt-2 font-ibm">Hello!</p>
                        {text.data}
                        <p className="text-primary font-ibm text-xs mt-2">&lt;p&gt;</p>
                    </div>
                    <img src={text.img} alt="Developer" className='rounded-3xl md:w-1/3' />
                </div>
            </Animation>
        </section>
    )
}

export default AboutMe