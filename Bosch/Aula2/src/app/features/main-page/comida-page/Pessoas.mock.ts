export interface IPessoa{
    name: string,
    email: string,
    document?: string,
    telefone?: string
}

const MockPessoa: IPessoa[] = [
    {
        email: 'lasninemiranda@gmail.com',
        name: 'Lasnine',
        document: '1234567891011',
    },
    {
        email: 'leticia.burlinski@gmail.com',
        name: 'Leticia',
        document: '1234567891011',
    },
    {
        email: 'annnaguerracastro@gmail.com',
        name: 'Anna',
        document: '1234567891011',
    }

]

export default MockPessoa