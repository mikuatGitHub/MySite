import styles from 'styles/logo.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from '@fortawesome/free-solid-svg-icons';

export default function Logo({boxOn= false}){
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
    </Link>
  );
}
