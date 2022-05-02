<!DOCTYPE html>
<html lang="fr-FR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Jour08</title>
</head>

<body>
    <header>
        <nav>
            <ul id="nav-mobile" class="valign-wrapper hide-on-med-and-down">
                <li class="row"><a href=".">Accueil</a></li>
                <li class="row"><a href=".">Inscription</a></li>
                <li class="row"><a href=".">Connexion</a></li>
                <li class="row"><a href=".">Recherche</a></li>
            </ul>
        </nav>
    </header>
    <section >
        <form action="" method="post">
            <p>
                <label>
                    <input name="civil" type="radio" checked />
                    <span>Homme</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="civil" type="radio" />
                    <span>Femme</span>
                </label>
            </p>
            <input type="text" name="" id="" placeholder="Prenom">
            <input type="text" name="" id="" placeholder="Nom">
            <input type="text" name="" id="" placeholder="Adresse">
            <input type="email" name="" id="" placeholder="E-Mail">
            <input type="password" name="" id="" placeholder="Mot de Passe">

            <p>
                <label>
                    <input type="checkbox" />
                    <span>Informatique</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" />
                    <span>Voyages</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" />
                    <span>Sport</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" />
                    <span>Lecture</span>
                </label>
            </p>

            <button type="submit">Valider</button>
        </form>
    </section>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="center-align">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
            </div>
        </div>
        <div class="footer-copyright center-align">
            <div class="container"> © 2014 Copyright Text </div>
        </div>
    </footer>

</body>

</html>