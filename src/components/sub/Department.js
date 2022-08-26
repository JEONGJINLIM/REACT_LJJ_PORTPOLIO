import Layout from '../common/Layout';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Department() {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.memberReducer.members);

	// const [Members, setMembers] = useState([]);
	// useEffect(() => {
	// 	axios.get(path + '/DB/members.json').then((json) => {
	// 		setMembers(json.data.members);
	// 	});
	// }, []);

	// useEffect(() => {
	// 	console.log(Members);
	// }, [Members]);

	return (
		<Layout name={'Department'}>
			<figure id='department' className='myScroll'>
				<video
					src={process.env.PUBLIC_URL + '/img/teaCup.mp4'}
					loop
					muted
					autoPlay></video>
			</figure>
			{Members.map((member, idx) => (
				<article key={idx}>
					<div className='inner'>
						<div className='picFrame'>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
							</div>
						</div>
						<div className='intro'>
							<h2>{member.name}</h2>
							<p>{member.position}</p>

							<h1>introduce</h1>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Nostrum repudiandae quisquam, officia voluptatibus inventore
								doloribus nulla deserunt placeat fuga dolores, magni quos
								voluptates odio tempora eius. Eveniet labore error recusandae?
							</p>
							<ul className='sns'>
								<li>
									<FontAwesomeIcon icon={faTwitter} />
								</li>
								<li>
									<FontAwesomeIcon icon={faInstagram} />
								</li>
								<li>
									<FontAwesomeIcon icon={faGithub} />
								</li>
								<li>
									<FontAwesomeIcon icon={faFacebook} />
								</li>
							</ul>
						</div>
					</div>
				</article>
			))}
			{/* <p>Department</p> */}
		</Layout>
	);
}

export default Department;
