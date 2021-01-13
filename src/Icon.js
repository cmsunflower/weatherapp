import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Icon(props) {
    const iconMap = {
        '晴':'CLEAR_DAY',
        '阴':'PARTLY_CLOUDY_DAY',
        '雪':'SNOW',
        '雾':'FOG',
        '雨':'RAIN',
        '雨夹雪':'SLEET',
        '晴间多云':'CLOUDY'
    };
    let defaults = {
        icon: iconMap[props.data.icon] ||'CLEAR_DAY',
        color: '#666',
        size: props.data.size||100,
        animate: true
    };
    return (
        <div className="Icon">
            <ReactAnimatedWeather 
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
            />
        </div>
    )
}