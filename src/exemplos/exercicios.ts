/*
    Dado um retorno da api, crie funções para as seguintes situações:

    Média de preço do pedido ok
    Nome do produto mais barato ok
    filtro por código do produto ok
    busca de produto por nome ok
*/

const api = {
    numeroPedido: '0001',
    cliente: 'Alvaro',
    items: [
        { produto: '0001', descricao: 'XBOX', preco: 5000 },
        { produto: '0002', descricao: 'PS5', preco: 5500 },
        { produto: '0003', descricao: 'PC', preco: 10000 },
        { produto: '0004', descricao: 'SWITCH', preco: 1000 },
        { produto: '0005', descricao: 'ATARI', preco: 500 },
    ],
};


export interface Item {
    produto?: string;
    descricao?: string;
    preco?: number;
}

export type Items = Array<Item>;

export interface Api {
    numeroPedido: string;
    cliente: string;
    items: Items;
}

export function mediaPrecoPedido(pedido: Api): number {

    const quantidadePedidos = pedido.items.length;
    const totalPedidos = pedido.items.reduce((soma, { preco }) => soma + preco, 0);
    console.log(totalPedidos);
    console.log(quantidadePedidos);

    const media = totalPedidos / quantidadePedidos;

    return media
}

export function filtraCodigo(pedido: Api, codigo: string) {
    return pedido.items.filter((item) => {
        return item.produto === codigo
    })
}

export function filtraNome(pedido: Api, nome: string) {
    return pedido.items.filter((item) => {
        return item.descricao === nome
    })
}

export function maisBarato(pedido: Api) {
    const pedidoBarato = pedido.items.reduce((minimo, atual) => {
        atual.preco = atual.preco ?? 0;
        minimo.preco = minimo.preco ?? 0;
        if (atual.preco <= minimo.preco) {
            return atual
        } else {
            return minimo
        }
    }, { descricao: "", produto: "", preco: 9999999 })
    return pedidoBarato.descricao
}