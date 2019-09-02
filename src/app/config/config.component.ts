import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from './config.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers: [ConfigService, MessageService]
})

export class ConfigComponent implements OnInit {

  title: string = 'Конфигурация';
  error: any;
  config: Config;
  showThis: boolean;
  configFile: any;

  constructor(private configService: ConfigService, private messageService: MessageService) { }

  ngOnInit() {

  }

  showConfig() {
    this.showThis = !this.showThis;
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data },
        error => this.error = error // error path
      );
    // this.title = 'ЗАГРУЖЕНО!';
  }

  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error);
    this.messageService.add(this.error);
    this.messageService.add("test");
  }

  clear() {
    this.messageService.clear();
    this.error = undefined;
    this.messageService.add ("Сообщения очищены.");
    this.showThis = !this.showThis;

  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ...resp.body };
      });
  }

}