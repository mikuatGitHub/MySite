import Image from "next/image"

import styles from "styles/post-header.module.css"
import ConvertDate from "components/convert-date"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"

export default function PostHeader({ title, publish= "", eyecatch }) {
  // console.log(title);

  return (
    <div className={styles.stack}>

      <h1 className={styles.title}>{title}</h1>

      {publish && (
        <div className={styles.dateBox}>
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
          <ConvertDate dateISO={publish}></ConvertDate>
        </div> /* dateBox */
      )}

      <Image
        priority
        key={eyecatch.url}
        src={eyecatch.url}
        alt=""
        width={eyecatch.width}
        height={eyecatch.height}
        sizes="(min-width: 1152px)1152px, 100vw"
        style={{ width: "30%", height: "auto" }}
      />

    </div>

  );
}
