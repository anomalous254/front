import React from 'react';
import './index.scss';
import { FaBookOpen } from 'react-icons/fa6';
import { FaInfo } from 'react-icons/fa';
import { IoGitBranch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import privacyPolicy from '../../assets/docs/lulu-pp.pdf'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-link">
                <Link to={privacyPolicy} target='_blank'>
                    <FaBookOpen className="footer-icon" />
                </Link>
                <p>Privacy policy</p>
            </div>
            <div className="footer-link">
                <Link>
                    <IoGitBranch className="footer-icon" />
                </Link>
                <p>version 1.0.1</p>
            </div>
            <div className="footer-link">
                <Link>
                    <FaInfo className="footer-icon" />
                </Link>
                <p>Read more</p>
            </div>
        </div>
    );
};
