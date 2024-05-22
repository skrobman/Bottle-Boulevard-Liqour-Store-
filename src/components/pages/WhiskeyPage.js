import React from 'react'
import Header from '../common/Header';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../storeSections/Breadcrumb';
import Store from '../storeSections/Store';
import Footer from '../common/Footer';

const WhiskeyPage = () => {
    return (
        <>
            <Helmet>
                <title>WHISKEY</title>
            </Helmet>
            <Header />
            <Breadcrumb />
            <Store />
            <Footer />
        </>
    )
}

export default WhiskeyPage;