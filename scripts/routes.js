page('/', Article.fetchAll);
page('/projects', Article.filterCat);
page('/about', aboutFunc);
page('/contact', contactFunc);
page();
