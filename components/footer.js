import styles from 'styles/footer.module.css'
import Logo from 'components/logo'
import Social from 'components/social'
import Container from 'components/container'

export default function Footer(){
  return (
    <footer className={styles.wrapper}>
      <Container>
          <div className={styles.flexContainer}>
            <Logo/>
            <Social/>
          </div>
      </Container>
    </footer>
  )
}
