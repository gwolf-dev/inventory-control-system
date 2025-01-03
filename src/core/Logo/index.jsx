import styles from './styles.module.css';

function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo.svg" alt="Logo" />
    </div>
  );
}

export default Logo;
