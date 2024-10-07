import { ForwardRefExoticComponent } from 'react';

import InputComponent from './input';
import * as InputTypes from './interface';
import InputUploader from './uploader';
import use from './use';

type CompoundedComponent = ForwardRefExoticComponent<InputTypes.IProps> & {
    Uploader: typeof InputUploader;
    use: typeof use;
};

const Input = InputComponent as CompoundedComponent;
Input.use = use;
Input.Uploader = InputUploader;

export type { InputTypes };
export default Input;
