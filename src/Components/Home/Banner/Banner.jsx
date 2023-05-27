import bannerImg from '../../../assets/Group 34991.png'
import vector from '../../../assets/Vector.png'
import img1 from '../../../assets/Group 6.png'
import img2 from '../../../assets/Group 7.png'
const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-[750px] "
        style={{
          backgroundImage: `url("https://i.ibb.co/1bZCzCZ/Rectangle-1.jpg")`,
        }}
      >
        <div>
          <img className="absolute bottom-96 w-20" src={img1} alt="" />
        </div>
        <div className="">
          <img className="absolute top-10 w-20 lg:w-fit lg:top-32" src={img2} alt="" />
        </div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="absolute top-0 left-1">
            <img src={vector} alt="" />
          </div>
          <div className=" flex flex-col-reverse items-center gap-16 mt-32 lg:flex-row lg:gap-36 lg:mt-16">
            <div className="text-start">
              <h1 className="mb-5 text-5xl font-bold">
                Your Best Medical Help Center
              </h1>
              <p className="mb-5">
                Lorem Ipsum is simply dummy text they are printing typesetting
                has been the industry’s stardard.
              </p>
              <button className="btn bg-amber-600 text-white hover:text-amber-700">
                All services
              </button>
            </div>
            <div>
              <img src={bannerImg} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
