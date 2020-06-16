import { useFooterServicesLazyQuery } from 'generated/graphql'
import Link from 'next/link'
import { DesktopFooterContainer } from './Container'
import { DesktopFooterHeading } from './Heading'
import { DesktopFooterList, DesktopFooterListItem } from './List'
import { useEffect } from 'react'

interface Props {
  inView: boolean
}

export const DesktopFooterServices: React.FC<Props> = ({ inView }) => {
  const [query, { data, loading, called }] = useFooterServicesLazyQuery()

  useEffect(() => {
    if (inView && !called) query()
  }, [inView])

  return (
    <DesktopFooterContainer>
      <DesktopFooterHeading>
        {loading ? 'Laden...' : 'Services'}
      </DesktopFooterHeading>
      <DesktopFooterList>
        {data?.services.map(({ name, slug }) => (
          <DesktopFooterListItem key={slug}>
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
