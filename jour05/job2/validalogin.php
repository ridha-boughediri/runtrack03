<?php
  include('config/conexion.php');

  if(isset($_POST['user']) && !empty($_POST['usuario']) && isset($_POST['password']) && !empty($_POST['password'])){
      $usuario = $_POST['user'];
     $password = $_POST['password'];
      $query = "SELECT * FROM utilisateurs WHERE (nom ='$usuario' && passwordd = '$password')";
      $result = mysqli_query($conn,$query);

      if(mysqli_num_rows($result)>0){
          echo json_encode(array('success'=> 1));
      }else{
        echo json_encode(array('success'=> 0));
      }
  }

?>