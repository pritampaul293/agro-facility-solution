import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';
import Orthouddug from '../components/Orthouddug/Orthouddug';

class KrishiUddugtaPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }
    render() {
        return (
            <Fragment>
                <Header title="কৃষি উদ্যোক্তা"/>
                <PageTop pagetitle="কৃষি উদ্যোক্তা"/>
                <Orthouddug />
                

                <Footer/>


            </Fragment>
        );
    }
}

export default KrishiUddugtaPage;