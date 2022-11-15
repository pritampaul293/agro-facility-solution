import React, {Component, Fragment} from 'react';
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Documents from "../components/Documents/Documents";
import Header from '../components/Header/Header';

class DocumentsPages extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="About"/>
                <PageTop pagetitle="Papers Documents"/>
                <Documents/>

                <Footer/>


            </Fragment>
        );
    }
}

export default DocumentsPages;