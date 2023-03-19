class httpError extends Error {
    constructor (message?: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

/**
 * 401
 * 
 */
export class UnauthorizedError extends httpError {}

/**
 * 409
 * 
 * 
 */
export class ConflictError extends httpError {}

