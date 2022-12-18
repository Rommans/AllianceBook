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
          <div className="block lg:flex bg-neutral-300 rounded-lg shadow-2xl">
          <div className="p-2.5 lg:p-0">
            <img
              className="w-96 rounded-lg lg:rounded-l-lg m-auto lg:m-0"
              src={`${IMG_API}${id}.jpg`}
              alt={`${data?.name} img`}
            />
          </div>
            <div className="flex items-center w-full lg:pl-28 ">
              <div className="w-10/12 m-4 lg:m-2.5 bg-neutral-50 rounded-xl p-8 shadow-lg mx-auto">
                <p className="text-3xl lg:text-4xl text-center font-extrabold">{data?.name}</p>
                <p className="text-xl lg:text-2xl font-bold">
                  Height:
                  <span className="pl-2.5">{data?.height}</span>
                </p>
                <p className="text-xl lg:text-2xl font-bold">
                  Mass:
                  <span className="pl-2.5">{data?.mass}</span>
                </p>
                <p className="text-xl lg:text-2xl font-bold">
                  Hair color:
                  <span className="pl-2.5">{data?.hair_color}</span>
                </p>
                <p className="text-xl lg:text-2xl font-bold">
                  Skin color:
                  <span className="pl-2.5">{data?.skin_color}</span>
                </p>
                <p className="text-xl lg:text-2xl font-bold">
                  Eye color:
                  <span className="pl-2.5">{data?.eye_color}</span>
                </p>
                <p className="text-xl lg:text-2xl font-bold">
                  Birth year:
                  <span className="pl-2.5">{data?.birth_year}</span>
                </p>
                <p className="text-xl lg:text-2xl font-bold">
                  Gender:
                  <span className="pl-2.5">{data?.gender}</span>
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
