import { create } from 'zustand';

export type userTypes = {
  id: string;
  name: string;
  email: string;
  picture: string;
  googleId: string;
};

type authStoreType = {
  user: userTypes | null;
  setUser: (user: userTypes | null) => void;
};

export const useAuthStore = create<authStoreType>()((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
