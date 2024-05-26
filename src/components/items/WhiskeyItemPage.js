import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data/whiskeys';
import Header from '../common/Header';
import Breadcrumb from '../storeSections/Breadcrumb';

const WhiskeyItemPage = () => {
    const { id } = useParams();
    const whiskeyIndex = data.whiskeyData.findIndex(item => item.id === parseInt(id));
    const whiskey = data.whiskeyData[whiskeyIndex];

    const nextWhiskey = data.whiskeyData[whiskeyIndex + 1];
    const prevWhiskey = data.whiskeyData[whiskeyIndex - 1];

    if (!whiskey) {
        return <div>Whiskey not found</div>;
    }

    return (
        <>
            <Header />
            <div className="breadcrumb-elementTransition flex justify-between mt-48 ml-14 mr-14">
                <Breadcrumb />
                <small>
                    {prevWhiskey && (
                        <Link to={`/whiskey/${prevWhiskey.id}`}>Previous</Link>
                    )}
                    |
                    {nextWhiskey && (
                        <Link to={`/whiskey/${nextWhiskey.id}`}>Next</Link>
                    )}
                </small>
            </div>
            <div className="whiskey-item-page">
                <img src={whiskey.image} alt={whiskey.name} />
            </div>
        </>
    );
};

export default WhiskeyItemPage;
