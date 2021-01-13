import React from 'react';

export default function Search(porps) {
    function handleChange(event){
        event.preventDefault();
        porps.onHandleChange(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        porps.onHandleSubmit();
    }
    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="请选择城市" className="searchCity" onChange={handleChange}/>
                <input type="submit" value="搜索" className="searchSubmit"/>
            </form>
        </div>
    )
}