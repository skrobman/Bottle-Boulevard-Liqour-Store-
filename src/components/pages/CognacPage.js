import React from 'react'
import Header from '../common/Header';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../storeSections/Breadcrumb';
import StoreCog from '../storeSections/StoreCog'
import Footer from '../common/Footer';

const CognacPage = () => {
    return (
        <>
            <Helmet>
                <title>COGNAC&BRANDY</title>
            </Helmet>
            <Header />
            <div className="bread-crumb mt-48 ml-14 mr-14">
                <Breadcrumb />
            </div>
            <StoreCog />
            <Footer />
        </>
    )
}

export default CognacPage;