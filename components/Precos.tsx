import styles from '../styles/Precos.module.css'

export default function Precos() {
    return(
        <div className={styles.precos}>
            Precos utilizados

            <ul>
                <li>Corte Masculino</li>
                <li>Corte Feminino</li>
                <li>Unha da Mão</li>
            </ul>
        </div>
    )
}