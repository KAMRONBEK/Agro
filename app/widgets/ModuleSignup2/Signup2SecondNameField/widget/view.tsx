import React from 'react';
import { Signup2Field } from 'widgets/ModuleSignup2';
import { FieldType } from 'types';

export function Signup2SecondNameFieldView() {
  return (
    <Signup2Field
      type={FieldType.FatherName}
      placeholder="Отчество"
    />
  )
}
