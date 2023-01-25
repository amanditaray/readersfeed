import styles from './Header.module.css'
import Logo from '../assets/logobook.svg.svg';


export function Header() {

return (

    <header className={styles.header}>
        <img src={Logo} alt="logotipo-bookworms"/>
    </header>
    
);
}