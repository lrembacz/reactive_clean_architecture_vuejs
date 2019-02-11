import {BehaviorSubject, Observable} from 'rxjs/index';

export default interface ViewModelInterface {
    loading: BehaviorSubject<boolean>;
    error: BehaviorSubject<string>;

    loading$(): Observable<boolean>;
    error$(): Observable<string>;

    setLoading(state: boolean): void;
    setError(error: string): void;

    dispose(): void;

    onInit(): void;
}
