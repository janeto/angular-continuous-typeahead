module.exports = function (grunt) {

    // Configure the tasks
    grunt.initConfig({
        copy: {
            build: {
                cwd: 'src',
                src: ['**'],
                dest: 'dist',
                expand: true
            }
        },
        clean: {
            build: {
                src: ['dist']
            }
        },
        cssmin: {
            build: {
                files: {
                    'dist/angular-continuous-typeahead.min.css': ['dist/**/*.css']
                }
            }
        },
        uglify: {
            build: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/angular-continuous-typeahead.min.js': ['dist/**/*.js']
                }
            }
        }
    });

    // Load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Define the tasks
    grunt.registerTask('build', 'Compiles all of the assets and copies the files to the dist directory.', ['clean', 'copy', 'cssmin', 'uglify']);
};