import React from 'react';
import Info from './Info';
import Weather from './Weather';

export default function Header(props){
    return (
        <div className="Header">
            <div className="row">
                <Info city={props.data.city} updateTime={props.data.date}/>
                <Weather now={props.data.currentWeather}/>
            </div>
        </div>
    )
}