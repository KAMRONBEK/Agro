import React from 'react';
import { Signup2Field } from 'widgets/ModuleSignup2';
import { FieldType } from 'types';

export function Signup2NameFieldView() {
  return (
    <Signup2Field
      type={FieldType.Name}
      placeholder="Имя"
    />
  )
}
