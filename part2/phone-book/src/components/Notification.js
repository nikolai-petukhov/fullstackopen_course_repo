const Notification = ({ notificationType, message }) => {
    if (message === null && notificationType === null) {
        return null;
    }

    return (
        <div className={`notification ${notificationType}`}>
            {message}
        </div>
    );
}

export default Notification;