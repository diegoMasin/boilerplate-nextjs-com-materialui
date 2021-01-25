import { useEffect, useState } from 'react'
import { Title } from '../styles/pages/Home'

interface IProduct {
  id: string
  title: string
}

export default function Home() {
  const [recommendedProduct, setRecommendedProduct] = useState<IProduct[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProduct(data)
      })
    })
  }, [])

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
