import React from "react";
import "./Background.css";

const Background = () => {
	return (
		<div>
			<div id='background'>
				<div
					className='lg:hidden xl:hidden z-10 absolute bottom-0'
					style={{ width: "100%" }}
				>
					<svg
						width='100%'
						height='100%'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1440 320'
					>
						<path
							fill='#fff'
							fill-opacity='1'
							d='M0,96L80,85.3C160,75,320,53,480,74.7C640,96,800,160,960,192C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
						></path>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Background;
