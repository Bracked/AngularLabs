import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NavigationOption } from '../common/CommonInterfaces';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css'],
})
export class LeftNavBarComponent {
  @Input() set setNavOptions(options: NavigationOption[]) {
    this.navOptions = options;
  }
  @Output() navOptionChangedEvent = new EventEmitter<string>();

  navOptions: NavigationOption[] = [];

  onOptionChanged(id: string) {
    const ignoreChanging = this.navOptions.find(it => it.id === id && it.selected)
    if (!ignoreChanging) {
      this.navOptionChangedEvent.emit(id);
    }
  }
}
