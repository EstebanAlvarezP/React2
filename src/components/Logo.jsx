import logo from "../assets/logo.png";
import styles from './appStyles.module.scss'

const Logo = () => {
    return <img className={styles.logo} src={logo} alt="" />;
};

export default Logo;
