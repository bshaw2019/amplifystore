/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProductOrder = /* GraphQL */ `
  subscription OnCreateProductOrder(
    $producerEmail: String
    $userEmail: String
  ) {
    onCreateProductOrder(producerEmail: $producerEmail, userEmail: $userEmail) {
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
export const onUpdateProductOrder = /* GraphQL */ `
  subscription OnUpdateProductOrder(
    $producerEmail: String
    $userEmail: String
  ) {
    onUpdateProductOrder(producerEmail: $producerEmail, userEmail: $userEmail) {
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
export const onDeleteProductOrder = /* GraphQL */ `
  subscription OnDeleteProductOrder(
    $producerEmail: String
    $userEmail: String
  ) {
    onDeleteProductOrder(producerEmail: $producerEmail, userEmail: $userEmail) {
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
