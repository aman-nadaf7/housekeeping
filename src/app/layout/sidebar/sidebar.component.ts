import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="sidebar">
      <div class="sidebar__logo"><img src="/header/upswinglogo.png" alt="aura logo" height="31px" width="30px" class="last" class="select-input"></div>
      <nav class="sidebar__nav">
<button class="sidebar__item"><img src="/header/home.png" alt="aura logo" height="31px" width="30px" class="last" class="select-input"></button>        <button class="sidebar__item"><img src="/header/setting.png" alt="aura logo" height="31px" width="30px" class="last" class="select-input"></button>
        <button class="sidebar__item"><img src="/header/watch.png" alt="aura logo" height="31px" width="30px" class="last" class="select-input"></button>
        
      </nav>
      <div class="sidebar__user">
        <img src="/header/profile.png" alt="aura logo" height="31px" width="30px" class="last" class="select-input">
      </div>
    </aside>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {}
