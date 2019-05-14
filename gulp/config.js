const dist = 'dist';
const src = 'src';

module.exports = {

    path: {
        src: {
            html: src + '/**/*.html',
            css: src + '/**/*.scss',
            js: src + '/**/*.js',
            img: src + '/**/*.+(png|jpeg|jpg|gif|svg)',
            copyAry: []
        },
        dist: dist,
        ignore: {
            html: src + '/**/partials/**/*.html'
        }
    },

    setting: {
        html: {
            template: {
                type: 'html', // ejs or html
                options: {}
            }
        },

        css: {
            compiler: {
                type: 'scss', // sass, scss, or css
                options: {
                    outputStyle: 'expanded',
                    sourceMap: false,
                    sourceComments: false
                }
            },
            browsers: ['last 2 versions', 'ie 9', 'Firefox ESR']
        },
    }
};