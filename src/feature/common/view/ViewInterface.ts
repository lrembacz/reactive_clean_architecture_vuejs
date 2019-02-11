export default interface ViewInterface {
    displayError(message: string): void;
    displayLoading(): void;
    hideLoading(): void;
}
