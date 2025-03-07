
import React from 'react'
import './Main.css'
import img from '../../Assets/img.jpg';
const Data= [

    {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is jnow for its luxurious stays ans adventurous adtivities'
    },
  {
        id:2,
    imgSrc:img,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:'Huayna Picchu is a montain in Peru, rising over Machu Picchu, the so-called lost city of Incas. This place is popular among tourist as the sunrise from the sun is simply spectacular'
    },
   { id:3,
    imgSrc:img,
    destTitle:'Great Barried Reef',
    location:'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'One of the most remarkable Australian natural gifts is the grat Barrier reef. the hallmark of this place is lavish and beuty Alwas interesting to be in this place'
},


{
id:4,
    imgSrc:img,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description:'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is jnow for its luxurious stays ans adventurous adtivities'

},
{
    id:5,
    imgSrc:img,
    destTitle:'Guanajuato',
    location:'mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description:'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is jnow for its luxurious stays ans adventurous adtivities'

},

{
    id:6,
    imgSrc:img,
    destTitle:'Cinque TTerre',
    location:'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is jnow for its luxurious stays ans adventurous adtivities'

},
{
    id:7,
    imgSrc:img,
    destTitle:'Angkor Wat',
    location:'Combodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description:'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is jnow for its luxurious stays ans adventurous adtivities'

},
{
    id:8,
    imgSrc:img,
    destTitle:'Taj Mahal',
    location:'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description:'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is jnow for its luxurious stays ans adventurous adtivities'

},
{
    id:9,
    imgSrc:img,
    destTitle:'Bali Island',
    location:'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description:'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is jnow for its luxurious stays ans adventurous adtivities'

},


]
const Main = () => {
    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 className="title">Most visited destinations</h3>
            </div>
            <div className="secContent grid">
                {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
                    <div key={id} className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>
                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className="continent flex">{location}
                                <span className="name">{location}</span>
                            </span>
                       <div className="fees flex">
                        <div className="grade">
                            <span>{grade}<small className="plusOne">+1</small></span>
                        </div>
                        <div className="price"> <h5>{fees}</h5>
                        </div>

                        </div> 

                        <div className="desc"><p>{description}</p></div>
                        <button className='btn flex'> DETAILS</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Main;
