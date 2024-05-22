import React from 'react'

function Review() {
    return (
        <>
            <div className="review-div pt-8">
                <div className="ml-14 mr-14">
                    <h1 className='text-center uppercase font-medium text-3xl mb-8'>Reviews</h1>
                    <div className="review-cards flex justify-evenly ">
                        <div className="review basis-1/4 py-4 ">
                            <div className="flex justify-center">
                                <div className="prof-pict first"></div>
                            </div>

                            <h2 className='text-center uppercase font-medium text-xl my-4'>Full Name</h2>
                            <div className="stars text-center">
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                            </div>
                            <p className='text-center mt-4'>
                                Bottle Boulevard offers a fantastic selection of premium spirits and craft beverages,
                                accompanied by friendly and knowledgeable staff. It's the perfect destination for liquor enthusiasts
                                seeking quality and expertise.
                            </p>
                        </div>
                        <div className="review basis-1/4 py-4 px-8">
                            <div className="flex justify-center">
                                <div className="prof-pict second"></div>
                            </div>

                            <h2 className='text-center uppercase font-medium text-xl my-4'>Full Name</h2>
                            <div className="stars text-center">
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                            </div>
                            <p className='text-center mt-4'>
                                Bottle Boulevard is a gem for liquor enthusiasts!
                                Their wide selection offers something for every taste, from premium spirits to unique craft brews.
                                The staff is knowledgeable and friendly, always ready to assist in finding the perfect bottle for any occasion.
                                The ambiance is inviting, making browsing a pleasure. Whether you're a connoisseur or just exploring,
                                Bottle Boulevard is a must-visit destination for quality drinks.
                            </p>
                        </div>
                        <div className="review basis-1/4 py-4 px-8">
                            <div className="flex justify-center">
                                <div className="prof-pict third"></div>
                            </div>

                            <h2 className='text-center uppercase font-medium text-xl my-4'>Full Name</h2>
                            <div className="stars text-center">
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star checked'></span>
                                <span className='fa fa-star'></span>
                            </div>
                            <p className='text-center mt-4'>
                                At Bottle Boulevard, you'll find a diverse array of premium spirits and craft beverages,
                                coupled with attentive and knowledgeable service, making it a top choice for liquor aficionados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;