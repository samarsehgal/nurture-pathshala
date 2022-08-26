import { useEffect, useState } from "react"
import Main from "./main";
import List from "./list";
import Details from "./details";
import Quiz from "./quiz";
import Congrats from "./congrats";
import { useRouter } from "next/router";

export default function Modules() {
  const views=["main", "list", "details", "quiz","congrats","certificate"]
  const [currentIndex,setCurrentIndex] = useState(0)
  const router = useRouter()
  const nextPage = () => {
    setCurrentIndex(currentIndex+1)
    router.push(`modules?view=${currentIndex}`)
  }
  useEffect(()=>{
    setCurrentIndex(router.query.view || 0)
  },[])

  switch(currentIndex) {
    case 0: return <Main nextPage={nextPage}></Main>;
    case 1: return <List nextPage={nextPage}></List>;
    case 2: return <Details nextPage={nextPage}></Details>;
    case 3: return <Quiz nextPage={nextPage}></Quiz>
    case 4: return <Congrats nextPage={nextPage}></Congrats>;
  }

}