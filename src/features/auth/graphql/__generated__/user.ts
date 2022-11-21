/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: user
// ====================================================

export interface user_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
}

export interface user {
  user: user_user | null;
}

export interface userVariables {
  id: string;
}
