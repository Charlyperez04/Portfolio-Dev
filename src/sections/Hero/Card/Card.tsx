import { Download } from "lucide-react"
import Button from "../../../components/Button"
import { CARD_DATA } from "../../../CONSTANTS"
import Animation from "../../../animations/Animation"

const Card = () => {
    return (
        <Animation direction="right" delay={300} className="w-fit h-fit mx-auto border-l-[4px] border-l-primary object-contain rounded-tl-[155px] rounded-br-[150px] border-t-[4px] border-t-primary">
            <div className="border-[4px] w-fit h-fit border-white rounded-tl-[150px] rounded-br-[150px] py-16 px-4 text-center">
                <img
                    src={CARD_DATA.cardImgUrl}
                    alt="Developer"
                    className="w-28 h-28 mx-auto rounded-full border-primary border-[3px]"
                />
                <p className="text-3xl pt-2 pb-1 font-ibm font-semibold">{CARD_DATA.name}</p>
                <p className="font-ibm font-light mb-6">{CARD_DATA.role}</p>
                {CARD_DATA.data.map((item, index) => (
                    <div key={index} className="flex items-center justify-start gap-3 mt-2">
                        {item.icon}
                        <p className="font-ibm font-light">{item.value}</p>
                    </div>
                ))}
                <Button variant="secondary" onClick={() => window.open(CARD_DATA.cv, "_blank")} icon={<Download color="black" strokeWidth={1.5} />} className="mt-6">
                    Download CV
                </Button>
            </div>
        </Animation>
    )
}

export default Card