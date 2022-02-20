import styles from "../styles/ModeloGrids.module.css"

export default function ModeloGrids(props) {
    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles.a}`}>Caixa A</div>           
            <div className={`${styles.box} ${styles.b}`}>Caixa B</div> 
            <div className={`${styles.box} ${styles.c}`}>Caixa C</div> 
            <div className={`${styles.box} ${styles.d}`}>Caixa D</div> 
            <div className={`${styles.box} ${styles.e}`}>Caixa E</div> 
            <div className={`${styles.box} ${styles.f}`}>Caixa F</div> 
            <div className={`${styles.box} ${styles.g}`}>Caixa G</div> 
        </div>
    )
}