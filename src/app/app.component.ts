import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stardew';

  characters: { name: string, img: string, bio: string}[] = [
    {
      name:"Hailey",
      img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
      bio: "Haley is a villager who lives in Pelican Town. She's one of the twelve characters available to marry. Haley lives with her sister Emily, and together they care for their parents' home, who have been traveling the world for the past two years. Haley is friends with Alex."
    },
    {
      name:"Leah",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
      bio: "Leah is a villager who lives in a small cottage outside Pelican Town. She's one of the twelve characters available to marry. After the Beach Resort on Ginger Island is unlocked, Leah may randomly spend the day there. After leaving the Island at 6pm, Leah will immediately go home to bed. Leah never visits the Resort on Festival days or her checkup day at Harvey's Clinic."
    },
    {
      name:"Abigail",
      img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
      bio: "Abigail is a villager who lives at Pierre's General Store in Pelican Town. She is one of the twelve characters available to marry. Abigail lives with her parents, Pierre and Caroline, in the apartment behind her father's shop. Her mother will comment that she is concerned about Abigail's interests and hobbies."
    },
    {
      name:"Dwarf",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
      bio: "The Dwarf is a valley resident who lives in The Mines. Initially the way is blocked off by an unbreakable rock, just inside the entrance. After upgrading to at least a steel pickaxe, the stone can be broken. A cherry bomb (or stronger bomb) will also break the rock."
    }
  ]

  ngOnInit(){
    console.log(this.characters)
  }
}
