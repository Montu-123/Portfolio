import React from 'react'
import styled from 'styled-components'
import styles from './Navbar.module.css'

export default function Navbar({handleGithub}) {
  return (
    <Container>
        <div className={styles.navbar}>
            <div className='left-section'>Montu Codes</div>
            <div className='mid-section'>
                <li><a href='/'>HOME</a></li>
                <li><a href='/'>SKILLS</a></li>
                <li><a href='/'>PROJECTS</a></li>
                <li><a href='/'>CONNECT</a></li>
            </div>
            <div className='right-section'>
                <a href='https://github.com/Montu-123' target='_blank'>
                <button className='rightbtn'>GITHUB</button>
                </a>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
font-family: 'Oswald', sans-serif;

`
