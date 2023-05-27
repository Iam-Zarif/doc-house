import Title from "../../../Title/Title";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    Title("DOC | HOME")
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;