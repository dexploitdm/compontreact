import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        // Вопросы и враыильные ответы
        quiz: []
    }

    render() {
        return (
            <div className="Quiz">
                <h1>Quiz</h1>

                <div className="QuizWrapper">
                    <ActiveQuiz />
                </div>
            </div>
        )
    }
}
export default Quiz