// store.ts
import { ADMIN_ROLE } from "@/app";
import { AppUser } from "@/types";
import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

type SessionStore = {
  session: Session | null;
  user: AppUser | null;
  setSession: (session: Session | null) => void;
  setUser: (user: AppUser | null) => void;
};

const useAuthStore = create<SessionStore>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  user: null,
  setUser: (user) =>
    set(() => ({
      user: user
        ? {
            ...user,
            isAdmin: user.userRole === ADMIN_ROLE, // Assuming 'admin' is a valid UserRole
          }
        : null,
    })),
}));

export default useAuthStore;
