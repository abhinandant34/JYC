import "./studentCoordi.css";
import image from '../images/PrajwalShukla.png'
import image1 from '../images/PiyushSharma.png'
import image3 from '../images/Priyanshi.png'
import image4 from '../images/NamanBharadwaj.png'
import image2 from '../images/IshitaGoel.png'
import Slideshow from './Slideshow/Slideshow'
const images = [image,image1,image2,image3,image4];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;