import React, { ReactNode, useRef } from 'react';

interface IUploaderProps {
    children: ReactNode;
    multiple?: boolean;
    accept: 'img';
    onchange: (file: File) => void;
}

const Uploader = (props: IUploaderProps) => {
    const { children, multiple, accept, onchange } = props;
    const inputRef = useRef<HTMLInputElement | null>(null);

    const wrapperClick = () => {
        if ('click' in inputRef.current) {
            inputRef.current.click();
        }
    };

    const accepts: Record<IUploaderProps['accept'], string> = {
        img: '.png, .jpg',
    };

    const handleOnchange = (target: HTMLInputElement) => {
        if (target.files?.length) {
            const data = new FormData();
            const file = target?.files[0];
            data.append(accept, file);
            onchange(file);
        }
    };

    return (
        <div onClick={wrapperClick}>
            <input
                accept={accepts[accept]}
                multiple={!!multiple}
                ref={inputRef}
                type={'file'}
                style={{ display: 'none' }}
                onChange={(e) => handleOnchange(e.target)}
            />
            {children}
        </div>
    );
};

export default Uploader;
