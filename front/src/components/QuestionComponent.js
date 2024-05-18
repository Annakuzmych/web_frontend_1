import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuestionComponent({ onQuizFinish }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        axios.get('/api/questions')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
            });
    }, []);

    const handleNext = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleFinish = () => {
        onQuizFinish();
    };

    const question = questions[currentQuestionIndex];

    if (!question) {
        return null;
    }

    return (
        <div>
            <h2 className="text-uppercase text-center text-primary">Quiz</h2>
            <div className="card mb-3">
                <div className="card-header">{question.question}</div>
                <div className="card-body">
                    <form>
                        {JSON.parse(question.options).map((option, index) => (
                            <div className="form-check" key={index}>
                                <input className="form-check-input" type="radio" name={`question-${question.id}`}
                                       id={`option-${index}`} value={option}/>
                                <label className="form-check-label" htmlFor={`option-${index}`}>{option}</label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-secondary" onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}>Previous
                </button>
                <button className="btn btn-secondary"
                        onClick={currentQuestionIndex === questions.length - 1 ? handleFinish : handleNext}>
                    {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
            </div>
        </div>
    );
}
export default QuestionComponent;