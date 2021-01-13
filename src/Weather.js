/*
 * @Author: your name
 * @Date: 2021-01-12 11:54:42
 * @LastEditTime: 2021-01-12 22:30:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React\weatherapp\src\Weather.js
 */
import React from 'react';
import Stats from './Stats';

export default function Weather(props) {
    console.log(props.now);
    return (
        <div className="Weather col-6">
            <span className="temperature">
                {props.now.temp}
                <sup className="unit">℃</sup>
            </span>
           <Stats stats={props.now}/>
        </div>
    )
}