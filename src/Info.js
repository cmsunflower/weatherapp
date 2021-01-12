/*
 * @Author: your name
 * @Date: 2021-01-12 11:52:51
 * @LastEditTime: 2021-01-12 22:28:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React\weatherapp\src\Info.js
 */
import React from 'react';
import City from './City';
import Time from './Time';

export default function Info(props) {
    return (
        <div className="Info col-6">
            <City city={props.city}/>
            <Time updateTime={props.updateTime}/>
        </div>
    )
}