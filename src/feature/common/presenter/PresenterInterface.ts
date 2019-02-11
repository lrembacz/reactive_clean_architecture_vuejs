export default interface PresenterInterface<T> {
    view: T;

    bind(view: T): void;
}
