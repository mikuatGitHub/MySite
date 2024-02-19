import styles from 'styles/document.module.css'

export default function Document() {
  return (
    <div className={styles.stack}>
      <div className={styles.block}>
        <h2>自己紹介</h2>
        <p>
          ～～～自己紹介文の記述～～～自己紹介文の記述～～～自己紹介文の記述～～～
          自己紹介文の記述～～～自己紹介文の記述～～～
          自己紹介文の記述～～～自己紹介文の記述～～～自己紹介文の記述～～～
        </p>
      </div>

      <div className={styles.block}>
        <h2>経歴</h2>
        <p>
          ～～～経歴の記述～～～経歴の記述～～～経歴の記述～～～経歴の記述～～～経歴の記述～～～経歴の記述～～～経歴の記述～～～経歴の記述～～～経歴の記述～～～経歴の記述～～～
        </p>
      </div>
    </div>
  );
}
