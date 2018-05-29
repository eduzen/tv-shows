import React from 'react';

const SeriesList = (props) => {
    return (
        <div>
            <ul>
              {props.List.map(series => (<li>{series.show.name} | {series.show.premiered}</li>) )}
            </ul>
        </div>
    )
}

export default SeriesList;
