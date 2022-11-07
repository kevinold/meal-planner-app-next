/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
    $owner: String
  ) {
    onCreateUserGroup(filter: $filter, owner: $owner) {
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
export const onUpdateUserGroup = /* GraphQL */ `
  subscription OnUpdateUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
    $owner: String
  ) {
    onUpdateUserGroup(filter: $filter, owner: $owner) {
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
export const onDeleteUserGroup = /* GraphQL */ `
  subscription OnDeleteUserGroup(
    $filter: ModelSubscriptionUserGroupFilterInput
    $owner: String
  ) {
    onDeleteUserGroup(filter: $filter, owner: $owner) {
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
