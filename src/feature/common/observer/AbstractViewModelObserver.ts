import {Subscriber} from 'rxjs';
import ViewModelInterface from '../viewModel/ViewModelInterface';

export default abstract class  AbstractViewModelObserver<T, V extends ViewModelInterface> extends Subscriber<T> {
    protected viewModel: V;

    public bind(viewModel: V) {
        this.viewModel = viewModel;
        return this;
    }

    public abstract next(value?: T): void;

    public abstract complete(): void;

    public abstract error(error?: any): void;

}
