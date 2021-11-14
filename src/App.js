import React from 'react';

import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import MyLoader from 'components/Loader/Loader';

import fetchPagesList from 'services/PixaBayView';
import s from './App.module.css';




class App extends React.Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    selectedImg: '',

  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPages()
    }
   }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
      selectedImg: '',
      showModal: false,
    });
  };
  
  fetchPages = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    fetchPagesList(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };
  
  setLargeImg = image => {
    this.setState({ selectedImg: image.largeImageURL });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  render() {
    const { hits, isLoading, error, showModal, selectedImg } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;
    
    return (
      <div className={s.App}>
        { error && <h1>Oops</h1>}
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

        {isLoading && <MyLoader />}

        {shouldRenderLoadMoreButton && <Button loadMore={this.fetchPages} />}
        
        {showModal && <Modal largeImgUrl={selectedImg} onClose={this.toggleModal} />}
      </div>
    )
   }
}

export default App