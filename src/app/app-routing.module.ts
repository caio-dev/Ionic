import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  { path: 'list',loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)},
  { path: 'botoes',loadChildren: () => import('./botoes/botoes.module').then(m => m.BotoesPageModule)},
  { path: 'headerfooter', loadChildren: './headerfooter/headerfooter.module#HeaderfooterPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'splitpane', loadChildren: './splitpane/splitpane.module#SplitpanePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
  { path: 'css-utilities', loadChildren: './css-utilities/css-utilities.module#CssUtilitiesPageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'componente-actionsheet', loadChildren: './componente-actionsheet/componente-actionsheet.module#ComponenteActionsheetPageModule' },
  { path: 'componente-alert', loadChildren: './componente-alert/componente-alert.module#ComponenteAlertPageModule' },
  { path: 'componente-badges', loadChildren: './componente-badges/componente-badges.module#ComponenteBadgesPageModule' },
  { path: 'componente-botoes', loadChildren: './componente-botoes/componente-botoes.module#ComponenteBotoesPageModule' },
  { path: 'componente-card', loadChildren: './componente-card/componente-card.module#ComponenteCardPageModule' },
  { path: 'componente-checkbox', loadChildren: './componente-checkbox/componente-checkbox.module#ComponenteCheckboxPageModule' },
  { path: 'componente-radio', loadChildren: './componente-radio/componente-radio.module#ComponenteRadioPageModule' },
  { path: 'componente-datetime', loadChildren: './componente-datetime/componente-datetime.module#ComponenteDatetimePageModule' },
  { path: 'componente-fab', loadChildren: './componente-fab/componente-fab.module#ComponenteFabPageModule' },
  { path: 'componente-input', loadChildren: './componente-input/componente-input.module#ComponenteInputPageModule' },
  { path: 'componente-list', loadChildren: './componente-list/componente-list.module#ComponenteListPageModule' },
  { path: 'componente-loading', loadChildren: './componente-loading/componente-loading.module#ComponenteLoadingPageModule' },
  { path: 'componente-modal', loadChildren: './componente-modal/componente-modal.module#ComponenteModalPageModule' },
  { path: 'componente-modal-interno', loadChildren: './componente-modal-interno/componente-modal-interno.module#ComponenteModalInternoPageModule' },
  { path: 'componente-range', loadChildren: './componente-range/componente-range.module#ComponenteRangePageModule' },
  { path: 'componente-select', loadChildren: './componente-select/componente-select.module#ComponenteSelectPageModule' },
  { path: 'componente-slide', loadChildren: './componente-slide/componente-slide.module#ComponenteSlidePageModule' },
  { path: 'componente-spinner', loadChildren: './componente-spinner/componente-spinner.module#ComponenteSpinnerPageModule' },
  { path: 'componente-toast', loadChildren: './componente-toast/componente-toast.module#ComponenteToastPageModule' },
  { path: 'componente-infinitscroll', loadChildren: './componente-infinitscroll/componente-infinitscroll.module#ComponenteInfinitscrollPageModule' },
  { path: 'componente-popover', loadChildren: './componente-popover/componente-popover.module#ComponentePopoverPageModule' },
  { path: 'componente-refresh', loadChildren: './componente-refresh/componente-refresh.module#ComponenteRefreshPageModule' },
  { path: 'componente-searchbar', loadChildren: './componente-searchbar/componente-searchbar.module#ComponenteSearchbarPageModule' },
  { path: 'componente-toggle', loadChildren: './componente-toggle/componente-toggle.module#ComponenteTogglePageModule' },
  { path: 'api-externa', loadChildren: './api-externa/api-externa.module#ApiExternaPageModule' },
  { path: 'animacoes', loadChildren: './animacoes/animacoes.module#AnimacoesPageModule' },
  { path: 'componentes-nativos', loadChildren: './componentes-nativos/componentes-nativos.module#ComponentesNativosPageModule' },
  { path: 'componentes-nativos-camera', loadChildren: './componentes-nativos-camera/componentes-nativos-camera.module#ComponentesNativosCameraPageModule' },
  { path: 'componentes-nativos-text-to-speech', loadChildren: './componentes-nativos-text-to-speech/componentes-nativos-text-to-speech.module#ComponentesNativosTextToSpeechPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
