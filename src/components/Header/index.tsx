import Image from 'next/image'
import Link from 'next/link'
import { AddButton } from './AddButton'
import { Search } from './Search'
import styles from './styles.module.scss'

export function Header(props: { showButton: any, showSearch: any }){
  const { showButton , showSearch } = props
  

  return(
    <header className={styles.headerContainer}>
     
     <div className={styles.col}>
      <Link href="/">
        <Image src="/img/logo.svg" alt="logo catequese" width={42} height={42} />
      </Link>
     </div>
     <div className={styles.colSearch}>
        {
          showSearch ?
            <Search  placeholder="&#61442;"  />
          : null
        }
      </div>
      <div className={styles.col}>
        {
          showButton ?
            <Link href="/newEvent">
              <AddButton />
            </Link>  
          : null
        }
      </div>
     
    </header>
  )

}