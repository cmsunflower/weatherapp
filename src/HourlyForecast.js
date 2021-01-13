
import React from 'react';
import Icon from './Icon';
import timeFormat from './util';

export default function HourlyForecast(props) {
    let time = timeFormat(props.data.fxDate, 'mm-dd');
    return (
        <div className="HourlyForecast">
            {time}
            <Icon data={props.data}/>
            <span className="min">{props.data.tempMin}/</span>
            <span className="max">{props.data.tempMax}°C</span>
        </div>
    )
}