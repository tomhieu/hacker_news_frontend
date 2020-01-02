import React, {Component} from 'react';
import './news.scss'
import PropTypes from 'prop-types';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import ReactImageFallback from "react-image-fallback";
import {Link} from 'react-router-dom';


class NewsItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <Card className='full-height'>
        <Link to={`/posts/${item.id}`}>
          <CardActionArea>
            <div className='media-wrapper'>
              <ReactImageFallback src={item.cover_image} fallbackImage={'https://news.ycombinator.com/y18.gif'} className='item-media' />
              {/*<CardMedia className='item-media' image={item.cover_image} onError={onMediaFallback}/>*/}
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
