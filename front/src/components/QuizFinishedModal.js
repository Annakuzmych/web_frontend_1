import '../style/QuizFinishedModal.css';
import {Button} from "react-bootstrap";

function QuizFinishedModal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title mx-2">Congratulations!</h5>
                    </div>
                    <div className="modal-body">
                        <p>You have completed the quiz successfully.</p>
                    </div>
                    <div className="modal-footer">
                        <Button variant="outline-success" onClick={onClose}>Close</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QuizFinishedModal;
