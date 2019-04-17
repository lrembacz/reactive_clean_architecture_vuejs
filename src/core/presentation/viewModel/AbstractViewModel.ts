import ViewModelInterface from './ViewModelInterface';
import {injectable} from 'inversify';
import {BehaviorSubject, Observable} from 'rxjs/index';

@injectable()
export default abstract class AbstractViewModel implements ViewModelInterface {
    public error: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public loading$(): Observable<boolean> {
        return this.loading.asObservable();
    }

    public error$(): Observable<string> {
        return this.error.asObservable();
    }

    public setLoading(state: boolean) {
        this.loading.next(state);
    }

    public setError(error: string): void {
        this.error.next(error);
    }

    public abstract dispose(): void;

    public abstract onInit(): void;
}
