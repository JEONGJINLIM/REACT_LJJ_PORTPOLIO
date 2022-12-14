import { combineReducers } from 'redux';
// 제일 마지막에 지운것 코드 간소화를 위해
// const initMember = {
// 	members: [
// 		{
// 			name: 'Julia',
// 			position: 'President',
// 			pic: 'member1.jpg',
// 		},
// 		{
// 			name: 'David',
// 			position: 'Vice President',
// 			pic: 'member2.jpg',
// 		},
// 		{
// 			name: 'Emily',
// 			position: 'UI Designer',
// 			pic: 'member3.jpg',
// 		},
// 		{
// 			name: 'Paul',
// 			position: 'Front-end Engineer',
// 			pic: 'member4.jpg',
// 		},
// 		{
// 			name: 'Sara',
// 			position: 'Back-end Engineer',
// 			pic: 'member5.jpg',
// 		},
// 		{
// 			name: 'Michael',
// 			position: 'Project Manager',
// 			pic: 'member6.jpg',
// 		},
// 	],
// };

//초기데이터를 state에 저장했다가 추후 action객체가 전달되면
//action객체의 타입에 따라 기존 데이터를 변경해서 리턴
//const memberReducer = (state = initMember, action) => {
// 수정한것 이 요 아래
const memberReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return { ...state, members: action.payload };

		default:
			return state;
	}
};

//전달된 각각의 reducer를 하나로 합쳐서 반환
//const reducers = combineReducers({ memberReducer });
// 리듀서 하면서 없앤것
const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case 'SET_YOUTUBE':
			return { ...state, youtube: action.payload };
		default:
			return state;
	}
};

const reducers = combineReducers({ memberReducer, youtubeReducer });

export default reducers;
