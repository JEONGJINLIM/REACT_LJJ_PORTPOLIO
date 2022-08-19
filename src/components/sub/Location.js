import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//브랜드 로고 (BI, CI) 아이콘 import
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Location() {
	const { kakao } = window;

	const info = [
		{
			title: '삼성동 코엑스',
			latlng: new kakao.maps.LatLng(37.51271224560607, 127.06069135102807),
			imgUrl: process.env.PUBLIC_URL + '/img/marker1.png',
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];
	const container = useRef(null);

	const [Location, setLocation] = useState(null);
	//traffic출력 여부를 결정할 boolean값이 담길 state추가
	const [Traffic, setTraffic] = useState(false);

	const [Info, setInfo] = useState(info);

	const option = {
		center: Info[0].latlng,
		level: 3,
	};

	const imgSrc = Info[0].imgUrl;
	const imgSize = Info[0].imgSize;
	const imgPos = Info[0].imgPos;

	const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);

	const marker = new kakao.maps.Marker({
		position: option.center,
		image: markerImage,
	});

	useEffect(() => {
		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
		setLocation(map_instance);
	}, []);

	useEffect(() => {
		if (!Location) return;
		Traffic
			? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'Location'}>
			<div className='upper'>
				<article className='txtLeft'>
					<h2>CONTATCT</h2>
					<h1>GET IN TOUCH</h1>
					<span>Lorem ipsum dolor sit.</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
						recusandae?
					</p>
				</article>

				<article className='mapRight'>
					<div id='map' ref={container}></div>
					<button onClick={() => setTraffic(!Traffic)}>
						{Traffic ? 'Traffic OFF' : 'Traffic ON'}
					</button>
				</article>
			</div>

			<div className='lower'>
				<article className='firstTxt'>
					<div className='wrap'>
						<h1>DIRECT CONTACT</h1>
						<ul className='address'>
							<li>
								<strong>address</strong>
							</li>
							<li>PO / Lorem, ipsum dolor.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
						<ul className='contact'>
							<li>
								<strong>tel:</strong> +01 2345 6789
							</li>
							<li>
								<strong>mail:</strong> decode@email.com
							</li>
						</ul>
						<ul className='sns'>
							<li>
								<FontAwesomeIcon icon={faTwitter} />
							</li>
							<li>
								<FontAwesomeIcon icon={faFacebook} />
							</li>
						</ul>
					</div>
				</article>

				<article className='secondTxt'>
					<div className='wrap'>
						<h1>MEDIA CONTACT</h1>
						<h2>Lorem, ipsum dolor.</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatem error qui quos repudiandae excepturi, voluptatibus ipsa
							minima quo!
						</p>
					</div>
				</article>

				<article className='thirdTxt'>
					<div className='wrap'>
						<h1>BETTER TOGETHER</h1>
						<h2>JOBS</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
							laudantium ratione pariatur tempore porro accusamus?
						</p>
					</div>
				</article>
			</div>

			{/* 삼항연산자로 코드 간소화 */}
		</Layout>
	);
}

export default Location;
