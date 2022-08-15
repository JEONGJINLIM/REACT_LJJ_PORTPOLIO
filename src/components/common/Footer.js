import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='upper'>
				<nav>
					<dl>
						<dt>Services</dt>
						<dl> > Ocean Turtle</dl>
						<dl> > White Tiger</dl>
						<dl> > Social Ecology</dl>
						<dl> > Lone Iileness </dl>
						<dl> > Present for You </dl>
					</dl>
					<dl>
						<dt>Volunteer</dt>
						<dl> > Karen Dawson</dl>
						<dl> > Jack Simmons</dl>
						<dl> > Michael Linden</dl>
						<dl> > Simon Green</dl>
						<dl> > Natalie Channing </dl>
					</dl>
					<dl>
						<dt>About Us</dt>
						<dl> > Our Team</dl>
						<dl> > Mission</dl>
						<dl> > Philisophy</dl>
						<dl> > Action </dl>
						<dl> > Biology </dl>
					</dl>
					<dl>
						<dt>Blog</dt>
						<dl> > Bear Population</dl>
						<dl> > The Ozone Layer</dl>
						<dl> > Spring Melody</dl>
						<dl> > Save Tropic Forests </dl>
						<dl> > Ecology Team </dl>
					</dl>
				</nav>
				<div className='lower'>
					<ul className='copy'>
						<li>2022 &copy; DECODELAB ALL rights reserved.</li>
					</ul>
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
						<li>
							<FontAwesomeIcon icon={faDribbble} />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
