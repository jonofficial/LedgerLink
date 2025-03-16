'use client';

import { InsuranceForm } from '@/components/insurance/insurance-form';
import { healthInsuranceFields } from '@/lib/insurance/health-config';

export default function HealthInsurancePage() {
  return (
    <InsuranceForm
      title="Health Insurance Application"
      description="Apply for blockchain-verified health insurance coverage"
      type="health"
      fields={healthInsuranceFields}
    />
  );
}