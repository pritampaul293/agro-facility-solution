import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import GooglePage from "../pages/GooglePage";
import DocumentsPages from "../pages/DocumentsPages";
import AuthProvider from '../AuthProvider/AuthProvider';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dashboard from '../pages/Dashboard/Dashboard';
import EcomPage from '../pages/EcomPage';
import EcomDetailsPage from '../pages/EcomDetailsPage';
import KrishiUddugtaPage from '../pages/KrishiUddugtaPage';


class AppRoute extends Component {
    render() {
        return (
            <AuthProvider>
                <Fragment>


<Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/home" component={HomePage}/>
    <Route exact path="/service" component={ServicePage}/>
    <PrivateRoute path="/sale">
        <CoursesPage/>
    </PrivateRoute>
    <PrivateRoute path="/rent">
        <PortfolioPage/>
    </PrivateRoute>
    <PrivateRoute exact path="/dashboard">
        <Dashboard/>
    </PrivateRoute>
    <Route exact path="/contact" component={ContactPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route exact path="/refund" component={RefundPage}/>
    <Route exact path="/terms" component={TermsPage}/>
    <Route exact path="/privacy" component={PrivacyPage}/>
    <Route exact path="/projectDetails" component={ProjectDetailsPage}/>
    <Route exact path="/courseDetails" component={CourseDetailsPage}/>
    <Route exact path="/login" component={LoginPage}/>
    <Route exact path="/registration" component={RegistrationPage}/>
    <Route exact path="/map" component={GooglePage}/>
    <Route exact path="/documents" component={DocumentsPages}/>
    <Route exact path="/Ecom" component={EcomPage}/>
    <Route exact path="/EcomDetails" component={EcomDetailsPage}/>
    <Route exact path="/krishiuddugta" component={KrishiUddugtaPage}/>


</Switch>


</Fragment>
            </AuthProvider>
        );

    }
}

export default AppRoute;