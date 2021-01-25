// import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Title } from '../styles/pages/Home'

interface IProduct {
  id: string
  title: string
}

interface HomeProps {
  recommendedProduct: IProduct[]
}

export default function Home({ recommendedProduct }) {
  // const [recommendedProduct, setRecommendedProduct] = useState<IProduct[]>([])

  // useEffect(() => {
  //   fetch('http://localhost:3333/recommended').then(response => {
  //     response.json().then(data => {
  //       setRecommendedProduct(data)
  //     })
  //   })
  // }, [])

  return (
    <div>
      <section>
        <Title>Hello World</Title>

        <ul>
          {recommendedProduct.map(recommendedProduct => {
            return <li key="recommendedProduct.id">{recommendedProduct.title}</li>
          })}
        </ul>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended')
  const recommendedProduct = await response.json()

  return {
    props: {
      recommendedProduct,
    },
  }
}
