import React, {useEffect, useState, useContext} from 'react';
import CatItem from '../../components/CatItem/CatItem';
import Container from '../../components/Container/Container';
import styles from './AllCat.module.scss'
import {AuthContext} from '../../AuthContext'


function AllCat(props) {
	const {items, setItems} = useContext(AuthContext)
	const [cats, setCats] = useState([])

	const getCat = () => {
		fetch('https://api.thecatapi.com/v1/images/search')
			.then((data) => {return data.json()})
			.then((data) => {
				let arr;
				data.map(elem=>{
					arr = {
						"id": new Date().getTime(),
						"img": elem.url,
						"like": false
					}
				})	
				setCats(prev => [...prev, arr])
			})
	}

	useEffect(() => {
		for(let i = 0; i < 10; i++){
			getCat()
		}
		setItems(cats)
	}, []);

	return (	
		<Container>
			<div className={styles.allCat}>
				{
					items.map(elem =>(
						<CatItem 
							key={elem.id} 
							imgLink={elem.img}
						/>
					))
				}
			</div>
		</Container>
	);
}

export default AllCat;