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
    <div style={{ padding: '2rem' }}>
      <h1>Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            value={preco}
            onChange={e => setPreco(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
