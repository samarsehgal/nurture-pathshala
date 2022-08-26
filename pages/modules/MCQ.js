import { Radio } from "@nextui-org/react"

export default function MCQ(
  {question}
) {
  console.log(question)
  return (
    <>
      <div style={{margin: "20px 0px"}}>
        {question.question}
      </div>
      <Radio.Group>
        {question.options.map(option=>{
          return <Radio size="sm" value={option}>{option}</Radio>
        })}
      </Radio.Group>
    </>
  )
}