import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        // Вопросы и враыильные ответы
        quiz: [
            {   
                question: 'Какого цвета небо?',
                rigthAnswerId: 2,
                answers: [
                    {text: 'Черный', id:1},
                    {text: 'Синий', id:2},
                    {text: 'Красный', id:3},
                    {text: 'Зеленный', id:4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('answer id:', answerId)
    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}
export default Quiz