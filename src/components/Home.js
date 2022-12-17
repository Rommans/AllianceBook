import React, { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';

import '../App.scss';
import Card from './Card/Card';
import Loading from './Loading/Loading';
import Pagination from './Pagination/Pagination';

const Home = () => {
  const IMG_API = 'https://starwars-visualguide.com/assets/img/characters/';

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await api.get(`?page=${currentPage}`);
      const returnedData = await response.data;
      setData(returnedData.results);
      setTotalCount(returnedData.count);
    } catch (error) {
      console.error('error', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData, currentPage]);

  return (
    <div className="Home">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-10/12 m-auto grid grid-cols-3 max-w-screen-2xl gap-3">
          {data.map((item, index) => {
            // Get id from URL
            const id = item.url.split('/').filter((i) => i).pop();
            return (
              <Card
                key={`${item}_${index}`}
                imgUrl={`${IMG_API}${id}.jpg`}
                name={item.name}
                id={id} 
              />
            );
          })}
        </div>
      )}
      {data && data.length > 0 && (
        <Pagination
          dataPerPage={dataPerPage}
          totalData={totalCount}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default Home;
