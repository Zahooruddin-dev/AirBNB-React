import image from "../assets/images/1.png"
import image2 from "../assets/images/2.png"
import image3 from "../assets/images/3.png"
import image4 from "../assets/images/4.png"
import image5 from "../assets/images/5.png"
import image6 from "../assets/images/6.png"
import image7 from "../assets/images/10.png"
import image8 from "../assets/images/8.png"
import image9 from "../assets/images/9.png"
import image10 from "../assets/images/11.png"
import image11 from "../assets/images/12.png"
import image12 from "../assets/images/13.png"
export default function Hero() {
  
  return (
<main>
      <div className="image-container">
          <img src={image} alt="" srcset="" className="img1"/>
          <img src={image2} alt="" srcset="" className="img2"/>
          <img src={image3} alt="" srcset="" className="img3"/>
          <img src={image4} alt="" srcset="" className="img4"/>
          <img src={image5} alt="" srcset="" className="img5"/>
          <img src={image6} alt="" srcset="" className="img6"/>
          <img src={image7} alt="" srcset="" className="img7"/>
          <img src={image8} alt="" srcset="" className="img8"/>
          <img src={image9} alt="" srcset="" className="img9"/>
          <img src={image10} alt="" srcset="" className="img10"/>
          <img src={image11} alt="" srcset="" className="img11"/>
          <img src={image12} alt="" srcset="" className="img12"/>
      </div>
      <div className="text-container">
      <h1 className="title">Hybrid Experiences</h1>
      <p className="byline">
        Join unique interactive activities led by one-of-a-kind hosts—all either
        at exotic locations or at the comfort of your home.
      </p>
      </div>
      </main>
  )
}

 