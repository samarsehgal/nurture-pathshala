import { roles } from "../pages/_constants"
import { Text } from "@nextui-org/react"

export default function RoleHeader(
  {id}
) {
  if(!id){
    id="krishi-mitra"
  }
  const data = roles.find(role => role.id === id)
  return (
    <div> 
    <Text h2 color="white" style={{margin:'15px 0px'}}>{data.value}</Text>
    <Text color="white">{data.description}</Text>
    </div>
  )
}