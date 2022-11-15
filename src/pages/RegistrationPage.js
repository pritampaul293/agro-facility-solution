import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";

import Footer from "../components/Footer/Footer";
import SignUp from '../components/SignUp/SignUp';
import Header from '../components/Header/Header';

class RegistrationPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="Registration"/>
                {/* <PageTop pagetitle="Registration System"/> */}
                <SignUp/>
                <Footer/>

            </Fragment>
        );
    }
}

export default RegistrationPage;