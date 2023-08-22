import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({tags, filtrarFotos, setItens, fotos}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
            {tags.map(tag => <li key={tag} onClick={() => filtrarFotos(tag)}>{tag}</li>)}
            <li onClick={() => setItens(fotos)}>Limpar</li>
        </ul>
    </div>
  )
}
