export interface IMercado{
    id: number,
    name: string,
    price: number,
    image: string,
}

const MockMercado: IMercado[] = [
    {
        id: 1,
        name: "Arroz 5kg",
        price: 25.90,
        image: "assets/Image/arroz.jpg"
    },
    {
        id: 2,
        name: "Feijão 1kg",
        price: 8.50,
        image: "assets/Image/feijao.jpg"
    },
    {
        id: 3,
        name: "Leite Integral",
        price: 5.20,
        image: "assets/Image/leite.jpg"
    },
    {
        id: 4,
        name: "Pão de Forma",
        price: 7.90,
        image: "assets/Image/pao.jpg"
    },
    {
        id: 5,
        name: "Ovos (dúzia)",
        price: 12.00,
        image: "assets/Image/ovos.jpg"
    },
    {
        id: 6,
        name: "Refrigerante 3L",
        price: 9.50,
        image: "assets/Image/refri.jpg"
    },
    {
        id: 7,
        name: "Macarrão 500g",
        price: 4.30,
        image: "assets/Image/macarrao.jpg"
    },
    {
        id: 8,
        name: "Molho de Tomate",
        price: 3.20,
        image: "assets/Image/molho.jpg"
    },
    {
        id: 9,
        name: "Queijo Mussarela 200g",
        price: 10.90,
        image: "assets/Image/queijo.jpg"
    },
    {
        id: 10,
        name: "Presunto 200g",
        price: 9.80,
        image: "assets/Image/presunto.jpg"
    }
]

export default MockMercado