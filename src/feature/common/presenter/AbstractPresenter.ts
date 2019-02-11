import PresenterInterface from './PresenterInterface';
import ViewInterface from '../view/ViewInterface';
import {injectable} from 'inversify';

@injectable()
export default abstract class AbstractPresenter<T extends ViewInterface> implements PresenterInterface<T> {
    public view: T;

    public bind(view: T) {
        this.view = view;
    }

    public abstract onInit(): void;
}
