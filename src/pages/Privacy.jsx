import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Privacy() {
    return (
        <>
            <main className="page-wrapper">
                <NavBar />

                <nav className="container py-4 mb-2 my-lg-3" aria-label="breadcrumb">
                </nav>

                <section className="container pb-5 mb-md-2 mb-lg-4 mt-5 pt-5">
                    <h1 className="border-bottom pb-4">Privacy policy</h1>
                    <div className="row pt-2 pt-md-3">
                        <div className="col-md-">
                            <p className="mb-5">Thank you for using the Afro Juju App! This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you use our mobile application and the services provided through it. We are committed to protecting your privacy and ensuring the security of your personal information. By using our App, you consent to the practices described in this Privacy Policy.</p>

                            <h3>1. Information We Collect</h3>
                            <p className="mb-4"><strong>1.1 Personal Information:</strong><br />
                                When you use our App and avail of our services, we may collect personal information that you provide to us, such as:
                                <ul>
                                    <li>Contact information (name, email address, phone number)</li>
                                    <li>Account credentials (username, password)</li>
                                    <li>Profile information (biographical details, photo, social media links)</li>
                                    <li>Payment details (credit card information, billing address)</li>
                                </ul>
                            </p>

                            <p className="mb-5"><strong>1.2 Automatically Collected Information:</strong><br />
                                In addition to the personal information you provide, we may automatically collect certain information when you use our App, including:
                                <ul>
                                    <li>Device information (device type, operating system, unique device identifiers)</li>
                                    <li>Log information (IP address, browser type, pages visited, access times)</li>
                                    <li>Usage information (clickstream data, features accessed, search queries)</li>
                                </ul>
                            </p>

                            <h3>2. How We Use Your Information</h3>
                            <p className="mb-2"><strong>2.1 Provide and Improve Services:</strong><br />
                                We use the collected information to deliver and improve our services, including:
                                <ul>
                                    <li>Facilitating music distribution and playlisting,</li>
                                    <li>Promoting music, TV shows, and brands.</li>
                                    <li>Enabling easy access to A-list artistes and influencers for music promotion, shows, and events</li>
                                    <li>Assisting with talent management and brand development</li>
                                    <li>Supporting event planning and coordination</li>
                                </ul>
                            </p>

                            <p className="mb-2"><strong>2.2 Personalization:</strong><br /> We may use your information to personalize your experience on the App and provide you with relevant content, recommendations, and promotions based on your preferences.</p>

                            <p className="mb-2"><strong>2.3 Communication:</strong><br /> We may use your contact information to communicate with you regarding your account, service updates, promotional offers, and other relevant information. You can opt-out of receiving promotional emails by following the unsubscribe instructions included in those emails.</p>

                            <p className="mb-5"><strong>2.4 Analytics and Aggregated Data:</strong><br /> We may analyze the collected information to monitor and improve the effectiveness of our App, services, and marketing campaigns. Aggregated and anonymized data may also be used for statistical purposes.</p>

                            <h3>3. Sharing of Information</h3>
                            <p className="mb-2"><strong>3.1 Third-Party Service Providers:</strong><br /> We may share your personal information with trusted third-party service providers who assist us in delivering our services, such as payment processors, marketing agencies, and hosting providers. These service providers are obligated to maintain the confidentiality and security of your information.</p>
                            
                            <p className="mb-5"><strong>3.3 Business Transfers:</strong><br /> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction. We will notify you through a prominent notice on our App and seek your consent if required by applicable laws.</p>

                            <h3>4. Data Security</h3>
                            <p className="mb-5">We take reasonable measures to protect the security of your personal information and prevent unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.</p>

                            <h3>5. Children's Privacy</h3>
                            <p className="mb-2">Our App is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that we may have collected information from a child without parental consent, please contact us, and we will promptly delete the information.</p>

                            <h3>6. Your Choices and Rights</h3>
                            <p className="mb-2">You may have certain rights regarding the personal information we hold about you and exercise control over its use. Here are some choices and rights you have:</p>

                            <p className="mb-2"><strong>6.1 Access and Update:</strong><br /> You have the right to access and update your personal information stored in our App. You can review and modify your profile information within your account settings. If you need assistance, please contact us using the information provided at the end of this Privacy Policy.</p>

                            <p className="mb-2"><strong>6.2 Opt-Out:</strong><br /> You can choose to opt-out of receiving promotional communications from us by following the instructions provided in the communication or by contacting us directly. However, please note that even if you opt-out of receiving promotional emails, we may still send you non-promotional communications related to your account or our ongoing business relationship.</p>

                            <p className="mb-2"><strong>6.3 Data Retention:</strong><br /> We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. You may request the deletion of your personal information, subject to any legal obligations or legitimate business interests.</p>

                            <p className="mb-5"><strong>6.4 Do Not Track:</strong><br /> Our App does not respond to "Do Not Track" signals. However, you can configure your browser settings to block cookies or alert you when cookies are being sent.</p>

                            <h3>Third-Party Links and Services</h3>
                            <p className="mb-5">Our App may contain links to third-party websites, services, or advertisements that are not controlled or operated by us. This Privacy Policy does not apply to those third-party activities. We encourage you to review the privacy policies of those third parties before interacting with their services.</p>

                            <h3>Changes to the Privacy Policy</h3>
                            <p className="mb-5">We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our App. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.</p>

                            <h3>Contact Us</h3>
                            <p className="mb-2">If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal information, please contact us at:</p>

                            <p className="mb-3">
                                <strong>Email:</strong> info@afrojuju.co.uk
                                <strong>Contact:</strong> +234 915 744 5453
                            </p>

                            <p className="mb-3">We will make every effort to address and resolve your inquiries promptly.</p>

                            <p className="mb-3">By using our App, you acknowledge that you have read and understood this Privacy Policy, including how we collect, use, and disclose your personal information.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
