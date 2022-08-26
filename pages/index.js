import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import RoleCard from '../components/roleCard'
import { roles } from './_constants'
import Image from 'next/image'

export default function Home() {

  return (
    <div style={{margin : "20px"}}>
      <Head>
        <title>Nurture Pathshala</title>
        <meta name="description" content="agriculture e-learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{maxHeight:"50px", maxWidth:"50px", marginBottom:"-5px"}}>
          <Image src="/../public/FrameBook.png" height={'100%'} width={'100%'}/>
        </div>
        <h2 style={{height: "100%",marginTop: "-5px"}}>
          <span style={{color: "green"}}>nurture.</span>
          <span style={{color: "#4c636e"}} styles={styles.Pathshala}>pathshala</span>
        </h2>
      </div>
      <div style={{textAlign: "center", marginBottom:"20px"}}>
        <h5>Choose what you want to learn</h5>
      </div>

      <div className={styles.roles}>
        {roles.map((role) => {
          return (
            <RoleCard
            id={role.id}
            />
          )
        })}
      </div>
    </div>
  )
}
