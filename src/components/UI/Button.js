// import React from 'react'
// import "./Button.css";
import styled from 'styled-components';

const Button=styled.button`
    {
        width: 20rem;
        max-width: 100%;
        padding: 0.7rem 0.8rem;
        background: #272727;
        border-radius: 0.2rem;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        font-family:Arial, Helvetica, sans-serif;
        transition: 0.2s;
        outline: none;
        border: 1px solid black;
        box-shadow: 0 0 3px black;
    }
    &:hover,
    &:focus{
        background-color: aqua;
        color: black;
        transition: 0.2s;
        border: 1px solid aqua;
        box-shadow: 0 0 3px rgb(75, 107, 107);

    }

    @media screen and (min-width:700px){
        {
            width: 10rem;
        }
    }

`

// function Button(props) {
//   return (
//         <button className='button'>{props.children}</button>
//   )
// }

export default Button

