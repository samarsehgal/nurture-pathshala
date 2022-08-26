import { roles } from "../pages/_constants"
import { Text } from "@nextui-org/react"
import { TickSquare } from "react-iconly"

export default function LearningDetails(
{id}
) {
  const data = roles.find(role => role.id === id).learnings

  return(
    <div style={{display: "flex",flexDirection: "column"}}>
      <Text h4>
        What will you learn from this
      </Text>
      <div style={{display: "flex",flexDirection: "column", margin:"12px 0px"}}>
        {data.map((learning, index) => {   
          return (<div style={{display:"flex", alignItems:"center", margin:"8px 0px"}}>
                    <TickSquare style={{marginRight: "10px"}} set="light"/>
                    <Text h6 key={index}>
                      {learning} 
                    </Text>
                  </div>)
                  })}
      </div>
    </div>
  )
}