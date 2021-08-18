import React, { FormEventHandler } from 'react';
import Icon from '../icons/Icon';
import { COLORS } from '../../constants';

const FormUI = ({
    children,
    headerText,
    closableOnClick = undefined,
}: {
    children: React.ClassicElement<any> | React.FC;
    headerText: string;
    closableOnClick?: Function;
}) => {
    return (
        <div className="divide-y">
            <div className="px-6 py-4 flex justify-between items-center">
                <h1 className="text-left text-lg text-bold">{headerText}</h1>
                {typeof closableOnClick !== 'undefined' && (
                    <div
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => {
                            closableOnClick();
                        }}
                    >
                        <Icon
                            name="Close"
                            color={COLORS.GREY_MEDIUM}
                            hoverTextColor="text-grey-dark"
                        />
                    </div>
                )}
            </div>
            <div className="p-6">{children}</div>
        </div>
    );
};

export default FormUI;
