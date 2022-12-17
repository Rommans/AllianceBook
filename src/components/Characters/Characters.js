import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';

import Loading from '../Loading/Loading';
import classes from './characters.module.scss';

const Characters = () => {
  const IMG_API = 'https://starwars-visualguide.com/assets/img/characters/';
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getCharacterData = useCallback(async () => {
    try {
      const response = await api.get(id);
      const returnedData = await response.data;
      setData(returnedData);
    } catch (error) {
      console.error('error', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  //Change page

  useEffect(() => {
    setIsLoading(true);
    getCharacterData();
  }, [getCharacterData]);

  return (
    <div className="Characters">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="">
            <h1>{data?.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Characters;
