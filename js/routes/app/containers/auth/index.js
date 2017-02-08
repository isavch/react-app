import auth, {protectComponent, isAllowed, protectRoute} from './auth';
import * as permissions from './permissions';

export {
  auth as default,
  protectComponent,
  protectRoute,
  isAllowed,
  permissions
};
