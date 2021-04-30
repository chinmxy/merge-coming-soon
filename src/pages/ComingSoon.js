import React from "react";

import Background from "../components/Background/Background";
import Navbar from "../components/Navbar/Navbar";
import Hero2 from "../components/Hero2/Hero2";
import LearnMore from "../components/LearnMoreSection/LearnMore";
import Footer from "../components/Footer/Footer";

const ComingSoon = () => {
	return (
		<div>
			<Background />
			<Navbar />
			<Hero2 />
			<LearnMore />
			<div className='bg-white'>
				<Footer />
			</div>
		</div>
	);
};

export default ComingSoon;
