import {
  CoffeeListContainer,
  CoffeeListSession,
  ContentContainer,
  HomeContainer,
  IntroSession,
  ItensContainer,
  TitleContainer,
} from './styles'
import coffeImage from '../../assets/coffee-image.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { CoffeeComponent } from '../../components/Coffee'
// import { coffees } from '../../../data.json'

export function Home() {
  const theme = useTheme()
  const coffees = [
    {
      id: '0',
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      price: 9.9,
      image: './src/assets/coffees/expresso.png',
    },
    {
      id: '1',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      tags: ['tradicional'],
      price: 9.9,
      image: './src/assets/coffees/americano.png',
    },
    {
      id: '2',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      tags: ['tradicional'],
      price: 9.9,
      image: './src/assets/coffees/expresso-cremoso.png',
    },
    {
      id: '3',
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tags: ['tradicional', 'gelado'],
      price: 9.9,
      image: './src/assets/coffees/cafe-gelado.png',
    },
    {
      id: '4',
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: './src/assets/coffees/cafe-com-leite.png',
    },
    {
      id: '5',
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: './src/assets/coffees/latte.png',
    },
    {
      id: '6',
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: './src/assets/coffees/capuccino.png',
    },
    {
      id: '7',
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: './src/assets/coffees/macchiato.png',
    },
    {
      id: '8',
      title: 'Mochaccino',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: './src/assets/coffees/mochaccino.png',
    },
    {
      id: '9',
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: ['especial', 'com leite'],
      price: 9.9,
      image: './src/assets/coffees/chocolate-quente.png',
    },
    {
      id: '10',
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: ['especial', 'alcoólico', 'gelado'],
      price: 9.9,
      image: './src/assets/coffees/cubano.png',
    },
    {
      id: '11',
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      tags: ['especial'],
      price: 9.9,
      image: './src/assets/coffees/havaiano.png',
    },
    {
      id: '12',
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: ['especial'],
      price: 9.9,
      image: './src/assets/coffees/arabe.png',
    },
    {
      id: '13',
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: ['especial', 'alcoólico'],
      price: 9.9,
      image: './src/assets/coffees/irlandes.png',
    },
  ]

  return (
    <HomeContainer>
      <IntroSession>
        <ContentContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>
          <ItensContainer>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['base-text'] }}
              />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <p>O café chega fresquinho até você</p>
            </div>
          </ItensContainer>
        </ContentContainer>
        <img src={coffeImage} alt="Copo de café" />
      </IntroSession>

      <CoffeeListSession>
        <h1>Nossos cafés</h1>

        <CoffeeListContainer>
          {coffees.map((coffee) => (
            <CoffeeComponent key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </CoffeeListSession>
    </HomeContainer>
  )
}
