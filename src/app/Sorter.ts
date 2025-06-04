import { UserData } from "./UserData";

export type Handler = (priority: SortingPriority) => void;

export enum SortingPriority {
    Solo = 'solo',
    Duo = 'duo',
    Trio = 'trio',
    Squad = 'squad',
}

export class Sorter {
    static MergeSort(priority: SortingPriority, users: (UserData|undefined)[]): UserData[] {
        let a = users.slice(0, users.length/2) as UserData[]
        let b = users.slice(users.length/2, users.length) as UserData[]
        
        if (a.length > 1)
            a = this.MergeSort(priority, a);
        if (b.length > 1)
            b = this.MergeSort(priority, b);

        let count: number = 0;
        while (a.length > 0 && b.length > 0) {
            let smallestUser:UserData|undefined;

            if (Number(a[0][priority.toString()]) > Number(b[0][priority.toString()]))
                smallestUser = a.shift();
            else
                smallestUser = b.shift()
            
            users[count] = smallestUser;
            count++;
        }
        while (a.length > 0) {
            users[count] = a.shift();
            count++;
        }
        while (b.length > 0) {
            users[count] = b.shift();
            count++;
        }
        
        return users as UserData[];
    }
    priority: SortingPriority = SortingPriority.Solo;

    handlers: Handler[] = [];

    AddHandler(handler: Handler) {
        this.handlers[this.handlers.length] = handler;
    }

    RemoveHandler(handler: Handler) {
        for (let i: number = 0; i < this.handlers.length; i++) {
            if (this.handlers[i] === handler) 
                this.handlers.splice(i, 1);
        }
    }

    ExecuteHandlers(priority: SortingPriority) {
        this.handlers.forEach(handler => {
            handler(priority);
        });
        this.priority = priority;
    }
}
