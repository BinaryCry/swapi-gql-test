import React from 'react'
import ReactDOM from 'react-dom'
import request from 'request'

// Helpful components
import CharacterC from './CharacterC';

// Main Component
class SelectC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // Render on event
    getChars(e) {
        // Proxy to SWAPI

        request('http://localhost:4000/swapi/?filmID='+e.target.value, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                ReactDOM.render( <CharacterC filmData={ body }  />, document.getElementById('charsBox'));
            }
        });


    }

    render() {
        return (
            <div className="filterBox centerBox">
                <div className="filterBoxHeader">Choose the film</div>
                <select onChange={ this.getChars }>
                    <option disabled selected style={{ display: "none"  }}></option>
                    {
                        this.props.films.map( item => {
                            return <option key={ item.id } value={ new Buffer( item.id, 'base64').toString('ascii').split(':')[1] }>{ item.title }, ep: { item.episodeID }</option>
                        } )
                    }
                </select>
            </div>
        )
    }
}

export default SelectC;