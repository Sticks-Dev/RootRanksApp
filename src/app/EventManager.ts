import { Type } from "@angular/core";

export class EventManager {
    private static readonly handlers: Map<Type<EventArgs>, Handler[]> = new Map();

    static AddHandler(eventType: Type<EventArgs>, handler: Handler): void {
        if (!handler || typeof handler !== 'function') {
            throw new Error('Handler must be a function');
        }

        if (!this.handlers.has(eventType)) {
            this.handlers.set(eventType, []);
        }
        this.handlers.get(eventType)?.push(handler);
    }

    static RemoveHandler(handler: Handler): void {
        if (!handler || typeof handler !== 'function') {
            throw new Error('Handler must be a function');
        }

        const args = handler.arguments;
        const handlers = this.handlers.get(args);
        if (handlers) {
            const index = handlers.indexOf(handler);
            if (index !== -1) {
                handlers.splice(index, 1);
            }
        }
    }

    static DispatchEvent(args: EventArgs): void {
        if (!args || !args.type) {
            throw new Error('Event must have a type');
        }

        const handlers = this.handlers.get(args.type);
        for (const handler of handlers || [])
            handler(args);
    }
}

export type Handler = (args: EventArgs) => void;

export abstract class EventArgs {
    constructor() {
        this.type = this.constructor as Type<EventArgs>;
    }
    readonly type: Type<EventArgs>;
}