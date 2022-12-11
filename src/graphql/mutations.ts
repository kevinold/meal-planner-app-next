/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const joinMealUserGroup = /* GraphQL */ `
  mutation JoinMealUserGroup($input: JoinMealUserGroupInput) {
    joinMealUserGroup(input: $input) {
      id
      owner
      inviteCode
      joinedGroup
      createdAt
      updatedAt
    }
  }
`;
export const createMealUserGroup = /* GraphQL */ `
  mutation CreateMealUserGroup(
    $input: CreateMealUserGroupInput!
    $condition: ModelMealUserGroupConditionInput
  ) {
    createMealUserGroup(input: $input, condition: $condition) {
      id
      owner
      inviteCode
      joinedGroup
      createdAt
      updatedAt
    }
  }
`;
export const updateMealUserGroup = /* GraphQL */ `
  mutation UpdateMealUserGroup(
    $input: UpdateMealUserGroupInput!
    $condition: ModelMealUserGroupConditionInput
  ) {
    updateMealUserGroup(input: $input, condition: $condition) {
      id
      owner
      inviteCode
      joinedGroup
      createdAt
      updatedAt
    }
  }
`;
export const deleteMealUserGroup = /* GraphQL */ `
  mutation DeleteMealUserGroup(
    $input: DeleteMealUserGroupInput!
    $condition: ModelMealUserGroupConditionInput
  ) {
    deleteMealUserGroup(input: $input, condition: $condition) {
      id
      owner
      inviteCode
      joinedGroup
      createdAt
      updatedAt
    }
  }
`;
export const createMeal = /* GraphQL */ `
  mutation CreateMeal(
    $input: CreateMealInput!
    $condition: ModelMealConditionInput
  ) {
    createMeal(input: $input, condition: $condition) {
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
export const updateMeal = /* GraphQL */ `
  mutation UpdateMeal(
    $input: UpdateMealInput!
    $condition: ModelMealConditionInput
  ) {
    updateMeal(input: $input, condition: $condition) {
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
export const deleteMeal = /* GraphQL */ `
  mutation DeleteMeal(
    $input: DeleteMealInput!
    $condition: ModelMealConditionInput
  ) {
    deleteMeal(input: $input, condition: $condition) {
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
export const createMealHistory = /* GraphQL */ `
  mutation CreateMealHistory(
    $input: CreateMealHistoryInput!
    $condition: ModelMealHistoryConditionInput
  ) {
    createMealHistory(input: $input, condition: $condition) {
      id
      confirmed
      createdAt
      updatedAt
      mealHistoryId
    }
  }
`;
export const updateMealHistory = /* GraphQL */ `
  mutation UpdateMealHistory(
    $input: UpdateMealHistoryInput!
    $condition: ModelMealHistoryConditionInput
  ) {
    updateMealHistory(input: $input, condition: $condition) {
      id
      confirmed
      createdAt
      updatedAt
      mealHistoryId
    }
  }
`;
export const deleteMealHistory = /* GraphQL */ `
  mutation DeleteMealHistory(
    $input: DeleteMealHistoryInput!
    $condition: ModelMealHistoryConditionInput
  ) {
    deleteMealHistory(input: $input, condition: $condition) {
      id
      confirmed
      createdAt
      updatedAt
      mealHistoryId
    }
  }
`;
