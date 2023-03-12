/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SaveFoodInputValues = {
    name?: string;
    description?: string;
    uid?: string;
    photo?: string;
};
export declare type SaveFoodValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    uid?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SaveFoodOverridesProps = {
    SaveFoodGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    uid?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SaveFoodProps = React.PropsWithChildren<{
    overrides?: SaveFoodOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SaveFoodInputValues) => SaveFoodInputValues;
    onSuccess?: (fields: SaveFoodInputValues) => void;
    onError?: (fields: SaveFoodInputValues, errorMessage: string) => void;
    onChange?: (fields: SaveFoodInputValues) => SaveFoodInputValues;
    onValidate?: SaveFoodValidationValues;
} & React.CSSProperties>;
export default function SaveFood(props: SaveFoodProps): React.ReactElement;
