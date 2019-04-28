import dva from 'dva';
import {createBrowserHistory as createHistory} from 'history'

//引入 normalize样式 css reset
import 'normalize.css'
//引入布局样式
//
import './assets/css/common.css'

// 1. Initialize
const app = dva({history:createHistory()});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
