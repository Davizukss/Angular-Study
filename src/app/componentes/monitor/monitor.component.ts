import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent {

  @Input() data: any = '';

  whatsappIcon: string = "./assets/imagens/icons/whatsapp.svg";

  onConectar(monitor : any) {

  }

}
