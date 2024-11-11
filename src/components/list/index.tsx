import React, { CSSProperties, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

type Props<T> = {
    list?: Array<T>;
    isOpen: boolean;
    children: (body: T) => ReactNode;
    itemClassName?: string;
    itemStyle?: CSSProperties;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'> &
    Omit<MotionProps, 'children'>;

const List = <T = any,>(props: Props<T>) => {
    const { isOpen, list, children, itemClassName, itemStyle, ...rest } = props;
    const [reverse, setRevers] = useState(false);

    useEffect(() => {
        setRevers(!isOpen);
    }, [isOpen]);

    return (
        <AnimatePresence initial={false}>
            {isOpen
                ? list?.map((i, index) => (
                      <motion.li
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: reverse ? index / 10 : (list?.length + 1 - index) / 10 }}
                          className={itemClassName}
                      >
                          {children(i)}
                      </motion.li>
                  ))
                : null}
        </AnimatePresence>
    );
};

export default List;
