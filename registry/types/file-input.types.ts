import { ControllerRenderProps } from 'react-hook-form';
import { InputProps } from './generic.types';

export interface FileInputProps extends InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, any>;
  showDropzone?: boolean;
}
