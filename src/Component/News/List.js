import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsItem from "./Item";
import {Grid} from '@material-ui/core';

class NewsList extends Component {
  render() {
    const {list} = this.props;

    return (
      <Grid container spacing={3}>
        {
          list.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <NewsItem item={item}/>
              </Grid>
            );
          })
        }
      </Grid>
    );
  }
}

NewsList.propTypes = {
  list: PropTypes.array
};

export default NewsList;
