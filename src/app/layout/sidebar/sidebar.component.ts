import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="sidebar">
<nav class="sidebar__nav">
<button class="sidebar__item"><img src="/header/wholesidebar.png" alt="aura logo" height="810px" width="66px" class="last" class="select-input">
</button>
</nav>
    </aside>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {}
