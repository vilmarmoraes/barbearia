import styles from '../styles/Rodape.module.css'

export default function Rodape(props) {
    return(
        <div className={styles.rodape}>
           {props.direitos} 
        </div>
    )
}