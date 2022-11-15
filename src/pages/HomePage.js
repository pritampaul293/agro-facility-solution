import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import Header from '../components/Header/Header';
import Nirbacitokhobor from '../components/Nirbacitokhobor/Nirbacitokhobor';
import Orthouddug from '../components/Orthouddug/Orthouddug';
import Slider from '../components/Slider/Slider';
import FourCards from '../components/FourCards/FourCards';
import AgroGib from '../components/AgroGib/AgroGib';
import KGoveshonaTips from '../components/KGoveshonaTips/KGoveshonaTips';
import FarmToProkriti from '../components/FarmToProkriti/FarmToProkriti';
import News from '../components/News/News';


class HomePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)


    }

    render() {
        return (
            <Fragment>
              <Header title="হোম"/>
                <TopBanner/>
                <News />
                {/* <Services/> */}
                <Slider />
                <Nirbacitokhobor />
                <FourCards />
                <Orthouddug />
                <AgroGib />
                <KGoveshonaTips />
                <FarmToProkriti />
                {/* <Analysis/> */}
                {/* <RecentProjects/> */}
                {/* <Courses/> */}
                <Summary/>
                <Video/>
                <ClientReview/>
                <Footer/>

            </Fragment>
        );
    }
}

export default HomePage;