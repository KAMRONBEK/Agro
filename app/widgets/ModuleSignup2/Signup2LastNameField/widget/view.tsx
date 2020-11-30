import React from 'react';
import { Signup2Field } from 'widgets/ModuleSignup2';
import { FieldType } from 'types';

export function Signup2LastNameFieldView() {
  return (
    <Signup2Field
      type={FieldType.LastName}
      placeholder="Фамилия"
    />
  )
}
