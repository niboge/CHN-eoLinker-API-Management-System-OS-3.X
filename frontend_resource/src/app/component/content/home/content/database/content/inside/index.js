(function() {
    'use strict';
    /**
     * @Author   广州银云信息科技有限公司
     * @function 数据库内页外包模块相关js
     * @version  3.0.2
     * @service  $state 注入$state服务
     * @service  $scope 注入作用域服务
     */
    angular.module('eolinker')
        .config(['$stateProvider', 'RouteHelpersProvider', function($stateProvider, helper) {
            $stateProvider
                .state('home.database.inside', {
                    url: '/inside?databaseID?userType',
                    template: '<database></database>'
                });
        }])
        .component('database', {
            templateUrl: 'app/component/content/home/content/database/content/inside/index.html',
            controller: databasePage
        })

    databasePage.$inject = ['$state', '$scope'];

    function databasePage($state, $scope) {
        var vm = this;
        vm.data = {
            info: {
                powerObject: {
                    readWrite: $state.params.userType < 3
                },
                shrinkObject: {}
            },
            fun:{
                init:null//初始化功能函数
            }
        }
        vm.$onInit=function(){
            $scope.$emit('$Home_ShrinkSidebar',{shrink:false});
        }
    }
})();
