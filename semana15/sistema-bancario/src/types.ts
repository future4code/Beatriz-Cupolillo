export type Transaction = {
    value: number,
    date: Date,
    description: string
}

export type account = {
    name: string,
    cpf: string,
    birthDate: Date,
    balance: number,
    statement: Array<Transaction>
}

