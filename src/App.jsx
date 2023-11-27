import './App.css';
import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from './components/Form';
import Card from './components/Card';
import { api, api_key } from './api/api';

function App() {
 

  const [country, setCountry] = useState('Yangon');
  const [data, setData] = useState({});

  const fetchWeather = async (country_name) => {
    try {
      if (country_name !== undefined) {
        setCountry(country_name);
        const res = await api.get(`/weather?q=${country_name}&appid=${api_key}`);
        setData(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [country]);

  return (
    <div className='w-full min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='shadow-lg bg-light gap-4'>
        <Form fetchWeather={fetchWeather} />
        <Card data={data} />
      </div>
    </div>
  );
}

export default App;
