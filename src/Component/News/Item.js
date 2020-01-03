import React, {Component} from 'react';
import './news.scss'
import PropTypes from 'prop-types';
import {Card, CardActionArea, CardContent, Typography, CardMedia} from '@material-ui/core';
import {Link} from 'react-router-dom';


class NewsItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <Card className='full-height'>
        <Link to={`/posts/${item.id}`} className='news-item-link'>
          <CardActionArea>
            <div className='media-wrapper'>
              <CardMedia
                className='item-media'
                image={item.cover_image}
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <p className='news-meta'>
                <span>({item.site})</span> | <span>{item.points} points by {item.user} {item.created_date} | {item.comments} comments</span>
              </p>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    );
  }
}

NewsItem.propTypes = {
  item: PropTypes.object
};

export default NewsItem;
