import React, {Component, Fragment} from 'react';
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';


class LoginPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header
                 title="About"/>
                {/* <PageTop pagetitle="Login System"/> */}
                <Login/>
                <Footer/>


            </Fragment>
        );
    }
}

export default LoginPage;