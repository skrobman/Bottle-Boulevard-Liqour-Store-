import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { data } from '../data/whiskeys';
import { cognacBrandyData } from '../data/cognac';
import { vodkaData } from '../data/vodka';

const Breadcrumb = () => {
    const location = useLocation();
    const { id } = useParams();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const getProduct = (id, category) => {
        let product = null;
        switch (category) {
            case 'whiskey':
                if (Array.isArray(data.whiskeyData)) {
                    product = data.whiskeyData.find(item => item.id === parseInt(id));
                }
                break;
            case 'cognac&brandy':
                if (Array.isArray(cognacBrandyData.cognacBrandyData)) {
                    product = cognacBrandyData.cognacBrandyData.find(item => item.id === parseInt(id));
                }
                break;
            case 'vodka':
                product = vodkaData.find(item => item.id === parseInt(id));
                break;
            default:
                break;
        }
        return product;
    };

    const capitalizeCategory = (name) => {
        const categories = ['whiskey', 'cognac&brandy', 'vodka'];
        return categories.includes(name.toLowerCase()) ? name.toUpperCase() : name;
    };

    return (
        <div className="breadcrumb font-semibold text-base">
            <small>
                <Link to="/" className='bread-link'>
                    Home
                </Link>
            </small>
            {pathnames.map((name, index) => {
                const isLast = index === pathnames.length - 1;
                let displayName = name;

                if (!isNaN(name) && isLast) {
                    const category = pathnames[index - 1];
                    const product = getProduct(name, category);
                    displayName = product ? product.name : 'Product';
                } else {
                    displayName = capitalizeCategory(name);
                }

                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

                return (
                    <React.Fragment key={name}>
                        <span className="mx-2">/</span>
                        {isLast ? (
                            <small className='uppercase'>{displayName}</small>
                        ) : (
                            <small>
                                <Link to={routeTo} className='bread-link'>
                                    {displayName}
                                </Link>
                            </small>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Breadcrumb;
