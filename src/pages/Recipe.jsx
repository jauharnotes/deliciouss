import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
  const [details, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState('Instructor');
  const params = useParams();

  const getDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API}`
    );
    const data = await api.json();
    setDetail(data);
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Botton
          className={activeTab === 'Instructor' ? 'active' : ''}
          onClick={() => setActiveTab('Instructor')}
        >
          Instructor
        </Botton>
        <Botton
          className={activeTab === 'Ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('Ingredients')}
        >
          Ingredients
        </Botton>
        {activeTab === 'Instructor' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === 'Ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.original}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  gap: 5rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  img {
    width: 500px;
    height: auto;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 16px;
    line-height: 2.5rem;
    font-weight: bold;
  }

  h3 {
    font-size: 16px;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Botton = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  /* margin-left: 10rem; */
`;

export default Recipe;
