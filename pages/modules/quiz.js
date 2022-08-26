import { Button, Text } from "@nextui-org/react"
import Link from "next/link"
import { ArrowLeft } from "react-iconly"
import MCQ from "./MCQ"

export default function Quiz(
  {nextPage}
) {
  const questions = [
    {question: "Question 01 Lorem Ipsum?", options: ["option 1" , "option 2", "option 3"], correctOption: "option 2"},
    {question: "Question 02 Lorem Ipsum Lorem Ipsum?", options: ["option 1" , "option 2", "option 3"], correctOption: "option 3"},
    {question: "Question 03 Lorem Ipsum Lorem Ipsum Lorem Ipsum?", options: ["option 1" , "option 2", "option 3"], correctOption: "option 2"},
    {question: "Question 04 Lorem Ipsum?", options: ["option 1" , "option 2", "option 3"], correctOption: "option 3"},
  ]

  return (
  <div style={{margin:"20px", minHeight:"800px"}}>
    <div>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "20px"}}>
        <Link href="/">
          <ArrowLeft style={{marginRight:" 12px"}} />
        </Link>
        <Text style={{marginBottom:"0px"}} h4>
          Quiz
        </Text>
      </div>
      <div>
        {questions.map(question => {
          return <MCQ question={question}/>
        })}
      </div>
    </div>
    <Button onClick={()=>nextPage()} style={{position:"fixed", bottom:"0px", borderRadius: "0px", width: "100%", marginLeft: "-20px"}}>Submit Answers</Button>
  </div>)
}