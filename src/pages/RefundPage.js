import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import RefundSection from "../components/RefundDescription/RefundSection";
import Header from '../components/Header/Header';

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="Refund Policy"/>
                <PageTop pagetitle="Refund Policy"/>
                <RefundSection/>
                <Footer/>
            </Fragment>


        )
            ;
    }
}

export default RefundPage;