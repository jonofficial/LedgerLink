'use client';

import { InsuranceForm } from '@/components/insurance/insurance-form';
import { carInsuranceFields } from '@/lib/insurance/car-config';

export default function CarInsurancePage() {
  return (
    <InsuranceForm
      title="Car Insurance Application"
      description="Apply for IoT-integrated car insurance coverage"
      type="car"
      fields={carInsuranceFields}
    />
  );
}