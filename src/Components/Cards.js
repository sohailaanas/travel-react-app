import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src="images/img1.jpeg"
                    text="Explored the Highland, Scotland, United Kingdom"
                    label="Adventure"
                    path="/services"/>
                    <CardItem
                    src="images/img2.jpeg"
                    text="Travel through the islands of Cusco, Peru in Machu Pichu, Peru
                    "
                    label="Luxury"
                    path="/services"/>

                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src="images/img3.jpeg"
                    text="Three Men Standing Near Waterfalls"
                    label="Mystery"
                    path="/services"/>
                    <CardItem
                    src="images/img4.jpeg"
                    text="Experience of Infinity Pool Near Beach"
                    label="Adventure"
                    path="/products"/>
                    <CardItem
                    src="images/img5.jpeg"
                    text="Canal Beside Houses"
                    label="Adrenaline"
                    path="/sign-up"/>


                </ul>

            </div>
        </div>
      
    </div>
  )
}

export default Cards
