import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";
import Header from '../components/Header/Header';

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>

                <Header title="Privay Policy"/>
                <PageTop pagetitle="Privay Policy"/>
                <PrivacyDescription/>
                <Footer/>

            </Fragment>
        );
    }
}

export default PrivacyPage;