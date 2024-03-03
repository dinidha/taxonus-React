import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - taxonus</title>
        <meta property="og:title" content="About - taxonus" />
      </Helmet>
      <div className="about-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer about-navbar-interactive"
        >
          <span className="TaxOnUs">Taxonus</span>
          <div data-thq="thq-navbar-nav" className="about-desktop-menu">
            <nav className="about-links">
              <Link to="/" className="about-nav12 bodySmall">
                Home
              </Link>
              <Link to="/about" className="about-nav22 bodySmall">
                About Us
              </Link>
              <Link to="/services" className="about-nav32 bodySmall">
                Services
              </Link>
              <Link to="/contact" className="about-nav42 bodySmall">
                Contact Us
              </Link>
            </nav>
            <div className="about-buttons">
              <button className="about-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="about-burger-menu">
            <svg viewBox="0 0 1024 1024" className="about-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="about-mobile-menu1 mobileMenu"
          >
            <div className="about-nav">
              <div className="about-top">
                <span className="TaxOnUs">TAXPROS</span>
                <div data-thq="thq-close-menu" className="about-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="about-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="about-links1">
                <span className="about-nav121 bodySmall">Services</span>
                <span className="about-nav221 bodySmall">About Us</span>
                <span className="about-nav321 bodySmall">Resources</span>
                <span className="about-nav421 bodySmall">Contact Us</span>
              </nav>
              <div className="about-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="about-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="about-hero">
        <div className="about-hero1 heroContainer">
          <div className="about-container01">
            <h1 className="about-hero-heading heading1">
              Maximize Your Tax Refund
            </h1>
            <span className="about-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Your Trusted Tax Experts</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="about-btn-group">
              <button className="buttonFilled">Get Started Now</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-features">
        <div className="featuresContainer">
          <div className="about-features1">
            <div className="about-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="about-features-heading heading2">
                Our Tax Services
              </h2>
              <span className="about-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the range of professional tax services we offer
                      to meet your needs
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="about-container03">
              <FeatureCard
                heading="Expert Tax Advice"
                subHeading="Get personalized tax advice from our team of experienced professionals"
              ></FeatureCard>
              <FeatureCard
                heading="Tax Preparation Services"
                subHeading="Let us handle the complex tax preparation process for you accurately and efficiently"
              ></FeatureCard>
              <FeatureCard
                heading="Audit Support"
                subHeading="Receive expert support and guidance in case of an audit by tax authorities"
              ></FeatureCard>
              <FeatureCard
                heading="Tax Planning Strategies"
                subHeading="Benefit from tailored tax planning strategies to optimize your financial situation"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="about-pricing">
        <div className="pricingContainer">
          <div className="about-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">
              Choose the Right Plan for Your Tax Needs
            </h2>
            <span className="about-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Our pricing plans are designed to cater to individuals,
                  families, and businesses of all sizes.
                </span>
              </span>
            </span>
          </div>
          <div className="about-container05">
            <div className="freePricingCard about-pricing-card">
              <div className="about-container06">
                <span className="about-text36 heading3">Free</span>
                <span className="bodySmall">
                  Ideal for individuals filing simple tax returns
                </span>
              </div>
              <div className="about-container07">
                <span className="about-text37">LKR</span>
                <span className="about-free-plan-price">0</span>
              </div>
              <div className="about-container08">
                <div className="about-container09">
                  <span className="about-text38">✔</span>
                  <span className="bodySmall">
                    Basic tax return preparation
                  </span>
                </div>
                <div className="about-container10">
                  <span className="about-text39">✔</span>
                  <span className="bodySmall">E-filing included</span>
                </div>
                <div className="about-container11">
                  <span className="about-text40">✔</span>
                  <span className="bodySmall">Customer support via email</span>
                </div>
                <div className="about-container12">
                  <span className="about-text41">✔</span>
                  <span className="bodySmall">
                    Limited to one state tax return
                  </span>
                </div>
              </div>
              <button className="about-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard about-pricing-card1">
              <div className="about-container13">
                <span className="about-text42 heading3">BASIC</span>
                <span className="bodySmall">
                  Great for families and small businesses
                </span>
              </div>
              <div className="about-container14">
                <span className="about-text43">LKR</span>
                <span className="about-basic-plan-pricing">50</span>
                <span className="about-text44">/ month</span>
              </div>
              <div className="about-container15">
                <div className="about-container16">
                  <span className="about-text45">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="about-container17">
                  <span className="about-text47">✔</span>
                  <span className="bodySmall">
                    Tax return preparation for individuals and families
                  </span>
                </div>
                <div className="about-container18">
                  <span className="about-text48">✔</span>
                  <span className="bodySmall">E-filing included</span>
                </div>
                <div className="about-container19">
                  <span className="about-text49">✔</span>
                  <span className="bodySmall">
                    Customer support via email and phone
                  </span>
                </div>
                <div className="about-container20">
                  <span className="about-text50">✔</span>
                  <span className="bodySmall">Up to two state tax returns</span>
                </div>
              </div>
              <button className="about-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard about-pricing-card2">
              <div className="about-container21">
                <span className="about-text51 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Perfect for complex tax situations and businesses
                </span>
              </div>
              <div className="about-container22">
                <span className="about-text54">LKR</span>
                <span className="about-pro-plan-pricing">100</span>
                <span className="about-text55">/ month</span>
              </div>
              <div className="about-container23">
                <div className="about-container24">
                  <span className="about-text56">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="about-container25">
                  <span className="about-text58">✔</span>
                  <span className="bodySmall">
                    Comprehensive tax return preparation for individuals,
                    families, and businesses
                  </span>
                </div>
                <div className="about-container26">
                  <span className="about-text59">✔</span>
                  <span className="bodySmall">E-filing included</span>
                </div>
                <div className="about-container27">
                  <span className="about-text60">✔</span>
                  <span className="bodySmall">
                    Priority customer support via email, phone, and in-person
                    meetings
                  </span>
                </div>
                <div className="about-container28">
                  <span className="about-text61">✔</span>
                  <span className="bodySmall">Unlimited state tax returns</span>
                </div>
              </div>
              <button className="about-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-banner">
        <div className="bannerContainer about-banner1">
          <h1 className="about-banner-heading heading2">
            Expert Tax Services for Individuals and Businesses
          </h1>
          <span className="about-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  At XYZ Tax Company, we specialize in providing comprehensive
                  tax solutions tailored to meet your specific needs. Our team
                  of experienced professionals is dedicated to maximizing your
                  tax refund while ensuring compliance with all regulations.
                  Whether you are an individual or a business owner, we are here
                  to help you navigate the complexities of tax preparation and
                  planning. With our expertise and personalized approach, you
                  can trust us to handle all your tax-related matters
                  efficiently and accurately.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="about-faq">
        <div className="faqContainer">
          <div className="about-faq1">
            <div className="about-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="about-text79 heading2">Common questions</h2>
              <span className="about-text80 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="about-container30">
              <Question1
                answer="We offer a wide range of tax services including tax preparation, tax planning, and IRS problem resolution."
                question="What tax services do you offer?"
              ></Question1>
              <Question1
                answer="You can easily schedule a consultation by filling out the contact form on our website or by giving us a call."
                question="How can I schedule a consultation with your tax experts?"
              ></Question1>
              <Question1
                answer="Yes, we provide assistance with filing back taxes and can help you navigate through the process efficiently."
                question="Do you offer assistance with filing back taxes?"
              ></Question1>
              <Question1
                answer="Our team of experienced tax professionals, personalized approach to each client, and commitment to delivering exceptional service set us apart from others."
                question="What sets your tax company apart from others?"
              ></Question1>
              <Question1
                answer="We take client confidentiality and data security very seriously. Our systems are encrypted and we have strict protocols in place to safeguard all client information."
                question="How do you ensure client confidentiality and data security?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <footer className="footerContainer about-footer1">
          <div className="about-container31">
            <span className="TaxOnUs">TAXPROS</span>
            <nav className="about-nav1">
              <span className="bodySmall">Services</span>
              <span className="about-nav222 bodySmall">About Us</span>
              <span className="about-nav322 bodySmall">Resources</span>
              <span className="about-nav422 bodySmall">Contact Us</span>
            </nav>
          </div>
          <div className="about-separator"></div>
          <div className="about-container32">
            <span className="bodySmall about-text83">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="about-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="about-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default About
