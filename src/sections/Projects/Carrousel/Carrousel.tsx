import Slider from "react-slick";
import "../slick/slick-theme.css";
import "../slick/slick.css";
// import './carousel.css';
import { ChevronsRight } from "lucide-react";
import { PROJECTS } from "../../../CONSTANTS";
import Button from "../../../components/Button";

const SliderArrow = ({ onClick, position }: { onClick: () => void; position: 'next' | 'prev' }) => {
    const directionStyle = position === 'next' ? "right-[2%] md:right-[0%]" : "left-[2%] md:left-[0%]";
    const rotateStyle = position === 'next' ? {} : { transform: "rotate(180deg)" };
    return (
        <button
            className={`absolute z-50 xxs:top-[25%] top-[25%] md:top-[35%] w-14 h-14 flex justify-center items-center rounded-full hover:opacity-80 ${directionStyle}`}
            onClick={onClick}
        >
            <img
                src="/carrousel-arrow.svg"
                width={30}
                height={30}
                alt="Boton"
                className='w-8 md:w-10'
                style={rotateStyle}
            />
        </button>
    );
};

const ProjectsCarrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        nextArrow: <SliderArrow position="next" onClick={function (): void {
            throw new Error("Function not implemented.");
        }} />,
        prevArrow: <SliderArrow position="prev" onClick={function (): void {
            throw new Error("Function not implemented.");
        }} />,
        // customPaging: () => (
        //     <div className="custom-dot" />
        // ),
    };

    return (
        <div className="my-12 slider-container">
            <Slider {...settings}>
                {PROJECTS.map((service, index) => (
                    <div key={index} className="relative !flex flex-col items-center">
                        <img
                            src={service.imgPath}
                            alt={service.title}
                            className="xxs:w-[200px] xxs:h-[200px] w-[250px] mx-auto md:mx-0 md:w-[350px] h-[250px] md:h-[350px] object-cover rounded-[30px]"
                        />
                        <div className="w-[300px] mx-auto md:mx-0 md:w-[400px] flex items-center flex-row justify-center gap-4">
                            <div className="flex flex-col items-center">
                                <p className="text-xl text-primary font-ibm text-center mt-4">{service.title}</p>
                                <p className="text-white text-sm font-ibm text-center mt-4">{service.description}</p>
                                <Button variant='primary' onClick={() => console.log('Hello')} className="mt-2" icon={<ChevronsRight />}>
                                    View Project
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectsCarrousel;