import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', for attribute component
  // selector: '.app-servers',   for class component
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "Server is not created";
  serverName = 'MyServer';
  serverCreated = false;

  constructor() { 

    setTimeout(() =>{
        this.allowNewServer = true;
    },2000);

  }

  OnCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server is created with name '  + this.serverName;
  }

  ngOnInit() {
  }

}
