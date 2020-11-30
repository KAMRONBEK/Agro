import React from 'react';
import { SignupField } from 'widgets/ModuleSignup';
import { FieldType } from 'types';

export function SignupLastNameFieldView() {
  return (
    <SignupField
      type={FieldType.LastName}
      placeholder="Фамилия"
    />
  )
}
