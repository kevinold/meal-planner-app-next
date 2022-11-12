/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserGroup = /* GraphQL */ `
  query GetUserGroup($id: ID!) {
    getUserGroup(id: $id) {
      id
      name
      owners
      createdAt
      updatedAt
    }
  }
`;
export const listUserGroups = /* GraphQL */ `
  query ListUserGroups(
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owners
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMeal = /* GraphQL */ `
  query GetMeal($id: ID!) {
    getMeal(id: $id) {
      id
      title
      description
      status
      lastOccurrence
      nextOccurrence
      freq
      history {
        items {
          id
          confirmed
          createdAt
          updatedAt
          mealHistoryId
        }
        nextToken
      }
      group
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMeals = /* GraphQL */ `
  query ListMeals(
    $filter: ModelMealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        lastOccurrence
        nextOccurrence
        freq
        history {
          nextToken
        }
        group
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMealHistory = /* GraphQL */ `
  query GetMealHistory($id: ID!) {
    getMealHistory(id: $id) {
      id
      confirmed
      createdAt
      updatedAt
      mealHistoryId
    }
  }
`;
export const listMealHistories = /* GraphQL */ `
  query ListMealHistories(
    $filter: ModelMealHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMealHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        confirmed
        createdAt
        updatedAt
        mealHistoryId
      }
      nextToken
    }
  }
`;
