import React from 'react';
import { useLocation } from 'react-router-dom';
import datas from '../static/stylesheets/data/data.json';



const Detail = ({match}) => {
    const { idx } = match.params;
    console.log(match);
    return(
        <>
            <div>Detail</div>
        </>
    );
}

export default Detail;