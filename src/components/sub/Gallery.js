import Layout from '../common/Layout';
import Pop from '../common/Pop';
//npm i react-masonry-component
import Masonry from 'react-masonry-component';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);
	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Open, setOpen] = useState(false);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	const masonryOptions = { transitionDuration: '0.5s' };
	/////////////////////////////////////////////////////
	const num = 100;
	const user = '164021883@N04';
	// const url_interest =
	// const url_user =

	const getFlickr = async (opt) => {
		const key = '4612601b324a2fe5a1f5f7402bf8d87a';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';

		let url = ''; //url 선언했으면 넣어야지.. 멍충아! ㅠ.ㅜ

		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		} //
		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
		} //
		if (opt.type === 'search') {
			//search는 fl
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tag}`;
		}
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			if (json.data.photos.length === 0)
				return alert('해당 검색어값이 없습니다.');
			setItems(json.data.photos.photo);
		});

		//masonry 박스정렬시간동안 기다린후 리스트 출력
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setEnableClick(true);
		}, 1000);
	};

	//interest요청 함수
	const showInterest = () => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		getFlickr({ type: 'interest' });
		setEnableClick(false);
	};

	//search요청 함수
	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요');
		if (!EnableClick) return;
		setEnableClick(false);
		setLoading(true);
		frame.current.classList.remove('on');
		getFlickr({ type: 'search', tag: result });
		input.current.value = '';
	};

	//user요청 함수
	const showUser = (e) => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		//getFlickr({ type: 'user', user: user }); 기본값 만 받던것
		getFlickr({ type: 'user', user: e.target.getAttribute('user') });
		setEnableClick(false);
	};

	useEffect(() => getFlickr({ type: 'interest' }), []);

	return (
		<>
			<Layout name={'Gallery'}>
				<figure id='gallery' className='myScroll'>
					<video
						src={process.env.PUBLIC_URL + '/img/teaCup.mp4'}
						loop
						muted
						autoPlay></video>
				</figure>
				<button user={user} onClick={showUser}>
					My Gallery
				</button>
				<button onClick={showInterest}>Interest Gallery</button>
				{/* <button
					onClick={() => {
						if (!EnableClick) return;
						setLoading(true);
						frame.current.classList.remove('on');
						//getFlickr(url_user);
						getFlickr({ type: 'user', user: user });
						setEnableClick(false);
					}}>
					My Gallery
				</button> */}

				{/* <button
					onClick={() => {
						setLoading(true);
						frame.current.classList.remove('on');
						//getFlickr(url_interest);
						getFlickr({ type: 'interest' });
						setEnableClick(false);
					}}>
					Interest Gallery
				</button>  -interest 였던것- */}

				<div className='searchBox'>
					<input
						type='text'
						ref={input}
						onKeyUp={(e) => {
							if (e.key === 'Enter') showSearch();
						}}
					/>
					<button onClick={showSearch}>search</button>
					{/* <button
						onClick={() => {
							const result = input.current.value.trim();
							if (!result) return alert('검색어를 입력하세요');
							if (!EnableClick) return;
							setEnableClick(false);
							setLoading(true);
							frame.current.classList.remove('on');
							getFlickr({ type: 'search', tag: result });
							input.current.value = '';
						}}>
						search
					</button> */}
				</div>

				{Loading && (
					<img
						className='loading'
						src={process.env.PUBLIC_URL + '/img/greenLoadingunscreen.gif'}
					/>
				)}

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{Items.map((pic, idx) => {
							return (
								// <article
								// 	key={idx}
								// 	onClick={() => {
								// 		setIndex(idx);
								// 		setOpen(true);
								// 	}}> 원래 였던것
								<article key={idx}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												setIndex(idx);
												setOpen(true);
											}}>
											<img
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
												alt={pic.title}
											/>
										</div>
										<h2>{pic.title}</h2>

										<div className='profile'>
											<img
												src={`http://farm${pic.farm}.staticflickr.com/${pic.server}/buddyicons/${pic.owner}.jpg`}
												alt={pic.owner}
												onError={(e) => {
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													);
												}}
											/>
											{/* <span>{pic.owner}</span> */}
											<span user={pic.owner} onClick={showUser}>
												{pic.owner}
											</span>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			{Open && (
				<Pop setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
					/>
				</Pop>
			)}
		</>
	);
}

export default Gallery;
