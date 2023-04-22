import './HomeGrid.css';
import tn from '../images/indie_food/tn.JPG';
import bd from '../images/indie_food/bd.JPG';
import da from '../images/deya/da.JPG';
import db from '../images/fun/db.JPG';
import mc from '../images/indie_food/mc.JPG';
import rt from '../images/indie_food/rt.JPG';
import rs from '../images/roti_shack/rs.JPG';
import cn from '../images/indie_food/cn.JPG';
import fs from '../images/fun/fs.jpg';
import lb from '../images/fun/lb.JPG';
import ws from '../images/fun/ws.JPG';
import wv from '../images/indie_food/wv.JPG';

const HomeGrid = props => {
  return (
    <div className="grid">
      <img id="bd" src={bd} alt="Jumpin' Jimmy and The Nice Guys at Hereford Indie Food Festival" />
      <img id="tn" src={tn} alt="Trevor Nelson at Hereford Indie Food Festival" />
      <img id="da" src={da} alt="DEYA taproom, Cheltenham" />
      <img id="db" src={db} alt="Kayaking in Dubrovnik" />
      <img id="mc" src={mc} alt="MacMan at Hereford Indie Food Festival" />
      <img id="rt" src={rt} alt="Return of the Spouse at Hereford Indie Food Festival" />
      <img id="rs" src={rs} alt="Roti Shack at The Big Cheese, Caerphilly" />
      <img id="cn" src={cn} alt="Neighbourhood Deli at Hereford Indie Food Festival" />
      <img id="fs" src={fs} alt="Fussen, Germany" />
      <img id="lb" src={lb} alt="Birthdays!" />
      <img id="ws" src={ws} alt="Landscapes" />
      <img id="wv" src={wv} alt="Wye Valley Brewery at Hereford Indie Food Festival" />
    </div>
  );
};

export default HomeGrid;