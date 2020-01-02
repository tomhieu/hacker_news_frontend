import './Home.scss';
import React, {Component} from 'react';
import NewsList from "../../Component/News/List";
import {Container} from '@material-ui/core';
import InfiniteLoader from 'react-infinite-loader';
import {connect} from 'react-redux';
import actions from './actions';


const {fetchNewsList} = actions;

class HomePage extends Component {
  componentDidMount() {
    this.loadItems()
  }

  handleVisit () {
    this.loadItems()
  }

  loadItems(){
    if (this.props.pageBeingLoaded == this.props.currentPage + 1) {
      return false
    }
    this.props.fetchNewsList(this.props.currentPage + 1);
  }

  render() {
    const {newsList} = this.props;
    let {total, perPage} = this.props.pagination;

    let visitStyle = { position: 'absolute', width: '100%', bottom: '10rem', height: '10rem' };
    let loaderStyle = { position: 'relative', bottom: '0', height: '25px', width: '25px', backgroundColor: 'transparent', borderStyle: 'dotted', borderColor: '#dddddd'};

    return (
      <Container className='pt-30 pb-30'>
        <NewsList list={newsList}/>
        {
          total/perPage > this.props.currentPage ? (<div className='pagination-loader'>
            <InfiniteLoader visitStyle={visitStyle} loaderStyle={loaderStyle} onVisited={ () => this.handleVisit() } />
          </div>) : null
        }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  newsList: state.homeReducer.newsList,
  pageBeingLoaded: state.homeReducer.pageBeingLoaded,
  pagination: state.homeReducer.pagination,
  currentPage: state.homeReducer.currentPage
});

export default connect(
  mapStateToProps, {fetchNewsList}
)(HomePage);

