import { signIn } from 'next-auth/react'
import styles from '../../styles/signIn.module.scss'

import Image from 'next/image'

export default function SignIn() {

  
  return (
    <div className={styles.divLogin}>
      <div className={styles.divSignIn}>
        <Image alt="logo catequese" width={100} height={100} src="/img/logo2.svg" />
        <div className={styles.divTextLogin}>
          <Image alt="logo catequese" width={19.17} height={27.48} src="/img/calendar-purple.svg" />
          <span className={styles.titleLogin}>Planner Catequese</span>
        </div>
        <button className={styles.btLogin} onClick={() => signIn()}>
          Login</button>
      </div>
    </div>
  )

}