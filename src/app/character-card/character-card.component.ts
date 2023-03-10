import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})

export class CharacterCardComponent {

  @Input()
  character: Character = {name:"", img: "", bio:""};
  cardVertical: boolean = false;
  
  constructor(){}

  ngOnInit(){
    console.log(this.character)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if(window.innerWidth < 755)
      this.cardVertical = true;
    else
      this.cardVertical = false;
  }

}

interface Character{
  name: string,
  img: string;
  bio: string
}
