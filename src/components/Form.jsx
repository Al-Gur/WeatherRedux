import {useState} from "react";
import {useDispatch} from "react-redux";
import {setWeather} from "../actions/weatherAction.js";
import {setMessage} from "../actions/messageAction.js";
import {api_key, base_url} from "../utils/constants.js";


const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getWeather = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(setWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                }))
                dispatch(setMessage(''))
            })
            .catch(e => {
                console.log(e);
                dispatch(setMessage('Enter correct city name'))
            })
    }

    const getCity = e => {
        e.preventDefault();
        getWeather(city);
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;