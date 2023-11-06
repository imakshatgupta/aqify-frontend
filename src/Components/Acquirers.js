import React from 'react'
import backgroundImg from "./Acquirers/unsplash_5U_28ojjgms.png"
import arrow from "./Aqify project/Vector (1).png"

//Logo images
import cardLogo1 from "./Acquirers/Frame 100.png"
import cardLogo2 from "./Acquirers/Frame 100 (1).png"
import cardLogo3 from "./Acquirers/Frame 100 (2).png"

//owner second section
import BackPhoto from "./Acquirers/Rectangle.png"
import roundedImg from "./Acquirers/Frame 105.png"
import profileImg from "./Acquirers/Ellipse 8.png"


//third section owner
import cardIcon1 from "./Acquirers/Frame 100 (3).png"
import cardIcon2 from "./Acquirers/Frame 100 (4).png"
import cardIcon3 from "./Acquirers/Frame 100 (5).png"
import BackSidePhoto from "./Acquirers/Rectangle16.png"

import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation';

const Acquirers = () => {
    return (
        <>

            <section>
                <Navbar />
            </section>
            {/** */}
            <section>
                <div className='main' style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="owner-content">
                        <div>
                            <div className='my-5'>
                                <h1 className='main-h1 col-6'>Acquire (un) profitable tech & internet businesses<br/>
                                    <TypeAnimation className='typeAnimation'
                                        sequence={[
                                            'Ecommerce', // Types 'One'
                                            1000, // Waits 1s
                                            'Saas', // Deletes 'One' and types 'Two'
                                            2000, // Waits 
                                            'Community',
                                            2000,
                                            'Marketplace',
                                            2000,
                                            'Crypto',
                                            2000,
                                            'Wordpress',
                                            2000,
                                            'Content',
                                            2000,
                                            'Services',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        cursor={false}
                                        repeat={Infinity}
                                    />.
                                </h1>
                            </div>
                            <div className='my-4'>
                                <span className='main-span col-6 d-flex'>
                                    Make your profile to negotiate directly with founders of vetted $100K+ revenue startups, scale-ups and SMBs.
                                </span>
                            </div>
                            <div className=''>
                                <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singin">Make your Profile<img style={{ width: '10%' }} src={arrow} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='owner-first-section'>
                <div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <h1 className='fourth-h1' style={{ width: '60%' }}>Find Internet Startups And SMBs With Product-Market Fit...</h1>
                        <span style={{ color: '#636363', fontSize: '20px', margin: '1rem 0 3rem 0' }}>Every Monday we publish new businesses for sale on our marketplace.</span>
                    </div>
                </div>
                <div className='Owner-card-div'>
                    <div className="owner-card">
                        <img width={80} src={cardLogo1} alt="" />
                        <h3 className='my-3'>Internet & tech startups</h3>
                        <span style={{ color: '#636363' }}>SaaS, eCommerce, mobile, content, fintech, agency, marketplace, web3, etc.</span>
                    </div>
                    <div className="owner-card">
                        <img width={80} src={cardLogo2} alt="" />
                        <h3 className='my-3'>With $100K+ revenues</h3>
                        <span style={{ color: '#636363' }}>Profitable or VC-distressed fit for micro PEs, strategic incumbents and searchers.</span>
                    </div>
                    <div className="owner-card">
                        <img width={80} src={cardLogo3} alt="" />
                        <h3 className='my-3'>Full and partial sales</h3>
                        <span style={{ color: '#636363' }}>Negotiate a full acquisition or a partial sale directly with business owners.</span>
                    </div>
                </div>
            </section>

            <section className='owner-second-section'>
                <div className="Sell-detail">
                    <div>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <h1 className='fourth-h1' style={{ marginBottom: '3rem', width: '60%' }}>Trusted By Professionals For Sourcing Quality Deals</h1>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${BackPhoto})`, width: '100%', backgroundRepeat: 'no-repeat', height: '75vh', backgroundSize: 'contain ' }}>
                        <div className='d-flex flex-row align-items-center'>
                            <img style={{ width: '17%', margin: '0 3rem' }} src={roundedImg} alt="" />
                            <div>
                                <span style={{ width: '70%', display: 'flex', fontSize: '20px' }}>"Calm Capital acquires and invests in good profitable businesses from independent founders looking for smoother waters.</span><br />
                                <span style={{ width: '70%', display: 'flex', fontSize: '20px' }}>"Calm Capital acquires and invests in good profitable businesses from independent founders looking for smoother waters.</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <div className='d-flex flex-row align-items-center' style={{ position: 'relative', left: '230px' }}>
                                <div className='mx-3 text-end'>
                                    <span style={{ fontSize: '2rem', color: '#fff', fontWeight: '700' }}>David Horne</span><br />
                                    <span style={{ fontSize: '1.5rem', color: '#fff' }}>Co-founder, Managing Partner</span>
                                </div>
                                <img style={{ width: "20%" }} src={profileImg} alt="" />
                            </div>
                            <div className='d-flex flex-row align-items-center' style={{ position: 'relative', left: '110px' }}>
                                <div className='mx-3 text-end'>
                                    <span style={{ fontSize: '2rem', color: '#fff', fontWeight: '700' }}>Marty Balkema</span><br />
                                    <span style={{ fontSize: '1.5rem', color: '#fff' }}>Co-founder, Managing Partner</span>
                                </div>
                                <img style={{ width: "20%" }} src={profileImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='owner-third-section'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h1 className='owner-third-h1 col-4'>Get Acquisition Offers And Sell In 3 Easy Steps</h1>
                        <div className='my-5'>
                            <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singup">Access Marketplace<img style={{ width: '7%', margin: '0 0 0 4rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="owner-third-card">
                    <h3>1.</h3>
                    <div style={{ padding: "2rem 6rem 4rem 3rem" }} className='d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon1} alt="" />
                            <h4>Qualitative details</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Product and industry description</li>
                                <li>Business model and technology stack</li>
                                <li>Market, competitors and marketing channels</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="owner-third-card">
                    <h3>2.</h3>
                    <div style={{ padding: "2rem 6rem 4rem 3rem" }} className='d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon2} alt="" />
                            <h4>Quantitative data</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Revenue, profit and marketing spend figures</li>
                                <li>Number of customers and team members</li>
                                <li>Current ownership and funding structure</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="owner-third-card">
                    <h3>3.</h3>
                    <div style={{ padding: "2rem 6rem 4rem 3rem" }} className='d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon3} alt="" />
                            <h4>Preferred terms of a deal</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Acquisition type and proposed valuation</li>
                                <li>Reason for selling and growth opportunities</li>
                                <li>Preferences for types of acquirers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='owner-four-section'>
                <div className="Imageowner-third-card" style={{ backgroundImage: `url(${BackSidePhoto})`, width: '100%', backgroundRepeat: 'no-repeat', height: '65vh', backgroundSize: 'contain ', backgroundPosition: 'right' }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h1 className='owner-four-h1'>Get Verified And Contact Owners Today</h1>
                            <span className='col-8 d-flex' style={{ color: '#fff', fontSize: '20px' }}>Acquire an internet business with $100K to $50M in annual revenue - either fully or partially.</span>
                            <div className='my-5'>
                                <Link style={{ fontSize: '1.5rem', fontSize: "20px", padding: "1rem 2rem" }} className='btn btn-outline-light' to="/advisory">Join</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Acquirers