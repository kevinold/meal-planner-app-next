/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMealUserGroup = /* GraphQL */ `
  query GetMealUserGroup($id: ID!) {
    getMealUserGroup(id: $id) {
      id
      owner
      inviteCode
      joinedGroup
      createdAt
      updatedAt
    }
  }
`;
export const listMealUserGroups = /* GraphQL */ `
  query ListMealUserGroups(
    $filter: ModelMealUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMealUserGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        inviteCode
        joinedGroup
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
