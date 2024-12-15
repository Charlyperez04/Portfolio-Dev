import Animation from "../../../animations/Animation"
import { MINI_CARD_DATA } from "../../../CONSTANTS"

const MiniCard = () => {

  return (
    <div className="overflow-x-hidden bg-dark rounded-[90px] px-6 max-w-[70%] md:max-w-[15%] mx-auto py-10 flex flex-col items-center">
      <Animation direction="left" delay={300} cascade>
        {MINI_CARD_DATA.map((data, index) => (
          <div key={index} className="flex items-center gap-4 py-4 w-full justify-start">
            <div className="w-16 text-center">
              <p className="text-4xl text-primary">{data.number}</p>
            </div>
            <p className="font-ibm">{data.title}</p>
          </div>
        ))}
      </Animation>
    </div>
  )
}

export default MiniCard
