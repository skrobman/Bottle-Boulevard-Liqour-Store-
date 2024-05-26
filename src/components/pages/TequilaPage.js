import React from 'react'
import Header from '../common/Header';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../storeSections/Breadcrumb';
import StoreTequila from '../storeSections/StoreTequila'
import Footer from '../common/Footer';

const CognacPage = () => {
    return (
        <>
            <Helmet>
                <title>TEQUILA</title>
            </Helmet>
            <Header />
            <Breadcrumb />
            <StoreTequila />
            <Footer />
        </>
    )
}

export default CognacPage;