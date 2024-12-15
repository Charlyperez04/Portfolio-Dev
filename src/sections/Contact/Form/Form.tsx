import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { useState } from "react";
import Button from "../../../components/Button";

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [stateMessage, setStateMessage] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID as string,
                process.env.REACT_APP_TEMPLATE_ID as string,
                e.currentTarget,
                process.env.REACT_APP_PUBLIC_KEY as string
            )
            .then(
                () => {
                    setStateMessage("Message sent successfully!");
                    setIsSubmitting(false);
                    setTimeout(() => setStateMessage(null), 5000);
                },
                () => {
                    setStateMessage("Something went wrong, please try again later.");
                    setIsSubmitting(false);
                    setTimeout(() => setStateMessage(null), 5000);
                }
            );

        e.currentTarget.reset();
    };

    return (
        <form
            onSubmit={sendEmail}
            className="px-6 grid grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto py-8"
        >
            <div className="flex flex-col">
                <label htmlFor="name" className="text-primary font-light mb-2">
                    Your name *
                </label>
                <input
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="Enter your name"
                    required
                    className="bg-transparent border-b border-primary text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-primary font-light mb-2">
                    Your email *
                </label>
                <input
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    className="bg-transparent border-b border-primary text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                />
            </div>

            <div className="flex flex-col col-span-2 mt-2">
                <label htmlFor="message" className="text-primary font-light mb-2">
                    Your message *
                </label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your needs"
                    rows={4}
                    required
                    className="bg-transparent border-b border-primary text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                ></textarea>
            </div>

            <div className="col-span-2 flex justify-center mt-4">
                <Button variant="primary" className="w-fit" type="submit" icon={<Send />} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </div>

            {stateMessage && (
                <div className="col-span-2 mt-4 text-center">
                    <p className={`text-sm ${stateMessage.includes("success") ? "text-green-400" : "text-red-400"}`}>
                        {stateMessage}
                    </p>
                </div>
            )}
        </form>
    );
};

export default Form;
