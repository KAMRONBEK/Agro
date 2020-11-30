import React from 'react';
import { Signup2Field } from 'widgets/ModuleSignup2';
import { FieldType } from 'types';

export function Signup2PhoneFieldView() {
  return (
    <Signup2Field
      type={FieldType.Phone}
      placeholder="998 (--) --- -- --"
      mask='[000] ([00]) [000] [00] [00]'
      keyboardType='number-pad'
    />
  )
}
