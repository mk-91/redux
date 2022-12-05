// Utwórz nowy kawałek stanu ( slice ) dla Notyfikacji
// Zdefiniuj model Notyfikacji
// Stan powinien przechowywać listę Notyfikacji
// Dodaj akcję dodawania Notyfikacji
// Dodaj akcję usuwania Notyfikacji
// Utwórz selektor który zwróci listę notyfikacji
// Wyświetl powiadomienia z stanu w AlertsList
// Po dodaniu do produktu do koszyka powininno pojawiać się powiadomienie Dodano do koszyka ( success )

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Alert } from './Alert';

export interface Notification {
  type: string;
  message: string;
  id: string;
}
export interface NotificationsState {
  items: Notification[];
}

const initialState: NotificationsState = {
  items: [],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotifications: (
      state,
      action: PayloadAction<{ type: string; message: string }>
    ) => {
      const id = new Date().getTime().toString();
      const { type, message } = action.payload; //destrukturyzacja

      const notification: Notification = {
        id,
        type,
        message,
      };
      state.items.push(notification);
      // Usuwanie pierwszego elementu gdy jest ich więcej niż 3
      // if (state.items.length > 3) {
      //   state.items.shift();
      // }
    },
    removeNotifications: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addNotifications, removeNotifications } =
  notificationsSlice.actions;

export const selectNotifications = (state: RootState) => {
  return state.notifications.items;
};

export const selectLast3Notifications = (state: RootState) =>
  state.notifications.items.slice(-3);

export const notificationsReducer = notificationsSlice.reducer;
