import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})

export class ConfigComponent implements OnInit {

  configService: ConfigService;
  title: string = 'Конфигурация';
  error: any;
  config: Config;
  showThis: boolean;

  constructor() {
    //    this.config.test = "Hi to all!";
  }

  ngOnInit() {

  }

  showConfig() {
    this.showThis = !this.showThis;
    // this.title = "New title";
    /*
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        rootURL: data['rootURL'],
        apiKey: data['apiKey']
      });
      
      */

    // this.config.test = 'Test message';

    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data },
        error => this.error = error // error path
      );
    this.title = 'ЗАГРУЖЕНО!';
  }

}