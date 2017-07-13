import React from 'react'

class CharacterC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        console.log( JSON.parse( decodeURI(this.props.filmData) ) )

        return (
            <div >
                {
                    JSON.parse( decodeURI(this.props.filmData) ).characters.map( item => {
                        return item
                    } )
                }
            </div>
        )
    }
}

export default CharacterC;