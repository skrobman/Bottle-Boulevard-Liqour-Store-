import React from 'react'
import Header from '../common/Header';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../storeSections/Breadcrumb';
import StoreWine from '../storeSections/StoreWine'
import Footer from '../common/Footer';

const CognacPage = () => {
    return (
        <>
            <Helmet>
                <title>WINE</title>
            </Helmet>
            <Header />
            <div className="bread-crumb mt-48 ml-14 mr-14">
                <Breadcrumb />
            </div>
            <StoreWine />
            <Footer />
        </>
    )
}

export default CognacPage;