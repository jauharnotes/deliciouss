import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <SLink to='/cuisine/Italian'>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to='/cuisine/American'>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to='/cuisine/Thai'>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to='/cuisine/Japanese'>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
    background: linear-gradient(35deg, #494949, #313131);
    cursor: pointer;
    transform: scale(0.8);
    text-decoration: none;

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &.active, :hover {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }
`;

export default Category;
