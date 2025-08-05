import React, { Fragment, useEffect } from 'react'

const Tabtotop = () => {
	const screenUp = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		const handleScroll = () => {
			const color = document.getElementsByClassName('scrollToTop')[0];
			if (color) {
				window.scrollY > 100 ? (color.style.display = 'flex') : (color.style.display = 'none');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<Fragment>
			{/* <!-- Scroll To Top --> */}
			<div className="scrollToTop" id="back-to-top" onClick={screenUp}>
				<i className="ri-arrow-up-s-fill fs-20"></i>
			</div>
			<div id="responsive-overlay"></div>
			{/* <!-- Scroll To Top --> */}
		</Fragment>
	)
}

export default Tabtotop;