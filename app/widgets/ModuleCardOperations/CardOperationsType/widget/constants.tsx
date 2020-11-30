import { ISwitchSelectorOption } from 'react-native-switch-selector';
import { OperationType } from 'types';

export const switchOptions: ISwitchSelectorOption[] = [
  {
    label: 'Перевод',
    value: OperationType.Transfer
  },
  {
    label: 'Запрос',
    value: OperationType.Request
  }
]
