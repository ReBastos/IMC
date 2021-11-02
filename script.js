
      function imc() {
        var peso = document.getElementById("peso").value;
        var altura = document.getElementById("altura").value / 100;
        var resultado =  peso / (altura * altura);

        resultado = Math.round(resultado * 100) / 100;
        


        document.getElementById("resultado").innerHTML = resultado;
        console.log(resultado);

        if (resultado < 18.5) {
          document.getElementById("classificacao").innerHTML = "Abaixo do Peso";
          document.body.style.backgroundColor = "#66ccff";
        } else 
        if ((resultado >= 18.5 && resultado <= 24.9)) {
          document.getElementById("classificacao").innerHTML = "Peso Normal";
          document.body.style.backgroundColor = "#3399ff";
        } else 
        if (resultado > 24.9 && resultado <= 29.9) {
          document.getElementById("classificacao").innerHTML = "Sobrepeso";
          document.body.style.backgroundColor = "#6600cc";
        } else 
        if (resultado > 29.9 && resultado <= 34.9) {
          document.getElementById("classificacao").innerHTML =
            "Obesidade Grau I";
            document.body.style.backgroundColor = "#ffcc00";
        } else 
        if (resultado > 34.9 && resultado <= 39.9) {
          document.getElementById("classificacao").innerHTML =
            "Obesidade Grau II";
            document.body.style.backgroundColor = "#ffcc00";
        } else 
        if (resultado > 39.9) {
          document.getElementById("classificacao").innerHTML =
            "Obesidade Mórbida";
            document.body.style.backgroundColor = "#a50021";
        }
      }
    