
import Container from '../../../Container/Container';
import img1 from '../../../assets/call.png'
import img2 from '../../../assets/location.png'
import img3 from '../../../assets/watch.png'
const OpeningHour = () => {
    return (
      <Container>
        <div className="flex justify-center gap-10 mb-20 mt-10">
          <div className="border bg-slate-600 px-20 py-14 rounded-xl flex gap-10">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <p className="text-2xl text-white font-bold">Contact Us</p>
              <p className="text-white mt-5">Open 9.00 am to 5.00pm </p>
              <p className="text-white">Everyday</p>
            </div>
          </div>
          <div className="border bg-amber-700 px-20 py-14 rounded-xl flex gap-10">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <p className="text-2xl text-white font-bold">Our Locations</p>
              <p className="text-white mt-5">Dhanmondi 17, Dhaka </p>
              <p className="text-white">-1200, Bangladesh</p>
            </div>
          </div>
          <div className="border bg-slate-600 px-20 py-14 rounded-xl flex gap-10">
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <p className="text-2xl text-white font-bold">Opening Hours</p>
              <p className="text-white mt-5">+88 01750 00 00 00 </p>
              <p className="text-white">+88 01750 00 00 00</p>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default OpeningHour;