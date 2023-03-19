import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerFoods = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Foods, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly uid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoods = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Foods, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly uid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Foods = LazyLoading extends LazyLoadingDisabled ? EagerFoods : LazyFoods

export declare const Foods: (new (init: ModelInit<Foods>) => Foods) & {
  copyOf(source: Foods, mutator: (draft: MutableModel<Foods>) => MutableModel<Foods> | void): Foods;
}