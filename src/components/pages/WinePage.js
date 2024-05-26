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
                <title>WINE</title>
            </Helmet>
            <Header />
            <Breadcrumb />
            <StoreVodka />
            <Footer />
        </>
    )
}

export default CognacPage;