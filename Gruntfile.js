/**
 * Created by hui on 2014/12/18.
 */
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // 使用compass编译sass
    compass: {
      // 开发环境
      dev: { // Another target
        options: {
          sassDir: ['sass'],
          cssDir: ['css']
        }
      }
//			// 生产环境
//			pro: {                   // Target
//		    options: {              // Target options
//	        sassDir: ['sass'],
//	        cssDir: ['css'],
//	        environment: 'production'
//		    }
//			}
    },
    // 自动添加css前缀
    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 10', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      dist: {
        files: [{
          // 这种方式是直接在源文件里添加相应前缀。
          expand: true,
          cwd: 'css',
          src: ['**/*.css', '**/!*.min.css'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    cssmin: { //css文件压缩
      dist: {
        files: [
          // 下面是将不同目录下的文件压缩到各自的目录下的各自单独压缩文件
          // 注：多个目录，即是在下面的添加相关的json对象
          {
            expand: true,
            cwd: 'css',
            src: ['**/*.css', '**/!*.min.css'],
            dest: 'dist/css',
            ext: '.min.css'
          }
        ]
      }
    },
    // 删除文件
//		clean: {
//		  release: ["css/**/*.css"]
//		},
    watch: {
      // scss文件并且编译
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['compass:dev', 'autoprefixer']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('dev', ['compass:dev', 'autoprefixer']); // 开发环境

  grunt.registerTask('pro', ['cssmin']); // 开发环境

};