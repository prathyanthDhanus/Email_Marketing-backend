class AppError extends Error {
    constructor(ErrorMessage, Message, StatusCode) {
        super(Message);
        this.ErrorMessage = ErrorMessage
        this.StatusCode = StatusCode
    }
}

export default AppError;