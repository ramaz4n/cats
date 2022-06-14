import React, {useState, useContext, useEffect } from 'react';
import styles from './CatItem.module.scss'
import like_sm from '../../image/like.svg'
import hovLike from '../../image/hov-like.svg'
import fullLike from '../../image/full-like.svg'
import {AuthContext} from '../../AuthContext'

function CatItem({imgLink}) {
	const [like, setLike] = useState(false);
	const {items, setItems} = useContext(AuthContext)

	const handleLike = (e) =>{
		setLike(!like)
		e.like = !like
		//setItems([...items, {"id": new Date().getTime(), "img": imgLink, "like": !like}])
	}

	useEffect(()=>{
		if(like){
			setItems([...items, {"id": new Date().getTime(), "img": imgLink, "like": like}])
		}else{
			setItems()
		}							
	},[like])

	return (
		<div className={styles.catItem}>
			<img className={styles.catItem__img} src={imgLink} alt="cat" />
			<div  onClick={handleLike} className={styles.likes}>	
				<img className={like? styles.like__of: styles.like } src={like_sm} alt="like" />
				<img className={like? styles.like__of: styles.hovLike} src={hovLike} alt="like" />
				<img className={like? styles.like__on: styles.fullLike} src={fullLike} alt="like" />
			</div>
		</div>
	);
}

export default CatItem;