document.addEventListener("DOMContentLoaded", () => {
      const log = document.getElementById("keylogger");
    
      document.addEventListener("keypress", logKey);
    
      function logKey(e) {
        document.getElementById("keylogger").innerHTML += ` ${e.key}`;
          var a = log.value;
          var l = ` ${e.key}`;
          log.value = a + l;
      }
    });