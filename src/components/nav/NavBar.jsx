import React from 'react'
import styles from './NavBar.module.css'
import { FiSearch } from "react-icons/fi";


const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className="">
                <img src="#" alt="logo" className={styles.logoImage}/>
            </div>
            <ul className={styles.wrapper} >
                <li>Home</li>
                <li>Estabelecimentos</li>
                <li>Produtos</li>
                
            </ul>
            <div className={styles.searchBar}>
                <input type='text' name="search-est" placeholder="Procure..."/>
                <FiSearch className={styles.searchIcon}/>
                
            </div>
            <ul className={styles.wrapperButtons}>
                <button className={styles.btnCadastrar}>Cadastrar</button>
                <button className={styles.btnEntrar}>Entrar</button>
            </ul>
        </nav>
    )
}

export default NavBar

