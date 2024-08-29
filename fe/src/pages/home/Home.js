import React, { useEffect, useState } from 'react'
import { Footer, Navbar } from '../../components'
import axios from 'axios';
import { baseURL } from '../../base';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/loaderreducer.js'
const Home = () => {

  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const getCards = async (param) => {
    try {
      dispatch(setLoading(true));
      if (param?.search === '') {
        delete param.search;
      }
      const { data } = await axios.get(`${baseURL}/card/list`, {
        params: { ...param }
      });
      setCards(data.data);
      dispatch(setLoading(false));
      message.success('Cards fetched successfully');
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      message.error('Failed to fetch cards');
    }
  };

  useEffect(() => {
    getCards();
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Navbar />
      <div className="flex flex-col bg-[#DADBF0] h-80 items-center justify-center gap-8">
        <p className='text-6xl font-[500]'>How can we help?</p>
        <div className="relative w-[45%] text-center">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                getCards({ search: e.target.value });
              }
            }}
          />
          <button
            className="absolute right-0 top-0 h-full px-4 py-2 text-gray-500 hover:text-gray-700"
            onClick={() => {
              getCards({ search });
            }}
          >
            →
          </button>
        </div>

      </div>
      <div className='flex flex-wrap gap-24 py-12 justify-center items-center px-12'>
        {cards.map((card) => (
          <div key={card._id} className='flex flex-col w-[30%] items-center justify-center gap-4 bg-[#F4F6F8] rounded-lg border-2'>
            <p className='text-xl font-semibold px-4 pt-2'>{card.title}</p>
            <hr className='w-full' />
            <p className='text-lg px-4 pb-2'>{card.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home