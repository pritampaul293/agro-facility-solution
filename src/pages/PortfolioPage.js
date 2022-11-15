import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllProjects from "../components/AllProjects/AllProjects";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Header from '../components/Header/Header';
import AgroGib from "../components/AgroGib/AgroGib";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="এগ্রো বিজনেস কমুনিটি"/>
                <PageTop pagetitle="এগ্রো বিজনেস কমুনিটি"/>
                <AgroGib />
                {/* <AllProjects/> */}
                <Footer/>

            </Fragment>
        );
    }
}

export default PortfolioPage;