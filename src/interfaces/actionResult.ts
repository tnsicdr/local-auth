export interface IOperationResult<T> {
    success: boolean;
    message?: string;
    result?: T;
}