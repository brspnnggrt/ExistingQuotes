/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { System_Threading_WaitHandle } from './System_Threading_WaitHandle';

export type System_Threading_CancellationToken = {
    readonly IsCancellationRequested?: boolean;
    readonly CanBeCanceled?: boolean;
    readonly WaitHandle?: System_Threading_WaitHandle;
}
