/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserGroup = /* GraphQL */ `
  mutation CreateUserGroup(
    $input: CreateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    createUserGroup(input: $input, condition: $condition) {
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
          userGroupId
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
export const updateUserGroup = /* GraphQL */ `
  mutation UpdateUserGroup(
    $input: UpdateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    updateUserGroup(input: $input, condition: $condition) {
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
          userGroupId
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
export const deleteUserGroup = /* GraphQL */ `
  mutation DeleteUserGroup(
    $input: DeleteUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    deleteUserGroup(input: $input, condition: $condition) {
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
          userGroupId
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
      timesHad
      freq
      instances {
        items {
          id
          mealId
          createdAt
          updatedAt
          mealInstancesId
        }
        nextToken
      }
      userGroupId
      createdAt
      updatedAt
      userGroupMealsId
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
      timesHad
      freq
      instances {
        items {
          id
          mealId
          createdAt
          updatedAt
          mealInstancesId
        }
        nextToken
      }
      userGroupId
      createdAt
      updatedAt
      userGroupMealsId
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
      timesHad
      freq
      instances {
        items {
          id
          mealId
          createdAt
          updatedAt
          mealInstancesId
        }
        nextToken
      }
      userGroupId
      createdAt
      updatedAt
      userGroupMealsId
    }
  }
`;
export const createMealInstance = /* GraphQL */ `
  mutation CreateMealInstance(
    $input: CreateMealInstanceInput!
    $condition: ModelMealInstanceConditionInput
  ) {
    createMealInstance(input: $input, condition: $condition) {
      id
      mealId
      createdAt
      updatedAt
      mealInstancesId
    }
  }
`;
export const updateMealInstance = /* GraphQL */ `
  mutation UpdateMealInstance(
    $input: UpdateMealInstanceInput!
    $condition: ModelMealInstanceConditionInput
  ) {
    updateMealInstance(input: $input, condition: $condition) {
      id
      mealId
      createdAt
      updatedAt
      mealInstancesId
    }
  }
`;
export const deleteMealInstance = /* GraphQL */ `
  mutation DeleteMealInstance(
    $input: DeleteMealInstanceInput!
    $condition: ModelMealInstanceConditionInput
  ) {
    deleteMealInstance(input: $input, condition: $condition) {
      id
      mealId
      createdAt
      updatedAt
      mealInstancesId
    }
  }
`;
