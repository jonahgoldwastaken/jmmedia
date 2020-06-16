import { useFooterProjectsQuery } from 'generated/graphql'
import Link from 'next/link'
import { DesktopFooterContainer } from './Container'
import { DesktopFooterHeading } from './Heading'
import { DesktopFooterList, DesktopFooterListItem } from './List'

export const DesktopFooterProjects: React.FC = () => {
  const { data, loading } = useFooterProjectsQuery()

  return (
    <DesktopFooterContainer>
      <DesktopFooterHeading>
        {loading ? 'Laden...' : 'Projecten'}
      </DesktopFooterHeading>
      <DesktopFooterList>
        {data?.projects.map(({ title, slug }) => (
          <DesktopFooterListItem>
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
