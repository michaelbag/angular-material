import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config: { [key: string]: string | boolean | number };

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        "rootURL": data['rootURL'],
        "apiKey": data['apiKey']
      });
  }

}