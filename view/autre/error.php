<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erreur 404 - Page non trouvée</title>
    <style>
        .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
        }

        .error-code {
            font-size: 120px;
            font-weight: bold;
            color: #e74c3c;
            margin: 0;
        }

        .error-message {
            font-size: 24px;
            color: #2c3e50;
            margin: 20px 0;
        }

        .error-description {
            font-size: 16px;
            color: #7f8c8d;
            margin-bottom: 30px;
        }

        .return-button {
            padding: 12px 24px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .return-button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <h1 class="error-code">404</h1>
        <h2 class="error-message">Page non trouvée</h2>
        <p class="error-description">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <a href="/PFRmaxime/accueil" class="return-button">Retourner à l'accueil</a>
    </div>
</body>
</html>