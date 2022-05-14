import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
  const [searchedResepies, setSearchedResepies] = useState([]);
  const params = useParams();

  const getSeacrhed = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${process.env.REACT_APP_API}`
    );
    const recepes = await data.json();
    setSearchedResepies(recepes.results);
  };

  useEffect(() => {
    getSeacrhed(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedResepies.map((item) => {
        return (
          <Link to={'/recipe/' + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
