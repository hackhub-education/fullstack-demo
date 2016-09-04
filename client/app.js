var app = angular.module('Webdxd', []);

app.controller('AppCtrl', function($http) {
	var app = this;
	$http.get('http://localhost:3000/student').success(function(studentList) {
		app.student = studentList;
	});

	app.selectStudent = function(student) {
		if (student.firstName === app.selectedStudent.firstName) {
			app.selectedStudent = "";
		} else {
			$http.get('http://localhost:3000/student/' + student._id).success(function(studentDetail) {
				app.selectedStudent = studentDetail;
				app.selectedStudent.fullName = app.selectedStudent.firstName + ' ' + app.selectedStudent.lastName;
			});
		}
	}
});