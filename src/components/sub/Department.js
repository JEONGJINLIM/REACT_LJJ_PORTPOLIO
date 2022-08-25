import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Department() {
	const path = process.env.PUBLIC_URL;
	const [Members, setMembers] = useState([]);
	useEffect(() => {
		axios.get(path + '/DB/members.json').then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	useEffect(() => {
		console.log(Members);
	}, [Members]);

	return (
		<Layout name={'Department'}>
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
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
								quasi dolore? Odit, delectus corrupti. Autem praesentium animi
								facere ex explicabo!
							</p>
						</div>
					</div>
				</article>
			))}
			{/* <p>Department</p> */}
		</Layout>
	);
}

export default Department;
