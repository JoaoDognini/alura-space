import React from 'react'
import Card from './Card'

export default function Cards({fotos, styles}) {
    return (
        <ul className={styles.galeria__cards}>
            {fotos.map(foto => <Card foto={foto} styles={styles}></Card>)}
        </ul>
    )
}