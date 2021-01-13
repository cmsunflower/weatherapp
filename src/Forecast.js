import React from 'react';
import HourlyForecast from './HourlyForecast';
export default function Forecast(props){
    console.log(props);
    let arr = props.data;
    let forecast = arr.map(item =>{
        item['icon'] = item.textDay;
        item['size'] = 64;
        return <HourlyForecast key={item.fxDate} data={item}/>}
    );
    return (
        <div className="row">
            {forecast}
        </div>
    )
}