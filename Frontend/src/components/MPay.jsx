import { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const PayStackProviders = [
    { value: 'atl', label: 'AT Cash (AirtelTigo)' },
    { value: 'mtn', label: 'MTN' },
    { value: 'vod', label: 'Telecel' },
];

const MPay = ({ show, onClose, data, onComplete }) => {
    // State to manage the different views of the modal
    const [currentStep, setCurrentStep] = useState('form');
    
    // Form data states
    const [accountName, setAccountName] = useState('');
    const [phone, setPhone] = useState('');
    const [provider, setProvider] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    
    const [activeTab, setActiveTab] = useState('mobile');

    const isMobileValid = phone && provider && accountName;
    const isCardValid = cardNumber && expiry && cvv && accountName;

    // Simulate the asynchronous payment verification process
    const simulatePaymentProcessing = (paymentData) => {
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.5;

            if (isSuccessful) {
                setCurrentStep('success');
                onComplete({ method: paymentData.method, data: paymentData.data });
            } else {
                setCurrentStep('failed');
            }
        }, 3000); // Wait for 3 seconds
    };
    
    // Handle form submission for either mobile or card payment
    const handleConfirm = () => {
        if (activeTab === 'mobile' && isMobileValid) {
            // For mobile money, move to the "prompt sent" step
            setCurrentStep('prompt_sent');
        }
        if (activeTab === 'card' && isCardValid) {
            // For card payments, move to the "OTP entry" step
            setCurrentStep('otp_entry');
        }
    };
    
    // New function to handle OTP submission for card payments
    const handleOtpSubmit = () => {
        setOtpError('');
        if (otp.length === 6) { // Simple validation for a 6-digit OTP
            setCurrentStep('processing');
            const paymentData = { method: 'card', data: { accountName, cardNumber, expiry, cvv, otp } };
            simulatePaymentProcessing(paymentData);
        } else {
            setOtpError('Please enter a valid 6-digit OTP.');
        }
    };
    
    // New function to handle the "I've authorized" click for mobile money
    const handlePromptAuthorized = () => {
        setCurrentStep('processing');
        const paymentData = { method: 'mobile', data: { accountName, phone, provider } };
        simulatePaymentProcessing(paymentData);
    };

    const handleRetry = () => {
        setCurrentStep('form');
        // Reset form fields if needed
        setOtp('');
    };

    const allowOnlyNumbers = (event) => {
        event.target.value = event.target.value.replace(/\D/g, '');
    };

    if (!show || !data) return null;

    // Helper function to render the correct view based on the current step
    const renderContent = () => {
        switch (currentStep) {
            case 'form':
                return (
                    <>
                        {activeTab === 'mobile' && (
                            <>
                                <div className="mpay-form-title">Enter your mobile money number and provider to start the payment</div>
                                <div className="mb-3">
                                    <label className="form-label visually-hidden">Account Holder Name</label>
                                    <input type="text" className="form-control" placeholder="Account Holder Name" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label visually-hidden">Mobile Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>
                                        </span>
                                        <input type="tel" className="form-control" placeholder="0245 0000 29" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} onKeyUp={allowOnlyNumbers} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label visually-hidden">Choose Provider</label>
                                    <Select options={PayStackProviders} onChange={(selectedOption) => setProvider(selectedOption.value)} value={PayStackProviders.find(pt => pt.value === provider) || null} />
                                </div>
                                <button className="btn w-100 mpay-confirm" onClick={handleConfirm} disabled={!isMobileValid} > Confirm </button>
                            </>
                        )}
                        {activeTab === 'card' && (
                            <>
                                <div className="mpay-form-title">Enter your card details to pay</div>
                                <div className="mb-3">
                                    <label className="form-label visually-hidden">Name on Account</label>
                                    <input type="text" className="form-control" placeholder="Name on Account" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label visually-hidden">Card Number</label>
                                    <input type="text" className="form-control" placeholder="0000 0000 0000 0000" maxLength={16} onKeyUp={allowOnlyNumbers} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                                </div>
                                <div className="row g-2">
                                    <div className="col-6 mb-3">
                                        <label className="form-label visually-hidden">Card Expiry</label>
                                        <input type="text" className="form-control" maxLength={5} placeholder="MM / YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label className="form-label visually-hidden">CVV</label>
                                        <input type="password" className="form-control" placeholder="123" maxLength={3} onKeyUp={allowOnlyNumbers} value={cvv} onChange={(e) => setCvv(e.target.value)} />
                                    </div>
                                </div>
                                <button className="btn w-100 mpay-confirm" onClick={handleConfirm} disabled={!isCardValid} > Pay GHS {data.amount} </button>
                            </>
                        )}
                    </>
                );

            // New UI state for when a prompt has been sent to the user's phone
            case 'prompt_sent':
                return (
                    <div className="text-center py-5">
                        <svg className="mb-3 text-primary" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" /></svg>
                        <h4>Action Required</h4>
                        <p>A payment prompt has been sent to your phone number:</p>
                        <p className="text-primary fw-bold">{phone}</p>
                        <p>Please check your phone to authorize the payment.</p>
                        <button className="btn btn-primary mt-3" onClick={handlePromptAuthorized}>I have authorized the payment</button>
                    </div>
                );
            
            // New UI state for OTP entry
            case 'otp_entry':
                return (
                    <div className="text-center py-5">
                        <svg className="mb-3 text-info" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16"><path d="M10.978 4.022L5.022 10.978a.5.5 0 0 1-.707-.707L10.271 3.315a.5.5 0 0 1 .707.707z" /><path d="M11 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6zM5 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H5z" /></svg>
                        <h4>Verify your payment</h4>
                        <p>Enter the OTP sent to your phone/email to continue.</p>
                        <div className="mb-3 d-flex justify-content-center">
                            <input type="password" className="form-control text-center w-50" placeholder="Enter OTP" maxLength={6} onKeyUp={allowOnlyNumbers} value={otp} onChange={(e) => setOtp(e.target.value)} />
                        </div>
                        {otpError && <p className="text-danger">{otpError}</p>}
                        <button className="btn btn-primary mt-3" onClick={handleOtpSubmit}>Submit OTP</button>
                    </div>
                );

            case 'processing':
                return (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                        <p className="mt-3">Processing your payment...</p>
                        <p>Please do not close this window.</p>
                    </div>
                );

            case 'success':
                return (
                    <div className="text-center py-5">
                        <svg className="mb-3 text-success" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" /></svg>
                        <h4>Payment Successful!</h4>
                        <p>Thank you for your payment of GHS {data.amount}.</p>
                        <button className="btn btn-primary mt-3" onClick={onClose}>Done</button>
                    </div>
                );

            case 'failed':
                return (
                    <div className="text-center py-5">
                        <svg className="mb-3 text-danger" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" /></svg>
                        <h4>Payment Failed</h4>
                        <p>Your payment could not be processed. Please check your details and try again.</p>
                        <button className="btn btn-warning mt-3" onClick={handleRetry}>Retry Payment</button>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <div className="modal fade show d-block mpay-backdrop" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content mpay-modal">
                        <div className="mpay-body">
                            {/* Tabs Navigation (Right side on desktop) */}
                            <div className="mpay-tabs">
                                <div className="mpay-tabs-header">Proceed With</div>
                                <div className={`mpay-tab ${activeTab === 'mobile' ? 'active' : ''}`} onClick={() => setActiveTab('mobile')} >
                                    <span className="mpay-tab-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>
                                    </span>
                                    <span className="mpay-tab-text">Mobile Money</span>
                                </div>
                                <div className={`mpay-tab ${activeTab === 'card' ? 'active' : ''}`} onClick={() => setActiveTab('card')} >
                                    <span className="mpay-tab-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" /><path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" /></svg>
                                    </span>
                                    <span className="mpay-tab-text">Card</span>
                                </div>
                                <div className='d-md-none mpay-tab ' onClick={onClose}>
                                    <span className="mpay-tab-icon">
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="mpay-brand d-none d-md-flex">
                                    <img src="/temp/assets/images/logo.png" className='border' height={38} style={{ borderRadius: 100, }} />
                                    <small className='text-muted'>Host</small>
                                    <strong>Skai Version Flow</strong>
                                </div>
                            </div>
                            
                            {/* Main Content Area (Left side on desktop) */}
                            <div className="mpay-content">
                                <div className="mpay-header">
                                    <div className="mpay-header-text">
                                        <span className="mpay-email">{data.email}</span>
                                        <span className='mt-0'>Amount: <span className="mpay-pay-amount">GHS {data.amount}</span></span>
                                    </div>
                                    {/* Close button is only visible on the form and failed states */}
                                    {(currentStep === 'form' || currentStep === 'failed') && (
                                        <button type="button" className="mpay-close-icon-btn" aria-label="Close" onClick={onClose}>
                                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                <div className="mpay-form-content">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>
                        <div className="mpay-powered-by"> <i className='dripicons-anchor mr-1'></i> Powered by <strong className='text-primary'>SkaiMount</strong></div>
                    </div>
                </div>
                <div className="modal-backdrop fade show mpay-overlay"></div>
            </div>
        </>
    );
};

MPay.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    data: PropTypes.shape({
        email: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    }).isRequired,
};

export default MPay;