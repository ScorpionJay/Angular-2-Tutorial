# Angularjs 学习

[官网](https://angularjs.org)

[github](https://github.com/angular/angular.js)

[angularjs 2 教程](https://angular.io/docs/js/latest/quickstart.html)


git clone 

npm install

npm start


组件化模式，写了app.component,让背后通过main启动项目

~~~js
(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App!</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
~~~

~~~js
(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
~~~
