import React,{useState,useEffect} from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
const Card = ({ data }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!data || !data.main || !data.weather || data.weather.length === 0) {
    return <div className='text-center'> no data available

    </div>;
  }

  const kelvinToCelsius = (kelvin) => {
    return parseInt(kelvin - 273.15);
  };

  return (
    <div className='d-flex flex-column align-items-center gap-2 mt-3'>
     <div>
      
      <Clock className="mt-2" value={value} />
    </div>
      <h2>{data.name},{data.sys && data.sys.country}</h2>
      {data.weather && data.weather.length > 0 && (
        <h2>
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="Weather Icon"
          />{' '}
          {data.main && kelvinToCelsius(data.main.temp).toFixed(0)}°C
        </h2>
      )}
      <p>
       {data.weather[0].main}
      </p>
      <p>Humidity: {data.main && data.main.humidity} %</p>
      <p>Pressure: {data.main && data.main.pressure} hPa</p>
      <p>Feels Like: {data.main && kelvinToCelsius(data.main.feels_like).toFixed(2)} °C</p>
      
    </div>
  );
};

export default Card;
