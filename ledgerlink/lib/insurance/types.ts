export interface InsuranceField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export interface InsuranceApplication {
  type: 'health' | 'car' | 'crop';
  applicant: string;
  data: Record<string, string>;
  timestamp: number;
}