import Link from 'next/link';

const en = {
  hero: {
    lead: 'Plan, Develop & Create',
    title: (
      <>
        Full Stack
        <br />
        <span className='text-primary'>Web Developer</span>
      </>
    ),
    subtitle:
      'Focused on crafting clean & user‑friendly experiences, I am passionate about building high‑quality websites.',
    buttonSecondary: 'Learn more',
    buttonMain: 'Get in touch'
  },
  project: {
    title: 'A few selected works',
    description:
      'My web projects showcases the work that I have delivered. Have a look into my portfolio, highlighting the diverse range of websites projects for various clients.',
    subtitle: 'Check it out'
  },
  service: {
    title: 'How Can I Help',
    description:
      'I specialise in offering bespoke web development services to small and medium businesses alike. My aim is to help businesses establish a online presence and connect with their target audience effectively.',
    subtitle: 'Some services',
    stackMessage: 'Tools I might use'
  },
  post: {
    title: 'Read some of my articles',
    description: 'I write about web development, design and other stuff.',
    subtitle: 'Latest posts'
  },
  about: {
    title: 'Bruno de Araújo Alves',
    subtitle: 'Who I am',
    message: (
      <>
        <p>
          In 2015, I embarked on a journey into the vast world of programming, initiating my
          learning in game development through the Udemy platform. Since then, my path has led me to
          significant achievements. Currently, I hold a degree in Computer Science granted by IFG
          Anápolis. My journey has been enriched by building a variety of applications, serving
          diverse clients, private companies, and educational institutions.
        </p>
        <p>
          Today, my central focus is on developing an application aimed at individual risk analysis,
          a challenge I embrace at the Management Risk Analysis company. Additionally, I dedicate
          myself to helping others solve problems through the application of technology.
          Simultaneously, I maintain my own applications, including Spotiminy and Muggs Shop.
        </p>
        <p>
          In precious leisure moments, I share the company of my wife and daughter. On other
          occasions, I dive into the exploration of new methods and technologies. I fuel my
          imagination with movies about history and science fiction. And sometimes, I find myself
          immersed in one of my favorite games.
        </p>
      </>
    )
  },
  contact: {
    title: 'Have an idea?',
    subtitle: 'Contact me',
    description: 'Get in touch today and let’s work together to bring your idea to life.',
    button: 'Get in touch'
  },
  footer: (
    <>
      Built with{' '}
      <Link
        href='https://nextjs.org/'
        target='_blank'
      >
        Next.js
      </Link>{' '}
      and{' '}
      <Link
        href='https://ui.shadcn.com/'
        target='_blank'
      >
        shadcn/ui
      </Link>
      , deployed at{' '}
      <Link
        href='https://vercel.com/'
        target='_blank'
      >
        Vercel
      </Link>
      . All text is set in the{' '}
      <Link
        href='https://rsms.me/inter/'
        target='_blank'
      >
        Inter
      </Link>{' '}
      typeface.
    </>
  )
};

const pt = {
  hero: {
    lead: 'Planejamento, Desenvolvimento & Criação',
    title: (
      <>
        <span className='text-primary'>Desenvolvedor Web</span>
        <br />
        Full Stack
      </>
    ),
    subtitle:
      'Focado em criar experiências limpas e amigáveis, sou apaixonado por construir sites de alta qualidade.',
    buttonSecondary: 'Saiba mais',
    buttonMain: 'Entre em contato'
  },
  project: {
    title: 'Alguns trabalhos selecionados',
    description:
      'Meus projetos web mostram o trabalho que entreguei. Dê uma olhada no meu portfólio, destacando a ampla gama de projetos de sites para vários clientes.',
    subtitle: 'Confira'
  },
  service: {
    title: 'Como posso ajudar',
    description:
      'Especializo-me em oferecer serviços de desenvolvimento web personalizados para pequenas e médias empresas. Meu objetivo é ajudar as empresas a estabelecer uma presença online e se conectar com seu público-alvo de forma eficaz.',
    subtitle: 'Alguns serviços',
    stackMessage: 'Ferramentas que posso usar'
  },
  post: {
    title: 'Leia alguns dos meus artigos',
    description: 'Escrevo sobre desenvolvimento web, design e outras coisas.',
    subtitle: 'Últimos posts'
  },
  about: {
    title: 'Bruno de Araújo Alves',
    subtitle: 'Quem sou eu',
    message: (
      <>
        <p>
          Em 2015, embarquei em uma jornada de vasto mundo da programação, iniciando minha
          aprendizagem na criação de jogos através da plataforma Udemy. Desde então, minha
          trajetória me levou a conquistas significativas. Atualmente, possuo diploma em Ciência da
          Computação concedido pelo IFG Anápolis. Minha jornada foi enriquecida pela construção de
          uma variedade de aplicações, abrangendo clientes diversificados, empresas privadas e
          instituições de ensino.
        </p>
        <p>
          Hoje, meu foco central reside em desenvolver uma aplicação voltada à análise de risco de
          indivíduos, desafio que abraço na empresa Management Risk Analysis. Além disso, dedico-me
          a auxiliar outras pessoas a solucionar problemas por meio da aplicação da tecnologia.
          Paralelamente, mantenho minhas próprias aplicações, entre elas o Spotiminy e o Muggs Shop.
        </p>

        <p>
          Nos preciosos momentos de lazer, compartilho a companhia da minha esposa e filha. Noutras
          ocasiões, mergulho na exploração de novos métodos e tecnologias. Nutro minha imaginação
          com filmes sobre história e ficção científica. E em algumas vezes me vejo imerso em um dos
          meus jogos prediletos.
        </p>
      </>
    )
  },
  contact: {
    title: 'Tem uma ideia?',
    subtitle: 'Entre em contato',
    description: 'Entre em contato hoje e vamos trabalhar juntos para dar vida à sua ideia.',
    button: 'Entre em contato'
  },
  footer: (
    <>
      Construído com{' '}
      <Link
        href='https://nextjs.org/'
        target='_blank'
      >
        Next.js
      </Link>{' '}
      e{' '}
      <Link
        href='https://ui.shadcn.com/'
        target='_blank'
      >
        shadcn/ui
      </Link>
      , implantado na{' '}
      <Link
        href='https://vercel.com/'
        target='_blank'
      >
        Vercel
      </Link>
      . Todo o texto é utiliza o typeface{' '}
      <Link
        href='https://rsms.me/inter/'
        target='_blank'
      >
        Inter
      </Link>{' '}
      .
    </>
  )
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { en, pt };
