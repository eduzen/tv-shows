import React, { Component } from 'react';
import Loader from "../../components/Loader";

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);

        fetch(`http://api.tvmaze.com/shows/${id}`)
          .then(response => response.json())
          .then(json => this.setState({ show: json }))
    }

    render () {
        const { show } = this.state;
        console.log(show);
        return (
            <div>
                <p>
                    Single Series - {this.props.match.params.id}
                </p>
                { show === null && <Loader /> }
                {
                    show !== null &&
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered: {show.premiered}</p>
                        <p>Rating: {show.rating.average}</p>
                        <img src={show.image.medium} alt="Show"/>
                        <p>{show.summary}</p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;