import { TAB_SLIDER } from "@/module/suburb/suburb.constants";
import React, { useState } from "react";

const TabSlider = () => {
	const [index, setIndex] = useState(0);
	const [activeSection, setActiveSection] = useState("slider");

	const scrollToSection = (sectionId: string, i: number) => {
		setIndex(i);
		const element = document.getElementById(sectionId);
		if (element) {
			const marginTop = 120;
			const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;

			window.scrollTo({ top: scrollToY, behavior: "smooth" });
		}
	};

	return (
		<>
			{TAB_SLIDER.map((tab, i) => (
				<div key={i} onClick={() => scrollToSection(tab.link, i)} className={`p-4 w-auto text-sm relative whitespace-nowrap ${index === i ? "font-bold" : "font-medium"}`}>
					<a href={`#${tab.link}`}>{tab.title}</a>
					{index === i && <div className="w-1/4 lg:w-1/2 mx-auto h-1 bg-primary-blue rounded-t-full absolute bottom-0 left-0 right-0"></div>}
				</div>
			))}
		</>
	);
};

export default TabSlider;
