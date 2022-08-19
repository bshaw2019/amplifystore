/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createProductOrder = /* GraphQL */ `
  mutation CreateProductOrder(
    $input: CreateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    createProductOrder(input: $input, condition: $condition) {
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
export const updateProductOrder = /* GraphQL */ `
  mutation UpdateProductOrder(
    $input: UpdateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    updateProductOrder(input: $input, condition: $condition) {
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
export const deleteProductOrder = /* GraphQL */ `
  mutation DeleteProductOrder(
    $input: DeleteProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    deleteProductOrder(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
