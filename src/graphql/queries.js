/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      cid
      title
      desc
      sub
      img
      count
      createdAt
      updatedAt
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cid
        title
        desc
        sub
        img
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
