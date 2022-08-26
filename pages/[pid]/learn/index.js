import { Button, Card, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { Search } from "react-iconly"
import { roles, courses } from "../../_constants"
import Link from "next/link"

export default function() {
  const router = useRouter()
  const pid = router.query.pid || "krishi-mitra"
  const data = roles.find(role => role.id === pid).learnings
  return (
    <div style={{minWidth:"500px",margin:"20px"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px"}}>
        <h4 style={{margin: "0px",float:"right"}}>Learn</h4>
        <Search/>
      </div>
      <div style={{ display: "flex", overflow: "scroll", marginBottom: "12px"}}>
        <Button rounded style={{minWidth: "fit-content",marginRight:"5px"}}>
          All
        </Button>
        {data.map(learning => {
          return(
            <Button rounded color="purple" style={{minWidth: "fit-content",marginRight:"5px"}}>
              {learning}
            </Button>
          )
        })}
      </div>
      <div>
        <div>
          Recommended courses
        </div>
        <div style={{display: "flex", minWidth: "500px"}}>
          {courses.recommended.map((course)=> {
            return (
              <Link href="/modules">
              <Card isHoverable isPressable css={{backgroundColor:"#5F4DC3",margin:"20px", width:"60%", overflow: "scroll"}}>
                <Card.Header>
                  <Text color="white" h3>{course.value}</Text>
                </Card.Header>
                <Card.Body>
                  <Text color="white" h6>{course.description}</Text>
                </Card.Body>
              </Card>
              </Link>
            )
          })}
        </div>
      </div>
      <div>
        <div style={{marginBottom:"12px"}}>
          Other courses
        </div>
        <div>
          {courses.other.map((course)=>{
            return (
              <Link href="/modules">
              <Card isHoverable isPressable css={{backgroundColor:"#abd4f1",marginBottom:"20px"}}>
                <Card.Body>
                  {course}
                </Card.Body>
              </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}