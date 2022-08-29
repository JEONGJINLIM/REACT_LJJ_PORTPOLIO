import { Route, Switch } from 'react-router-dom';
//없었다가 생긴것
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube, setMembers } from './redux/action';
import axios from 'axios';
//없었다가 생긴것

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Members from './components/sub/Members';

import './scss/style.scss';

function App() {
	const dispatch = useDispatch();

	const getYoutube = async () => {
		const key = 'AIzaSyDL7eLWDUNhyCoKpLo1Zllo0Ci2oYZNVj8';
		const playlist = 'PL-onxw7JJHKGOAr2wmAWZ32af-25BIS_M';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			console.log(json.data.items);
			//리듀서 하면서 없앤것
			//setVids(json.data.items);
			//끝
			dispatch(setYoutube(json.data.items));
		});
	};

	const getMembers = async () => {
		const url = process.env.PUBLIC_URL + '/DB/members.json';
		await axios.get(url).then((json) => {
			dispatch(setMembers(json.data.members));
		});
	};

	useEffect(() => {
		getYoutube();
		getMembers();
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>{' '}
				{/*메인페이지 라우터 설정 완료*/}
				<Route path='/'>
					<Header type={'sub'} />
				</Route>
				{/*서브페이지 라우터 설정 완료*/}
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Route path='/members' component={Members} />
			<Footer />
		</>
	);
}

export default App;
