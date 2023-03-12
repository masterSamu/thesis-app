/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Foods } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodsUpdateFormInputValues = {
    name?: string;
    description?: string;
    uid?: string;
    photo?: string;
};
export declare type FoodsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    uid?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodsUpdateFormOverridesProps = {
    FoodsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    uid?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FoodsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    foods?: Foods;
    onSubmit?: (fields: FoodsUpdateFormInputValues) => FoodsUpdateFormInputValues;
    onSuccess?: (fields: FoodsUpdateFormInputValues) => void;
    onError?: (fields: FoodsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodsUpdateFormInputValues) => FoodsUpdateFormInputValues;
    onValidate?: FoodsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FoodsUpdateForm(props: FoodsUpdateFormProps): React.ReactElement;
