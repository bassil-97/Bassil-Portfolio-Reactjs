import React from 'react';

import Button from '@material-ui/core/Button';
import logo from '../../Assets/blog-logo.png';
import './pricing.css';

export default function Pricing() {
    return (
        <div className="container-fluid" id="pricing-container">
            <div className="pricing-container-header">
            <img src={logo} width="50px" height="50px" className="img-fluid mb-4" />
                <small className="text-muted">Best People for Best Projects</small>
                <h3 className="mt-2">Let's find a way together</h3>
            </div>
            <div className="row text-center" id="pricing-container-body">
                <div className="col-lg-3">
                    <div className="pricing-plan">
                        <h4 className="text-muted">Starter Plan</h4>
                    </div>
                    <div className="pricing-plan-body">
                        <h2 className="mb-4"><sup style={{fontSize: '18px'}}>$</sup>5 - <sup style={{fontSize: '18px'}}>$</sup>10 <small>/h</small></h2>
                        <div className="plan-items">
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/fluent/16/000000/checkmark.png"/> 5-10 pages</h6>
                            </div>
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/fluent/16/000000/checkmark.png"/> Responsive Design</h6>
                            </div>
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/emoji/16/000000/cross-mark-emoji.png"/> Database Integration</h6>
                            </div>
                        </div>
                        <div className="plan-item mt-2">
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="pricing-plan">
                        <h4 className="text-muted">Basic Plan</h4>
                    </div>
                    <div className="pricing-plan-body">
                        <h2 className="mb-4"><sup style={{fontSize: '18px'}}>$</sup>15 - <sup style={{fontSize: '18px'}}>$</sup>20 <small>/h</small></h2>
                        <div className="plan-items">
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/fluent/16/000000/checkmark.png"/> 10-15 pages</h6>
                            </div>
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/fluent/16/000000/checkmark.png"/> Responsive Design</h6>
                            </div>
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/fluent/16/000000/checkmark.png"/> Database Integration</h6>
                            </div>
                        </div>
                        <div className="plan-item mt-2">
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="pricing-plan">
                        <h4 className="text-muted">Pro Plan</h4>
                    </div>
                    <div className="pricing-plan-body">
                        <h2 className="mb-4"><sup style={{fontSize: '18px'}}>$</sup>25 - <sup style={{fontSize: '18px'}}>$</sup>30 <small>/h</small></h2>
                        <div className="plan-items">
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/fluent/16/000000/checkmark.png"/> Unlimited Pages</h6>
                            </div>
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/fluent/16/000000/checkmark.png"/> Responsive Design</h6>
                            </div>
                            <div className="plan-item">
                                <h6><img src="https://img.icons8.com/fluent/16/000000/checkmark.png"/> Database Integration</h6>
                            </div>
                        </div>
                        <div className="plan-item mt-2">
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
