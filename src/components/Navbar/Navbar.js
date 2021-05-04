import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import companyLogo from "../../img/logo/company-logo.svg";

function Navbar2() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const _fnEmptyFunctionPointer = () => {};

	const handleScroll = () => {
		if (window.pageYOffset > 40) {
			if (!isScroll) {
				setIsScroll(true);
			}
		} else {
			setIsScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", _fnEmptyFunctionPointer);
		};
	}, []);

	// useEffect(() => {
	// 	window.removeEventListener("scroll");
	// }, []);

	return (
		<div>
			<nav
				className={`lg:py-6 w-full z-30 fixed ${
					isScroll ? "bg-white" : "text-white"
				}`}
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center'>
							<div className='w-12 lg:w-16 flex-shrink-0'>
								<a href='#'>
									<img src={companyLogo} className='m-6' />
								</a>
							</div>
						</div>
						<div>
							<div className='md:block'>
								<div className='ml-10 flex items-baseline space-x-4'>
									<a
										href='#contact-us'
										className=' hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
									>
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar2;
