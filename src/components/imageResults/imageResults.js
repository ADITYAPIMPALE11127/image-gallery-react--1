import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardMedia, CardActions, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const styles = {
  card: {
    '@media (max-width: 1200px)': {
      width: '100%',
    },
    '@media (max-width: 992px)': {
      width: '100%',
    },
    '@media (max-width: 768px)': {
      width: '100%',
    },
    '@media (max-width: 576px)': {
      width: '100%',
    },
  },
  cardMedia: {
    height: '200px',
    '@media (max-width: 768px)': {
      height: '150px',
    },
    '@media (max-width: 576px)': {
      height: '100px',
    },
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogImage: {
    width: '100%',
  },
};

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
              <Card style={styles.card}>
                <CardMedia
                  component="img"
                  alt={img.tags}
                  style={styles.cardMedia}
                  image={img.largeImageURL}
                  title={img.tags}
                />
                <CardActions style={styles.cardActions}>
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
        <Dialog open={open} onClose={this.handleClose} maxWidth="md" fullWidth>
          <DialogTitle>Image</DialogTitle>
          <DialogContent>
            <img src={currentImg} alt="" style={styles.dialogImage} />
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
