import { Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { CARD_DATA } from "../../../CONSTANTS"

const Presentation = () => {
    return (
        <div className="mx-auto xs:max-w-[90%] md:w-[35%] py-12">
            <p className="text-primary font-ibm text-xs">&lt;h1&gt;</p>
            <p className="text-4xl ml-4 my-2">Hey <br />
                I'm <span className="text-primary">{CARD_DATA.name}</span>, <br />
                {CARD_DATA.role}
            </p>
            <p className="text-primary font-ibm text-xs">&lt;h1&gt;</p>

            <p className="text-primary font-ibm text-xs mt-6">&lt;p&gt;</p>
            {/* <TypeAnimation className="font-ibm ml-4 my-2"
                sequence={[
                    CARD_DATA.description,
                ]}
                wrapper="p"
                repeat={Infinity}
                speed={70}
                cursor
            >
            </TypeAnimation> */}

            <p className="text-primary font-ibm text-xs">&lt;p&gt;</p>

            <a className="flex items-center justify-start gap-3 mt-3">
                <p className="text-2xl font-ibm text-primary pl-6">Let's talk</p>
                <Mail className="text-primary w-10 h-10 rounded-full p-2 bg-slate-100 bg-opacity-20" />
            </a>
        </div>
    )
}

export default Presentation