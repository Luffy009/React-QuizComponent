import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    render() {
        return (
            <div>
                <div className='QuizQuestion'>
                    String: {quizData.quiz_questions[this.state.quiz_position].instruction_text}

                </div>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }
}

export default Quiz