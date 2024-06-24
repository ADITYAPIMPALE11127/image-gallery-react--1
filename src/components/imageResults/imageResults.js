import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardMedia, CardActions, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { images } = this.props;
    const { open, currentImg } = this.state;

    let imageList;

    if (images) {
      imageList = (
        <Grid container spacing={2}>
          {images.map(img => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={img.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={img.tags}
                  height="200"
                  image={img.largeImageURL}
                  title={img.tags}
                />
                <CardActions>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {img.tags}
                  </Typography>
                  <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                    <ZoomInIcon color="primary" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    } else {
      imageList = null;
    }

    return (
      <div>
        {imageList}
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Image</DialogTitle>
          <DialogContent>
            <img src={currentImg} alt="" style={{ width: '100%' }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
