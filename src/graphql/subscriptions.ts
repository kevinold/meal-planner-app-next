/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMealUserGroup = /* GraphQL */ `
  subscription OnCreateMealUserGroup(
    $filter: ModelSubscriptionMealUserGroupFilterInput
  ) {
    onCreateMealUserGroup(filter: $filter) {
      id
      owners
      inviteCode
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMealUserGroup = /* GraphQL */ `
  subscription OnUpdateMealUserGroup(
    $filter: ModelSubscriptionMealUserGroupFilterInput
  ) {
    onUpdateMealUserGroup(filter: $filter) {
      id
      owners
      inviteCode
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMealUserGroup = /* GraphQL */ `
  subscription OnDeleteMealUserGroup(
    $filter: ModelSubscriptionMealUserGroupFilterInput
  ) {
    onDeleteMealUserGroup(filter: $filter) {
      id
      owners
      inviteCode
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
