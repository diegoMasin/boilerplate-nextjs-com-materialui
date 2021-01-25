import { GetStaticProps } from 'next'
import { Title } from '../styles/pages/Home'

// EXEMPLO COM "STATIC SITE GENERATION".
// A página é gerada de forma estática
// para páginas que não tem conteúdos dinâmicos, ou pelo menos boa parte o conteúdo nunca muda.

interface IProduct {
  id: string
  title: string
}

interface Top10Props {
  products: IProduct[]
}

export default function Top10({ products }: Top10Props) {
  return (
    <div>
      <section>
        <Title>Top 10</Title>

        <ul>
          {products.map(products => {
            return <li key="products.id">{products.title}</li>
          })}
        </ul>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/products')
  const products = await response.json()

  return {
    props: {
      products,
    },
    // tempo de vida útil (em segundos), após esse time, o proximo acesso a esta rota, o server roda novamente a consulta
    // revalidate: 5,
  }
}
