import css from './ImageCard.module.css';

const ImageCard = ({image,  onOpenModal}) => {
    return (
        <div className={css.imagesItem}>
            <a href={image.urls.regular} onClick={(event) => {
                    event.preventDefault();
                    onOpenModal(image.urls.regular, image.alt_description);
                }}>
                <img className={css.imagesImg} src={image.urls.small} alt={image.alt_description}  />
            </a>
        </div>
    );
}

export default ImageCard;