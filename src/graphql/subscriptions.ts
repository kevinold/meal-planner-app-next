/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
  ) {
    onCreateUserGroup(filter: $filter) {
      id
      name
      owners
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserGroup = /* GraphQL */ `
  subscription OnUpdateUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
  ) {
    onUpdateUserGroup(filter: $filter) {
      id
      name
      owners
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserGroup = /* GraphQL */ `
  subscription OnDeleteUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
  ) {
    onDeleteUserGroup(filter: $filter) {
      id
      name
      owners
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal(
    $filter: ModelSubscriptionMealFilterInput
    $owner: String
  ) {
    onCreateMeal(filter: $filter, owner: $owner) {
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal(
    $filter: ModelSubscriptionMealFilterInput
    $owner: String
  ) {
    onUpdateMeal(filter: $filter, owner: $owner) {
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal(
    $filter: ModelSubscriptionMealFilterInput
    $owner: String
  ) {
    onDeleteMeal(filter: $filter, owner: $owner) {
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
export const onCreateMealHistory = /* GraphQL */ `
  subscription OnCreateMealHistory(
    $filter: ModelSubscriptionMealHistoryFilterInput
  ) {
    onCreateMealHistory(filter: $filter) {
      id
      confirmed
      createdAt
      updatedAt
      mealHistoryId
    }
  }
`;
export const onUpdateMealHistory = /* GraphQL */ `
  subscription OnUpdateMealHistory(
    $filter: ModelSubscriptionMealHistoryFilterInput
  ) {
    onUpdateMealHistory(filter: $filter) {
      id
      confirmed
      createdAt
      updatedAt
      mealHistoryId
    }
  }
`;
export const onDeleteMealHistory = /* GraphQL */ `
  subscription OnDeleteMealHistory(
    $filter: ModelSubscriptionMealHistoryFilterInput
  ) {
    onDeleteMealHistory(filter: $filter) {
      id
      confirmed
      createdAt
      updatedAt
      mealHistoryId
    }
  }
`;
