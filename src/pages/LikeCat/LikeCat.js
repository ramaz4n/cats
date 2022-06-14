import React, { useEffect, useState, useContext } from 'react';
import CatItem from '../../components/CatItem/CatItem';
import Container from '../../components/Container/Container';
import styles from './LikeCat.module.scss';
import {AuthContext} from '../../AuthContext'


function LikeCat(props){
	const [likeCats, setLikeCats] = useState([])
	const {items, setItems} = useContext(AuthContext)


	useEffect(()=>{
		items.map(elem=>{
			if(elem.like){
				setLikeCats(prev=>[...prev, elem])
			}
		})
	}, [items])

	return (
		<>
			<Container>
				<div className={styles.likeCat}>
					{
						likeCats.map(elem=>{
							return (
								<CatItem
									key={elem.id}
									imgLink={elem.img}
								/>
							)
						})					
					}
				</div>
			</Container>
		</>
	);
}

export default LikeCat;