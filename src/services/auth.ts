import { signIn, signUp, signOut, getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

// Sign up a new user
export const signUpUser = async (username: string, password: string, email: string) => {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: { email }
      }
    });
    return { isSignUpComplete, userId, nextStep };
  } catch (error) {
    throw new Error(`Error signing up: ${(error as Error).message}`);
  }
};

// Sign in an existing user
export const signInUser = async (username: string, password: string) => {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    return { isSignedIn, nextStep };
  } catch (error) {
    throw new Error(`Error signing in: ${(error as Error).message}`);
  }
};

// Sign out the current user
export const signOutUser = async () => {
  try {
    await signOut();
  } catch (error) {
    throw new Error(`Error signing out: ${(error as Error).message}`);
  }
};

// Get the current authenticated user
export const getCurrentAuthenticatedUser = async () => {
  try {
    const user = await getCurrentUser();
    const attributes = await fetchUserAttributes();
    return { ...user, attributes };
  } catch (error) {
    throw new Error(`Error getting current user: ${(error as Error).message}`);
  }
};

// Note: These functions are not available in standard Auth API and will need to be handled differently

// Admin confirm sign up (approve user)
export const adminApproveUser = async (username: string) => {
  throw new Error('Admin approval functionality is not available without AdminQueries');
};

// List users
export const listPendingUsers = async () => {
  throw new Error('Listing users functionality is not available without AdminQueries');
};