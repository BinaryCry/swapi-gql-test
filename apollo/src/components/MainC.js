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
            films: React.PropTypes.object,
        }).isRequired,
    };

    render () {
        if (this.props.data.loading) {
            return (<div>Loading</div>)
        }

        if (this.props.data.error) {
            console.log(this.props.data.error);
            return (<div>An unexpected error occurred</div>)
        }

        return (
            <div>
                <SelectC films={ this.props.data.allFilms.films } />
                <div id="charsBox"></div>
            </div>
        )
    }
}

// Query
const AllFilms = gql
    `
  query Films {
      allFilms {
        films {
          id
          title
          episodeID
        }
      }
  }
  
`;

const MainCWithData = graphql(AllFilms)(MainC);

export default MainCWithData