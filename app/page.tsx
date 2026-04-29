import ProfileCard from '@/components/portfolio/ProfileCard'
import MainContent from '@/components/portfolio/MainContent'
import Navigation from '@/components/portfolio/Navigation'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className={styles.layout}>
        <div className={styles.sidebarWrapper}>
          <ProfileCard />
        </div>
        <main className={styles.mainWrapper}>
          <MainContent />
        </main>
      </div>
    </>
  )
}
