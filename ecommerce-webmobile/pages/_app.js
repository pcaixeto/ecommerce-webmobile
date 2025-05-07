import { ProdutoProvider } from '../context/ProdutoContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <ProdutoProvider>
      <Component {...pageProps} />
    </ProdutoProvider>
  );
}
