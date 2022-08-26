import { ArrowLeft } from "react-iconly"
import Link from "next/link"
import LearningDetails from "../../components/learningDetails"
import RoleHeader from "../../components/roleHeader"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/router"
import { roles } from "../_constants"

export default function Learn() {
    const router = useRouter()
    const pid  = router.query.pid || "krishi-mitra"
    const data = roles.find(role => role.id == pid)

    return (
        <div style={{margin : "20px"}}>
            <div style={{margin: "-20px", padding:"20px", background: `linear-gradient(98.12deg, ${data.leftColor || "#223042"} 3.2%, ${data.rightColor || "#371d9c"} 105.1%);`, marginBottom:"20px"}}>
                <Link href="/">
                    <ArrowLeft color="white"/>
                </Link>
                <RoleHeader
                    id={pid || "krishi-mitra"}
                />
            </div>
            <LearningDetails
                id={pid || "krishi-mitra"}
            />
            <Link shallow href={`/${pid}/learn`}>
                <Button style={{margin:"auto"}}>
                    Get Started
                </Button>
            </Link>
        </div>
    )
}