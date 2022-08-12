import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';

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
			<div id='map' ref={container}></div>
			{/*<button
				onClick={() =>
					Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				}>
				Traffic ON
			</button>
			<button
				onClick={() =>
					Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				}>
				Traffic OFF
			</button>*/}
			<button onClick={() => setTraffic(!Traffic)}>
				{Traffic ? 'Traffic OFF' : 'Traffic ON'}
			</button>
			{/* 삼항연산자로 코드 간소화 */}
		</Layout>
	);
}

export default Location;
