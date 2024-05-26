import React from 'react'
import Header from '../common/Header';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../storeSections/Breadcrumb';
import StoreVodka from '../storeSections/StoreVodka'
import Footer from '../common/Footer';

const CognacPage = () => {
    return (
        <>
            <Helmet>
                <title>VODKA</title>
            </Helmet>
            <Header />
            <div className="bread-crumb mt-48 ml-14 mr-14">
                <Breadcrumb />
            </div>
            <StoreVodka />
            <Footer />
        </>
    )
}

export default CognacPage;