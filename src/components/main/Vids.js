import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
///// 새로 만듬
import { useRef, useState } from 'react';
//리듀서 없다가 생긴것
import { useSelector } from 'react-redux';
//끝
import Pop from '../common/Pop';
/////새로 추가함
function Vids() {
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	const { youtube } = useSelector((store) => store.youtubeReducer);

	return (
		<>
			<section id='vids' className='myScroll'>
				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					autoplay={{ delay: 2000, disableOnInteraction: true }}
					pagination={{ clickable: true }}
					navigation={true}
					spaceBetween={50}
					loop={true}
					slidesPerView={3}
					centeredSlides={true}>
					{youtube.map((vid, idx) => {
						if (idx >= 4) return;
						return (
							<SwiperSlide key={vid.id}>
								<div className='inner'>
									<div
										className='pic'
										onClick={() => {
											setIndex(idx);
											pop.current.open();
										}}>
										<img
											src={vid.snippet.thumbnails.standard.url}
											alt={vid.snippet.title}
										/>
									</div>
									<h2>{vid.snippet.title}</h2>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>

			<Pop ref={pop}>
				{youtube.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${youtube[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
			</Pop>
		</>
	);
}

export default Vids;
/*
{
	 리듀서 작업하면서 없앤것 첫번째*/

/* <SwiperSlide>
					<div className='inner'>1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>5</div>
				</SwiperSlide> */

// 	{/* 요함수는 다시 추가됨 2번째로 수정한 리스트 */}
// <section id='vids' className='myScroll'>

// 	{/* <Swiper
// 		modules={[Pagination, Navigation, Autoplay]}
// 		autoplay={{ delay: 2000, disableOnInteraction: true }}
// 		pagination={{ clickable: true }}
// 		navigation={true}
// 		spaceBetween={50}
// 		loop={true}
// 		slidesPerView={3}
// 		centeredSlides={true}>
// 		{/* 여기는 원래 있던 내용 아래 첨부 */}
// 		{youtube.map((vid, idx) => {
// 			if (idx >= 4) return;
// 			return (
// 				<SwiperSlide key={vid.id}>
// 					<div className='inner'>
// 						<div className='pic'>
// 							<img
// 								src={vid.snippet.thumbnails.standard.url}
// 								alt={vid.snippet.title}
// 							/>
// 						</div>
// 						<h2>{vid.snippet.title}</h2> */}
