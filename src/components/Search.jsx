import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'

function Search() {
    const [input, setInput] = useState('');

    const handleSubmite = (e) => {
        e.preventDefault();
    }

  return (
    <FormStyle onSubmit={handleSubmite}>
    <div>
        <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        <p>{input}</p>
    </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 2rem 20rem;

    div {
        width: 100%;
        position: relative;
    }

    input {
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 0.5rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search