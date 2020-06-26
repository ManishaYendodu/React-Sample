import * as React from 'react';
import { Component } from 'react';
import {
BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import TopNavBar from '../components/NavBar/TopNavBar';
import Footer from '../components/Footer/Footer';
import VehicleDetail from '../components/Vehicle/VehicleDetail';
import EnquiryForm from '../components/Form/EnquiryForm';
import Test from '../components/Form/test';
import Dealer from '../components/Dealer/Dealer';

const AppRoter = () => {
    return(
        <Router>
            <TopNavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/enquiryform" component={EnquiryForm} />
            <Route path="/find-a-dealer" component={Dealer} />
            <Footer />
        </Router>
    )
}
export default AppRoter;