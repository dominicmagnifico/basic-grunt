module.exports = function(grunt) {

    // grunt configuration
    grunt.initConfig({
        // project-specific configuration
        config: grunt.file.readJSON('config.json'),
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: '<%= config.dir.sass %>',
                    cssDir: '<%= config.dir.css %>',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: '<%= config.dir.sass %>',
                    cssDir: '<%= config.dir.css %>',
                    outputStyle: 'expanded'
                }
            }
        },
        watch: {
            compass: {
                files: ['<%= config.dir.sass %>/**/*.{scss,sass}'],
                tasks: ['compass:dev']
            },
            livereload: {
                files: ['<%= config.dir.template %>/**/*.{css,html,php,js}'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // plugins loading
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // task aliases
    grunt.registerTask('default', ['watch']);
};