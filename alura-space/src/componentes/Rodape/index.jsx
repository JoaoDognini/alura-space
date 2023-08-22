import React from 'react'
import facebook from '../../assets/Rodape/facebook.svg'
import instagram from '../../assets/Rodape/instagram.svg'
import twitter from '../../assets/Rodape/twitter.svg'
import styles from './Rodape.module.scss';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <ul className={styles.rodape__lista}>
                <li>
                    <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel='noreferrer'>
                        <img src={facebook} alt='Ícone'></img>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/aluraonline/?hl=en" target="_blank" rel='noreferrer'>
                        <img src={instagram} alt='Ícone'></img>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/aluraonline?lang=en" target="_blank" rel='noreferrer'>
                        <img src={twitter} alt='Ícone'></img>
                    </a>
                </li>
            </ul>
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}
