import Card from './Card/Card'
import MiniCard from './MiniCard/MiniCard'
import Presentation from './Presentation/Presentation'

const Hero = () => {
    return (
        <section className='py-12 md:flex gap-5 justify-center items-center' id='hero'>
            <Card />
            <Presentation />
            <MiniCard />
        </section>
    )
}

export default Hero