import React from 'react'

import vg from "../assests/2.webp"

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
   <>
     <div className="home">
        <main>
            <h1>TechPrince</h1>
            <p>solution to your problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>We are your one and only solution to the tech 
        Problems you face everday.
        We are leading tech company whose aim to increase the problem 
        solving abilit in children </p>
      </div>
    </div>
    <div className="home3" id="about">
    <div><h1>who we are?</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur
       adipisicing elit. Asperiores 
      molestiae veritatis enim soluta
       exercitationem deleniti vitae, possimus 
      tenetur quibusdam aperiam fugiat molestias  Lorem ipsum dolor sit, amet consectetur
       adipisicing elit. Asperiores 
      molestiae veritatis enim soluta
       exercitationem deleniti vitae, possimus 
      tenetur quibusdam aperiam fugiat molestias accusantium eaque ipsa? Quia dolorem commodi perspiciatis unde?accusantium eaque ipsa? Quia dolorem commodi perspiciatis unde?
    </p></div>

    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}> 
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{animationDelay:"0.5s"}}> 
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}}> 
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{animationDelay:"1.0s"}}> 
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
   </>
  )
}

export default Home