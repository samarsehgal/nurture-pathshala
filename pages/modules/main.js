import { Button,Text } from "@nextui-org/react"
import { ArrowLeft } from "react-iconly"
import Link from "next/link"

export default function Main(
  {nextPage}
) {
  return (
  <div style={{backgroundColor:"#414eAc", margin:"-20px",padding:"40px" ,height:"120vh", backgroundImage:"/public/mainPage.png"}}>
    <Link href="/">
        <ArrowLeft color="white"/>
    </Link>
    <div>
      <Text h2 color="white">
        Communication: Building Farmer Loyalty
      </Text>
      <Text h6 style={{color: "rgba(245,244,250,0.5)", margin: "20px 0px"}}>
        This is your path to a career as a Krishi Mitras
        experts. In this program, you'll learn in-deamnd
        skills that can build your Social development 
        skills.
      </Text>
      <Text color="white" style={{marginTop:"20px"}}>
        you will recieve a certificate at the end of this course
      </Text>
      <Button onClick={()=> nextPage()} style={{backgroundColor: "#7bf244", color: "black", margin: "auto", marginTop:"32px"}}>
        Get Started
      </Button>
    </div>
  </div>
  )
}