/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserGroupInput = {
  id?: string | null,
  owners?: Array< string | null > | null,
};

export type ModelUserGroupConditionInput = {
  owners?: ModelStringInput | null,
  and?: Array< ModelUserGroupConditionInput | null > | null,
  or?: Array< ModelUserGroupConditionInput | null > | null,
  not?: ModelUserGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserGroup = {
  __typename: "UserGroup",
  id: string,
  meals?: ModelMealConnection | null,
  owners?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelMealConnection = {
  __typename: "ModelMealConnection",
  items:  Array<Meal | null >,
  nextToken?: string | null,
};

export type Meal = {
  __typename: "Meal",
  id: string,
  title: string,
  description?: string | null,
  status?: MealStatus | null,
  lastOccurrence?: string | null,
  nextOccurrence?: string | null,
  timesHad?: number | null,
  freq?: MealFrequency | null,
  instances?: ModelMealInstanceConnection | null,
  userGroupId: string,
  createdAt: string,
  updatedAt: string,
  userGroupMealsId?: string | null,
};

export enum MealStatus {
  PENDING = "PENDING",
  CURRENT = "CURRENT",
  SCHEDULED = "SCHEDULED",
  PAUSED = "PAUSED",
}


export enum MealFrequency {
  WEEKLY = "WEEKLY",
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY",
  BIMONTHLY = "BIMONTHLY",
  QUARTERLY = "QUARTERLY",
  BIQUARTERLY = "BIQUARTERLY",
}


export type ModelMealInstanceConnection = {
  __typename: "ModelMealInstanceConnection",
  items:  Array<MealInstance | null >,
  nextToken?: string | null,
};

export type MealInstance = {
  __typename: "MealInstance",
  id: string,
  mealId: string,
  createdAt: string,
  updatedAt: string,
  mealInstancesId?: string | null,
};

export type UpdateUserGroupInput = {
  id: string,
  owners?: Array< string | null > | null,
};

export type DeleteUserGroupInput = {
  id: string,
};

export type CreateMealInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: MealStatus | null,
  lastOccurrence?: string | null,
  nextOccurrence?: string | null,
  timesHad?: number | null,
  freq?: MealFrequency | null,
  userGroupId: string,
  userGroupMealsId?: string | null,
};

export type ModelMealConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelMealStatusInput | null,
  lastOccurrence?: ModelStringInput | null,
  nextOccurrence?: ModelStringInput | null,
  timesHad?: ModelIntInput | null,
  freq?: ModelMealFrequencyInput | null,
  userGroupId?: ModelIDInput | null,
  and?: Array< ModelMealConditionInput | null > | null,
  or?: Array< ModelMealConditionInput | null > | null,
  not?: ModelMealConditionInput | null,
  userGroupMealsId?: ModelIDInput | null,
};

export type ModelMealStatusInput = {
  eq?: MealStatus | null,
  ne?: MealStatus | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelMealFrequencyInput = {
  eq?: MealFrequency | null,
  ne?: MealFrequency | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMealInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: MealStatus | null,
  lastOccurrence?: string | null,
  nextOccurrence?: string | null,
  timesHad?: number | null,
  freq?: MealFrequency | null,
  userGroupId?: string | null,
  userGroupMealsId?: string | null,
};

export type DeleteMealInput = {
  id: string,
};

export type CreateMealInstanceInput = {
  id?: string | null,
  mealId: string,
  mealInstancesId?: string | null,
};

export type ModelMealInstanceConditionInput = {
  mealId?: ModelIDInput | null,
  and?: Array< ModelMealInstanceConditionInput | null > | null,
  or?: Array< ModelMealInstanceConditionInput | null > | null,
  not?: ModelMealInstanceConditionInput | null,
  mealInstancesId?: ModelIDInput | null,
};

export type UpdateMealInstanceInput = {
  id: string,
  mealId?: string | null,
  mealInstancesId?: string | null,
};

export type DeleteMealInstanceInput = {
  id: string,
};

export type ModelUserGroupFilterInput = {
  id?: ModelIDInput | null,
  owners?: ModelStringInput | null,
  and?: Array< ModelUserGroupFilterInput | null > | null,
  or?: Array< ModelUserGroupFilterInput | null > | null,
  not?: ModelUserGroupFilterInput | null,
};

export type ModelUserGroupConnection = {
  __typename: "ModelUserGroupConnection",
  items:  Array<UserGroup | null >,
  nextToken?: string | null,
};

export type ModelMealFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelMealStatusInput | null,
  lastOccurrence?: ModelStringInput | null,
  nextOccurrence?: ModelStringInput | null,
  timesHad?: ModelIntInput | null,
  freq?: ModelMealFrequencyInput | null,
  userGroupId?: ModelIDInput | null,
  and?: Array< ModelMealFilterInput | null > | null,
  or?: Array< ModelMealFilterInput | null > | null,
  not?: ModelMealFilterInput | null,
  userGroupMealsId?: ModelIDInput | null,
};

export type ModelMealInstanceFilterInput = {
  id?: ModelIDInput | null,
  mealId?: ModelIDInput | null,
  and?: Array< ModelMealInstanceFilterInput | null > | null,
  or?: Array< ModelMealInstanceFilterInput | null > | null,
  not?: ModelMealInstanceFilterInput | null,
  mealInstancesId?: ModelIDInput | null,
};

export type ModelSubscriptionUserGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserGroupFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMealFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  lastOccurrence?: ModelSubscriptionStringInput | null,
  nextOccurrence?: ModelSubscriptionStringInput | null,
  timesHad?: ModelSubscriptionIntInput | null,
  freq?: ModelSubscriptionStringInput | null,
  userGroupId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMealFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMealInstanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mealId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMealInstanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealInstanceFilterInput | null > | null,
};

export type CreateUserGroupMutationVariables = {
  input: CreateUserGroupInput,
  condition?: ModelUserGroupConditionInput | null,
};

export type CreateUserGroupMutation = {
  createUserGroup?:  {
    __typename: "UserGroup",
    id: string,
    meals?:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description?: string | null,
        status?: MealStatus | null,
        lastOccurrence?: string | null,
        nextOccurrence?: string | null,
        timesHad?: number | null,
        freq?: MealFrequency | null,
        userGroupId: string,
        createdAt: string,
        updatedAt: string,
        userGroupMealsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owners?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserGroupMutationVariables = {
  input: UpdateUserGroupInput,
  condition?: ModelUserGroupConditionInput | null,
};

export type UpdateUserGroupMutation = {
  updateUserGroup?:  {
    __typename: "UserGroup",
    id: string,
    meals?:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description?: string | null,
        status?: MealStatus | null,
        lastOccurrence?: string | null,
        nextOccurrence?: string | null,
        timesHad?: number | null,
        freq?: MealFrequency | null,
        userGroupId: string,
        createdAt: string,
        updatedAt: string,
        userGroupMealsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owners?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserGroupMutationVariables = {
  input: DeleteUserGroupInput,
  condition?: ModelUserGroupConditionInput | null,
};

export type DeleteUserGroupMutation = {
  deleteUserGroup?:  {
    __typename: "UserGroup",
    id: string,
    meals?:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description?: string | null,
        status?: MealStatus | null,
        lastOccurrence?: string | null,
        nextOccurrence?: string | null,
        timesHad?: number | null,
        freq?: MealFrequency | null,
        userGroupId: string,
        createdAt: string,
        updatedAt: string,
        userGroupMealsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owners?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMealMutationVariables = {
  input: CreateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type CreateMealMutation = {
  createMeal?:  {
    __typename: "Meal",
    id: string,
    title: string,
    description?: string | null,
    status?: MealStatus | null,
    lastOccurrence?: string | null,
    nextOccurrence?: string | null,
    timesHad?: number | null,
    freq?: MealFrequency | null,
    instances?:  {
      __typename: "ModelMealInstanceConnection",
      items:  Array< {
        __typename: "MealInstance",
        id: string,
        mealId: string,
        createdAt: string,
        updatedAt: string,
        mealInstancesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userGroupId: string,
    createdAt: string,
    updatedAt: string,
    userGroupMealsId?: string | null,
  } | null,
};

export type UpdateMealMutationVariables = {
  input: UpdateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type UpdateMealMutation = {
  updateMeal?:  {
    __typename: "Meal",
    id: string,
    title: string,
    description?: string | null,
    status?: MealStatus | null,
    lastOccurrence?: string | null,
    nextOccurrence?: string | null,
    timesHad?: number | null,
    freq?: MealFrequency | null,
    instances?:  {
      __typename: "ModelMealInstanceConnection",
      items:  Array< {
        __typename: "MealInstance",
        id: string,
        mealId: string,
        createdAt: string,
        updatedAt: string,
        mealInstancesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userGroupId: string,
    createdAt: string,
    updatedAt: string,
    userGroupMealsId?: string | null,
  } | null,
};

export type DeleteMealMutationVariables = {
  input: DeleteMealInput,
  condition?: ModelMealConditionInput | null,
};

export type DeleteMealMutation = {
  deleteMeal?:  {
    __typename: "Meal",
    id: string,
    title: string,
    description?: string | null,
    status?: MealStatus | null,
    lastOccurrence?: string | null,
    nextOccurrence?: string | null,
    timesHad?: number | null,
    freq?: MealFrequency | null,
    instances?:  {
      __typename: "ModelMealInstanceConnection",
      items:  Array< {
        __typename: "MealInstance",
        id: string,
        mealId: string,
        createdAt: string,
        updatedAt: string,
        mealInstancesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userGroupId: string,
    createdAt: string,
    updatedAt: string,
    userGroupMealsId?: string | null,
  } | null,
};

export type CreateMealInstanceMutationVariables = {
  input: CreateMealInstanceInput,
  condition?: ModelMealInstanceConditionInput | null,
};

export type CreateMealInstanceMutation = {
  createMealInstance?:  {
    __typename: "MealInstance",
    id: string,
    mealId: string,
    createdAt: string,
    updatedAt: string,
    mealInstancesId?: string | null,
  } | null,
};

export type UpdateMealInstanceMutationVariables = {
  input: UpdateMealInstanceInput,
  condition?: ModelMealInstanceConditionInput | null,
};

export type UpdateMealInstanceMutation = {
  updateMealInstance?:  {
    __typename: "MealInstance",
    id: string,
    mealId: string,
    createdAt: string,
    updatedAt: string,
    mealInstancesId?: string | null,
  } | null,
};

export type DeleteMealInstanceMutationVariables = {
  input: DeleteMealInstanceInput,
  condition?: ModelMealInstanceConditionInput | null,
};

export type DeleteMealInstanceMutation = {
  deleteMealInstance?:  {
    __typename: "MealInstance",
    id: string,
    mealId: string,
    createdAt: string,
    updatedAt: string,
    mealInstancesId?: string | null,
  } | null,
};

export type GetUserGroupQueryVariables = {
  id: string,
};

export type GetUserGroupQuery = {
  getUserGroup?:  {
    __typename: "UserGroup",
    id: string,
    meals?:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description?: string | null,
        status?: MealStatus | null,
        lastOccurrence?: string | null,
        nextOccurrence?: string | null,
        timesHad?: number | null,
        freq?: MealFrequency | null,
        userGroupId: string,
        createdAt: string,
        updatedAt: string,
        userGroupMealsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owners?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserGroupsQueryVariables = {
  filter?: ModelUserGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserGroupsQuery = {
  listUserGroups?:  {
    __typename: "ModelUserGroupConnection",
    items:  Array< {
      __typename: "UserGroup",
      id: string,
      meals?:  {
        __typename: "ModelMealConnection",
        nextToken?: string | null,
      } | null,
      owners?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMealQueryVariables = {
  id: string,
};

export type GetMealQuery = {
  getMeal?:  {
    __typename: "Meal",
    id: string,
    title: string,
    description?: string | null,
    status?: MealStatus | null,
    lastOccurrence?: string | null,
    nextOccurrence?: string | null,
    timesHad?: number | null,
    freq?: MealFrequency | null,
    instances?:  {
      __typename: "ModelMealInstanceConnection",
      items:  Array< {
        __typename: "MealInstance",
        id: string,
        mealId: string,
        createdAt: string,
        updatedAt: string,
        mealInstancesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userGroupId: string,
    createdAt: string,
    updatedAt: string,
    userGroupMealsId?: string | null,
  } | null,
};

export type ListMealsQueryVariables = {
  filter?: ModelMealFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealsQuery = {
  listMeals?:  {
    __typename: "ModelMealConnection",
    items:  Array< {
      __typename: "Meal",
      id: string,
      title: string,
      description?: string | null,
      status?: MealStatus | null,
      lastOccurrence?: string | null,
      nextOccurrence?: string | null,
      timesHad?: number | null,
      freq?: MealFrequency | null,
      instances?:  {
        __typename: "ModelMealInstanceConnection",
        nextToken?: string | null,
      } | null,
      userGroupId: string,
      createdAt: string,
      updatedAt: string,
      userGroupMealsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMealInstanceQueryVariables = {
  id: string,
};

export type GetMealInstanceQuery = {
  getMealInstance?:  {
    __typename: "MealInstance",
    id: string,
    mealId: string,
    createdAt: string,
    updatedAt: string,
    mealInstancesId?: string | null,
  } | null,
};

export type ListMealInstancesQueryVariables = {
  filter?: ModelMealInstanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealInstancesQuery = {
  listMealInstances?:  {
    __typename: "ModelMealInstanceConnection",
    items:  Array< {
      __typename: "MealInstance",
      id: string,
      mealId: string,
      createdAt: string,
      updatedAt: string,
      mealInstancesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserGroupSubscriptionVariables = {
  filter?: ModelSubscriptionUserGroupFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserGroupSubscription = {
  onCreateUserGroup?:  {
    __typename: "UserGroup",
    id: string,
    meals?:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description?: string | null,
        status?: MealStatus | null,
        lastOccurrence?: string | null,
        nextOccurrence?: string | null,
        timesHad?: number | null,
        freq?: MealFrequency | null,
        userGroupId: string,
        createdAt: string,
        updatedAt: string,
        userGroupMealsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owners?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserGroupSubscriptionVariables = {
  filter?: ModelSubscriptionUserGroupFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserGroupSubscription = {
  onUpdateUserGroup?:  {
    __typename: "UserGroup",
    id: string,
    meals?:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description?: string | null,
        status?: MealStatus | null,
        lastOccurrence?: string | null,
        nextOccurrence?: string | null,
        timesHad?: number | null,
        freq?: MealFrequency | null,
        userGroupId: string,
        createdAt: string,
        updatedAt: string,
        userGroupMealsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owners?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserGroupSubscriptionVariables = {
  filter?: ModelSubscriptionUserGroupFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserGroupSubscription = {
  onDeleteUserGroup?:  {
    __typename: "UserGroup",
    id: string,
    meals?:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description?: string | null,
        status?: MealStatus | null,
        lastOccurrence?: string | null,
        nextOccurrence?: string | null,
        timesHad?: number | null,
        freq?: MealFrequency | null,
        userGroupId: string,
        createdAt: string,
        updatedAt: string,
        userGroupMealsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owners?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
};

export type OnCreateMealSubscription = {
  onCreateMeal?:  {
    __typename: "Meal",
    id: string,
    title: string,
    description?: string | null,
    status?: MealStatus | null,
    lastOccurrence?: string | null,
    nextOccurrence?: string | null,
    timesHad?: number | null,
    freq?: MealFrequency | null,
    instances?:  {
      __typename: "ModelMealInstanceConnection",
      items:  Array< {
        __typename: "MealInstance",
        id: string,
        mealId: string,
        createdAt: string,
        updatedAt: string,
        mealInstancesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userGroupId: string,
    createdAt: string,
    updatedAt: string,
    userGroupMealsId?: string | null,
  } | null,
};

export type OnUpdateMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
};

export type OnUpdateMealSubscription = {
  onUpdateMeal?:  {
    __typename: "Meal",
    id: string,
    title: string,
    description?: string | null,
    status?: MealStatus | null,
    lastOccurrence?: string | null,
    nextOccurrence?: string | null,
    timesHad?: number | null,
    freq?: MealFrequency | null,
    instances?:  {
      __typename: "ModelMealInstanceConnection",
      items:  Array< {
        __typename: "MealInstance",
        id: string,
        mealId: string,
        createdAt: string,
        updatedAt: string,
        mealInstancesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userGroupId: string,
    createdAt: string,
    updatedAt: string,
    userGroupMealsId?: string | null,
  } | null,
};

export type OnDeleteMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
};

export type OnDeleteMealSubscription = {
  onDeleteMeal?:  {
    __typename: "Meal",
    id: string,
    title: string,
    description?: string | null,
    status?: MealStatus | null,
    lastOccurrence?: string | null,
    nextOccurrence?: string | null,
    timesHad?: number | null,
    freq?: MealFrequency | null,
    instances?:  {
      __typename: "ModelMealInstanceConnection",
      items:  Array< {
        __typename: "MealInstance",
        id: string,
        mealId: string,
        createdAt: string,
        updatedAt: string,
        mealInstancesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userGroupId: string,
    createdAt: string,
    updatedAt: string,
    userGroupMealsId?: string | null,
  } | null,
};

export type OnCreateMealInstanceSubscriptionVariables = {
  filter?: ModelSubscriptionMealInstanceFilterInput | null,
};

export type OnCreateMealInstanceSubscription = {
  onCreateMealInstance?:  {
    __typename: "MealInstance",
    id: string,
    mealId: string,
    createdAt: string,
    updatedAt: string,
    mealInstancesId?: string | null,
  } | null,
};

export type OnUpdateMealInstanceSubscriptionVariables = {
  filter?: ModelSubscriptionMealInstanceFilterInput | null,
};

export type OnUpdateMealInstanceSubscription = {
  onUpdateMealInstance?:  {
    __typename: "MealInstance",
    id: string,
    mealId: string,
    createdAt: string,
    updatedAt: string,
    mealInstancesId?: string | null,
  } | null,
};

export type OnDeleteMealInstanceSubscriptionVariables = {
  filter?: ModelSubscriptionMealInstanceFilterInput | null,
};

export type OnDeleteMealInstanceSubscription = {
  onDeleteMealInstance?:  {
    __typename: "MealInstance",
    id: string,
    mealId: string,
    createdAt: string,
    updatedAt: string,
    mealInstancesId?: string | null,
  } | null,
};
