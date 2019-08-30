import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from './config.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers: [ConfigService]
})

export class ConfigComponent implements OnInit {

  title: string = 'Конфигурация';
  error: any;
  config: Config;
  showThis: boolean;
  configFile: any;

  constructor(private configService: ConfigService) {
    
  }

  ngOnInit() {

  }

  showConfig() {
    this.showThis = !this.showThis;
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data },
        error => this.error = error // error path
      );
    this.title = 'ЗАГРУЖЕНО!';
  }

  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error);
  }

  clear() {
    this.error = undefined;
  }

}