<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=devide-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="author" content="Onur Surmeli">
        <meta name="description" content="Hello World!">
        <meta name="keywords" content="Hello World, PHP, responsive, dynamic, practice, project">
        <link rel="stylesheet" href="styles/style.css">
        <title>Hello World but it's responsive!</title>
    </head>
    <body>
        <header>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#movies">Movies</a></li>
                <li><a href="#shows">TV Shows</a></li>
                <li><a href="#top100">Top 100</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </header>
        <h1 id="home">Bob's Movie and Show Emproium</h1>
        <?php
            
            echo "Dark Mode: ";
            echo '<script>
                    function darkMode() {
                        var element = document.body;
                        element.classList.toggle("dark-mode");
                    }
                </script>';
            echo "<button onclick='darkMode()'>Toggle Dark Mode</button>";
        
        ?>
        <img class="hero-img" src="" alt="hero image">
        <h2><i>Best movies and shows, by someone not named Bob.</i></h2>
        <main>
            <section class="featured">
                <h3>Featured This Week</h3>
                <div class="featured-item">
                    <h4>Featured Movie</h4>
                    <p>Movie Title</p>
                </div>
                <div class="featured-item">
                    <h4>Featured Show</h4>
                    <p>Show Title</p>
                </div>
            </section>
            <section class="titles-container">
                <h3>Movies</h3>
                <div id="movies" class="row">
                </div>
            </section>
            <section class="titles-container">
                <h3>TV Shows</h3>
                <div id="shows" class="row">
                </div>
            </section>
        </main>
        <footer>
            <p>&copy; 2019 Bob's Movie and Show Emporium</p>
        </footer>
        <script src="./src/index.js"></script>
    </body>
</html>