import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <main className="container mx-auto my-4 flex-grow-1">
                <section id="login" className="mb-8">
                    <div className="form-container">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block">Email</label>
                                <input type="email" id="email" className="form-control"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block">Password</label>
                                <input type="password" id="password" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-outline-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-box-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                                </svg>
                                <span className="mx-1">Login</span>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default LoginPage;