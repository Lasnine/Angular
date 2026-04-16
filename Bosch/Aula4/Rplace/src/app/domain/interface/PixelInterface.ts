import { LoginDto } from "./UserInterface";


export interface IPixel{
    Id ?: string,
    X : number,
    Y : number,
    LastChange?: string; 
    Color: string;
    User?: LoginDto;
}