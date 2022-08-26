import { ArrowLeft } from "react-iconly"
import Module from "./module"
import Link from "next/link"
import { Text } from "@nextui-org/react"

export default function List(
  {nextPage}
) {
  const modules = [
    {title: "Self Introduction", description: "This module will help you to learn how to introduce yourself"},
    {title: "Self Introduction", description: "This module will help you to learn how to introduce yourself"},
    {title: "Self Introduction", description: "This module will help you to learn how to introduce yourself"},
    {title: "Self Introduction", description: "This module will help you to learn how to introduce yourself"},
    {title: "Self Introduction", description: "This module will help you to learn how to introduce yourself"},
  ]
  return (
  <div style={{margin:"20px"}}>
    <div >
      <div style={{display: "flex"}}>
        <Link href="/">
          <ArrowLeft style={{position: "relative", top: "5px", marginRight: "8px"}} />
        </Link>
        <Text style={{marginBottom: "12px"}} h3>
          Communication: Building Farmer Loyalty
        </Text>
      </div>
      <Text style={{marginBottom: "12px"}} h6>
        modules in this course
      </Text>
      {modules.map(module => {
        return (<Module nextPage={nextPage} module={module}></Module>)
      })}
    </div>
  </div>)
}