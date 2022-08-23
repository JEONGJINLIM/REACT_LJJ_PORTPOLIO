import { useEffect } from 'react';

function Play({ children, playVids }) {
	useEffect(() => {
		document.body.style.overflow = 'visible';

		return () => {
			document.body.style.overflowY = 'hidden';
		};
	}, []);

	return (
		<div className='play'>
			<div className='pbox'>{children}</div>
			<span className='close' onClick={() => playVids(false)}>
				close
			</span>
		</div>
	);
	//<>Play</>
}

export default Play;
