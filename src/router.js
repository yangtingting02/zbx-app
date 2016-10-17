/**
 * Created by yangtingting on 16/10/12.
 */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Hosts from './component/host/Hosts';
import Items from './component/item/Items';
import Templates from './component/template/Templates';
import Host from './component/host/Host';
import MAddTemplate from './component/template/MAddTemplate';
import Chart from './component/chart/Chart';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Hosts}/>
      <Route path='/hosts' component={Hosts}/>
      <Route path='/hosts/:hostid' component={Host}/>
      <Route path='/items' component={Items}/>
      <Route path='/templates' component={Templates}/>
      <Route path='/template/madd' component={MAddTemplate}/>
      <Route path='/chart/:hostid/:itemid' component={Chart}/>
    </Route>
  </Router>
)
