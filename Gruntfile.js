module.exports = function (grunt) {

	var jsArr = [
		'src/eventbus.js'
	];

	grunt.initConfig({

		// 读取配置文件
		pkg: grunt.file.readJSON('package.json'),

		// 清理构建目标目录
		clean: {
			dirs: {
				src: ['build'],
				options: {
					force: false
				}
			}
		},

		// 校验js
		jshint: {
			all: ['src/*.js']
		},

		// 合并压缩js文件
		uglify: {
			build: {
				options: {
					banner: '/*! ' +
						'<%= pkg.name %> v<%= pkg.version %> ' +
						'<%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ' +
						'src:[' + jsArr.toString() + '] ' +
						'*/\n'
				},
				files: {
					'build/<%= pkg.name %>.min.js': jsArr
				}
			}
		}

	});

	// 任务加载
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 自定义任务
	grunt.registerTask('default', ['clean', 'jshint', 'uglify']);

};