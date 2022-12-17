import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api, IMG_API } from '../../services/api';

import Loading from '../Loading/Loading';
import { ReactComponent as BackButton } from '../../assets/back_button.svg';

const Characters = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    getCharacterData();
  }, [getCharacterData]);

  return (
    <div className="Characters">
      {isLoading ? (
        <Loading height={60} width={60} />
      ) : (
        <div className="w-10/12 m-auto max-w-screen-xl">
          <BackButton
            className="w-9 h-9 cursor-pointer my-4"
            onClick={() => navigate(-1)}
          />
          <div className="flex bg-neutral-300 rounded-lg shadow-2xl">
            <img
              className="w-96 rounded-l-lg"
              src={`${IMG_API}${id}.jpg`}
              alt={`${data?.name} img`}
            />
            <div className="flex items-center w-full pl-28 ">
              <div className="w-10/12 m-2.5 bg-neutral-50 rounded-xl p-8 shadow-lg">
                <p className="text-4xl text-center font-extrabold">{data?.name}</p>
                <p className="text-2xl font-bold">
                  Height:
                  <span>{data?.height}</span>
                </p>
                <p className="text-2xl font-bold">
                  Mass:
                  <span>{data?.mass}</span>
                </p>
                <p className="text-2xl font-bold">
                  Hair color:
                  <span>{data?.hair_color}</span>
                </p>
                <p className="text-2xl font-bold">
                  Skin color:
                  <span>{data?.skin_color}</span>
                </p>
                <p className="text-2xl font-bold">
                  Eye color:
                  <span>{data?.eye_color}</span>
                </p>
                <p className="text-2xl font-bold">
                  Birth year:
                  <span>{data?.birth_year}</span>
                </p>
                <p className="text-2xl font-bold">
                  Gender:
                  <span>{data?.gender}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
