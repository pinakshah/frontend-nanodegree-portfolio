/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      banner: {
        options: {
          engine: 'gm',
          sizes: [{
            name: 'banner_large',
            rename: false,
            width: 1600,
            height: 450,
            aspectRatio: false,
            suffix: '_large',
            quality: 60
          },{
            name: 'banner_medium',
            rename: false,
            width: 1200,
            height: 360,
            aspectRatio: false,
            suffix: '_medium',
            quality: 60
          },{
            name: 'banner_small',
            rename: false,
            width: 800,
            height: 300,
            aspectRatio: false,
            suffix: '_small',
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/banner/',
          dest: 'images/banner/'
        }]
      },
      project: {
        options: {
          engine: 'gm',
          sizes: [{
            name: 'project_large',
            rename: false,
            width: 600,
            height: 300,
            aspectRatio: false,
            suffix: '_large',
            quality: 60
          },{
            name: 'project_medium',
            rename: false,
            width: 400,
            height: 200,
            aspectRatio: false,
            suffix: '_medium',
            quality: 60
          },{
            name: 'project_small',
            rename: false,
            width: 300,
            height: 150,
            aspectRatio: false,
            suffix: '_small',
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/project/',
          dest: 'images/project/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "logo" image that don't go through processing into the images/logo/ directory */
    copy: {
      copy_logo: {
        files: [{
          expand: true,
          src: ['images_src/logo/*'],
          dest: 'images/logo/',
          filter: 'isFile',
          flatten: true
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
