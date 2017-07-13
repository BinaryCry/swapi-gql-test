import React from 'react'
import ReactDOM from 'react-dom'

// Helpful components
import CharacterC from './CharacterC';

// Main Component
class SelectC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="filterBox centerBox">
                <div className="filterBoxHeader">Choose the film</div>
                <select>
                    <option disabled selected style={{ display: "none"  }}></option>
                    {
                        this.props.films.map( item => {
                            return <option key={ item.id } value={ item.id }>{ item.title }</option>
                        } )
                    }
                </select>
            </div>
        )
    }
}


// Render on event
// ReactDOM.render( <CharacterC data={} />, document.getElementById('root1'));

export default SelectC;