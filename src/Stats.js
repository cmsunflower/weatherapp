import React from 'react';

export default function Stats(props) {
    return (
        <div className="Stats">
            <ul className="lists">
                <li className="description">{props.stats.text}</li>
                <li>风力：{props.stats.windScale}级</li>
                <li>空气湿度：{props.stats.humidity}</li>
            </ul>
        </div>
    )
}