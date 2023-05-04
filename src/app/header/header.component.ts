import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() username = '';

  @Input() mobile = false

  @Output() logoClickedEvent = new EventEmitter<void>();

  onLogoClicked() {
    console.log("G")
    this.logoClickedEvent.emit()
  }

}
