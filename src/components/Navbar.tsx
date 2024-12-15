import { Code, Home, Mail, Monitor, User } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>("hero");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 
            flex flex-row gap-4 items-center 
            bg-gradient-to-t from-dark to-transparent 
            rounded-full px-6 py-2 shadow-lg"
        >
            <a
                href="#hero"
                className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === "hero" ? "bg-primary text-dark scale-110" : "text-white"
                }`}
            >
                <Home size={24} />
            </a>
            <a
                href="#about-me"
                className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === "about-me" ? "bg-primary text-dark scale-110" : "text-white"
                }`}
            >
                <User size={24} />
            </a>
            <a
                href="#skills"
                className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === "skills" ? "bg-primary text-dark scale-110" : "text-white"
                }`}
            >
                <Code size={24} />
            </a>
            <a
                href="#projects"
                className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === "projects" ? "bg-primary text-dark scale-110" : "text-white"
                }`}
            >
                <Monitor size={24} />
            </a>
            <a
                href="#contact"
                className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === "contact" ? "bg-primary text-dark scale-110" : "text-white"
                }`}
            >
                <Mail size={24} />
            </a>
        </nav>
    );
};

export default Navbar;
