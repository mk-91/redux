import { isBreakStatement } from 'typescript';
import { useAppDispatch } from '../../app/hooks';
import { removeNotifications } from './notificationsSlice';

export interface AlertProps {
  type: string;
  message: string;
  id: string;
}

export function Alert(props: AlertProps) {
  // Zadanie 1
  // W zaleznosci od podanego typu wyswietl odpowiedni rodzaj alertu
  // success - zielony alert
  // info - niebieski alert
  // warning - zolty alert
  // error - czerwony alert
  // jezeli nie znajdzie typu to szary alert
  const dispatch = useAppDispatch();

  const getAlertType = (type: string): string => {
    switch (type) {
      case 'success':
        return 'alert-success';
      case 'info':
        return 'alert-info';
      case 'warning':
        return 'alert-warning';
      case 'error':
        return 'alert-danger';
      default:
        return 'alert-dark';
    }
  };

  const handleRemoveClick = (id: string) =>
    dispatch(removeNotifications({ id }));

  return (
    <div
      className={
        'alert alert-dismissible z-index-0 ' + getAlertType(props.type)
      }
    >
      <strong>{props.message}</strong>
      <button
        type='button'
        className={'btn-close '}
        onClick={() => handleRemoveClick(props.id)}
      ></button>
    </div>
  );
}
