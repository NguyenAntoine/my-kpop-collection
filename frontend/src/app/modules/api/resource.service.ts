import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from './resource';
import { environment } from '../../../environments/environment';

export class ResourceService<T extends Resource> {
    protected apiBaseUrl: string;

    constructor(
        protected httpClient: HttpClient,
        protected endpoint: string,
    ) {
        this.apiBaseUrl = environment.apiUrl;
    }

    protected getBaseOptions(params = null): {params: {}} {
        return {params};
    }

    get baseUrl(): string {
        return `${this.apiBaseUrl}/${this.endpoint}`;
    }

    list(): Observable<Array<T>> {
        return this.httpClient.get<Array<T>>(this.baseUrl, this.getBaseOptions());
    }

    create(item: T): Observable<T> {
        return this.httpClient.post<T>(this.baseUrl, item, this.getBaseOptions());
    }

    update(item: T): Observable<T> {
        return this.httpClient.put<T>(`${this.baseUrl}/${item.id}`, item, this.getBaseOptions());
    }

    get(id: number): Observable<T> {
        return this.httpClient.get<T>(`${this.baseUrl}/${id}`, this.getBaseOptions());
    }

    delete(id: number): Observable<T> {
      return this.httpClient.delete<T>(`${this.baseUrl}/${id}`, this.getBaseOptions());
    }
}
