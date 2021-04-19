
window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};

window.randomScalingFactor = function() {
  return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}

var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var color = Chart.helpers.color;
Chart.defaults.global.defaultFontColor = 'white';
var config_radar = {
  type: 'radar',
  data: {
    labels: [
      ["", "峰值功率"], "峰值扭矩", "續航力",["煞車力矩", ""], "加速性能", "空力性能"],
    datasets: [{
      label: "Epsilon I    ",
      backgroundColor: color(window.chartColors.yellow).alpha(0.2).rgbString(),
      borderColor: window.chartColors.yellow,
      pointBackgroundColor: window.chartColors.yellow,
      data: [100,80,60,90,95,80]
    }, {
      label: "Epsilon II",
      backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
      borderColor: window.chartColors.blue,
      pointBackgroundColor: window.chartColors.blue,
      data: [80,53,95,90,60,20]
    } ]
  },
  options: {
    legend: {
      position: 'bottom',
      labels:{
        fontSize:15,
        boxWidth: 15
      }
    },
    title: {
      display: false
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 120,
        stepSize: 20,
        fontSize: 15,
        showLabelBackdrop: false,
        z: 1
      },
      gridLines:{
        color: '#777777'
      },
      angleLines:{
        color:　'#777777'
      },
      pointLabels:{
        fontSize: 17
      }
    }
  }
};

var config_pie = {
  type: 'doughnut',
  data:{
    labels:["現成零部件採購", "零部件加工", "工具及耗材", "測試與交通", "行政費用及其他"],
    datasets:[{
      data:[33.8, 35.3, 15.8, 9.0, 6.0],
      backgroundColor: 
        [color(window.chartColors.blue).alpha(0.9).rgbString(),
        color(window.chartColors.yellow).alpha(0.9).rgbString(),
        color(window.chartColors.green).alpha(0.9).rgbString(),
        color(window.chartColors.orange).alpha(0.9).rgbString(),
        color(window.chartColors.purple).alpha(0.9).rgbString()],
      borderColor: color(window.chartColors.white).alpha(0).rgbString()
    
    }]
  }, 
  options:{
    title :{
      display: false
    },
    legend:{
      display: true,
      position: 'bottom',
      labels:{
        fontSize:15,
        boxWidth: 15,
        padding: 30
      }
    }, 
    cutoutPercentage: 60,
    layout: {
      padding:{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0  
      }
    },
    plugins:{
      labels:
        {
          render: function(args){
            return  args.percentage + '%';
          },
          fontSize: 18,
          precision: 1,
        }
    }
  }
};
window.onload = function() {
  window.myRadar = new Chart(document.getElementById("canvas"), config_radar);
  window.myPie = new Chart(document.getElementById("canvas2"), config_pie);

};
var colorNames = Object.keys(window.chartColors);
