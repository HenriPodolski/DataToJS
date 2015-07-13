module.exports = function(grunt){
    grunt.initConfig({
        browserify:{
            dist:{
                options:{
                    transform:[
                        [
                            'babelify',
                            {
                                'loose': 'all',
                                'sourceMaps': true,
                                'modules': 'common'
                            }

                        ]
                    ]
                },
                files: {
                    './dist/index.js': ['./src/main.js']
                }
            }
        },
        watch:{
            scripts:{
                options: {
                    spawn: false
                },
                files:['./src/**/*.js'],
                tasks:['browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify', 'watch']);
    grunt.registerTask('build', ['browserify']);
};