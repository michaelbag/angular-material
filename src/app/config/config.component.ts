import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config: Config;
  configService: ConfigService;
  title: string = 'Конфигурация';
  error: any;

  constructor() {
  }

  ngOnInit() {
    
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        rootURL: data['rootURL'],
        apiKey: data['apiKey']
      });

  this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data }, // success path
        error => this.error = error // error path
      );
  }

}