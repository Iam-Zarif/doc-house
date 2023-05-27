/* eslint-disable no-unused-vars */
import Container from '../../../Container/Container';
import img1 from '../../../assets/Rectangle 10.jpg'
import img2 from '../../../assets/Rectangle 20078.jpg'
import ServiceTabs from './ServiceTabs';
const Services = () => {
    return (
      <Container>
        <div
          className="mt-32 grid grid-cols-1 lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="mt-8 font-mono">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div>
              <ServiceTabs></ServiceTabs>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Services;