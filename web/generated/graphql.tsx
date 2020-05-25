import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  /** Returns one service based on provided slug or id */
  service?: Maybe<Service>;
  /** Returns all services */
  services: Array<Service>;
  /** Returns one project based on provided slug or id */
  project?: Maybe<Project>;
  /** Returns all projects, with possible filtering by service */
  projects: Array<Project>;
  currentUser?: Maybe<User>;
};


export type QueryServiceArgs = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryProjectArgs = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryProjectsArgs = {
  service?: Maybe<Scalars['String']>;
};

/** The Service model */
export type Service = {
  __typename?: 'Service';
  _id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  listImage: Scalars['String'];
  description: Array<Scalars['String']>;
  baseOptions: Array<Scalars['String']>;
  additionalOptions: Array<Scalars['String']>;
  callToAction: Scalars['String'];
};

/** The Project model */
export type Project = {
  __typename?: 'Project';
  _id: Scalars['ID'];
  title: Scalars['String'];
  listImage: Scalars['String'];
  slug: Scalars['String'];
  service: Scalars['String'];
  callToAction: Scalars['String'];
  content: Array<Content>;
  deleted: Scalars['Boolean'];
};

/** The Project Content block model */
export type Content = {
  __typename?: 'Content';
  type: Scalars['String'];
  data: Scalars['String'];
};

/** The User model */
export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  username: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Upload a single file */
  uploadImage: Array<Scalars['String']>;
  /** Deletes files at specified URL */
  deleteImage: Scalars['Boolean'];
  createService: Service;
  updateService: Service;
  deleteService: Scalars['Boolean'];
  createProject: Project;
  updateProject: Project;
  deleteProject: Scalars['Boolean'];
  loginUser?: Maybe<Scalars['String']>;
  registerUser?: Maybe<User>;
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload'];
};


export type MutationDeleteImageArgs = {
  url: Scalars['String'];
};


export type MutationCreateServiceArgs = {
  service: ServiceInput;
};


export type MutationUpdateServiceArgs = {
  service: ServiceInput;
  id: Scalars['String'];
};


export type MutationDeleteServiceArgs = {
  id: Scalars['String'];
};


export type MutationCreateProjectArgs = {
  project: ProjectInput;
};


export type MutationUpdateProjectArgs = {
  project: ProjectInput;
  id: Scalars['String'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['String'];
};


export type MutationLoginUserArgs = {
  user: UserInput;
};


export type MutationRegisterUserArgs = {
  user: UserInput;
};


export type ServiceInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  listImage: Scalars['String'];
  description: Array<Scalars['String']>;
  baseOptions: Array<Scalars['String']>;
  additionalOptions: Array<Scalars['String']>;
  callToAction: Scalars['String'];
};

export type ProjectInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  listImage?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  callToAction?: Maybe<Scalars['String']>;
  content?: Maybe<Array<ContentInput>>;
};

export type ContentInput = {
  type: Scalars['String'];
  data: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type ImageUploadMutationVariables = {
  imageFile: Scalars['Upload'];
};


export type ImageUploadMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadImage'>
);

export type LoginUserMutationVariables = {
  user: UserInput;
};


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'loginUser'>
);

export type ProjectListQueryVariables = {
  service?: Maybe<Scalars['String']>;
};


export type ProjectListQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'slug' | 'listImage' | 'title'>
  )> }
);

export type ProjectServiceOptionsQueryVariables = {};


export type ProjectServiceOptionsQuery = (
  { __typename?: 'Query' }
  & { services: Array<(
    { __typename?: 'Service' }
    & Pick<Service, 'name' | '_id'>
  )> }
);


export const ImageUploadDocument = gql`
    mutation imageUpload($imageFile: Upload!) {
  uploadImage(file: $imageFile)
}
    `;
export type ImageUploadMutationFn = ApolloReactCommon.MutationFunction<ImageUploadMutation, ImageUploadMutationVariables>;

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
export function useImageUploadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ImageUploadMutation, ImageUploadMutationVariables>) {
        return ApolloReactHooks.useMutation<ImageUploadMutation, ImageUploadMutationVariables>(ImageUploadDocument, baseOptions);
      }
export type ImageUploadMutationHookResult = ReturnType<typeof useImageUploadMutation>;
export type ImageUploadMutationResult = ApolloReactCommon.MutationResult<ImageUploadMutation>;
export type ImageUploadMutationOptions = ApolloReactCommon.BaseMutationOptions<ImageUploadMutation, ImageUploadMutationVariables>;
export const LoginUserDocument = gql`
    mutation loginUser($user: UserInput!) {
  loginUser(user: $user)
}
    `;
export type LoginUserMutationFn = ApolloReactCommon.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

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
export function useLoginUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = ApolloReactCommon.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const ProjectListDocument = gql`
    query projectList($service: String) {
  projects(service: $service) {
    slug
    listImage
    title
  }
}
    `;

/**
 * __useProjectListQuery__
 *
 * To run a query within a React component, call `useProjectListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectListQuery({
 *   variables: {
 *      service: // value for 'service'
 *   },
 * });
 */
export function useProjectListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProjectListQuery, ProjectListQueryVariables>) {
        return ApolloReactHooks.useQuery<ProjectListQuery, ProjectListQueryVariables>(ProjectListDocument, baseOptions);
      }
export function useProjectListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProjectListQuery, ProjectListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProjectListQuery, ProjectListQueryVariables>(ProjectListDocument, baseOptions);
        }
export type ProjectListQueryHookResult = ReturnType<typeof useProjectListQuery>;
export type ProjectListLazyQueryHookResult = ReturnType<typeof useProjectListLazyQuery>;
export type ProjectListQueryResult = ApolloReactCommon.QueryResult<ProjectListQuery, ProjectListQueryVariables>;
export const ProjectServiceOptionsDocument = gql`
    query projectServiceOptions {
  services {
    name
    _id
  }
}
    `;

/**
 * __useProjectServiceOptionsQuery__
 *
 * To run a query within a React component, call `useProjectServiceOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectServiceOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectServiceOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectServiceOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProjectServiceOptionsQuery, ProjectServiceOptionsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProjectServiceOptionsQuery, ProjectServiceOptionsQueryVariables>(ProjectServiceOptionsDocument, baseOptions);
      }
export function useProjectServiceOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProjectServiceOptionsQuery, ProjectServiceOptionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProjectServiceOptionsQuery, ProjectServiceOptionsQueryVariables>(ProjectServiceOptionsDocument, baseOptions);
        }
export type ProjectServiceOptionsQueryHookResult = ReturnType<typeof useProjectServiceOptionsQuery>;
export type ProjectServiceOptionsLazyQueryHookResult = ReturnType<typeof useProjectServiceOptionsLazyQuery>;
export type ProjectServiceOptionsQueryResult = ApolloReactCommon.QueryResult<ProjectServiceOptionsQuery, ProjectServiceOptionsQueryVariables>;