import { RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  params: Params;
}

export class CustomRouterSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    // Select all the params available from current state.
    const params = routerState.root.children.map(c => c.params).reduce(
      (acc, p) => ({
        ...acc,
        ...p,
      }),
      {}
    );
    return {
      url: routerState.url,
      // Collect params from all levels
      params,
    };
  }
}
