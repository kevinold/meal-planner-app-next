/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserGroup = /* GraphQL */ `
  query GetUserGroup($id: ID!) {
    getUserGroup(id: $id) {
      id
      meals {
        items {
          id
          title
          description
          status
          lastOccurrence
          nextOccurrence
          timesHad
          freq
          createdAt
          updatedAt
          userGroupMealsId
        }
        nextToken
      }
      owners
      createdAt
      updatedAt
      owner
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
        meals {
          nextToken
        }
        owners
        createdAt
        updatedAt
        owner
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
      timesHad
      freq
      instances {
        items {
          id
          createdAt
          updatedAt
          mealInstancesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userGroupMealsId
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
        timesHad
        freq
        instances {
          nextToken
        }
        createdAt
        updatedAt
        userGroupMealsId
      }
      nextToken
    }
  }
`;
export const getMealInstance = /* GraphQL */ `
  query GetMealInstance($id: ID!) {
    getMealInstance(id: $id) {
      id
      createdAt
      updatedAt
      mealInstancesId
    }
  }
`;
export const listMealInstances = /* GraphQL */ `
  query ListMealInstances(
    $filter: ModelMealInstanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMealInstances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        mealInstancesId
      }
      nextToken
    }
  }
`;
