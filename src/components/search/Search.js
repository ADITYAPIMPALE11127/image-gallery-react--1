import React, { Component } from 'react';
import axios from 'axios';
import ImageResults from '../imageResults/imageResults'; // Ensure you have this component imported

class Search extends Component {
  state = {
    searchText: '',
    apiUrl: 'https://pixabay.com/api',
    apiKey: '44427448-7135d98eb6444f74da4530e6f',
    images: []
  };

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    });
  };

  render() {
    console.log(this.state.images);
    return (
      <div>
        <input
          type="text"
          style={{
            color: 'white',
            backgroundColor: '#333', // Change background color to dark gray
            marginTop: 10, // Add top margin
            marginBottom: 20, // Add bottom margin
            padding: '10px 20px', // Padding for better spacing
            fontSize: 20, // Font size
            border: 'none', // Remove default border
            borderBottom: '2px groove white', // Bottom border style
            outline: 'none', // Remove outline
            width: '100%', // Adjust width as needed
            boxSizing: 'border-box', // Ensure padding is included in width
            marginRight:80,
            alignSelf:'center'
          }}
          placeholder='Search for images'
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
        />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
