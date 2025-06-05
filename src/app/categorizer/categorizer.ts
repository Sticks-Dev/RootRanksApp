import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingPriority, Sorter} from '../Sorter';
import { EventManager, EventArgs } from '../EventManager';

@Component({
  selector: 'app-categorizer',
  imports: [CommonModule],
  templateUrl: './categorizer.html',
  styleUrl: './categorizer.css'
})
export class Categorizer {
    @Input() sorter!: Sorter;

    SortingMethod = SortingPriority;

    OnButtonClick(priority: SortingPriority) {
        const args = new ResortArgs(priority);
        EventManager.DispatchEvent(args)
    }

    GetButtonStatus(priority: SortingPriority): string {
        if (priority === Sorter.priority)
            return "inactive_button"
        return "active_button"
    }

}

export class ResortArgs extends EventArgs {
    constructor(public readonly priority: SortingPriority) {
        super();
    }
}