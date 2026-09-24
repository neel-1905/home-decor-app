export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string | null;
  dob: string | null;
  isOnboardingComplete: boolean;
  createdAt: string;
  updatedAt: string;
}
