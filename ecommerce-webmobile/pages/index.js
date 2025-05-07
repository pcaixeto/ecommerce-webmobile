import Link from 'next/link';
import { useContext } from 'react';
import { ProdutoContext } from '../context/ProdutoContext';

export default function Home() {
  const { produtos } = useContext(ProdutoContext);

  return (
    <main style={{ padding: '2rem' }}>
      <header>
        <h1>Catálogo de Produtos</h1>
      </header>

      <nav>
        <Link href="/novo-produto">
          <button type="button">Adicionar Produto</button>
        </Link>
      </nav>

      <section>
        <ul>
          {produtos.map((p, i) => (
            <li key={i}>
              <strong>{p.nome}</strong> — R$ {p.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
