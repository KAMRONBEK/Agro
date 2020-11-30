import React from 'react'
import { ROUTES } from 'const'
import { CardTransfer } from '../assets'

export interface IService {
  name: string;
  routeName?: ROUTES;
  icon: JSX.Element;
}

export const SERVICES: IService[] = [
  {
    name: 'Онлайн конверсия',
    routeName: ROUTES.SCREEN_ONLINE_CONVERSION,
    icon: <CardTransfer />
  },
  {
    name: 'Перевод на карту',
    routeName: ROUTES.SCREEN_CARD_OPERATIONS,
    icon: <CardTransfer />
  },
  {
    name: 'Онлайн депозиты',
    icon: <CardTransfer />
  },
  {
    name: 'Онлайн кредит',
    icon: <CardTransfer />
  },
  {
    name: 'Одноразовый платеж',
    icon: <CardTransfer />
  },
  {
    name: 'Погашение кредитов',
    icon: <CardTransfer />
  }
]
