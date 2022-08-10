import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';

function Header() {
	const active = { color: '#403730' };

	return (
		<header>
			<h1>
				<Link to='/'>
					<ul>
						<li>
							<FontAwesomeIcon icon={faEnvira} />
							<h1>ECO DECODE</h1>
						</li>
					</ul>
				</Link>
			</h1>
			<nav>
				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							DEPARTMENT
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							COMMUNITY
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							YOUTUBE
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							LOCATION
						</NavLink>
					</li>
					<li>
						<NavLink to='/members' activeStyle={active}>
							MEMBERS
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
