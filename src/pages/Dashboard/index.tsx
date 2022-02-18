import { useEffect, useState } from 'react';

import api from '../../services/api';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';
import { IProduct } from '../../store/modules/cart/types';

import {
  Container,
  Content,
} from './styles';

export function Dashboard() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        {catalog.map(product => (
          <CardItem key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
}
