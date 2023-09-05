import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', 'small-card.component.respon.css']
})
export class SmallCardComponent {
  @Input()
  photoCOver:string = '';
  @Input()
  cardTitle:string ='';
  @Input()
  Id:string = '0';
  constructor(){}
}
