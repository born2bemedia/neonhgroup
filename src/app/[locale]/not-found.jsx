import Link from "next/link";
import React from "react";
import "@/styles/404.scss";

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="not-found__container _container">
                <div className="not-found__body">
                    <div className="not-found__image">
                        <img src="/images/404-page.svg" alt="404-error" />
                    </div>
                    <h1 className="not-found__title">Oops! Page Not Found</h1>
                    <div className="not-found__text">
                        {" "}
                        We couldn’t find the page you were searching for. But
                        don’t worry, <br /> we’ll help you get back on track!
                    </div>
                    <Link href="/" className="not-found__link">
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
