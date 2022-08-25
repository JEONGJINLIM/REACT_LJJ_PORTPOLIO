import Layout from '../common/Layout';
import Pop from '../common/Pop';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
	const line = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyDL7eLWDUNhyCoKpLo1Zllo0Ci2oYZNVj8';
		const playlist = 'PL-onxw7JJHKGOAr2wmAWZ32af-25BIS_M';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	useEffect(() => {
		console.log(line.current);
	}, [line]);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((vid, idx) => (
					<article key={vid.id}>
						<div className='pic'>
							<img src={vid.snippet.thumbnails.high.url} alt={vid.title} />
							<FontAwesomeIcon
								icon={faYoutube}
								ref={line}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
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

			{Open && (
				<Pop setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Pop>
			)}
		</>
	);
}

export default Youtube;
