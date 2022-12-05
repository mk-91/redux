import { useAppSelector } from '../../app/hooks';
import { Alert } from './Alert';
import {
  selectNotifications,
  Notification,
  selectLast3Notifications,
} from './notificationsSlice';

export function AlertList() {
  const alerts: Notification[] = useAppSelector(selectLast3Notifications);

  // const alerts = [
  //   { message: 'Pierwsz alert', type: 'success' },
  //   { message: 'Drugi alert', type: 'info' },
  //   { message: 'Trzeci alert', type: 'warning' },
  //   { message: 'Czwarty alert', type: 'error' },
  //   { message: 'Piąty alert', type: '' },
  // ];

  return (
    <div>
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          id={alert.id}
          type={alert.type}
          message={alert.message}
        />
      ))}
    </div>
  );
}
