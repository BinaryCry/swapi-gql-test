import React from 'react'
import request from 'request'
import url from 'url';

class CharacterC extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    render() {
        const __obj = this;
        return (
            <div >
                {
                    this.state.data.map( item => {
                        console.log( __obj.state.data )
                        return (
                            <div>
                                {
                                    item.name
                                }
                            </div>
                        );
                    } )
                }
            </div>
        )
    }

    componentDidMount() {
        const __obj = this;
        for ( let i=0; i < this.props.chars.length; i++ ) {
            let path = url.parse(this.props.chars[i]).pathname.split('/');
            let id = path[ path.length-2 ];
            let uri = `http://localhost:4000/swapi/?type=people&id=${ id }`;
            request(uri, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    __obj.state.data.push( JSON.parse( decodeURI(body) ) );
                    let tempArr = this.state.data;
                    __obj.setState( {
                        data: tempArr
                    } )
                }
            });

            // console.log( __obj.state )

        }
    }
}

export default CharacterC;