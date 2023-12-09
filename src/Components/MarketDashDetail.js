import React, { useState ,useEffect } from 'react'

// import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
// import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"


// card logo images
import cardLogo2 from "./Market/Frame 34 (1).png"
import cardProfile from "./Market/Rectangle 25.png"

//dash
import slideImg from "./MarketDash/Doctor.jpg"
import back from "./MarketDash/VectorBackArrow.svg"
import chart from "./MarketDash/Vertical.png"

//side card
import cart from "./MarketDash/VectorCart.svg"
import blueMsg from "./MarketDash/VectorBlueMsg.svg"
import offer from "./MarketDash/VectorOffer.svg"
import smallMap from "./MarketDash/VectorSmap.svg"
import Right from "./MarketDash/VectorRight.svg"
import Left from "./MarketDash/VectorLeft.svg"

import MarketplaceDash2 from './MarketplaceDash2'
import PaymentDash from "./PaymentDash"
import axios from 'axios'
import {jwtDecode} from "jwt-decode"
import { FaStar } from "react-icons/fa"

const MarketDashDetail = () => {

    useEffect(() => {
        getCard();
        }, []);

    const getCard = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          const id = decoded.id;
          try {
            const response = await axios.get(
              "http://localhost:5000/business/getbusiness" ,
              {
                headers: { "x-auth-token": id },
              }
            );
            console.log(response.data.business);
            setCard(response.data.business);
           
          } catch (error) {
            console.error(error);
          }
        }
      };

    const [show, setShow] = useState(1)
    const [buy, setBuy] = useState(1)
    const [card, setCard] = useState([]);
    

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const handleShare = () => { 
        console.log("share")
        window.location.href = 'whatsapp://send?text=http://localhost:3000/aqify#/proflie';
    }


    return (
        <>
            {buy === 1 && <>
                {show === 1 && <>
                    <section>
                        <div className="sideContent d-flex justify-content-between">
                            <div>
                                {/* <Link onClick={show => setShow(2)}><img src={back} alt="" /></Link>
                                <span className='mx-3' style={{ color: '#636363' }}>Go back Marketplace</span> */}
                                <br />
                            </div>
                            <div>
                                <Link className='btn btn-primary rounded-pill px-5 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={show => setShow(2)}>Explore More<i class="fa-solid fa-arrow-right mx-2" style={{ color: "#ffffff" }}></i></Link>
                            </div>
                        </div>
                    </section>

                    <section className='placeDetail-section'>


                        <div className="detailContent MarketPlace-card  d-flex flex-row justify-content-between" style={{ margin: "1rem 1rem", padding: "2rem", height: '100vh', overflow: 'hidden', width: "100%" }}>

                            <div className='Placecontent' style={{ width: '55%', overflowY: 'scroll' }}>
                                <div className='FirstContent d-flex align-items-center'>
                                    <div className='secondPart'>
                                        <img width={200} src={cardProfile} alt="" />
                                    </div>
                                    <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                        <h3 style={{ fontSize: '20px', fontWeight: '700' }}>UI Medical Website</h3>
                                        <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Nesxt Js</button>
                                        <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Firebase</button>
                                        <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Medical</button>
                                        <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>SaaS</button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                    <h3 className='card-h3'>Metrics</h3>
                                    <Link> <i class="fa-solid fa-heart"></i></Link>
                                </div>

                                <div className='my-4'>
                                    <span className='col-6' style={{ color: '#636363', fontSize: '16px' }}>
                                        A design inspiration platform for SaaS apps that helps designers find inspiration for their next project by showcasing over 1,000 pages from over 100 SaaS apps, organized by category and page type. Designers can also
                                        filter designs by color and fonts, and bookmark their favorites for later.<br /><br />
                                        Project can be grown by doing proper content marketing through blogs and social media, further paid ads can also be utilized to get more customers for the app.
                                    </span>
                                </div>

                                <div className="imgSlider d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>

                                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel"> {/*data-bs-touch="false" */}
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img style={{ borderRadius: '10px', width: '100%' }} src={slideImg} alt="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img style={{ borderRadius: '10px', width: '100%' }} src={slideImg} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between' style={{ position: 'absolute', width: '100%' }}>
                                        <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }} data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"><img src={Left} alt="" /></Link>
                                        <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }} data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"><img src={Right} alt="" /></Link>
                                    </div>
                                </div>


                                <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                        <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <img width={35} src={cardLogo2} alt="" />
                                            <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                        </div>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                        <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <img width={35} src={cardLogo2} alt="" />
                                            <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                        </div>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                        <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <img width={35} src={cardLogo2} alt="" />
                                            <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                        </div>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                        <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <img width={35} src={cardLogo2} alt="" />
                                            <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                        </div>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                        <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <img width={35} src={cardLogo2} alt="" />
                                            <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                        </div>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                        <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <img width={35} src={cardLogo2} alt="" />
                                            <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="chart my-3">
                                    <img style={{ width: '100%' }} src={chart} alt="" />
                                </div>

                                <div className="description">
                                    <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                        <h3 className='card-h3'>Metrics</h3>
                                    </div>

                                    <div className='d-flex flex-wrap justify-content-between'>
                                        <div style={{ margin: '1rem 1rem 0 0' }}>
                                            <span style={{ color: '#636363' }}>Details Name</span>
                                            <h5>Details value</h5>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0' }}>
                                            <span style={{ color: '#636363' }}>Details Name</span>
                                            <h5>Details value</h5>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0' }}>
                                            <span style={{ color: '#636363' }}>Details Name</span>
                                            <h5>Details value</h5>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0' }}>
                                            <span style={{ color: '#636363' }}>Details Name</span>
                                            <h5>Details value</h5>
                                        </div>
                                        <div style={{ margin: '1rem 3rem 0 0' }}>
                                            <span style={{ color: '#636363' }}>Details Name</span>
                                            <h5>Details value</h5>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0' }}>
                                            <span style={{ color: '#636363' }}>Details Name</span>
                                            <h5>Details value</h5>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0' }}>
                                            <span style={{ color: '#636363' }}>Details Name</span>
                                            <h5>Details value</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AskingPlace' style={{ width: '40%', position: "sticky" }}>
                                <div className="sideCard d-flex flex-column justify-content-between" style={{ background: '#EEF0FE', borderRadius: '10px', padding: '1rem', height: '100%', overflowY: 'scroll' }}>
                                    <div>
                                        <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                            <h5 className='card-h3'>Asking Price</h5>
                                        </div>
                                        <div className='my-3'>
                                            <h1>$3000</h1>
                                        </div>

                                        <Link to="/message" className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                            <img src={blueMsg} alt="" />
                                            <span className='mx-2'>Message Seller</span>
                                        </Link>
                                        <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                            <i class="fa-solid fa-phone-volume" style={{ color: "#005eff" }}></i>
                                            <span className='mx-2'>Audio Call</span>
                                        </Link>
                                        <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                            <img src={offer} alt="" />
                                            <span className='mx-2' >Make Offer</span>
                                        </Link>
                                        <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                            <i class="fa-solid fa-video" style={{ color: "#005eff" }}></i>
                                            <span className='mx-2' >Watch video Path</span>
                                        </Link>
                                        <button className='my-3 d-flex align-items-center justify-content-center'onClick={handleShare} style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                            <i class="fa-solid fa-share-nodes" style={{ color: "#005eff" }}></i>
                                            <span className='mx-2' >Share</span>
                                        </button>
                                        <div className='my-3'>
                                            <Link style={{ width: '100%' }} className='btn btn-primary' onClick={buy => setBuy(2)}><img src={cart} alt="" className='mx-2' /> Buy Now</Link>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='d-flex justify-content-between my-3' style={{ margin: '1rem 0 0rem 0' }}>
                                            <h5 className='card-h3'>About the Seller</h5>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <img src={profileIcon} alt="" />
                                            <div className='mx-2'>
                                                <h4>Akash ku. Padhi</h4>
                                                <span><img src={smallMap} alt="" />India</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </section>
                </>}

                {show === 2 && <MarketplaceDash2 />}

                <section>
                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog  modal-dialog-centered">
                            <div style={{ background: '#191b1b', color: '#fff', borderRadius: '20px' }} class="modal-content">
                                <div class="modal-header" style={{ border: 'none' }}>
                                    <br />
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        <h6 className='text-center mb-4'>How Was the Listing and Pricing?</h6>
                                    </div>
                                    <div style={{ fontSize: '1.7rem' }} className='d-flex align-items-center justify-content-center'>
                                        {[...Array(5)].map((star, index) => {
                                            const currentRating = index + 1
                                            return (
                                                <label >
                                                    <input type="radio" value={currentRating} onClick={() => setRating(currentRating)} />
                                                    <FaStar className='star mx-2'
                                                        color={currentRating <= (rating || hover) ? "#3247FF" : '#fff'}
                                                        onMouseEnter={() => setHover(currentRating)}
                                                        onMouseLeave={() => setHover(null)}
                                                    />
                                                </label>
                                            )
                                        })}
                                    </div>
                                    <div className='mt-2 d-flex justify-content-around'>
                                        <div><span style={{ fontSize: '11px' }}>Very bad</span></div>
                                        <div><span style={{ fontSize: '11px' }}>Very good</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* {show === 3 &&
                    <>
                        <section>
                            <div className="sideContent d-flex justify-content-between">
                                <div>
                                    <Link className='' data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={show => setShow(1)}><img src={back} alt="" /></Link>
                                    <span className='mx-3' style={{ color: '#636363' }}>Go back Marketplace</span>
                                </div>
                                <div>
                                    <Link className='btn btn-primary rounded-pill px-5 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={show => setShow(3)} >Explore More <i class="fa-solid fa-arrow-right mx-2" style={{ color: "#ffffff" }}></i></Link>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog  modal-dialog-centered">
                                    <div style={{ background: '#191b1b', color: '#fff', borderRadius: '20px' }} class="modal-content">
                                        <div class="modal-header" style={{ border: 'none' }}>
                                            <br />
                                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div>
                                                <h6 className='text-center mb-4'>How Was the Listing and Pricing?</h6>
                                            </div>
                                            <div style={{ fontSize: '1.7rem' }} className='d-flex align-items-center justify-content-center'>
                                                {[...Array(5)].map((star, index) => {
                                                    const currentRating = index + 1
                                                    return (
                                                        <label >
                                                            <input type="radio" value={currentRating} onClick={() => setRating(currentRating)} />
                                                            <FaStar className='star mx-2'
                                                                color={currentRating <= (rating || hover) ? "#3247FF" : '#fff'}
                                                                onMouseEnter={() => setHover(currentRating)}
                                                                onMouseLeave={() => setHover(null)}
                                                            />
                                                        </label>
                                                    )
                                                })}
                                            </div>
                                            <div className='mt-2 d-flex justify-content-around'>
                                                <div><span style={{ fontSize: '11px' }}>Very bad</span></div>
                                                <div><span style={{ fontSize: '11px' }}>Very good</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='placeDetail-section'>


                            <div className="detailContent MarketPlace-card d-flex flex-row justify-content-between" style={{ margin: "1rem 1rem", padding: "2rem", height: '100vh', overflow: 'hidden', width: "100%" }}>

                                <div className='Placecontent' style={{ width: '55%', overflowY: 'scroll' }}>
                                    <div className='FirstContent d-flex align-items-center'>
                                        <div className='secondPart'>
                                            <img width={200} src={cardProfile} alt="" />
                                        </div>
                                        <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                            <h3 style={{ fontSize: '20px', fontWeight: '700' }}>Ecommerce Website</h3>
                                            <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>React Js</button>
                                            <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Firebase</button>
                                            <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Ecommerce</button>
                                            <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Redux</button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                        <h3 className='card-h3'>Metrics</h3>
                                    </div>

                                    <div className='my-4'>
                                        <span className='col-6' style={{ color: '#636363', fontSize: '16px' }}>
                                            A design inspiration platform for SaaS apps that helps designers find inspiration for their next project by showcasing over 1,000 pages from over 100 SaaS apps, organized by category and page type. Designers can also
                                            filter designs by color and fonts, and bookmark their favorites for later.<br /><br />
                                            Project can be grown by doing proper content marketing through blogs and social media, further paid ads can also be utilized to get more customers for the app.
                                        </span>
                                    </div>

                                    <div className="imgSlider d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>
                                        <img style={{ borderRadius: '10px', width: '100%' }} src={slideImg} alt="" />
                                        <div className='d-flex justify-content-between' style={{ position: 'absolute', width: '100%' }}>
                                            <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }}><img src={Left} alt="" /></Link>
                                            <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }}><img src={Right} alt="" /></Link>
                                        </div>
                                    </div>


                                    <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                        <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                            <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={35} src={cardLogo2} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                            </div>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                            <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={35} src={cardLogo2} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                            </div>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                            <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={35} src={cardLogo2} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                            </div>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                            <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={35} src={cardLogo2} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                            </div>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                            <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={35} src={cardLogo2} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                            </div>
                                        </div>
                                        <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                            <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={35} src={cardLogo2} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chart my-3">
                                        <img style={{ width: '100%' }} src={chart} alt="" />
                                    </div>

                                    <div className="description">
                                        <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                            <h3 className='card-h3'>Metrics</h3>
                                        </div>

                                        <div className='d-flex flex-wrap justify-content-between'>
                                            <div style={{ margin: '1rem 1rem 0 0' }}>
                                                <span style={{ color: '#636363' }}>Details Name</span>
                                                <h5>Details value</h5>
                                            </div>
                                            <div style={{ margin: '1rem 1rem 0 0' }}>
                                                <span style={{ color: '#636363' }}>Details Name</span>
                                                <h5>Details value</h5>
                                            </div>
                                            <div style={{ margin: '1rem 1rem 0 0' }}>
                                                <span style={{ color: '#636363' }}>Details Name</span>
                                                <h5>Details value</h5>
                                            </div>
                                            <div style={{ margin: '1rem 1rem 0 0' }}>
                                                <span style={{ color: '#636363' }}>Details Name</span>
                                                <h5>Details value</h5>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363' }}>Details Name</span>
                                                <h5>Details value</h5>
                                            </div>
                                            <div style={{ margin: '1rem 1rem 0 0' }}>
                                                <span style={{ color: '#636363' }}>Details Name</span>
                                                <h5>Details value</h5>
                                            </div>
                                            <div style={{ margin: '1rem 1rem 0 0' }}>
                                                <span style={{ color: '#636363' }}>Details Name</span>
                                                <h5>Details value</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='AskingPlace' style={{ width: '40%', position: "sticky" }}>
                                    <div className="sideCard d-flex flex-column justify-content-between" style={{ background: '#EEF0FE', borderRadius: '10px', padding: '1rem', height: '100%', overflowY: 'scroll' }}>
                                        <div>
                                            <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                                <h5 className='card-h3'>Asking Price</h5>
                                            </div>
                                            <div className='my-3'>
                                                <h1>$5000</h1>
                                            </div>

                                            <Link to="/message" className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                                <img src={blueMsg} alt="" />
                                                <span className='mx-2'>Message Seller</span>
                                            </Link>
                                            <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                                <i class="fa-solid fa-phone-volume" style={{ color: "#005eff" }}></i>
                                                <span className='mx-2'>Audio Call</span>
                                            </Link>
                                            <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                                <img src={offer} alt="" />
                                                <span className='mx-2' >Make Offer</span>
                                            </Link>
                                            <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                                <i class="fa-solid fa-video" style={{ color: "#005eff" }}></i>
                                                <span className='mx-2' >Watch video Path</span>
                                            </Link>
                                            <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                                <i class="fa-solid fa-share-nodes" style={{ color: "#005eff" }}></i>
                                                <span className='mx-2' >Share</span>
                                            </Link>
                                            <div className='my-3'>
                                                <Link style={{ width: '100%' }} className='btn btn-primary' onClick={buy => setBuy(2)}><img src={cart} alt="" className='mx-2' /> Buy Now</Link>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='d-flex justify-content-between my-3' style={{ margin: '1rem 0 0rem 0' }}>
                                                <h5 className='card-h3'>About the Seller</h5>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <img src={profileIcon} alt="" />
                                                <div className='mx-2'>
                                                    <h4>Akash ku. Padhi</h4>
                                                    <span><img src={smallMap} alt="" />India</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </section>
                    </>}  */}

            </>}

            {buy === 2 &&
                <PaymentDash />
            }

        </>
    )
}

export default MarketDashDetail