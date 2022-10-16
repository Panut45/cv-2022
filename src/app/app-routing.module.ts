import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { MyselfComponent } from './myself/myself.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: 'app-myself', component: MyselfComponent },
  { path: 'app-history', component: HistoryComponent },
  { path: 'app-skill', component: SkillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
