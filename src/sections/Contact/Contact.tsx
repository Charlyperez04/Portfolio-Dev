import Animation from "../../animations/Animation"
import Form from "./Form/Form"

const Contact = () => {
    return (
        <section className="py-12" id='contact'>
            <div className="w-fit mx-auto">
                <h2 className="text-primary text-5xl font-ubuntu">Contact</h2>
                <div className="w-full flex items-center pt-1">
                    <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
                    <hr className="w-full border-none bg-primary h-px" />
                    <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
                </div>
            </div>
            <p className="text-center mt-3 text-white font-ibm text-xs">I am always open to new opportunities</p>
            <Animation direction="up" delay={300}>
                <p className="text-primary text-3xl text-center mx-auto px-6 py-3 rounded-tl-3xl rounded-br-3xl border-[2px] border-primary w-fit mt-10">
                    Send Me A Message
                </p>
            </Animation>
            <div className="flex flex-col items-center mt-6">
                <p className="text-white text-center font-ibm text-sm">Feel free to contact me</p>
                <Animation direction="down" delay={300}>
                <Form />
                </Animation>
            </div>
        </section>
    )
}

export default Contact