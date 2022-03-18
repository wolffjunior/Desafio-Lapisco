import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Pessoas } from 'src/_model/Pessoas';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'})

export class PessoasService{
    
    public pessoas: Pessoas[] = [];

    constructor(
        private httpClient: HttpClient
    ){}

    getPessoas(){
        return this.httpClient.get<any>('https://randomuser.me/api/?results=100');
    }


    
}