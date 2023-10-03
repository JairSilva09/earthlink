import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { EarlinkService } from '../service/earlink.service';
import { ORDERDATA } from '../models/data.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  selectedMenuItem: string = '';
  fidiumCoreData!: ORDERDATA;
  @ViewChild('logosContainer') logosContainer!: ElementRef;
  @ViewChild('menuContainer') menuContainer!: ElementRef;
  showTagClosingOffers: boolean = false;

  constructor(private router: Router,private earlinkService: EarlinkService) {

    this.selectedMenuItem = '';
  }

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedMenuItem = event.url;
      }
    });

    this.earlinkService.currentCartForm$.subscribe((data) => {
      this.fidiumCoreData = data;
      this.showTagClosingOffers =  this.fidiumCoreData.isgGiftCardResponse?true:false;
    })

    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  selectMenuItem(item: string): void {
    this.selectedMenuItem = item;
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const logosHeight = this.logosContainer.nativeElement.offsetHeight;
    const menuContainerHeight = this.menuContainer.nativeElement.offsetHeight;
    this.isMenuFixed = scrollTop > logosHeight - menuContainerHeight;
  }

  isMenuFixed = false;
}
