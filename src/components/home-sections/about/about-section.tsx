import AboutTabs from '@/components/home-sections/about/about-tabs';
import Section from '@/components/section/section';

type Props = {};
export default function AboutSection(props: Props) {
  return (
    <Section
      id='about'
      title='Bruno de Araújo Alves'
      subtitle='Who I am'
      parentClassName='bg-muted/30'
    >
      <div className='grid gap-20 md:grid-cols-2 md:gap-8 2xl:grid-cols-3'>
        <div className='space-y-2 2xl:col-span-2'>
          <p>
            In 2015, I embarked on a journey into the vast world of programming, initiating my
            learning in game development through the Udemy platform. Since then, my path has led me
            to significant achievements. Currently, I hold a degree in Computer Science granted by
            IFG Anápolis. My journey has been enriched by building a variety of applications,
            serving diverse clients, private companies, and educational institutions.
          </p>
          <p>
            Today, my central focus is on developing an application aimed at individual risk
            analysis, a challenge I embrace at the Management Risk Analysis company. Additionally, I
            dedicate myself to helping others solve problems through the application of technology.
            Simultaneously, I maintain my own applications, including Spotiminy and Muggs Shop.
          </p>
          <p>
            In precious leisure moments, I share the company of my wife and daughter. On other
            occasions, I dive into the exploration of new methods and technologies. I fuel my
            imagination with movies about history and science fiction. And sometimes, I find myself
            immersed in one of my favorite games.
          </p>
        </div>
        <div>
          <AboutTabs />
        </div>
      </div>
    </Section>
  );
}
