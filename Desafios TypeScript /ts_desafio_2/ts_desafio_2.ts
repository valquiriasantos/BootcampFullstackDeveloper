// Como podemos melhorar esse código usando TS? 

interface Pessoa {
    nome: string;
    idade: number;
    profissão: Profissão;
}

enum Profissão {
    Atriz,
    Padeiro,
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissão: Profissão.Atriz
}

const roberto: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissão: Profissão.Padeiro
}

const laura: Pessoa = {
    nome: "laura",
    idade: 32,
    profissão: Profissão.Atriz
}

let carlos: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissão: Profissão.Padeiro
}