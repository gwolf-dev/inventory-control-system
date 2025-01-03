import { Link } from 'react-router';

import { Logo } from '../../core';

import { useTranslation } from '../../hooks';

import styles from './styles.module.css';
import translationFile from './translation';

function AuthTemplateHeader() {
  const language = useTranslation();
  const translation = translationFile[language];

  return (
    <header className={styles.container}>
      <Logo />

      <nav>
        <ul className={styles.nav}>
          <li>
            <Link className={styles.link} to="/login">
              {translation.login}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/register">
              {translation.register}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AuthTemplateHeader;
