import { ADMIN_ROLE } from "@/app";
import { AppUser } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppState {
  currentUser: AppUser | null;
}

interface AppActions {
  setCurrentUser: (user: AppUser | null) => void;
}

const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      activeLanguage: "en",
      currentUser: null,
      activeScheduledSession: null,

      setCurrentUser: (user) =>
        set(() => ({
          currentUser: user
            ? {
                ...user,
                isAdmin: user.userRole === ADMIN_ROLE,
              }
            : null,
        })),

      updateCurrentUser: (updates: any) =>
        set((state) => ({
          currentUser: state.currentUser
            ? {
                ...state.currentUser,
                ...updates,
                isAdmin: updates.userRole
                  ? updates.userRole === ADMIN_ROLE
                  : state.currentUser.isAdmin,
              }
            : null,
        })),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentUser: state.currentUser,
      }),
    },
  ),
);

export default useAppStore;
