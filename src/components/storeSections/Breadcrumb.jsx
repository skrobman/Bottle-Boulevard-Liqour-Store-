import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {

    const location = useLocation();
    const pathnames = location.pathname.split(">").filter((x) => x);

    return (
        <>
            <div className="breadcrumb mt-48 ml-14 mr-14 font-semibold text-base">
                <small>
                    <Link to="/" className='bread-link'>
                        Home
                    </Link>
                </small>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('>')}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <small key={name} className='uppercase'>{name}</small>
                    ) : (
                        <small>
                            <Link key={name} to={routeTo}>
                                {name}
                            </Link>
                        </small>

                    )
                })}

            </div>
        </>
    )
}

export default Breadcrumb;