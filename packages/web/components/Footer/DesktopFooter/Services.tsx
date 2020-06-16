import { useFooterServicesQuery } from 'generated/graphql'
import Link from 'next/link'
import { DesktopFooterContainer } from './Container'
import { DesktopFooterHeading } from './Heading'
import { DesktopFooterList, DesktopFooterListItem } from './List'

export const DesktopFooterServices: React.FC = () => {
  const { data, loading } = useFooterServicesQuery()

  return (
    <DesktopFooterContainer>
      <DesktopFooterHeading>
        {loading ? 'Laden...' : 'Services'}
      </DesktopFooterHeading>
      <DesktopFooterList>
        {data?.services.map(({ name, slug }) => (
          <DesktopFooterListItem>
            <Link
              href="/services/[slug]"
              as={`/services/${slug}`}
              scroll={false}
            >
              <a>{name}</a>
            </Link>
          </DesktopFooterListItem>
        ))}
      </DesktopFooterList>
    </DesktopFooterContainer>
  )
}
