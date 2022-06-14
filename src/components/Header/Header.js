import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Header.module.scss'



function Header(props) {
	return (
		<div className={styles.header}>
			<Container>
				<ul className={styles.nav}>
					<Link className={styles.link} to={'/'}><li>Все котики</li></Link>
					<Link className={styles.link} to={'/likecat'}><li>Любимые котики</li></Link>
				</ul>	
			</Container>
		</div>
	);
}

export default Header;