var myApp = angular.module('myApp', []);

myApp.controller('BodyCtrl', ['$scope', function($scope){
  $('.js-star-rating').on('change','input', function() {
    $('.js-current-rating')
      .removeClass()
      .addClass('current-rating js-current-rating current-rating--' + this.value);
  });

  $scope.datas = [
    {
      img: 'http://dha.esis.com.tw/REPORT/%E4%BA%A4%E4%BB%98-%E4%B8%AD%E4%B8%80%E5%88%80(%E5%90%AB%E5%96%AE%E5%83%B9)%E4%BA%A4%E4%BB%981%E5%BC%B5,%E6%85%A2%E7%B0%BD2%E5%BC%B5.JPG',
      inf: "一般單藥 藥單編號：1045625623",
      view: "有提早預約太好了",
      viewdate: '2015/10/17 12:20',
      feedback: "此藥品好容易斷藥，有此app之後都不會讓我浪費時間",
      feedbackdate: '2015/10/18 16:20',
    },{
      img : 'http://www.taic.mohw.gov.tw/public/hygiene/d35912794d21ee069bfacb53248b3f82.jpg',
      inf: "一般單藥 藥單編號：1045625623",
      view: "準時領藥很好",
      viewdate: '2015/10/17 12:20',
      feedback: "謝謝醫生的衛教資訊",
      feedbackdate: '2015/10/18 16:20',
    }
  ]
}]);
