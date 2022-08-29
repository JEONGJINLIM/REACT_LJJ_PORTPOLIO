import Layout from '../common/Layout';
import Pop from '../common/Pop';
//// 여기서 한번 더 추가함
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
/// 여기서부터는 한번 더 수정
// import axios from 'axios';
// import { useEffect, useState, useRef } from 'react';
// 리듀서 작업 후 생긴거 원래 없던것
// import { useDispatch, useSelector } from 'react-redux';
// import { setYoutube } from '../../redux/action';
////수정한거 다시 없앰 통합
// 새로 생긴거 끝

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
	//
	/// const dispatch = useDispatch(); 동작을 위해 지움
	//
	//const line = useRef(null); //내가 체크할때 없던것
	//console.log(line);
	// 리듀서 하면서 없앤것
	//const [Vids, setVids] = useState([]);
	// 없앤것 끝
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	//const [Open, setOpen] = useState(false); 내가 체크할때 없던것 두번째//

	console.log(Index);

	//새로 생긴것
	const Vids = useSelector((store) => store.youtubeReducer.youtube);

	console.log(Vids);
	// useEffect(() => {
	// 	const key = 'AIzaSyDL7eLWDUNhyCoKpLo1Zllo0Ci2oYZNVj8';
	// 	const playlist = 'PL-onxw7JJHKGOAr2wmAWZ32af-25BIS_M';
	// 	const num = 10;
	// 	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	// 	axios.get(url).then((json) => {
	// 		console.log(json.data.items);
	// 		//리듀서 하면서 없앤것
	// 		//setVids(json.data.items);
	// 		//끝
	// 		dispatch(setYoutube(json.data.items));
	// 	});
	// }, []);

	// useEffect(() => {
	// 	console.log(line.current);
	// }, [line]);
	////// 다시 지움

	return (
		<>
			<Layout name={'Youtube'}>
				<figure id='youtube'>
					{/* className='myScroll' */}
					<video
						src={process.env.PUBLIC_URL + '/img/teaCup.mp4'}
						loop
						muted
						autoPlay></video>
				</figure>

				{/* idx가 id로 바뀌어 있었음 */}
				{Vids.map((vid, idx) => (
					<article key={vid.id}>
						<div className='pic'>
							<img src={vid.snippet.thumbnails.high.url} alt={vid.title} />
							<FontAwesomeIcon
								icon={faYoutube}
								//ref={line} 1트
								ref={pop}
								onClick={() => {
									//setOpen(true);
									setIndex(idx);
									pop.current.open();
									// idx가 id로 바뀌어 있었음 요기는 idx값이 맞음 인덱스 안에 배열을 불러오는거니까
								}}
							/>
						</div>

						<div className='rightTxt'>
							<h2>
								{vid.snippet.title.length > 100
									? vid.snippet.title.substr(0, 100) + '...'
									: vid.snippet.title}
							</h2>

							<div className='txt'>
								<p>
									{vid.snippet.description.length > 200
										? vid.snippet.description.substr(0, 200) + '...'
										: vid.snippet.description}
								</p>
								<div className='cal'>
									<h3>{vid.snippet.publishedAt.split('T')[0]}</h3>
								</div>
							</div>
						</div>
					</article>
				))}
			</Layout>

			<Pop ref={pop}>
				{Vids.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
				<Pop setOpen={setOpen}></Pop>
			</Pop>
		</>
	);
}

export default Youtube;
