import { Injectable } from '@angular/core';
import { Api } from './api';
import { IPixel } from './PixelInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PixelApi extends Api{
    public GetAll = (): Observable<IPixel[]> => {
        return this.client.get<IPixel[]>(`${this.URL}/pixel`).pipe();
    }
    
    public UpdatePixel = (data: IPixel): Observable<void> => {
        return this.client.post<void>(`${this.URL}/pixel`, data).pipe();
    }
}