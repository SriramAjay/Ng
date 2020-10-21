import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: HeroService) { }

    ngOnInit() {
      this.hero$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.service.getHero(params.get('id')))
      );
    }
    gotoHeros(hero: Hero){
      let heroId = hero ? hero.id : null;
      this.router.navigate(['/heroes',{id:hero.id,foo:'foo'}]);
    }

}
