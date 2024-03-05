import css from './ImageCard.module.css';

const ImageCard = ({image,  onOpenModal}) => {
    return (
        <div className={css.imagesItem}>
            <a href={image.urls.regular} onClick={(event) => {
                    event.preventDefault();
                    onOpenModal(event.currentTarget.href);
                }}>
                <img className={css.imagesImg} src={image.urls.small} alt=""  />
            </a>
        </div>
    );
}

export default ImageCard;