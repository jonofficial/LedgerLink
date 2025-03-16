import { InsuranceField } from './types';

export const cropInsuranceFields: InsuranceField[] = [
  {
    id: 'cropType',
    label: 'Crop Type',
    type: 'text',
    placeholder: 'Enter crop type',
    required: true,
  },
  {
    id: 'landArea',
    label: 'Land Area (Acres)',
    type: 'number',
    placeholder: 'Enter land area',
    required: true,
  },
  {
    id: 'location',
    label: 'Farm Location',
    type: 'text',
    placeholder: 'Enter farm location',
    required: true,
  },
  {
    id: 'weatherStationId',
    label: 'Weather Station ID',
    type: 'text',
    placeholder: 'Enter nearest weather station ID',
    required: true,
  },
];