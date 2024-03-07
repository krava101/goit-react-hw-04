import { useEffect, useState } from "react";
import { InfinitySpin } from 'react-loader-spinner';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImgs from "../../images";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from './App.module.css';
import ModalImg from "../ModalImg/ModalImg";


const App = () => {
  const [search, setSearch] = useState('');
  const [imgs, setImgs] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ visible: false, error: '' , status: ''});
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState({
    src: '',
    alt: ''
  });

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
  }, [search, page])
  
  const onSubmit = (searchWord) => {
    setPage(1);
    setImgs([]);
    setSearch(searchWord);
    setErrorMessage({ visible: false, error: '', status: '' });
  }

  const onClick = () => {
    setPage(page + 1)
  }

  function openModal(img, alt) {
    setIsOpen(true);
    setModalImg({
      src: img,
      alt: alt,
    })
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
      <ModalImg modalIsOpen={modalIsOpen}  closeModal={closeModal} modalImg={modalImg}/>
    </>
  )
}

export default App;