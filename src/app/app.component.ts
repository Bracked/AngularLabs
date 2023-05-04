import {Component, HostListener, OnInit} from '@angular/core';
import { NavigationOption } from './common/CommonInterfaces';
import {MatDialog} from "@angular/material/dialog";
import {LogoDialogComponent} from "./logo-dialog/logo-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showHello = false;

  changeDataView = true;

  changeDataViewText = 'Cards view';

  navigationOptions: NavigationOption[] = [
    {
      id: '1',
      name: 'Home',
      information: '',
      selected: true,
      link: '/home',
    },
    {
      id: '2',
      name: 'Page 1',
      information: 'Page 1 content',
      selected: false,
      link: '/page1',
    },
    {
      id: '3',
      name: 'Page 2',
      information: 'Page 2 content',
      selected: false,
      link: '/page2',
    },
    {
      id: '4',
      name: 'Page 3',
      information: 'Page 3 content',
      selected: false,
      link: '/page3',
    },{
      id: '5',
      name: 'Tab page',
      information: '',
      selected: false,
      link: '/tabs',
    },
    {
      id: '6',
      name: 'User Form',
      information: '',
      selected: false,
      link: '/user-page',
    },
    
  ];

  fHelloWorldStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    width: '100%',
    height: '100vh',
    'background-color': '#00000044',
  };

  people = [
    {
      "id": 726,
      "name": "Alice",
      "type": 2,
      "show": false
    },
    
    {
      "id": 842,
      "name": "John",
      "type": 1,
      "show": true
    }
    ,
    {
      "id": 555,
      "name": "Max",
      "type": 2,
      "show": true
    }
    ,
    {
      "id": 193,
      "name": "Sarah",
      "type": 0,
      "show": true
    },
    {
      "id": 374,
      "name": "Elena",
      "type": 1,
      "show": false
    },    
  ];

  mobile = false

  @HostListener('window:resize', ['$event'])
  onResize(_: any) {
    this.mobile = window.innerWidth <= 700
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.navigationOptions.forEach(
      (option) => (option.selected = option.link === location.pathname)
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoDialogComponent, {
      data: { employees: this.people },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Closed")
    });
  }

  showOrHideFullscreenHello() {
    this.openDialog()
  }

  onNavOptionClicked(id: string) {
    this.navigationOptions.forEach(
      (option) => (option.selected = option.id === id)
    );
  }

  onChangedDataView() {
    this.changeDataView = !this.changeDataView;
    this.changeDataViewText = this.changeDataView ? 'Card View' : 'List View';
  }
}
