import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Header from '../components/Header/Header';
import KhoborDetails from '../components/KhoborDetails/KhoborDetails';
import RelatedArticles from '../components/RelatedArticles/RelatedArticles';

class CourseDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="Course Details"/>
                {/* <CourseDetails/> */}
                <KhoborDetails />
                <RelatedArticles />
                <Footer/>


            </Fragment>
        );
    }
}

export default CourseDetailsPage;