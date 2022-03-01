import "./photo.css";
import tech31 from './images/tech31.png'
import tech32 from './images/tech32.png'
import tech33 from './images/tech33.png'
import Slideshow from './slideshow1/Slideshow1'
const images = [tech31,tech32,tech33];

function Photogallery() {
  return (
    <div className="photogallery">
      <div className="Head"><b>Photogallery</b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default Photogallery;