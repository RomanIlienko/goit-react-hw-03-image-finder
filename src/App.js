import React from 'react';

import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import MyLoader from 'components/Loader/Loader';

import { fetchPagesList } from 'services/PixaBayView';
import './styles.css';



class App extends React.Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      fetch()
    }
   }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      showModal: false,

    })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }
  

  render() {
    const { hits, showModal } = this.state
    
    return (
      <div className={App}>
        
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery>
          {hits.map(hit => (
            <ImageGalleryItem
              key={hit.id}
              hit={hit}
              setLargeImg={this.setLargeImg}
            />
          ))}
        </ImageGallery>

        <MyLoader />

        <Button />
        
        {showModal && <Modal onClose={this.toggleModal} />}
      </div>
    )
   }
}

export default App