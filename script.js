function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
      age--;
      months += 12;
    }
    var days = today.getDate() - birthdate.getDate();
    if (days < 0) {
      months--;
      var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += lastMonth.getDate();
    }
    var result = "Você tem " + age + " anos, " + months + " meses e " + days + " dias de idade.";
    document.getElementById("result").innerHTML = result;
  }
  