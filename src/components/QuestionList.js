import React , {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({mydata, deleteQuestion, updatedQuestion}) {

  //const [questions, setQuestions] = useState([])

  const displayData = mydata.map((val)=>{
    return <QuestionItem key={val.id} question ={val} deleteQuestion={deleteQuestion} updatedQuestion={updatedQuestion}/>
  })

  /*useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(questions => setQuestions(questions))
  }, [])*/

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {displayData}
      </ul>
    </section>
  );
}

export default QuestionList;

/*{questions.map((question) => (
  <QuestionItem key= {question.id} question={question} />
))}*/