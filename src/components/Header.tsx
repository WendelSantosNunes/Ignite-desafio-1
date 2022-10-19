import styles from './Header.module.css'
import imgLogo from '../assets/rocket.svg'

export function Header(){
    return (
        <>
            <header className={styles.header}>
                <div>
                    <img src={imgLogo} alt="Logo" />
                    <h1>TO<span>DO</span></h1>
                </div>
            </header>
        </>
    )
}