
import { useContext } from "react";
import { QuizContext } from "../context/quiz"

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
const currentQuestion = quizState.questions[quizState.questions.length]  
    return <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>Pergunta atual</h2>
     <div id="options-container"></div>
     <p>Opções</p>
     <div>
      <button>Continuar</button>
     </div>
    </div>
};

export default Questions;