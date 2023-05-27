import Title from "../../../Title/Title";
import Banner from "../Banner/Banner";
import OpeningHour from "../OpeningHour/OpeningHour";
import Services from "../Services/Services";


const Home = () => {
    Title("DOC | HOME")
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OpeningHour></OpeningHour>
        </div>
    );
};

export default Home;