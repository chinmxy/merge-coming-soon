import React from "react";

import "./Hero.css";
import comingSoon from "./coming-soon.svg";

const Hero = () => {
	return (
		<div className='py-24 lg:py-36'>
			<div className='relative overflow-hidden'>
				<div className='z-20'>
					<div>
						<div className='mx-auto max-w-7xl'>
							<div className='grid lg:grid lg:grid-cols-12'>
								<div className='order-1 lg:order-first z-20 px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
									<div>
										<h1 className='text-center md:text-left mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl'>
											<span className='md:block'>
												Financial services infrastructure for the digital asset
												economy{" "}
											</span>
											{/* <span className='md:block'>easiest way to buy </span>

											<span className='md:block'>cryptocurrencies.</span> */}
										</h1>
										<div className='flex justify-center md:block'>
											<a
												href='#contact-us'
												className='start-now-btn mt-12 inline-flex items-center text-white bg-gray-900 rounded-full p-4 lg:p-1 lg:pr-2 text-xl sm:text-base lg:text-sm xl:text-base'
											>
												<span className='ml-4'>Contact Us</span>
												<svg
													className='ml-2 w-5 h-5 text-white'
													data-todo-x-description='Heroicon name: solid/chevron-right'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 20 20'
													fill='currentColor'
													aria-hidden='true'
												>
													<path
														fillRule='evenodd'
														d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
														clipRule='evenodd'
													></path>
												</svg>
											</a>
										</div>
									</div>
								</div>
								<div className='pt-12 z-20 sm:z-20 lg:z-20 md:z-20 lg:col-span-6'>
									<div
										className='relative'
										aria-hidden='true'
										style={{ height: "100%" }}
									>
										<img src={comingSoon} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
