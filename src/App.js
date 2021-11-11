import React from 'react';

import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import MyLoader from 'components/Loader/Loader';
import './styles.css';


class App extends React.Component {
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }
  

  render() {
    const { showModal } = this.state
    
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        {showModal && <Modal />}
        <MyLoader />
        <Button/>
      </>
    )
   }
}

export default App