var app = angular.module('cartApp', [])
    .controller('mainController', ['$scope', '$http' , function($scope, $http) {
        $scope.enableEditForm = false;
        $scope.user = {
            name: "",
            studentId: "",
            major: ""
        };

        $scope.cancelUpdate = function() {
            $scope.user = {
                name: "",
                studentId: "",
                major: ""
            };
        };

        $scope.getList = function() {
            $http.get('/api/getUsers')
                .then(function(response) {
                    $scope.users = response.data;
                })
        };

        $scope.emptyInput = function() {
            $scope.userForm.user_name.$setUntouched();
            $scope.userForm.user_name.$setPristine();
            $scope.userForm.user_studentId.$setUntouched();
            $scope.userForm.user_studentId.$setPristine();
            $scope.userForm.user_major.$setUntouched();
            $scope.userForm.user_major.$setPristine();
            $scope.enableEditForm = false;
            $scope.user = {
                name: "",
                studentId: "",
                major: ""
            };
        };

        $scope.getList();

        $scope.createUser = function(data) {
            var userInfo = {
                name : data.name,
                studentId: data.studentId,
                major: data.major
            };
            $http.post('/api/addUser', userInfo)
                .then(function(data) {
                    $scope.getList();
                    $scope.user = {};
                })
        };

        $scope.enableUpdateForm = function(data) {
            $scope.enableEditForm = true;
            $scope.user.name =  data.Name;
            $scope.user.studentId = data.StudentId;
            $scope.user.major = data.Major;
            $scope.user.id = data.ID;
        };

        $scope.updateUser = function(data) {
            var dataInfo = {
                name : data.name,
                studentId: data.studentId,
                major: data.major
            }
            $http.put('/api/updateUser/' + $scope.user.id, dataInfo)
                .then(function(data) {
                    $scope.getList();
                    $scope.enableEditForm = false;
                })
        };

        $scope.deleteUser = function(id) {
            if(id) {
                $http.delete('/api/deleteUser/' + id)
                    .then(function(data) {
                        $scope.getList();
                    })
            } else {
                console.log('id is missing');
            }
        };
    }]);