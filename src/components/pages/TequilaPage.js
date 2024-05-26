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
            <div className="bread-crumb mt-48 ml-14 mr-14">
                <Breadcrumb />
            </div>
            <StoreTequila />
            <Footer />
        </>
    )
}

export default CognacPage;