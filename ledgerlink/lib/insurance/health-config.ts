import { InsuranceField } from './types';

export const healthInsuranceFields: InsuranceField[] = [
  {
    id: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true,
  },
  {
    id: 'dateOfBirth',
    label: 'Date of Birth',
    type: 'date',
    placeholder: 'Select your date of birth',
    required: true,
  },
  {
    id: 'coverageAmount',
    label: 'Coverage Amount (ETH)',
    type: 'number',
    placeholder: 'Enter desired coverage amount',
    required: true,
  },
  {
    id: 'medicalHistory',
    label: 'Medical History',
    type: 'text',
    placeholder: 'Brief medical history',
    required: true,
  },
];