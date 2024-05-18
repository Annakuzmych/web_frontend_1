import React, {useState} from 'react';
import Header from "./Header";
import QuestionComponent from "./QuestionComponent";
import Footer from "./Footer";
import QuizFinishedModal from "./QuizFinishedModal";

const MainQuiz = () => {
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleQuizFinish = () => {
        setIsQuizFinished(true);
    };

    const handleCloseModal = () => {
        setIsQuizFinished(false);
    };
    return (
        <div className="bg-body-tertiary flex-column min-vh-100">
            <Header/>
            <main className="container mx-auto my-4 ">
                <QuestionComponent onQuizFinish={handleQuizFinish}/>
            </main>
            <Footer/>
            {isQuizFinished && <QuizFinishedModal onClose={handleCloseModal}/>}
        </div>
    );
};

export default MainQuiz;