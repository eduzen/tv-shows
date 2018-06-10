import React from 'react';
import './index.css';

const SeriesListItem = ({ series }) => (
    <li>
        {series.show.name}
        <br/>
        {series.show.premiered}
    </li>
)

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
              {props.List.map(series => (
                  <SeriesListItem series={series} key={series.show.id}/>
              ))}
            </ul>
        </div>
    )
}

export default SeriesList;
