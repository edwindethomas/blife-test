import BannerInformation from "../components/BannerInformation.jsx";
import CardInformation from "../components/CardInformation.jsx";

const Home = () => {


    return (
        <div className={'home__container'}>
                <BannerInformation />
                <section>
                <CardInformation />
                </section>
        </div>
    )
}

export default Home