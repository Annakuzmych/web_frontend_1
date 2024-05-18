import React from 'react';

const NoPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center mt-5">
                    <h1 className="display-4">Page Not Found</h1>
                    <p className="lead">The page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    );
};

export default NoPage;
