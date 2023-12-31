import styles from 'styles/document.module.css'

export default function Document() {
  return (
    <div className={styles.stack}>

      <div className={styles.block}>
        <h2>自己紹介</h2>
        <p>フロントエンドエンジニアに転職したく、プログラミングを独学で勉強しています。</p>
        <p>ReactとNext.jsを使用してポートフォリオサイトを立ち上げました。</p>
      </div>

      <div className={styles.block}>
        <h2>経歴</h2>
        <p>大学では環境工学を専攻。現職ではネットワーク系の業務をしています。</p>
      </div>

    </div>
  )
}
