import React , {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({mydata, deleteQuestion, updatedQuestion}) {

  const displayData = mydata.map((val)=>{
    return <QuestionItem key={val.id} question ={val} deleteQuestion={deleteQuestion} updatedQuestion={updatedQuestion}/>
  })

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