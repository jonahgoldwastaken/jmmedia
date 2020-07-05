import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any
}

export type Query = {
  __typename?: 'Query'
  /** Returns one service based on provided slug */
  service?: Maybe<Service>
  /** Returns all services */
  services: Array<Service>
  /** Returns one project based on provided slug or id */
  project?: Maybe<Project>
  /** Returns all projects, with possible filtering by service */
  projects: Array<Project>
  currentUser?: Maybe<User>
}

export type QueryServiceArgs = {
  slug: Scalars['String']
}

export type QueryProjectArgs = {
  slug: Scalars['String']
}

export type QueryProjectsArgs = {
  includeDeleted?: Maybe<Scalars['Boolean']>
  service?: Maybe<Scalars['String']>
}

/** The Service model */
export type Service = {
  __typename?: 'Service'
  _id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  listImage: Scalars['String']
  description: Array<Scalars['String']>
  baseOptions: Array<Scalars['String']>
  additionalOptions: Array<Scalars['String']>
  callToAction: Scalars['String']
}

/** The Project model */
export type Project = {
  __typename?: 'Project'
  _id: Scalars['ID']
  title: Scalars['String']
  listImage: Scalars['String']
  slug: Scalars['String']
  service: Service
  callToAction: Scalars['String']
  content: Array<Content>
  deleted: Scalars['Boolean']
}

/** The Project Content block model */
export type Content = {
  __typename?: 'Content'
  _id: Scalars['ID']
  type: ContentTypes
  data: Scalars['String']
}

/** The different available content types */
export enum ContentTypes {
  Heading = 'heading',
  Paragraph = 'paragraph',
  Image = 'image',
  Row = 'row',
  Film = 'film',
}

/** The User model */
export type User = {
  __typename?: 'User'
  _id: Scalars['ID']
  username: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Upload a single file */
  uploadImage: Array<Scalars['String']>
  /** Upload a listImage */
  uploadListImage: Scalars['String']
  /** Deletes files at specified URL */
  deleteImage: Scalars['Boolean']
  /** Submit a message form */
  submitMessage: Message
  createService: Service
  updateService: Service
  deleteService: Scalars['Boolean']
  createProject: Project
  updateProject: Project
  deleteProject: Scalars['Boolean']
  /** Submit a service request form */
  submitRequest: ServiceRequest
  loginUser?: Maybe<Scalars['String']>
  registerUser?: Maybe<User>
}

export type MutationUploadImageArgs = {
  file: Scalars['Upload']
}

export type MutationUploadListImageArgs = {
  file: Scalars['Upload']
}

export type MutationDeleteImageArgs = {
  url: Scalars['String']
}

export type MutationSubmitMessageArgs = {
  message: MessageInput
}

export type MutationCreateServiceArgs = {
  service: ServiceInput
}

export type MutationUpdateServiceArgs = {
  service: ServiceInput
  id: Scalars['String']
}

export type MutationDeleteServiceArgs = {
  id: Scalars['String']
}

export type MutationCreateProjectArgs = {
  project: ProjectInput
}

export type MutationUpdateProjectArgs = {
  project: ProjectInput
  id: Scalars['String']
}

export type MutationDeleteProjectArgs = {
  id: Scalars['String']
}

export type MutationSubmitRequestArgs = {
  request: ServiceRequestInput
}

export type MutationLoginUserArgs = {
  user: UserInput
}

export type MutationRegisterUserArgs = {
  user: UserInput
}

/** The Message Model */
export type Message = {
  __typename?: 'Message'
  name: Scalars['String']
  email: Scalars['EmailAddress']
}

/** The Message Input Model */
export type MessageInput = {
  email: Scalars['EmailAddress']
  name: Scalars['String']
  subject: Scalars['String']
  message: Scalars['String']
}

export type ServiceInput = {
  name: Scalars['String']
  slug: Scalars['String']
  listImage: Scalars['String']
  description: Array<Scalars['String']>
  baseOptions: Array<Scalars['String']>
  additionalOptions: Array<Scalars['String']>
  callToAction: Scalars['String']
}

export type ProjectInput = {
  title: Scalars['String']
  slug: Scalars['String']
  listImage: Scalars['String']
  service: Scalars['String']
  callToAction: Scalars['String']
  content: Array<ContentInput>
}

export type ContentInput = {
  type: ContentTypes
  data: Scalars['String']
}

/** The Service Request Model */
export type ServiceRequest = {
  __typename?: 'ServiceRequest'
  name: Scalars['String']
  email: Scalars['EmailAddress']
}

/** The Service Request Input Model */
export type ServiceRequestInput = {
  name: Scalars['String']
  email: Scalars['EmailAddress']
  subject: Scalars['String']
  service: Scalars['String']
  message: Scalars['String']
}

export type UserInput = {
  username: Scalars['String']
  password: Scalars['String']
}

export type AdminPanelQueryVariables = {}

export type AdminPanelQuery = { __typename?: 'Query' } & {
  projects: Array<
    { __typename?: 'Project' } & Pick<
      Project,
      'listImage' | 'title' | 'slug' | '_id'
    >
  >
  services: Array<
    { __typename?: 'Service' } & Pick<
      Service,
      'listImage' | 'name' | 'slug' | '_id'
    >
  >
}

export type SendRequestMutationVariables = {
  request: ServiceRequestInput
}

export type SendRequestMutation = { __typename?: 'Mutation' } & {
  submitRequest: { __typename?: 'ServiceRequest' } & Pick<
    ServiceRequest,
    'name' | 'email'
  >
}

export type SendMessageMutationVariables = {
  message: MessageInput
}

export type SendMessageMutation = { __typename?: 'Mutation' } & {
  submitMessage: { __typename?: 'Message' } & Pick<Message, 'name' | 'email'>
}

export type FooterServicesQueryVariables = {}

export type FooterServicesQuery = { __typename?: 'Query' } & {
  services: Array<{ __typename?: 'Service' } & Pick<Service, 'name' | 'slug'>>
}

export type FooterProjectsQueryVariables = {}

export type FooterProjectsQuery = { __typename?: 'Query' } & {
  projects: Array<{ __typename?: 'Project' } & Pick<Project, 'title' | 'slug'>>
}

export type ImageUploadMutationVariables = {
  imageFile: Scalars['Upload']
}

export type ImageUploadMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'uploadImage'
>

export type ListImageUploadMutationVariables = {
  imageFile: Scalars['Upload']
}

export type ListImageUploadMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'uploadListImage'
>

export type LoginUserMutationVariables = {
  user: UserInput
}

export type LoginUserMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'loginUser'
>

export type NewProjectMutationVariables = {
  project: ProjectInput
}

export type NewProjectMutation = { __typename?: 'Mutation' } & {
  createProject: { __typename?: 'Project' } & Pick<Project, 'slug'>
}

export type UpdateProjectMutationVariables = {
  project: ProjectInput
  id: Scalars['String']
}

export type UpdateProjectMutation = { __typename?: 'Mutation' } & {
  updateProject: { __typename?: 'Project' } & Pick<Project, 'title'>
}

export type DeleteProjectMutationVariables = {
  id: Scalars['String']
}

export type DeleteProjectMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'deleteProject'
>

export type ProjectToUpdateQueryVariables = {
  slug: Scalars['String']
}

export type ProjectToUpdateQuery = { __typename?: 'Query' } & {
  project?: Maybe<
    { __typename?: 'Project' } & Pick<
      Project,
      '_id' | 'title' | 'slug' | 'listImage' | 'callToAction'
    > & {
        service: { __typename?: 'Service' } & Pick<Service, '_id'>
        content: Array<
          { __typename?: 'Content' } & Pick<Content, 'type' | 'data'>
        >
      }
  >
}

export type ProjectsQueryVariables = {
  service?: Maybe<Scalars['String']>
}

export type ProjectsQuery = { __typename?: 'Query' } & {
  projects: Array<
    { __typename?: 'Project' } & Pick<Project, 'slug' | 'listImage' | 'title'>
  >
}

export type ProjectQueryVariables = {
  slug: Scalars['String']
}

export type ProjectQuery = { __typename?: 'Query' } & {
  project?: Maybe<
    { __typename?: 'Project' } & Pick<Project, 'title' | 'callToAction'> & {
        service: { __typename?: 'Service' } & Pick<Service, 'slug'>
        content: Array<
          { __typename?: 'Content' } & Pick<Content, '_id' | 'type' | 'data'>
        >
      }
  >
}

export type NewServiceMutationVariables = {
  service: ServiceInput
}

export type NewServiceMutation = { __typename?: 'Mutation' } & {
  createService: { __typename?: 'Service' } & Pick<Service, 'slug'>
}

export type UpdateServiceMutationVariables = {
  service: ServiceInput
  id: Scalars['String']
}

export type UpdateServiceMutation = { __typename?: 'Mutation' } & {
  updateService: { __typename?: 'Service' } & Pick<Service, 'name'>
}

export type DeleteServiceMutationVariables = {
  id: Scalars['String']
}

export type DeleteServiceMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'deleteService'
>

export type ServiceToUpdateQueryVariables = {
  slug: Scalars['String']
}

export type ServiceToUpdateQuery = { __typename?: 'Query' } & {
  service?: Maybe<
    { __typename?: 'Service' } & Pick<
      Service,
      | '_id'
      | 'name'
      | 'slug'
      | 'listImage'
      | 'description'
      | 'baseOptions'
      | 'additionalOptions'
      | 'callToAction'
    >
  >
}

export type ServicesQueryVariables = {}

export type ServicesQuery = { __typename?: 'Query' } & {
  services: Array<
    { __typename?: 'Service' } & Pick<Service, 'slug' | 'listImage' | 'name'>
  >
}

export type ServiceQueryVariables = {
  slug: Scalars['String']
}

export type ServiceQuery = { __typename?: 'Query' } & {
  service?: Maybe<
    { __typename?: 'Service' } & Pick<
      Service,
      | 'name'
      | 'listImage'
      | 'description'
      | 'baseOptions'
      | 'additionalOptions'
      | 'callToAction'
    >
  >
}

export type ServiceSelectQueryVariables = {}

export type ServiceSelectQuery = { __typename?: 'Query' } & {
  services: Array<{ __typename?: 'Service' } & Pick<Service, '_id' | 'name'>>
}

export type LoggedInUserQueryVariables = {}

export type LoggedInUserQuery = { __typename?: 'Query' } & {
  currentUser?: Maybe<{ __typename?: 'User' } & Pick<User, 'username'>>
}

export const AdminPanelDocument = gql`
  query adminPanel {
    projects(includeDeleted: true) {
      listImage
      title
      slug
      _id
    }
    services {
      listImage
      name
      slug
      _id
    }
  }
`

/**
 * __useAdminPanelQuery__
 *
 * To run a query within a React component, call `useAdminPanelQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPanelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPanelQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminPanelQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    AdminPanelQuery,
    AdminPanelQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<AdminPanelQuery, AdminPanelQueryVariables>(
    AdminPanelDocument,
    baseOptions
  )
}
export function useAdminPanelLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    AdminPanelQuery,
    AdminPanelQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    AdminPanelQuery,
    AdminPanelQueryVariables
  >(AdminPanelDocument, baseOptions)
}
export type AdminPanelQueryHookResult = ReturnType<typeof useAdminPanelQuery>
export type AdminPanelLazyQueryHookResult = ReturnType<
  typeof useAdminPanelLazyQuery
>
export type AdminPanelQueryResult = ApolloReactCommon.QueryResult<
  AdminPanelQuery,
  AdminPanelQueryVariables
>
export const SendRequestDocument = gql`
  mutation sendRequest($request: ServiceRequestInput!) {
    submitRequest(request: $request) {
      name
      email
    }
  }
`
export type SendRequestMutationFn = ApolloReactCommon.MutationFunction<
  SendRequestMutation,
  SendRequestMutationVariables
>

/**
 * __useSendRequestMutation__
 *
 * To run a mutation, you first call `useSendRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRequestMutation, { data, loading, error }] = useSendRequestMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSendRequestMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SendRequestMutation,
    SendRequestMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    SendRequestMutation,
    SendRequestMutationVariables
  >(SendRequestDocument, baseOptions)
}
export type SendRequestMutationHookResult = ReturnType<
  typeof useSendRequestMutation
>
export type SendRequestMutationResult = ApolloReactCommon.MutationResult<
  SendRequestMutation
>
export type SendRequestMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SendRequestMutation,
  SendRequestMutationVariables
>
export const SendMessageDocument = gql`
  mutation sendMessage($message: MessageInput!) {
    submitMessage(message: $message) {
      name
      email
    }
  }
`
export type SendMessageMutationFn = ApolloReactCommon.MutationFunction<
  SendMessageMutation,
  SendMessageMutationVariables
>

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSendMessageMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SendMessageMutation,
    SendMessageMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    SendMessageMutation,
    SendMessageMutationVariables
  >(SendMessageDocument, baseOptions)
}
export type SendMessageMutationHookResult = ReturnType<
  typeof useSendMessageMutation
>
export type SendMessageMutationResult = ApolloReactCommon.MutationResult<
  SendMessageMutation
>
export type SendMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SendMessageMutation,
  SendMessageMutationVariables
>
export const FooterServicesDocument = gql`
  query footerServices {
    services {
      name
      slug
    }
  }
`

/**
 * __useFooterServicesQuery__
 *
 * To run a query within a React component, call `useFooterServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooterServicesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FooterServicesQuery,
    FooterServicesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FooterServicesQuery,
    FooterServicesQueryVariables
  >(FooterServicesDocument, baseOptions)
}
export function useFooterServicesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FooterServicesQuery,
    FooterServicesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FooterServicesQuery,
    FooterServicesQueryVariables
  >(FooterServicesDocument, baseOptions)
}
export type FooterServicesQueryHookResult = ReturnType<
  typeof useFooterServicesQuery
>
export type FooterServicesLazyQueryHookResult = ReturnType<
  typeof useFooterServicesLazyQuery
>
export type FooterServicesQueryResult = ApolloReactCommon.QueryResult<
  FooterServicesQuery,
  FooterServicesQueryVariables
>
export const FooterProjectsDocument = gql`
  query footerProjects {
    projects {
      title
      slug
    }
  }
`

/**
 * __useFooterProjectsQuery__
 *
 * To run a query within a React component, call `useFooterProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooterProjectsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FooterProjectsQuery,
    FooterProjectsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FooterProjectsQuery,
    FooterProjectsQueryVariables
  >(FooterProjectsDocument, baseOptions)
}
export function useFooterProjectsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FooterProjectsQuery,
    FooterProjectsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FooterProjectsQuery,
    FooterProjectsQueryVariables
  >(FooterProjectsDocument, baseOptions)
}
export type FooterProjectsQueryHookResult = ReturnType<
  typeof useFooterProjectsQuery
>
export type FooterProjectsLazyQueryHookResult = ReturnType<
  typeof useFooterProjectsLazyQuery
>
export type FooterProjectsQueryResult = ApolloReactCommon.QueryResult<
  FooterProjectsQuery,
  FooterProjectsQueryVariables
>
export const ImageUploadDocument = gql`
  mutation imageUpload($imageFile: Upload!) {
    uploadImage(file: $imageFile)
  }
`
export type ImageUploadMutationFn = ApolloReactCommon.MutationFunction<
  ImageUploadMutation,
  ImageUploadMutationVariables
>

/**
 * __useImageUploadMutation__
 *
 * To run a mutation, you first call `useImageUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageUploadMutation, { data, loading, error }] = useImageUploadMutation({
 *   variables: {
 *      imageFile: // value for 'imageFile'
 *   },
 * });
 */
export function useImageUploadMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ImageUploadMutation,
    ImageUploadMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    ImageUploadMutation,
    ImageUploadMutationVariables
  >(ImageUploadDocument, baseOptions)
}
export type ImageUploadMutationHookResult = ReturnType<
  typeof useImageUploadMutation
>
export type ImageUploadMutationResult = ApolloReactCommon.MutationResult<
  ImageUploadMutation
>
export type ImageUploadMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ImageUploadMutation,
  ImageUploadMutationVariables
>
export const ListImageUploadDocument = gql`
  mutation listImageUpload($imageFile: Upload!) {
    uploadListImage(file: $imageFile)
  }
`
export type ListImageUploadMutationFn = ApolloReactCommon.MutationFunction<
  ListImageUploadMutation,
  ListImageUploadMutationVariables
>

/**
 * __useListImageUploadMutation__
 *
 * To run a mutation, you first call `useListImageUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useListImageUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [listImageUploadMutation, { data, loading, error }] = useListImageUploadMutation({
 *   variables: {
 *      imageFile: // value for 'imageFile'
 *   },
 * });
 */
export function useListImageUploadMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ListImageUploadMutation,
    ListImageUploadMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    ListImageUploadMutation,
    ListImageUploadMutationVariables
  >(ListImageUploadDocument, baseOptions)
}
export type ListImageUploadMutationHookResult = ReturnType<
  typeof useListImageUploadMutation
>
export type ListImageUploadMutationResult = ApolloReactCommon.MutationResult<
  ListImageUploadMutation
>
export type ListImageUploadMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ListImageUploadMutation,
  ListImageUploadMutationVariables
>
export const LoginUserDocument = gql`
  mutation loginUser($user: UserInput!) {
    loginUser(user: $user)
  }
`
export type LoginUserMutationFn = ApolloReactCommon.MutationFunction<
  LoginUserMutation,
  LoginUserMutationVariables
>

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LoginUserMutation,
    LoginUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    LoginUserMutation,
    LoginUserMutationVariables
  >(LoginUserDocument, baseOptions)
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>
export type LoginUserMutationResult = ApolloReactCommon.MutationResult<
  LoginUserMutation
>
export type LoginUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginUserMutation,
  LoginUserMutationVariables
>
export const NewProjectDocument = gql`
  mutation newProject($project: ProjectInput!) {
    createProject(project: $project) {
      slug
    }
  }
`
export type NewProjectMutationFn = ApolloReactCommon.MutationFunction<
  NewProjectMutation,
  NewProjectMutationVariables
>

/**
 * __useNewProjectMutation__
 *
 * To run a mutation, you first call `useNewProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newProjectMutation, { data, loading, error }] = useNewProjectMutation({
 *   variables: {
 *      project: // value for 'project'
 *   },
 * });
 */
export function useNewProjectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    NewProjectMutation,
    NewProjectMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    NewProjectMutation,
    NewProjectMutationVariables
  >(NewProjectDocument, baseOptions)
}
export type NewProjectMutationHookResult = ReturnType<
  typeof useNewProjectMutation
>
export type NewProjectMutationResult = ApolloReactCommon.MutationResult<
  NewProjectMutation
>
export type NewProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  NewProjectMutation,
  NewProjectMutationVariables
>
export const UpdateProjectDocument = gql`
  mutation updateProject($project: ProjectInput!, $id: String!) {
    updateProject(project: $project, id: $id) {
      title
    }
  }
`
export type UpdateProjectMutationFn = ApolloReactCommon.MutationFunction<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      project: // value for 'project'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateProjectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >(UpdateProjectDocument, baseOptions)
}
export type UpdateProjectMutationHookResult = ReturnType<
  typeof useUpdateProjectMutation
>
export type UpdateProjectMutationResult = ApolloReactCommon.MutationResult<
  UpdateProjectMutation
>
export type UpdateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>
export const DeleteProjectDocument = gql`
  mutation deleteProject($id: String!) {
    deleteProject(id: $id)
  }
`
export type DeleteProjectMutationFn = ApolloReactCommon.MutationFunction<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProjectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >(DeleteProjectDocument, baseOptions)
}
export type DeleteProjectMutationHookResult = ReturnType<
  typeof useDeleteProjectMutation
>
export type DeleteProjectMutationResult = ApolloReactCommon.MutationResult<
  DeleteProjectMutation
>
export type DeleteProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>
export const ProjectToUpdateDocument = gql`
  query projectToUpdate($slug: String!) {
    project(slug: $slug) {
      _id
      title
      slug
      service {
        _id
      }
      listImage
      callToAction
      content {
        type
        data
      }
    }
  }
`

/**
 * __useProjectToUpdateQuery__
 *
 * To run a query within a React component, call `useProjectToUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectToUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectToUpdateQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProjectToUpdateQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProjectToUpdateQuery,
    ProjectToUpdateQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ProjectToUpdateQuery,
    ProjectToUpdateQueryVariables
  >(ProjectToUpdateDocument, baseOptions)
}
export function useProjectToUpdateLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProjectToUpdateQuery,
    ProjectToUpdateQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ProjectToUpdateQuery,
    ProjectToUpdateQueryVariables
  >(ProjectToUpdateDocument, baseOptions)
}
export type ProjectToUpdateQueryHookResult = ReturnType<
  typeof useProjectToUpdateQuery
>
export type ProjectToUpdateLazyQueryHookResult = ReturnType<
  typeof useProjectToUpdateLazyQuery
>
export type ProjectToUpdateQueryResult = ApolloReactCommon.QueryResult<
  ProjectToUpdateQuery,
  ProjectToUpdateQueryVariables
>
export const ProjectsDocument = gql`
  query projects($service: String) {
    projects(service: $service, includeDeleted: false) {
      slug
      listImage
      title
    }
  }
`

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *      service: // value for 'service'
 *   },
 * });
 */
export function useProjectsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProjectsQuery,
    ProjectsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    baseOptions
  )
}
export function useProjectsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProjectsQuery,
    ProjectsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    baseOptions
  )
}
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>
export type ProjectsLazyQueryHookResult = ReturnType<
  typeof useProjectsLazyQuery
>
export type ProjectsQueryResult = ApolloReactCommon.QueryResult<
  ProjectsQuery,
  ProjectsQueryVariables
>
export const ProjectDocument = gql`
  query project($slug: String!) {
    project(slug: $slug) {
      title
      service {
        slug
      }
      callToAction
      content {
        _id
        type
        data
      }
    }
  }
`

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProjectQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProjectQuery,
    ProjectQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    baseOptions
  )
}
export function useProjectLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProjectQuery,
    ProjectQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    baseOptions
  )
}
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>
export type ProjectQueryResult = ApolloReactCommon.QueryResult<
  ProjectQuery,
  ProjectQueryVariables
>
export const NewServiceDocument = gql`
  mutation newService($service: ServiceInput!) {
    createService(service: $service) {
      slug
    }
  }
`
export type NewServiceMutationFn = ApolloReactCommon.MutationFunction<
  NewServiceMutation,
  NewServiceMutationVariables
>

/**
 * __useNewServiceMutation__
 *
 * To run a mutation, you first call `useNewServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newServiceMutation, { data, loading, error }] = useNewServiceMutation({
 *   variables: {
 *      service: // value for 'service'
 *   },
 * });
 */
export function useNewServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    NewServiceMutation,
    NewServiceMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    NewServiceMutation,
    NewServiceMutationVariables
  >(NewServiceDocument, baseOptions)
}
export type NewServiceMutationHookResult = ReturnType<
  typeof useNewServiceMutation
>
export type NewServiceMutationResult = ApolloReactCommon.MutationResult<
  NewServiceMutation
>
export type NewServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  NewServiceMutation,
  NewServiceMutationVariables
>
export const UpdateServiceDocument = gql`
  mutation updateService($service: ServiceInput!, $id: String!) {
    updateService(service: $service, id: $id) {
      name
    }
  }
`
export type UpdateServiceMutationFn = ApolloReactCommon.MutationFunction<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      service: // value for 'service'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateServiceMutation,
    UpdateServiceMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateServiceMutation,
    UpdateServiceMutationVariables
  >(UpdateServiceDocument, baseOptions)
}
export type UpdateServiceMutationHookResult = ReturnType<
  typeof useUpdateServiceMutation
>
export type UpdateServiceMutationResult = ApolloReactCommon.MutationResult<
  UpdateServiceMutation
>
export type UpdateServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>
export const DeleteServiceDocument = gql`
  mutation deleteService($id: String!) {
    deleteService(id: $id)
  }
`
export type DeleteServiceMutationFn = ApolloReactCommon.MutationFunction<
  DeleteServiceMutation,
  DeleteServiceMutationVariables
>

/**
 * __useDeleteServiceMutation__
 *
 * To run a mutation, you first call `useDeleteServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceMutation, { data, loading, error }] = useDeleteServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteServiceMutation,
    DeleteServiceMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteServiceMutation,
    DeleteServiceMutationVariables
  >(DeleteServiceDocument, baseOptions)
}
export type DeleteServiceMutationHookResult = ReturnType<
  typeof useDeleteServiceMutation
>
export type DeleteServiceMutationResult = ApolloReactCommon.MutationResult<
  DeleteServiceMutation
>
export type DeleteServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteServiceMutation,
  DeleteServiceMutationVariables
>
export const ServiceToUpdateDocument = gql`
  query serviceToUpdate($slug: String!) {
    service(slug: $slug) {
      _id
      name
      slug
      listImage
      description
      baseOptions
      additionalOptions
      callToAction
    }
  }
`

/**
 * __useServiceToUpdateQuery__
 *
 * To run a query within a React component, call `useServiceToUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceToUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceToUpdateQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useServiceToUpdateQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ServiceToUpdateQuery,
    ServiceToUpdateQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ServiceToUpdateQuery,
    ServiceToUpdateQueryVariables
  >(ServiceToUpdateDocument, baseOptions)
}
export function useServiceToUpdateLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ServiceToUpdateQuery,
    ServiceToUpdateQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ServiceToUpdateQuery,
    ServiceToUpdateQueryVariables
  >(ServiceToUpdateDocument, baseOptions)
}
export type ServiceToUpdateQueryHookResult = ReturnType<
  typeof useServiceToUpdateQuery
>
export type ServiceToUpdateLazyQueryHookResult = ReturnType<
  typeof useServiceToUpdateLazyQuery
>
export type ServiceToUpdateQueryResult = ApolloReactCommon.QueryResult<
  ServiceToUpdateQuery,
  ServiceToUpdateQueryVariables
>
export const ServicesDocument = gql`
  query services {
    services {
      slug
      listImage
      name
    }
  }
`

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useServicesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ServicesQuery,
    ServicesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    baseOptions
  )
}
export function useServicesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ServicesQuery,
    ServicesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ServicesQuery, ServicesQueryVariables>(
    ServicesDocument,
    baseOptions
  )
}
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>
export type ServicesLazyQueryHookResult = ReturnType<
  typeof useServicesLazyQuery
>
export type ServicesQueryResult = ApolloReactCommon.QueryResult<
  ServicesQuery,
  ServicesQueryVariables
>
export const ServiceDocument = gql`
  query service($slug: String!) {
    service(slug: $slug) {
      name
      listImage
      description
      baseOptions
      additionalOptions
      callToAction
    }
  }
`

/**
 * __useServiceQuery__
 *
 * To run a query within a React component, call `useServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useServiceQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ServiceQuery,
    ServiceQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ServiceQuery, ServiceQueryVariables>(
    ServiceDocument,
    baseOptions
  )
}
export function useServiceLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ServiceQuery,
    ServiceQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ServiceQuery, ServiceQueryVariables>(
    ServiceDocument,
    baseOptions
  )
}
export type ServiceQueryHookResult = ReturnType<typeof useServiceQuery>
export type ServiceLazyQueryHookResult = ReturnType<typeof useServiceLazyQuery>
export type ServiceQueryResult = ApolloReactCommon.QueryResult<
  ServiceQuery,
  ServiceQueryVariables
>
export const ServiceSelectDocument = gql`
  query serviceSelect {
    services {
      _id
      name
    }
  }
`

/**
 * __useServiceSelectQuery__
 *
 * To run a query within a React component, call `useServiceSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceSelectQuery({
 *   variables: {
 *   },
 * });
 */
export function useServiceSelectQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ServiceSelectQuery,
    ServiceSelectQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ServiceSelectQuery,
    ServiceSelectQueryVariables
  >(ServiceSelectDocument, baseOptions)
}
export function useServiceSelectLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ServiceSelectQuery,
    ServiceSelectQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ServiceSelectQuery,
    ServiceSelectQueryVariables
  >(ServiceSelectDocument, baseOptions)
}
export type ServiceSelectQueryHookResult = ReturnType<
  typeof useServiceSelectQuery
>
export type ServiceSelectLazyQueryHookResult = ReturnType<
  typeof useServiceSelectLazyQuery
>
export type ServiceSelectQueryResult = ApolloReactCommon.QueryResult<
  ServiceSelectQuery,
  ServiceSelectQueryVariables
>
export const LoggedInUserDocument = gql`
  query loggedInUser {
    currentUser {
      username
    }
  }
`

/**
 * __useLoggedInUserQuery__
 *
 * To run a query within a React component, call `useLoggedInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoggedInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggedInUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoggedInUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    LoggedInUserQuery,
    LoggedInUserQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    LoggedInUserQuery,
    LoggedInUserQueryVariables
  >(LoggedInUserDocument, baseOptions)
}
export function useLoggedInUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    LoggedInUserQuery,
    LoggedInUserQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    LoggedInUserQuery,
    LoggedInUserQueryVariables
  >(LoggedInUserDocument, baseOptions)
}
export type LoggedInUserQueryHookResult = ReturnType<
  typeof useLoggedInUserQuery
>
export type LoggedInUserLazyQueryHookResult = ReturnType<
  typeof useLoggedInUserLazyQuery
>
export type LoggedInUserQueryResult = ApolloReactCommon.QueryResult<
  LoggedInUserQuery,
  LoggedInUserQueryVariables
>
