'use client';

import { InsuranceForm } from '@/components/insurance/insurance-form';
import { cropInsuranceFields } from '@/lib/insurance/crop-config';

export default function CropInsurancePage() {
  return (
    <InsuranceForm
      title="Crop Insurance Application"
      description="Apply for weather-indexed crop insurance coverage"
      type="crop"
      fields={cropInsuranceFields}
    />
  );
}