import Image from "next/image"
import { Text, Button } from "@nextui-org/react"

export default function Congrats() {

  return (
  <div style={{margin:"20px", marginTop: "200px"}}>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{maxHeight:"100px", maxWidth:"100px"}}>
          <Image src="/../public/imageCongrats.png" height={'100%'} width={'100%'}/>
      </div>
      <Text h5 style={{marginTop: "12px"}} bold>Congratulations</Text>
      <Text h6 style={{opacity: "0.5",marginTop:"12px"}}>You have completed the course successfully</Text>
      <Text h6 style={{opacity: "0.5",marginTop:"100px"}}>You are eligible for a certificate</Text>
      <Button style={{opacity: "0.5",marginTop:"12px"}}>Claim my certificate</Button>
    </div>
  </div>)
}