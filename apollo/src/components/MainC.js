import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Helpful components
import SelectC from './SelectC';

// Main Component
class MainC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        data: React.PropTypes.shape({
            loading: React.PropTypes.bool,
            error: React.PropTypes.object,
            person: React.PropTypes.object,
        }).isRequired,
    };

    render () {

        console.log(this.props.data)

        if (this.props.data.loading) {
            return (<div>Loading</div>)
        }

        if (this.props.data.error) {
            console.log(this.props.data.error);
            return (<div>An unexpected error occurred</div>)
        }

        return (
            <div className="">
                <div className="">
                    <div>Name: { this.props.data.person.name }</div>
                    <div>Gender: { this.props.data.person.gender }</div>
                    <div>Birth Year { this.props.data.person.birthYear }</div>

                    <div>
                        <p>StarShips</p>
                        {
                            this.props.data.person.starshipConnection.starships.map( item => {
                                return <div key={item.id} > { item.name } </div>
                            } )
                        }
                    </div>
                    <div>
                        <p>Films</p>
                        {
                            this.props.data.person.filmConnection.films.map( item => {
                                return <div key={item.id} > { item.title } </div>
                            } )
                        }
                    </div>

                     <SelectC />
                </div>
            </div>
        )
    }
}

// Query
const Query = gql
    `
  query Luke {
      person(id: "cGVvcGxlOjE0") {
        name
        gender
        birthYear
        starshipConnection {
          starships {
            name
            id
          }
        }
        filmConnection {
          films {
            title
            id
          }
        }
      }
    }
  
`;

const MainCWithData = graphql(Query)(MainC);

export default MainCWithData