import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingPriority, Sorter} from '../Sorter';

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
        this.sorter.ExecuteHandlers(priority)
    }

    GetButtonStatus(priority: SortingPriority): string {
        if (priority === this.sorter.priority)
            return "inactive_button"
        return "active_button"
    }

}