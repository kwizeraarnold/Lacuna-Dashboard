google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(readFile);

      function readFile() {
        // filename = "varieties.csv";
        $.get(data2, function (csvString) {
          var arrayData = $.csv.toArrays(csvString, {
            onParseValue: $.csv.hooks.castToScalar,
          });
          drawChart(arrayData)
        });
      }

      function drawChart(arrayData) {
        var data = google.visualization.arrayToDataTable(arrayData);

        var options = {
          title: "My Daily Activities",
        };

        var chart = new google.visualization.PieChart(
          document.getElementById("piechart")
        );

        chart.draw(data, options);
      }