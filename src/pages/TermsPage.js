import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsDescription from "../components/TermsDescription/TermsDescription";
import Header from '../components/Header/Header';

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>

                <Header title="Terms & Condition"/>
                <PageTop pagetitle="Terms & Condition"/>
                <TermsDescription/>
                <Footer/>

            </Fragment>
        );
    }
}

export default TermsPage;