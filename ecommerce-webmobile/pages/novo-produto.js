import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { ProdutoContext } from '../context/ProdutoContext';

export default function NovoProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const { produtos, setProdutos } = useContext(ProdutoContext);
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    setProdutos([
      ...produtos,
      { nome, preco: parseFloat(preco) }
    ]);
    router.push('/');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <header>
        <h1>Novo Produto</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="preco">Preço:</label>
          <input
            id="preco"
            type="number"
            step="0.01"
            value={preco}
            onChange={e => setPreco(e.target.value)}
            required
          />
        </fieldset>

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}
