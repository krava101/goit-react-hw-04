import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({images, onOpenModal}) => {
  return (
    <ul className={css.imagesList}>
      {images.map(image => 
        <li key={image.id}>  
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      )}
    </ul>
  )
}

export default ImageGallery;