import { Text } from "@nextui-org/react"
import Image from "next/image"
export default function Module(
  {module,
  nextPage}
) {
  return(
    <>
      <div onClick={()=> nextPage()} style={{display: "flex", flexDirection:"row", alignItems:"center", marginBottom: "12px", height: "25%"}}>
        <div style={{marginRight:"10px"}}>
          <Image  style={{marginRight:"12px"}} height={"100%"} width={"100%"} src={module.imagePath || "/../public/Rectangle.png"}></Image>
        </div>
        <div>
          <Text h4>{module.title}</Text>
          <Text p style={{opacity: "0.5"}}>{module.description}</Text>
          <Text></Text>
        </div>
      </div>
      <br/>
    </>
  )
}