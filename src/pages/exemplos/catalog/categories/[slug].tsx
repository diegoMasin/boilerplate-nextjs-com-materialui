import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { Title } from '../../../../styles/pages/Home';

// EXEMPLO COM "STATIC SITE GENERATION com ROTA dinâmica".
// A página é gerada de forma estática
// para páginas que não tem conteúdos dinâmicos, ou pelo menos boa parte o conteúdo nunca muda.

interface IProduct {
  id: string;
  title: string;
}

interface CategoryProps {
  products: IProduct[];
}

export default function Category({ products }: CategoryProps) {
  const router = useRouter();

  // Este IF é preciso para colocar uma usabilidade de espera, pois haverá um tempo para carregar novamente todas as
  // categorias, para buscar a nova
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <ul>
        {products.map(products => {
          return <li key="products.id">{products.title}</li>;
        })}
      </ul>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3333/categories`);
  const categories = await response.json();

  const paths = categories.map(category => {
    return {
      params: { slug: category.id },
    };
  });

  return {
    paths,
    // Se uma nova categoria for criada no back, ela não estará presente no build, logo uma rota passando
    // essa nova categoria, dará um 404.
    // Mesmo sendo estático, fallback com true, atualiza os paths se por acaso uma nova categoria for adicionada
    fallback: true, // se nao quiser usar o dinamismo proposto acima, mesmo assim tem que declarar essa prop com false
  };
};

export const getStaticProps: GetStaticProps<CategoryProps> = async context => {
  const { slug } = context.params;

  const response = await fetch(`http://localhost:3333/products?category_id=${slug}`);
  const products = await response.json();

  return {
    props: {
      products,
    },
    // tempo de vida útil (em segundos), após esse time, o proximo acesso a esta rota, o server roda novamente a consulta
    revalidate: 60,
  };
};
