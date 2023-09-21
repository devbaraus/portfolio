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
    buttonLearnMore: 'Learn more',
    buttonContact: 'Get in touch',
    buttonCV: 'Download CV'
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
          In 2015, I embarked on a journey into the vast world of programming, which has led me to
          significant achievements. Currently, I hold a degree in Computer Science from IFG Anápolis
          and work as a Web Developer, building various solutions that cater to the needs of
          clients, private companies, and institutions.
        </p>
        <p>
          Today, I have experience in building intelligent models and am focused on creating web
          solutions and automating internal processes. I also dedicate myself to helping others
          solve problems through the application of technology. Additionally, I take on challenges
          and personal projects in pursuit of new knowledge and the advancement of my professional
          skills.
        </p>
        <p>
          In precious moments of leisure, I enjoy the company of my wife and daughter. On other
          occasions, I dive into exploring new methods and technologies. I also fuel my imagination
          with movies about history and science fiction, and at times, I find myself immersed in
          some of my favorite games.
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
      and deployed at{' '}
      <Link
        href='https://vercel.com/'
        target='_blank'
      >
        Vercel
      </Link>
      .
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
    buttonLearnMore: 'Saiba mais',
    buttonContact: 'Entre em contato',
    buttonCV: 'Baixar CV'
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
          Em 2015, embarquei em uma jornada no vasto mundo da programação, essa jornada me levou a
          conquistas significativas. Atualmente, sou formado em Ciência da Computação pelo IFG
          Anápolis e atuo como Desenvolvedor Web, construindo variadas soluções que atendem a dor
          clientes, empresas privadas e instituições.
        </p>
        <p>
          Hoje tenho experiência na construção de modelos inteligentes e sou focado na criação de
          soluções web e automatizações de processos internos. Também me dedico a auxiliar outras
          pessoas a solucionar problemas por meio da aplicação da tecnologia. Paralelamente, realizo
          desafios e projetos pessoais na busca de novos conhecimentos e evolução da minha
          capacidade profissional.
        </p>
        <p>
          Nos preciosos momentos de lazer, compartilho a companhia da minha esposa e filha. Noutras
          ocasiões, mergulho na exploração de novos métodos e tecnologias. Ainda, nutro minha
          imaginação com filmes sobre história e ficção científica e em algumas vezes me vejo imerso
          em um alguns dos meus jogos favoritos.
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
      e implantado na{' '}
      <Link
        href='https://vercel.com/'
        target='_blank'
      >
        Vercel
      </Link>
      .
    </>
  )
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { en, pt };
