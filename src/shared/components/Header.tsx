import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Button from "./buttons/Button";

interface Iprops {
	sidebarToggle: () => void;
	isShowSidebar: boolean;
}

const Header = (props: Iprops) => {
	const headerMenu = ["Buy", "Rent", "Sold", "Estimate"];
	return (
		<>
			<div className="w-full border-b font-medium sticky top-0 bg-white flex justify-center items-center z-50">
				<nav className="w-full flex h-12 items-center lgc:h-64px lgc:max-w-1200px">
					<div className="hamburger lgc:hidden" onClick={props.sidebarToggle}>
						<span className={props.isShowSidebar ? "active" : ""}></span>
						<span className={props.isShowSidebar ? "active" : ""}></span>
						<span className={props.isShowSidebar ? "active" : ""}></span>
					</div>
					<div className="w-full flex justify-between items-center mx-4 lgc:mx-0">
						<div className="w-20 h-6">
							<svg width="100%" height="100%" className="lg:w-24" viewBox="0 0 109 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="Logo (Without .com.au)">
									<path id="path140" d="M12.2588 18.8479C10.5977 18.8641 9.22765 17.5233 9.21145 15.8594C9.19526 14.1952 10.5361 12.8278 12.2004 12.8121C12.2125 12.8116 12.2242 12.8116 12.2359 12.8116C13.884 12.8152 15.2316 14.1484 15.2478 15.8005C15.2554 16.607 14.9491 17.3681 14.3841 17.9434C13.8196 18.5191 13.0649 18.8403 12.2588 18.8479ZM23.2187 23.7431L16.9035 18.9608C17.5327 18.0261 17.8674 16.9259 17.8566 15.7753C17.8265 12.6726 15.2667 10.1798 12.1752 10.2032C9.07291 10.2334 6.57293 12.7819 6.60262 15.8846C6.63275 18.9649 9.14488 21.4509 12.2175 21.4572C12.2395 21.4572 12.262 21.4568 12.284 21.4568C13.4153 21.446 14.4916 21.1032 15.4038 20.4775L20.151 26.8386C20.1519 26.839 20.8995 27.7297 21.8854 27.7791C22.4135 27.8043 22.956 27.5718 23.4512 27.0819L23.5074 27.0253C23.9806 26.5341 24.206 26.011 24.1745 25.473C24.1169 24.4906 23.2272 23.7507 23.2187 23.7431Z" fill="#0073CF" />
									<path id="path144" d="M61.3805 15.0676L61.3966 14.948C61.824 11.8723 64.2074 9.88505 67.468 9.88505C70.6517 9.88505 72.8958 11.825 73.324 14.9484L73.3402 15.0676H61.3805ZM67.468 6.203C61.5158 6.203 57.1951 10.5598 57.1951 16.5628C57.1951 22.6405 61.5158 27.0521 67.468 27.0521C70.5456 27.0521 73.4184 25.8975 75.3494 23.8842C75.7209 23.4919 75.9121 22.9553 75.873 22.4124C75.8379 21.9266 75.6247 21.5056 75.2734 21.2285C74.4012 20.5228 73.2516 20.8237 72.5512 21.4004C70.9999 22.6778 69.7652 23.37 67.6848 23.37C64.2996 23.37 61.8316 21.3486 61.3966 18.2203L61.3805 18.1006H75.555C76.6174 18.1006 77.4819 17.2361 77.4819 16.1732C77.3182 10.3043 73.1998 6.203 67.468 6.203Z" fill="#333333" />
									<path id="path148" d="M38.1038 26.9431C37.3778 26.9431 36.7162 26.5265 36.4013 25.8725L28.3787 9.17598C27.9271 8.2359 28.3229 7.10736 29.263 6.65531C30.2035 6.20371 31.3316 6.59953 31.7832 7.53961L38.1038 20.6931L44.4239 7.54006C44.876 6.59953 46.0036 6.20371 46.9442 6.65531C47.8847 7.10736 48.2805 8.2359 47.8289 9.17598L39.8063 25.8721C39.4914 26.5265 38.8298 26.9431 38.1038 26.9431Z" fill="#333333" />
									<path id="path152" d="M107.509 6.59459C106.535 6.2217 105.443 6.70839 105.07 7.6822L100.317 20.0863L94.8321 7.59854C94.511 6.86626 93.7801 6.4448 93.0271 6.47494C92.2629 6.46999 91.5405 6.92699 91.2508 7.6822L86.6179 19.7751L81.9845 7.68175C81.6112 6.70839 80.5209 6.2208 79.5453 6.59414C78.571 6.96747 78.0839 8.05958 78.4572 9.0334L84.8542 25.7299C85.134 26.4604 85.8353 26.9431 86.6179 26.9431C87.4001 26.9431 88.1018 26.4604 88.3816 25.7299L93.1751 13.2188L98.7072 25.8141C99.009 26.5014 99.6882 26.9431 100.436 26.9431C100.451 26.9431 100.467 26.9431 100.482 26.9426C101.247 26.9242 101.926 26.4451 102.2 25.7299L108.597 9.03385C108.97 8.06003 108.483 6.96792 107.509 6.59459Z" fill="#333333" />
									<path id="path156" d="M52.5912 27.0056C51.5481 27.0056 50.7025 26.16 50.7025 25.1169V8.41994C50.7025 7.37686 51.5481 6.53123 52.5912 6.53123C53.6343 6.53123 54.4799 7.37686 54.4799 8.41994V25.1169C54.4799 26.16 53.6343 27.0056 52.5912 27.0056Z" fill="#333333" />
									<path id="path160" d="M50.615 2.04083C50.615 0.949169 51.4997 0.0648637 52.591 0.0648637C53.6826 0.0648637 54.5674 0.949169 54.5674 2.04083C54.5674 3.13249 53.6826 4.0168 52.591 4.0168C51.4997 4.0168 50.615 3.13249 50.615 2.04083Z" fill="#0073CF" />
									<path id="path164" d="M23.5429 8.18329L12.7631 0.303261C12.1986 -0.109205 11.4298 -0.100212 10.8752 0.325748L0.618474 8.20353C0.228498 8.50265 0 8.96639 0 9.45757V26.2621C0 27.1351 0.707983 27.8436 1.58149 27.8436H7.09108H8.35322H8.45847H8.64829H13.7094C14.5924 27.8436 15.3053 27.1162 15.2828 26.2279C15.2603 25.3625 14.502 24.6954 13.6366 24.6954H8.92717H8.73735H7.93581H7.45992H3.84443C3.45986 24.6954 3.14814 24.3837 3.14814 23.9991V10.5731C3.14814 10.3563 3.24845 10.1525 3.42027 10.0207L10.868 4.30062C11.4546 3.85038 12.2678 3.84048 12.8647 4.27678L20.7546 10.0441C20.9341 10.1755 21.0403 10.3842 21.0403 10.6068V17.1055C21.0403 17.9885 21.7671 18.7018 22.6555 18.6789C23.5209 18.6569 24.188 17.8985 24.188 17.0326V9.45398C24.188 8.95155 23.9487 8.47971 23.5429 8.18329Z" fill="#0073CF" />
								</g>
							</svg>
						</div>
						<ul className="hidden lgc:flex justify-center items-center gap-2 lg:ml-7">
							{headerMenu.map((menu) => (
								<li key={menu} className="px-3 py-2 rounded-lg text-gray hover:bg-light-gray font-medium cursor-pointer">
									{menu}
								</li>
							))}
							<li className="px-3 py-2 rounded-lg text-gray hover:bg-light-gray font-medium cursor-pointer">
								<select className="outline-none bg-transparent" name="More" id="more">
									<option value="More">More</option>
								</select>
							</li>
						</ul>
						<Button buttonType={"button"} classes="text-sm py-1.5 px-2 lgc:px-4 lgc:py-2.5 lgc:text-base">
							Join / Sign In
						</Button>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Header;
