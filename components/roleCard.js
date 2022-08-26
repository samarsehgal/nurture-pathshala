import Link from "next/link";
import { Card, Text } from "@nextui-org/react";
import styles from "../styles/Home.module.css"
import { roles } from "../pages/_constants";

export default function RoleCard(
  {id}
) {
  const data = roles.find(role => role.id === id)
  return (
    <Link href={id}>
      <Card isHoverable isPressable css={{backgroundImage: `linear-gradient(98.12deg, ${data.leftColor} 3.2%, ${data.rightColor} 105.1%);`, marginBottom:"20px"}}>
        <div className={styles.cardBody}>
          <Card.Header>
            <Text color="white" h3>{data.value}</Text>
          </Card.Header>
          <Card.Body>
            <Text color="white" h6>{data.description}</Text>
          </Card.Body>
        </div>
      </Card>
    </Link>
  )
}
