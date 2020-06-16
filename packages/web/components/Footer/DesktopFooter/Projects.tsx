import { useFooterProjectsLazyQuery } from 'generated/graphql'
import Link from 'next/link'
import { DesktopFooterContainer } from './Container'
import { DesktopFooterHeading } from './Heading'
import { DesktopFooterList, DesktopFooterListItem } from './List'
import { useEffect } from 'react'

interface Props {
  inView: boolean
}

export const DesktopFooterProjects: React.FC<Props> = ({ inView }) => {
  const [query, { data, called }] = useFooterProjectsLazyQuery()

  useEffect(() => {
    if (inView && !called) query()
  }, [inView])

  return (
    <DesktopFooterContainer>
      <DesktopFooterHeading>Projecten</DesktopFooterHeading>
      <DesktopFooterList>
        {data?.projects.map(({ title, slug }) => (
          <DesktopFooterListItem key={slug}>
            <Link
              href="/projects/[slug]"
              as={`/projects/${slug}`}
              scroll={false}
            >
              <a>{title}</a>
            </Link>
          </DesktopFooterListItem>
        ))}
      </DesktopFooterList>
    </DesktopFooterContainer>
  )
}
