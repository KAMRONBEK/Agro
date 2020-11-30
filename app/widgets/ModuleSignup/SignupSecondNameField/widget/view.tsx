import React from 'react';
import { SignupField } from 'widgets/ModuleSignup';
import { FieldType } from 'types';

export function SignupSecondNameFieldView() {
  return (
    <SignupField
      type={FieldType.FatherName}
      placeholder="Отчество"
    />
  )
}
