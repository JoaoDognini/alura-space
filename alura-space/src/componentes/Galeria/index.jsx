import React from 'react'
import styles from './Galeria.module.scss'
import Tags from '../Tags'
import Cards from './Cards'
import fotos from './fotos.json';
import { useState } from 'react';

export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map(foto => foto.tag))]

  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter(foto => foto.tag === tag)

    setItens(novasFotos);
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} fotos={fotos}></Tags>
      <Cards fotos={itens} styles={styles}></Cards>
    </section>
  )
}
