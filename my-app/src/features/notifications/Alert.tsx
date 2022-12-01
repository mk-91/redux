import { isBreakStatement } from 'typescript';

export interface AlertProps {
  type: string;
  message: string;
}

export function Alert(props: AlertProps) {
  // Zadanie 1
  // W zaleznosci od podanego typu wyswietl odpowiedni rodzaj alertu
  // success - zielony alert
  // info - niebieski alert
  // warning - zolty alert
  // error - czerwony alert
  // jezeli nie znajdzie typu to szary alert

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

  return (
    <div className={'alert ' + getAlertType(props.type)}>{props.message}</div>
  );
}
