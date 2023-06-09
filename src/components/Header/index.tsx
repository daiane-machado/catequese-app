import Image from 'next/image'
import Link from 'next/link'
import { AddButton } from './AddButton'
import { Search } from './Search'
import styles from './styles.module.scss'
import { signOut, useSession } from 'next-auth/react'
import { MdLogout } from 'react-icons/md'

export function Header(props: { showButton: any, showSearch: any, dataCatechism?: any }) {
  const { showButton, showSearch, dataCatechism } = props
  //const {data : session } = useSession()

  return (

    <div className={styles.wrapper}>
      <div className={styles.divSignOut}>


      </div>
      <header className={styles.headerContainer}>

        <div className={styles.colLogo}>
          <div>

            <Link href="/">
              <Image src="/img/logo.svg" alt="logo catequese" width={45} height={45} />
            </Link>
            <div>

            </div>
          </div>
        </div>
        <div className={styles.colSearch}>
          {
            showSearch ?
              <Search placeholder="&#61442;" dataCatechism={dataCatechism} />
              : null
          }
        </div>
        <div className={styles.colNew}>
          {
            showButton ?
              <Link href="/newEvent">
                <AddButton />
              </Link>
              : null
          }
          <button className={styles.signOut} onClick={() => signOut()}>
            <span>Sair</span>

          </button>
        </div>

      </header>
    </div>

  )

}