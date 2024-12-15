import { useEffect, useRef, useState } from 'react';
import Animation from '../../animations/Animation';
import { categories } from '../../CONSTANTS';
import styles from './skills.module.css';

type Category = keyof typeof categories;

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('frontend');
    const [manualControl, setManualControl] = useState<boolean>(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const categoryKeys = Object.keys(categories) as Category[];

    useEffect(() => {
        if (!manualControl) {
            intervalRef.current = setInterval(() => {
                setSelectedCategory((prevCategory) => {
                    const currentIndex = categoryKeys.indexOf(prevCategory);
                    const nextIndex = (currentIndex + 1) % categoryKeys.length;
                    return categoryKeys[nextIndex];
                });
            }, 3000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [manualControl, categoryKeys]);

    const handleCategoryClick = (categoryKey: Category) => {
        setManualControl(true);
        setSelectedCategory(categoryKey);
    };

    return (
        <section className={`py-12 md:py-24 ${styles.skills}`} id='skills'>
            <div className="w-fit mx-auto">
                <h2 className="text-primary text-5xl font-ubuntu">Skills</h2>
                <div className="w-full flex items-center pt-1">
                    <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
                    <hr className="w-full border-none bg-primary h-px" />
                    <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
                </div>
            </div>
            <p className="text-center mt-3 text-white font-ibm text-xs">I am constantly learning new things</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-w-xl mx-auto">
                {categoryKeys.map((categoryKey) => (
                    <button
                        key={categoryKey}
                        onClick={() => handleCategoryClick(categoryKey)}
                        className={`px-4 py-3 h-20 rounded-md flex flex-col items-center justify-center transition-all duration-300 ${selectedCategory === categoryKey
                                ? 'bg-primary text-darkLight border-l-[5px] border-l-darkLight scale-105'
                                : 'bg-darkLight text-primary hover:bg-primary hover:text-darkLight'
                            }`}
                    >
                        <div className="w-8 h-8 mb-2">{categories[categoryKey].icon}</div>
                        <p className="text-center text-sm font-medium leading-tight">
                            {categories[categoryKey].title}
                        </p>
                    </button>
                ))}
            </div>

            <div
                key={selectedCategory}
                className="mt-8 flex justify-center flex-wrap gap-6 transition-opacity duration-500 ease-in-out"
            >
                {categories[selectedCategory].tools.map((tool) => (
                    <Animation key={tool.name} direction="up" triggerOnce={false}>
                        <div
                            className="w-20 h-20 flex flex-col items-center justify-center bg-darkLight rounded-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img src={tool.icon} alt={tool.name} className="w-10" />
                            <p className="text-white text-xs mt-2">{tool.name}</p>
                        </div>
                    </Animation>
                ))}
            </div>
        </section>
    );
};

export default Skills;
