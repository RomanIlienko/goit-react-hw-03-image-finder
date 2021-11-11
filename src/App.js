import React from 'react';

import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import './styles.css';


class App extends React.Component {
  state = {
    showModal: true
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
        <Button/>
    </>
    )
   }
}

export default App