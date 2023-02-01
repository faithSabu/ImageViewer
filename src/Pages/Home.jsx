import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

function Home() {
  const [image, setImage] = useState([])

  useEffect(() => {
    const getImages = () => {
      axios.get('https://picsum.photos/v2/list').then(res => {
        console.log(res);
        setImage(res.data)
      })
    }
    getImages()


  }, [])


  return (
    <div className='homeContainer'>
      <Navbar />
      <div className="imageContainerWrapper">
        <div className="imageContainer">
          {image && image.map(img => (
            <img className={`image ${img.id}`} src={img.download_url
            } alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home