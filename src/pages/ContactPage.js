import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";
import Header from '../components/Header/Header';
import Orthouddug from '../components/Orthouddug/Orthouddug';

class ContactPage extends Component {

    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="Contact"/>
                <PageTop pagetitle="যোগাযোগ করুন"/>
                {/* <Orthouddug /> */}
                <ContactSection/>

                <Footer/>


            </Fragment>
        );
    }
}

export default ContactPage;