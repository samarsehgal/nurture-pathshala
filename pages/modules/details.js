import { Button, Text } from "@nextui-org/react";
import Link from "next/link";
import { ArrowLeft } from "react-iconly";
import ReactPlayer from "react-player";

export default function Details(
  {nextPage}
) {
  return (
    <div style={{margin: "20px"}}>
      <div>
        <div>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h3>
            Self Introduction
          </h3>
        </div>
        <p>
          Module 1/5
        </p>
        <ReactPlayer width="100%" height="300px" url="https://www.youtube.com/watch?v=W-4IcNJIyM8&list=PLm_MSClsnwm-AIEbpyIxoTT8t7UzkHSYC" />
        <Text style={{textAlign: "center", marginTop: "12px"}} h5>
          Are you done with this chapter?
        </Text>
        <Text style={{textAlign: "center", marginTop: "12px", opacity: "0.5"}} h6>
          take a quiz which will get you a certificate at the end of this course
        </Text>
        <Button style={{margin: "auto", marginTop: "16px"}} onClick={() => nextPage()}>
          Take a quiz
        </Button>
      </div>
    </div>)
  }