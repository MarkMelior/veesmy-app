import { create } from 'zustand';

interface ILoadingStore {
  loading: boolean
  setLoading: (loading: boolean) => void
};

export const useLoading = create<ILoadingStore>((set) => ({
  loading: false,
  setLoading: (loading) => {
    set({ loading });
  },
}));
