const path = require('path');

const rootDir = require('./util/path');

const express = require('express');

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render('404', { path: '/admin/add-product'} );
});

app.listen(3000);
