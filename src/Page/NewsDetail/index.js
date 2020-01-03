import './NewsDetail.scss';
import React, {Component} from 'react';
import {Container} from '@material-ui/core';
import {connect} from 'react-redux';
import actions from './actions';
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core';


const {fetchNewsDetail, removeCurrentNews} = actions;

class NewDetailPage extends Component {
  componentDidMount() {
    this.props.fetchNewsDetail(this.props.match.params.id);
  }

  componentDidUnmount() {
    this.props.removeCurrentNews();
  }

  render() {
    const {currentNews} = this.props;

    return (
      <Container className='pb-30'>
        <Link to='/'><Button>back to home</Button></Link>
        {
          currentNews ? (
            <div>
              <img src={currentNews.cover_image} className='full-width'/>
              <h2>{currentNews.title}</h2>
              {
                currentNews.content.map((c) => {
                  return (<p>{c}</p>);
                })
              }
            </div>) : null
        }
        <Link to='/'><Button>back to home</Button></Link>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentNews: state.newsDetailReducer.currentNews
});

export default connect(
  mapStateToProps, {fetchNewsDetail, removeCurrentNews}
)(NewDetailPage);

