import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <Header/>
        <main className="container mx-auto my-4 flex-grow-1 ml-5">
            <section id="about" className="mb-8">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            The website focuses on emotional intelligence, exploring its impact on daily life and well-being. It offers insights into managing emotions, understanding oneself and others, and improving problem-solving skills. Through articles, quizzes, and interactive tools, the site aims to enhance emotional intelligence and promote mental wellness.                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://th.bing.com/th/id/OIP.2lkb2YwA9Bu-jyHnPpQefQHaFj?rs=1&pid=ImgDetMain" className="card-img-top" alt="Doctor appointment"/>
                                <div className="card-body">
                                    <h5 className="card-title">Some info</h5>
                                    <p className="card-text">Be intelligence</p>
                                    <Link  className="btn btn-secondary" to="">For more information</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
            <Footer/>
        </div>
    );
};

export default AboutPage;
