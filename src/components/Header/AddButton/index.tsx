import styles from "./styles.module.scss";

export function AddButton() {

  
  return (
    <button 
      type="button"
      className={styles.buttonAdd}>
        <span className={styles.textoPlus}>&#43; Novo encontro</span>
        <span className={styles.plus}>&#43;</span>
    </button>
  )
}