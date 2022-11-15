import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Header from '../components/Header/Header';

class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Fragment>

                    <Header title="Project Name"/>
                    <PageTop pagetitle="Land Description"/>
                    <ProjectDetails/>
                    <Footer/>

                </Fragment>

            </Fragment>
        );
    }
}

export default ProjectDetailsPage;