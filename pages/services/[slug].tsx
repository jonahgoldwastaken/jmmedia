import Head from 'next/head'
import Header from '../../components/Header'
import Footer, { FooterLink } from '../../components/Footer'
import Section from '../../components/Section'
import { HeadingOne, HeadingTwo } from '../../components/Text/Headings'
import { Paragraph } from '../../components/Text'
import Image from '../../components/Image'
import ServiceOptions from '../../components/ServiceOptions'

export default () => {
  return (
    <>
      <Head>
        <title>Service - JM</title>
      </Head>
      <Header />
      <main>
        <Section grid background="secondary">
          <HeadingOne noMargin colour="secondary">
            Service die vet cool is en zo
          </HeadingOne>
          <div>
            <Paragraph noMargin colour="secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              assumenda dolor quia perspiciatis amet. Libero sint tempora vero,
              maiores eos similique porro laboriosam cupiditate? Minus iste
              debitis veritatis nesciunt tempora. Repellat reiciendis
              exercitationem accusantium, numquam, error labore totam illum,
              voluptatibus rem quam voluptatem. Voluptatum dolorem inventore
              accusantium, eos aspernatur iusto quidem tenetur nostrum? Quia
              amet hic perferendis aut repudiandae itaque? Quibusdam, quis. Modi
              obcaecati nostrum soluta odit quas rem fugit sed quaerat debitis
              et assumenda dolorem vel omnis, ducimus repellendus, ipsam
              repellat laboriosam eos voluptates ad? Pariatur sint voluptatum
              ratione! Commodi, doloremque eaque. Consequatur obcaecati incidunt
              ipsum quo. Minima incidunt optio in, sapiente nisi deserunt
              suscipit tempore a excepturi ullam debitis ipsam qui odit voluptas
              illo eius ad asperiores delectus. Placeat laboriosam mollitia
              recusandae fuga voluptatum quis, minima tempore at adipisci illo,
              possimus est corrupti in ducimus iure maiores fugit eveniet
              incidunt, assumenda soluta! Delectus rem totam magnam nam
              voluptates? Est beatae eaque incidunt sequi, aperiam ipsum quod
              doloremque laborum, necessitatibus, a debitis. Corrupti laborum,
              tempore quidem enim eaque repudiandae incidunt eveniet odit
              asperiores.
            </Paragraph>
            <Paragraph noMargin colour="secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium quia explicabo tempora possimus, aut reiciendis?
              Asperiores sed voluptatem quod porro ratione quibusdam fugit
              ducimus, itaque provident, officia dolorum unde accusantium.
              Debitis quos explicabo facilis nemo. Maiores, dignissimos
              repudiandae eveniet accusantium praesentium amet voluptatem
              dolorem quibusdam accusamus voluptatibus nam voluptate quasi quod
              eius nulla facilis! Delectus laboriosam quaerat praesentium
              pariatur omnis? Provident, libero? Aliquam possimus eius ipsam
              itaque, tenetur nesciunt quod eum repellat voluptatibus adipisci
              numquam vel consequatur eos at, esse, nam ab laudantium deserunt
              iste debitis ex blanditiis dolore? Dignissimos.
            </Paragraph>
          </div>
          <Image src="https://unsplash.com/photos/WSTF1QEUUWw/download?force=true" />
        </Section>
        <Section background="primary">
          <HeadingTwo noMargin>Mogelijke opties</HeadingTwo>
          <ServiceOptions />
        </Section>
      </main>
      <Footer>
        <FooterLink colour="secondary" href="">
          Mooie call-to-action je weet zelf toch
        </FooterLink>
      </Footer>
    </>
  )
}
