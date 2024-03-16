import React from 'react'
import '../ProductsPage/ProductPage.css'
import { useEffect,useState } from 'react';
import banner1 from '../../assets/banner!.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

const CarouselPage = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

       useEffect(() => {
              const interval = setInterval(() => {
                  const nextSlide = currentSlide === 3 ? 1 : currentSlide + 1;
                  setCurrentSlide(nextSlide);
              }, 5000); // Adjust the interval duration as needed (in milliseconds)
        
              return () => clearInterval(interval);
          }, [currentSlide]);


  return (
       <div style={{backgroundColor:"white",width:'100%',height:"400px"}}>
       <div className="carousel">
       <div className="carousel-inner">
       <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden checked={currentSlide === 5} />
         <div className="carousel-item">
             <img src={banner3} alt="Carousel" />
         </div>
         <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden checked={currentSlide === 1} />
         <div className="carousel-item">
             <img src={banner1} alt="Without" />
         </div>
         <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden  checked={currentSlide === 2}/>
         <div className="carousel-item">
             <img src={banner2} alt="JavaScript" />
         </div>
         <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden  checked={currentSlide === 3}/>
         <div className="carousel-item">
             <img src={banner3} alt="Carousel" />
         </div>
         <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden checked={currentSlide === 4} />
         <div className="carousel-item">
             <img src={banner3} alt="Carousel" />
         </div>
         <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
         <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
         <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
         <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
         <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
         <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
         <ol className="carousel-indicators">
             <li>
                 <label htmlFor="carousel-1" className="carousel-bullet">•</label>
             </li>
             <li>
                 <label htmlFor="carousel-2" className="carousel-bullet">•</label>
             </li>
             <li>
                 <label htmlFor="carousel-3" className="carousel-bullet">•</label>
             </li>
         </ol>
        </div>
         </div>

       </div>
  )
}

export default React.memo(CarouselPage)
