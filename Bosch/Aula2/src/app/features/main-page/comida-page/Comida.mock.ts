export interface IComida{
    id: number,
    name: string,
    price: number,
    image: string,
}

const MockComida: IComida[] = [
    {
        id: 1,
        name: "Hambúrguer Artesanal",
        price: 32.90,
        image: 'assets/Image/Hamburguer.jpg'
    },
    {
        id: 2,
        name: "Sushi Combo (12 peças)",
        price: 45.00,
        image: "assets/Image/sushi.jpg"
    },
    {
        id: 3,
        name: "Lasanha de Frango",
        price: 30.00,
        image: "assets/Image/lasanha.jpg"
    },
    {
        id: 4,
        name: "Tapioca de Queijo",
        price: 12.00,
        image: "assets/Image/tapioca.jpg"
    },
    {
        id: 5,
        name: "Coxinha",
        price: 8.00,
        image: "assets/Image/Coxinha.jpg"
    },
    {
        id: 6,
        name: "Brigadeiro Gourmet",
        price: 6.50,
        image: "assets/Image/brigadeiro.jpg"
    },
    {
        id: 7,
        name: "Brownie com Sorvete",
        price: 18.00,
        image: "assets/Image/brownie.jpg"
    },
    {
        id: 8,
        name: "Panqueca de Carne",
        price: 22.00,
        image: "assets/Image/panqueca.jpg"
    },
    {
        id: 9,
        name: "Milkshake de Morango",
        price: 16.00,
        image: "assets/Image/milkshake.jpg"
    },
    {
        id: 10,
        name: "Churros",
        price: 14.00,
        image: "assets/Image/churros.jpg"
    }
]

export default MockComida