import { Link } from "react-router-dom";
import { FaFacebookSquare, FaHashtag, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <FaHashtag className="text-4xl font-bold text-sky-700" />
                    <p className="text-xl"> <span className="text-purple-500">bdTask</span> <br />Copyright © 2023 - All right reserved by <span className=" font-medium text-green-500">bdTask</span>
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link className=" text-4xl">
                            <FaFacebookSquare className="text-blue-700" />
                        </Link>
                        <Link className=" text-4xl ">
                            <FaTwitter className=" text-blue-600" />
                        </Link>
                        <Link className=" text-4xl ">
                            <FaInstagram className=" text-red-700" />
                        </Link>
                        <Link className=" text-4xl ">
                            <FaLinkedin className="text-blue-500" />
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;