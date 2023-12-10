import React from 'react'
import styled from 'styled-components'
export default function Mainsection() {
    return (
        <Container>
            <div className='mainsection'>
                <div className='maintext'>
                    <h1>Hi, I Am Montu <br />A Web Developer</h1>
                    <p>I am Montu, A Bsc (Comp. Sci.) graduated from Govt PG College Panchkula. I have upskilled myself by learning Web Development by my own.</p>
                   <a href='https://drive.google.com/drive/home' target='_blank'>
                    <button className='resumebtn'>Download Resume</button>
                    </a>
                </div>
                <div className='mainimg'>
                    <img src='/images/dices 1.png' alt='mainimg'></img>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`

`
