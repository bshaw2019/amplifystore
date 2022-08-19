/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      date
      total
      products {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          producerEmail
          userEmail
        }
        nextToken
      }
      userEmail
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        total
        products {
          nextToken
        }
        userEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const orderByUserEmail = /* GraphQL */ `
  query OrderByUserEmail(
    $userEmail: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderByUserEmail(
      userEmail: $userEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        total
        products {
          nextToken
        }
        userEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      image
      beat
      price
      orders {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          producerEmail
          userEmail
        }
        nextToken
      }
      producerEmail
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        beat
        price
        orders {
          nextToken
        }
        producerEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const productByProducerEmail = /* GraphQL */ `
  query ProductByProducerEmail(
    $producerEmail: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productByProducerEmail(
      producerEmail: $producerEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        image
        beat
        price
        orders {
          nextToken
        }
        producerEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      rating
      country
      gender
      genre
      picture
      role
      status
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        rating
        country
        gender
        genre
        picture
        role
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        rating
        country
        gender
        genre
        picture
        role
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByRole = /* GraphQL */ `
  query UserByRole(
    $role: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByRole(
      role: $role
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        rating
        country
        gender
        genre
        picture
        role
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProductOrder = /* GraphQL */ `
  query GetProductOrder($id: ID!) {
    getProductOrder(id: $id) {
      id
      productID
      orderID
      product {
        id
        title
        description
        image
        beat
        price
        orders {
          nextToken
        }
        producerEmail
        createdAt
        updatedAt
      }
      order {
        id
        date
        total
        products {
          nextToken
        }
        userEmail
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      producerEmail
      userEmail
    }
  }
`;
export const listProductOrders = /* GraphQL */ `
  query ListProductOrders(
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        orderID
        product {
          id
          title
          description
          image
          beat
          price
          producerEmail
          createdAt
          updatedAt
        }
        order {
          id
          date
          total
          userEmail
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        producerEmail
        userEmail
      }
      nextToken
    }
  }
`;
