const mix = require('laravel-mix');

mix.setResourceRoot('../');

/*
* JavaScript
* - Bu hissede javascript fayllarini
*   build edirik
* */
mix.js('src/js/app.js', 'assets/js/template.js');

mix.copy('src/icon/fonts/', 'assets/fonts');
mix.copy('src/web-fonts/**/*', 'assets/fonts');

/*
* Sass
* - Bu hissede sass fayllarini
*   build edirik
* */
mix.sass('src/scss/app.scss', 'assets/css/app.css')
    .sass('src/scss/desktop.scss', 'assets/css/desktop.css')
    .sass('src/scss/mobile.scss', 'assets/css/mobile.css');

/*
* Image
* - Bu hissede image fayllarini
*   kopyalayiriq
* */
mix.copy('src/img', 'assets/images', true);

/*
* Disabled Notification
* - Bu hissede windows notification
*   baglayiriq
* */
mix.disableNotifications();



