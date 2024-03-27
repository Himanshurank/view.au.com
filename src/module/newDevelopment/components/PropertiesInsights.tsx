import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const PropertiesInsights = (props: any) => {
	const [isShowInsight, setIsShowInsight] = useState(false);
	const [height, setHeight] = useState<string>("0px");
	const scrollHeightRef = useRef<any>();

	const onShowInsight = () => {
		setIsShowInsight(!isShowInsight);
	};
	{
	}
	useEffect(() => {
		let newHeight: string = "";
		if (scrollHeightRef.current) {
			newHeight = isShowInsight ? `${scrollHeightRef.current.scrollHeight}px` : "0px";
		}
		setHeight(newHeight);
	}, [isShowInsight]);

	return (
		<li className="p-4 border rounded-lg shadow-sm">
			<div>
				<div className="flex justify-between items-center cursor-pointer" onClick={onShowInsight}>
					<h3 className="text-base font-bold">{props.insight.title}</h3>
					<span className={isShowInsight ? "rotate-180" : ""}>
						<IoIosArrowDown />
					</span>
				</div>
				<div ref={scrollHeightRef} className="overflow-hidden transition-all duration-500 ease-in-out" style={{ height: isShowInsight ? `${height}` : "0px" }}>
					<p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente porro quaerat dicta dolorem laboriosam voluptatem et doloribus inventore repudiandae deleniti soluta omnis, ipsam harum veniam a vitae nihil quibusdam facere hic perferendis sequi dolores ullam voluptates. Nobis repudiandae quasi, deserunt vel culpa iure natus quia sapiente labore, odit tempore dolor quo saepe suscipit expedita, magni et beatae accusamus minus pariatur nesciunt assumenda? Optio esse odio autem earum explicabo vero fugiat tempora similique, laborum quidem possimus assumenda ratione voluptates sint impedit consectetur ad dolorem suscipit ea mollitia eum perferendis! Numquam, at? Autem earum fugit quas iure vel sequi numquam recusandae cupiditate nemo totam sint, doloribus blanditiis possimus dignissimos temporibus placeat dolor modi minima at! Cupiditate, nisi provident. Laboriosam repellendus sit sunt, voluptatibus repudiandae nulla! Illo molestias, modi repellendus vitae ipsa dolores, corrupti non id sapiente voluptas voluptatem facere reiciendis facilis tempore nostrum! Non, porro eveniet! Sint eius quam atque quo soluta est perspiciatis a dolorum animi consectetur. Ipsum maxime recusandae, ab, non suscipit dolorem qui eligendi obcaecati quis aliquid quidem rem expedita et? Expedita aliquid praesentium atque magni eius eveniet. Repellendus, ducimus magni ipsum iusto, voluptate exercitationem at nostrum repellat facilis eos excepturi provident quaerat quas molestiae cumque aliquid dignissimos.</p>
				</div>
			</div>
		</li>
	);
};

export default PropertiesInsights;
