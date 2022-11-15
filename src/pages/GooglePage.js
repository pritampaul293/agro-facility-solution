import React, {Component, Fragment} from 'react';
import Footer from "../components/Footer/Footer";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Header from '../components/Header/Header';
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class GooglePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="About"/>
                <PageTop pagetitle="Google Map"/>
                <GoogleMap/>
                <Footer/>


            </Fragment>
        );
    }
}

export default GooglePage;