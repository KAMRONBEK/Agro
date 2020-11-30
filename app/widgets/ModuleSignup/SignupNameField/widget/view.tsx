import React from 'react';
import { SignupField } from 'widgets/ModuleSignup';
import { FieldType } from 'types';

export function SignupNameFieldView() {
  return (
    <SignupField
      type={FieldType.Name}
      placeholder="Имя"
    />
  )
}
