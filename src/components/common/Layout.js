import { useEffect, useRef } from 'react';

function Layout({ children, name }) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${name}`} ref={frame}>
			<div className='title'>
				<h1>{name}</h1>
			</div>
			<div className='inner'>{children}</div>
		</section>
	);
}

export default Layout;
