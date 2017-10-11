import { RootEpics } from './app-epics';
import { environment } from './../../environments/environment.prod';
import { IAppState, rootReducer, INITIAL_STATE } from './';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ],
  declarations: [],
  providers: [
    RootEpics
  ]
})
export class StoreModule {
  constructor(
    store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics
  ) {
    console.log('devtools:', devTools.isEnabled());
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger(), ...rootEpics.createEpics()],
      [devTools.enhancer()]
    );

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
  }
}
