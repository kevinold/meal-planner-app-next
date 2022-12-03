/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMealUserGroupInput = {
  id?: string | null,
  owner: string,
  inviteCode: string,
  joinedGroup?: string | null,
};

export type ModelMealUserGroupConditionInput = {
  owner?: ModelStringInput | null,
  inviteCode?: ModelStringInput | null,
  joinedGroup?: ModelIDInput | null,
  and?: Array< ModelMealUserGroupConditionInput | null > | null,
  or?: Array< ModelMealUserGroupConditionInput | null > | null,
  not?: ModelMealUserGroupConditionInput | null,
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

export type MealUserGroup = {
  __typename: "MealUserGroup",
  id: string,
  owner: string,
  inviteCode: string,
  joinedGroup?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMealUserGroupInput = {
  id: string,
  owner?: string | null,
  inviteCode?: string | null,
  joinedGroup?: string | null,
};

export type DeleteMealUserGroupInput = {
  id: string,
};

export type CreateMealInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: MealStatus | null,
  lastOccurrence?: string | null,
  nextOccurrence?: string | null,
  freq?: MealFrequency | null,
  group?: string | null,
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


export type ModelMealConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelMealStatusInput | null,
  lastOccurrence?: ModelStringInput | null,
  nextOccurrence?: ModelStringInput | null,
  freq?: ModelMealFrequencyInput | null,
  group?: ModelStringInput | null,
  and?: Array< ModelMealConditionInput | null > | null,
  or?: Array< ModelMealConditionInput | null > | null,
  not?: ModelMealConditionInput | null,
};

export type ModelMealStatusInput = {
  eq?: MealStatus | null,
  ne?: MealStatus | null,
};

export type ModelMealFrequencyInput = {
  eq?: MealFrequency | null,
  ne?: MealFrequency | null,
};

export type Meal = {
  __typename: "Meal",
  id: string,
  title: string,
  description?: string | null,
  status?: MealStatus | null,
  lastOccurrence?: string | null,
  nextOccurrence?: string | null,
  freq?: MealFrequency | null,
  history?: ModelMealHistoryConnection | null,
  group?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelMealHistoryConnection = {
  __typename: "ModelMealHistoryConnection",
  items:  Array<MealHistory | null >,
  nextToken?: string | null,
};

export type MealHistory = {
  __typename: "MealHistory",
  id: string,
  confirmed?: boolean | null,
  createdAt: string,
  updatedAt: string,
  mealHistoryId?: string | null,
};

export type UpdateMealInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: MealStatus | null,
  lastOccurrence?: string | null,
  nextOccurrence?: string | null,
  freq?: MealFrequency | null,
  group?: string | null,
};

export type DeleteMealInput = {
  id: string,
};

export type CreateMealHistoryInput = {
  id?: string | null,
  confirmed?: boolean | null,
  mealHistoryId?: string | null,
};

export type ModelMealHistoryConditionInput = {
  confirmed?: ModelBooleanInput | null,
  and?: Array< ModelMealHistoryConditionInput | null > | null,
  or?: Array< ModelMealHistoryConditionInput | null > | null,
  not?: ModelMealHistoryConditionInput | null,
  mealHistoryId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMealHistoryInput = {
  id: string,
  confirmed?: boolean | null,
  mealHistoryId?: string | null,
};

export type DeleteMealHistoryInput = {
  id: string,
};

export type ModelMealUserGroupFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  inviteCode?: ModelStringInput | null,
  joinedGroup?: ModelIDInput | null,
  and?: Array< ModelMealUserGroupFilterInput | null > | null,
  or?: Array< ModelMealUserGroupFilterInput | null > | null,
  not?: ModelMealUserGroupFilterInput | null,
};

export type ModelMealUserGroupConnection = {
  __typename: "ModelMealUserGroupConnection",
  items:  Array<MealUserGroup | null >,
  nextToken?: string | null,
};

export type ModelMealFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelMealStatusInput | null,
  lastOccurrence?: ModelStringInput | null,
  nextOccurrence?: ModelStringInput | null,
  freq?: ModelMealFrequencyInput | null,
  group?: ModelStringInput | null,
  and?: Array< ModelMealFilterInput | null > | null,
  or?: Array< ModelMealFilterInput | null > | null,
  not?: ModelMealFilterInput | null,
};

export type ModelMealConnection = {
  __typename: "ModelMealConnection",
  items:  Array<Meal | null >,
  nextToken?: string | null,
};

export type ModelMealHistoryFilterInput = {
  id?: ModelIDInput | null,
  confirmed?: ModelBooleanInput | null,
  and?: Array< ModelMealHistoryFilterInput | null > | null,
  or?: Array< ModelMealHistoryFilterInput | null > | null,
  not?: ModelMealHistoryFilterInput | null,
  mealHistoryId?: ModelIDInput | null,
};

export type ModelSubscriptionMealUserGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  inviteCode?: ModelSubscriptionStringInput | null,
  joinedGroup?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMealUserGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealUserGroupFilterInput | null > | null,
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

export type ModelSubscriptionMealFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  lastOccurrence?: ModelSubscriptionStringInput | null,
  nextOccurrence?: ModelSubscriptionStringInput | null,
  freq?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMealFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealFilterInput | null > | null,
};

export type ModelSubscriptionMealHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  confirmed?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionMealHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealHistoryFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateMealUserGroupMutationVariables = {
  input: CreateMealUserGroupInput,
  condition?: ModelMealUserGroupConditionInput | null,
};

export type CreateMealUserGroupMutation = {
  createMealUserGroup?:  {
    __typename: "MealUserGroup",
    id: string,
    owner: string,
    inviteCode: string,
    joinedGroup?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMealUserGroupMutationVariables = {
  input: UpdateMealUserGroupInput,
  condition?: ModelMealUserGroupConditionInput | null,
};

export type UpdateMealUserGroupMutation = {
  updateMealUserGroup?:  {
    __typename: "MealUserGroup",
    id: string,
    owner: string,
    inviteCode: string,
    joinedGroup?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMealUserGroupMutationVariables = {
  input: DeleteMealUserGroupInput,
  condition?: ModelMealUserGroupConditionInput | null,
};

export type DeleteMealUserGroupMutation = {
  deleteMealUserGroup?:  {
    __typename: "MealUserGroup",
    id: string,
    owner: string,
    inviteCode: string,
    joinedGroup?: string | null,
    createdAt: string,
    updatedAt: string,
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
    freq?: MealFrequency | null,
    history?:  {
      __typename: "ModelMealHistoryConnection",
      items:  Array< {
        __typename: "MealHistory",
        id: string,
        confirmed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        mealHistoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    freq?: MealFrequency | null,
    history?:  {
      __typename: "ModelMealHistoryConnection",
      items:  Array< {
        __typename: "MealHistory",
        id: string,
        confirmed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        mealHistoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    freq?: MealFrequency | null,
    history?:  {
      __typename: "ModelMealHistoryConnection",
      items:  Array< {
        __typename: "MealHistory",
        id: string,
        confirmed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        mealHistoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMealHistoryMutationVariables = {
  input: CreateMealHistoryInput,
  condition?: ModelMealHistoryConditionInput | null,
};

export type CreateMealHistoryMutation = {
  createMealHistory?:  {
    __typename: "MealHistory",
    id: string,
    confirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    mealHistoryId?: string | null,
  } | null,
};

export type UpdateMealHistoryMutationVariables = {
  input: UpdateMealHistoryInput,
  condition?: ModelMealHistoryConditionInput | null,
};

export type UpdateMealHistoryMutation = {
  updateMealHistory?:  {
    __typename: "MealHistory",
    id: string,
    confirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    mealHistoryId?: string | null,
  } | null,
};

export type DeleteMealHistoryMutationVariables = {
  input: DeleteMealHistoryInput,
  condition?: ModelMealHistoryConditionInput | null,
};

export type DeleteMealHistoryMutation = {
  deleteMealHistory?:  {
    __typename: "MealHistory",
    id: string,
    confirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    mealHistoryId?: string | null,
  } | null,
};

export type GetMealUserGroupQueryVariables = {
  id: string,
};

export type GetMealUserGroupQuery = {
  getMealUserGroup?:  {
    __typename: "MealUserGroup",
    id: string,
    owner: string,
    inviteCode: string,
    joinedGroup?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMealUserGroupsQueryVariables = {
  filter?: ModelMealUserGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealUserGroupsQuery = {
  listMealUserGroups?:  {
    __typename: "ModelMealUserGroupConnection",
    items:  Array< {
      __typename: "MealUserGroup",
      id: string,
      owner: string,
      inviteCode: string,
      joinedGroup?: string | null,
      createdAt: string,
      updatedAt: string,
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
    freq?: MealFrequency | null,
    history?:  {
      __typename: "ModelMealHistoryConnection",
      items:  Array< {
        __typename: "MealHistory",
        id: string,
        confirmed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        mealHistoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      freq?: MealFrequency | null,
      history?:  {
        __typename: "ModelMealHistoryConnection",
        nextToken?: string | null,
      } | null,
      group?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMealHistoryQueryVariables = {
  id: string,
};

export type GetMealHistoryQuery = {
  getMealHistory?:  {
    __typename: "MealHistory",
    id: string,
    confirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    mealHistoryId?: string | null,
  } | null,
};

export type ListMealHistoriesQueryVariables = {
  filter?: ModelMealHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealHistoriesQuery = {
  listMealHistories?:  {
    __typename: "ModelMealHistoryConnection",
    items:  Array< {
      __typename: "MealHistory",
      id: string,
      confirmed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      mealHistoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMealUserGroupByOwnerQueryVariables = {
  owner: string,
};

export type GetMealUserGroupByOwnerQuery = {
  getMealUserGroupByOwner?:  {
    __typename: "MealUserGroup",
    id: string,
    owner: string,
    inviteCode: string,
    joinedGroup?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMealUserGroupSubscriptionVariables = {
  filter?: ModelSubscriptionMealUserGroupFilterInput | null,
  owner?: string | null,
};

export type OnCreateMealUserGroupSubscription = {
  onCreateMealUserGroup?:  {
    __typename: "MealUserGroup",
    id: string,
    owner: string,
    inviteCode: string,
    joinedGroup?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMealUserGroupSubscriptionVariables = {
  filter?: ModelSubscriptionMealUserGroupFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMealUserGroupSubscription = {
  onUpdateMealUserGroup?:  {
    __typename: "MealUserGroup",
    id: string,
    owner: string,
    inviteCode: string,
    joinedGroup?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMealUserGroupSubscriptionVariables = {
  filter?: ModelSubscriptionMealUserGroupFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMealUserGroupSubscription = {
  onDeleteMealUserGroup?:  {
    __typename: "MealUserGroup",
    id: string,
    owner: string,
    inviteCode: string,
    joinedGroup?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
  owner?: string | null,
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
    freq?: MealFrequency | null,
    history?:  {
      __typename: "ModelMealHistoryConnection",
      items:  Array< {
        __typename: "MealHistory",
        id: string,
        confirmed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        mealHistoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
  owner?: string | null,
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
    freq?: MealFrequency | null,
    history?:  {
      __typename: "ModelMealHistoryConnection",
      items:  Array< {
        __typename: "MealHistory",
        id: string,
        confirmed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        mealHistoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMealSubscriptionVariables = {
  filter?: ModelSubscriptionMealFilterInput | null,
  owner?: string | null,
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
    freq?: MealFrequency | null,
    history?:  {
      __typename: "ModelMealHistoryConnection",
      items:  Array< {
        __typename: "MealHistory",
        id: string,
        confirmed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        mealHistoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMealHistorySubscriptionVariables = {
  filter?: ModelSubscriptionMealHistoryFilterInput | null,
};

export type OnCreateMealHistorySubscription = {
  onCreateMealHistory?:  {
    __typename: "MealHistory",
    id: string,
    confirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    mealHistoryId?: string | null,
  } | null,
};

export type OnUpdateMealHistorySubscriptionVariables = {
  filter?: ModelSubscriptionMealHistoryFilterInput | null,
};

export type OnUpdateMealHistorySubscription = {
  onUpdateMealHistory?:  {
    __typename: "MealHistory",
    id: string,
    confirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    mealHistoryId?: string | null,
  } | null,
};

export type OnDeleteMealHistorySubscriptionVariables = {
  filter?: ModelSubscriptionMealHistoryFilterInput | null,
};

export type OnDeleteMealHistorySubscription = {
  onDeleteMealHistory?:  {
    __typename: "MealHistory",
    id: string,
    confirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    mealHistoryId?: string | null,
  } | null,
};
