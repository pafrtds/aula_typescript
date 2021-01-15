import { filtraCodigo, filtraNome, maisBarato, mediaPrecoPedido } from "./exemplos/exercicios";

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

const media = mediaPrecoPedido(api);
console.log(`A média dos pedidos é de R$ ${media}`);

console.log(filtraCodigo(api,'0004'));

console.log(filtraNome(api,"PS5"));

console.log(maisBarato(api))