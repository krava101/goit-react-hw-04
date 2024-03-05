import css from './ErrorMessage.module.css';

const ErrorMessage = ({ children, message, status}) => {
    return (
        <div className={css.error}>
            <p className={css.title}>{children}</p>
            <p className={css.errorMessage}>{message}</p>
            <p className={css.status}>{status}</p>
        </div>
    )
}

export default ErrorMessage;