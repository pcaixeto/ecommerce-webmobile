import Link from 'next/link';
import { useContext } from 'react';
import { ProdutoContext } from '../context/ProdutoContext';

export default function Home() {
  const { produtos } = useContext(ProdutoContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Produtos</h1>
      <Link href="/novo-produto">
        <button>Adicionar Produto</button>
      </Link>
      <ul>
        {produtos.map((p, i) => (
          <li key={i}>
            {p.nome} - R$ {p.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
