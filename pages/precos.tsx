import styles from '../styles/Precos.module.css'
import Precos from "../components/Precos";

export default function UsandoPrecos() {
    return (
        <div className={styles.container}>
            <Precos/>
            <a href="/">Voltar</a>
        </div>        
    )
}