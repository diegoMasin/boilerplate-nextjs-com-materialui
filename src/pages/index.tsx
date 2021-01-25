import { Title } from '../styles/pages/Home';
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div>
      <section>
        <Title>Hello World</Title>
        <Button variant="contained" color="primary">
          Testando Botão
        </Button>
      </section>
    </div>
  );
}
