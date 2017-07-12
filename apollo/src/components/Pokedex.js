import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`;

// Component
class Pokedex extends React.Component {

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
            <div className='w-100 bg-light-gray min-vh-100'>
                <Title className='tc pa5'>
                    <div>Name: { this.props.data.person.name }</div>
                    <div>Gender: { this.props.data.person.gender }</div>
                    <div>Birth Year { this.props.data.person.birthYear }</div>

                    <div>
                        <p>StarShips</p>
                        {
                            this.props.data.person.starshipConnection.starships.map( item => {
                                return <div> { item.name } </div>
                            } )
                        }
                    </div>
                    <div>
                        <p>Films</p>
                        {
                            this.props.data.person.filmConnection.films.map( item => {
                                return <div> { item.title } </div>
                            } )
                        }
                    </div>

                </Title>
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
          }
        }
        filmConnection {
          films {
            title
          }
        }
      }
    }
  
`;

const PokedexWithData = graphql(Query)(Pokedex);

export default PokedexWithData