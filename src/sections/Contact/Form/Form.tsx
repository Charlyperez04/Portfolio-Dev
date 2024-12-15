import { Send } from "lucide-react";
import Button from "../../../components/Button";

const Form = () => {
    return (
        <form action="" className="px-6 grid grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto py-8">
            <div className="flex flex-col">
                <label htmlFor="name" className="text-primary font-light mb-2">
                    Your name *
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="bg-transparent border-b border-primary text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-primary font-light mb-2">
                    Your email *
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-b border-primary text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                />
            </div>

            <div className="flex flex-col col-span-2 mt-2">
                <label htmlFor="message" className="text-primary font-light mb-2">
                    Your message *
                </label>
                <input
                    id="message"
                    placeholder="Enter your needs"
                    className="bg-transparent border-b border-primary text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                ></input>
            </div>

            <div className="col-span-2 flex justify-center mt-4">
                <Button variant="primary" className="w-fit" type="submit" icon={<Send />}>
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export default Form;
