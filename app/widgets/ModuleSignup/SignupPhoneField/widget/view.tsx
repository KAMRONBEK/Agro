import React from 'react';
import { SignupField } from 'widgets/ModuleSignup';
import { FieldType } from 'types';

export function SignupPhoneFieldView() {
  return (
    <SignupField
      type={FieldType.Phone}
      placeholder="998 (--) --- -- --"
      mask='[000] ([00]) [000] [00] [00]'
    />
  )
}
