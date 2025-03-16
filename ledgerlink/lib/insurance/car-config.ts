import { InsuranceField } from './types';

export const carInsuranceFields: InsuranceField[] = [
  {
    id: 'vehicleMake',
    label: 'Vehicle Make',
    type: 'text',
    placeholder: 'Enter vehicle make',
    required: true,
  },
  {
    id: 'vehicleModel',
    label: 'Vehicle Model',
    type: 'text',
    placeholder: 'Enter vehicle model',
    required: true,
  },
  {
    id: 'vehicleYear',
    label: 'Vehicle Year',
    type: 'number',
    placeholder: 'Enter vehicle year',
    required: true,
  },
  {
    id: 'iotDeviceId',
    label: 'IoT Device ID',
    type: 'text',
    placeholder: 'Enter Raspberry Pi device ID',
    required: true,
  },
];