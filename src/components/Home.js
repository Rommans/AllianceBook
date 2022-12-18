import React, { useState, useEffect, useCallback } from 'react';
import { api, IMG_API } from '../services/api';

import Card from './Card/Card';
import Loading from './Loading/Loading';
import Pagination from './Pagination/Pagination';
import Search from './Search/Search';
import Dropdown from './Dropdown/Dropdown';
import NotFound from './NotFound/NotFound';

import '../App.scss';

const Home = () => {
  const ALL = 'all';

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const [input, setInput] = useState('');
  const [filterParam, setFilterParam] = useState(ALL);

  const getData = useCallback(async () => {
    if (!input) {
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
    }
  }, [currentPage, input]);

  const getSearchedData = useCallback(async () => {
    if (input) {
      try {
        const response = await api.get(`?search=${input}&page=${currentPage}`);
        const returnedData = await response.data;
        setData(returnedData.results);
        setTotalCount(returnedData.count);
      } catch (error) {
        console.error('error', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [currentPage, input]);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData, currentPage]);

  useEffect(() => {
    setIsLoading(true);
    getSearchedData();
  }, [getSearchedData, input]);

  const filterData = data.filter((el) => {
    if (el.gender === filterParam) {
      return el.name.toLowerCase().includes(input);
    } else if (filterParam === ALL) {
      return el;
    }
  });

  return (
    <div className="Home">
      <div className="m-auto max-w-screen-xl flex justify-between w-10/12">
        <Search placeholder={'Search...'} setInput={setInput} />
        <Dropdown setFilterParam={setFilterParam} />
      </div>
      {isLoading ? (
        <Loading height={60} width={60} />
      ) : (
        <>
          {filterData && filterData.length > 0 ? (
            <div className="w-10/12 m-auto grid grid-cols-2 sm:grid-cols-3 max-w-screen-xl gap-4 py-7 md:grid-cols-4 lg:grid-cols-5">
              {filterData.map((item, index) => {
                // Get id from URL
                const id = item.url
                  .split('/')
                  .filter((i) => i)
                  .pop();
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
          ) : (
            <>
              <NotFound height={80} width={80} />
            </>
          )}
        </>
      )}
      {filterData && filterData.length > 0 && (
        <Pagination
          dataPerPage={dataPerPage}
          totalData={totalCount}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Home;
