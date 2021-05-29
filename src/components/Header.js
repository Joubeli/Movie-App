import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import '../App.css'

const Head = (props) => {
    return (
        <div className='Header'>
            <div className='imageHeader'>
                <img style={{ marginTop: '0px' }} width='64px' height='65px' src='./movie.gif' alt='logo' />
                <p><b>Movie Store</b></p>
            </div>
            <div className='nav-search'>
                <Form>
                    <Form.Group>
                        <Form.Control className='search' onChange={(e) => props.setinput(e.target.value)} type="text" placeholder="Search Film" />
                    </Form.Group>

                </Form>


            </div>
        </div>
    )
}

export default Head
