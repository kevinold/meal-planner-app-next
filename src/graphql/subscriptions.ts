/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
  ) {
    onCreateUserGroup(filter: $filter) {
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
    }
  }
`;
export const onUpdateUserGroup = /* GraphQL */ `
  subscription OnUpdateUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
  ) {
    onUpdateUserGroup(filter: $filter) {
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
    }
  }
`;
export const onDeleteUserGroup = /* GraphQL */ `
  subscription OnDeleteUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
  ) {
    onDeleteUserGroup(filter: $filter) {
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
    }
  }
`;
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal($filter: ModelSubscriptionMealFilterInput) {
    onCreateMeal(filter: $filter) {
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal($filter: ModelSubscriptionMealFilterInput) {
    onUpdateMeal(filter: $filter) {
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal($filter: ModelSubscriptionMealFilterInput) {
    onDeleteMeal(filter: $filter) {
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
export const onCreateMealInstance = /* GraphQL */ `
  subscription OnCreateMealInstance(
    $filter: ModelSubscriptionMealInstanceFilterInput
  ) {
    onCreateMealInstance(filter: $filter) {
      id
      mealId
      createdAt
      updatedAt
      mealInstancesId
    }
  }
`;
export const onUpdateMealInstance = /* GraphQL */ `
  subscription OnUpdateMealInstance(
    $filter: ModelSubscriptionMealInstanceFilterInput
  ) {
    onUpdateMealInstance(filter: $filter) {
      id
      mealId
      createdAt
      updatedAt
      mealInstancesId
    }
  }
`;
export const onDeleteMealInstance = /* GraphQL */ `
  subscription OnDeleteMealInstance(
    $filter: ModelSubscriptionMealInstanceFilterInput
  ) {
    onDeleteMealInstance(filter: $filter) {
      id
      mealId
      createdAt
      updatedAt
      mealInstancesId
    }
  }
`;
