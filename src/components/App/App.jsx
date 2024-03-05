import { useEffect, useState } from "react";
import { InfinitySpin } from 'react-loader-spinner';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImgs from "../../images";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from './App.module.css';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    cursor: 'pointer'
  },
  content: {
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: 'none',
    padding: 0,
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    }
  }

const App = () => {
  const [search, setSearch] = useState('');
  const [imgs, setImgs] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ visible: false, error: '' , status: ''});
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  useEffect(() => {
    setPage(1);
    setImgs([]);
    setErrorMessage({ visible: false, error: '', status: '' });
    async function fetchData() {
      try {
        setLoaderActive(true);
        const data = await fetchImgs(search, 1);
        setImgs(data);
      } catch (err) {
        setErrorMessage({
          visible: true,
          error: err.message,
          status: err.request.status,
        })
      } finally {
        setLoaderActive(false);
      }
    }
    fetchData();
  }, [search])

  useEffect(() => {
    async function fetchData() {
      try {
        setLoaderActive(true);
        const data = await fetchImgs(search, page);
        setImgs([...imgs, ...data]);
      } catch (err) {
        setErrorMessage({
          visible: true,
          error: err.message,
          status: err.request.status,
        })
      } finally {
        setLoaderActive(false);
      }
    }
    fetchData();
  }, [page])
  
  const onSubmit = (searchWord) => {
    setSearch(searchWord);
  }

  const onClick = () => {
    setPage(page + 1)
  }

  function openModal(img) {
    setIsOpen(true);
    setModalImg(img)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {imgs.length > 0 && <ImageGallery images={imgs} onOpenModal={openModal} />}
      {errorMessage.visible && <ErrorMessage message={errorMessage.error} status={errorMessage.status}>Oops, something went wrong</ErrorMessage>}
      {loaderActive && <div className={css.loader}><InfinitySpin color="#4949db" /></div>}
      {imgs.length > 0 && !loaderActive && <LoadMoreBtn onClick={onClick} />}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <img className={css.modalImg} src={modalImg} />
      </Modal>
    </>
  )
}

export default App;