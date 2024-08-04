import { ADMIN_ROLE } from "@/app";
import { AppUser, CalendarEvent, CurrentPsyCard } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppState {
  currentUser: AppUser | null;
  activeScheduledSession: CalendarEvent | null;
  currentPsyCard: CurrentPsyCard | null;
}

interface AppActions {
  setCurrentUser: (user: AppUser | null) => void;
  updateCurrentUser: (updates: Partial<AppUser>) => void;
  setActiveScheduledSession: (session: CalendarEvent | null) => void;
  setCurrentPsyCard: (currentPsyCard: CurrentPsyCard | null) => void;
}

const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      activeLanguage: "en",
      currentUser: null,
      activeScheduledSession: null,
      currentPsyCard: null,

      setCurrentUser: (user) =>
        set(() => ({
          currentUser: user
            ? {
                ...user,
                isAdmin: user.userRole === ADMIN_ROLE,
                hasSurvey: !!user.hasSurvey,
              }
            : null,
        })),

      updateCurrentUser: (updates) =>
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

      setActiveScheduledSession: (session) =>
        set(() => ({ activeScheduledSession: session })),

      setCurrentPsyCard(currentPsyCard) {
        set(() => ({ currentPsyCard }));
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        activeScheduledSession: state.activeScheduledSession,
        currentPsyCard: state.currentPsyCard,
        currentUser: state.currentUser,
      }),
    },
  ),
);

export default useAppStore;
