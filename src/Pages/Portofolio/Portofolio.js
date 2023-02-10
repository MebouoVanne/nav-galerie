import React from 'react';
import Menu from '../../Menu';
import img from '../../image/img3.jpg';
import imge from '../../image/img1.png';
import imge1 from '../../image/img4.jpg';
import './Portofolio.css';
// import imge1 from '../../image/img4.png';
const Portofolio = () => {
    return (
        <div>
            <Menu/>
            <h1>Portofolio</h1>
            <div className='folio'>
            <div >
            <img  className="folioimg1" src={img} alt={""}></img>
            </div>
            <div >
            <img className="folioimg2"src={imge} alt={""}></img>
            </div>
            <div className="folioimg3">
            <img src={imge1} alt={""}></img>
            </div>
            </div>
            
        </div>
    );
};

export default Portofolio;