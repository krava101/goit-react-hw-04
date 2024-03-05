import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({onClick}) {
    return (
        <button className={css.loadBtn} onClick={onClick}>Load more</button>
    )
}

export default LoadMoreBtn;