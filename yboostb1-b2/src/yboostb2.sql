-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 15 jan. 2025 à 13:13
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `yboostb2`
--

CREATE DATABASE IF NOT EXISTS `yboostb2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `yboostb2`;

-- --------------------------------------------------------

--
-- Structure de la table `cocktail`
--

DROP TABLE IF EXISTS `cocktail`;
CREATE TABLE IF NOT EXISTS `cocktail` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(150) NOT NULL,
  `Descri` text,
  `Id_difficulte` int DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Temps` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_difficulte` (`Id_difficulte`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `cocktail`
--

INSERT INTO `cocktail` (`Id`, `Name`, `Descri`, `Id_difficulte`, `Image`, `Temps`) VALUES
(1, 'Tequila Sunrise', 'Inventée dans les années 1930 par Gene Sulit, barman de Phoenix en Arizona (U.S.A.), la recette de la Tequila Sunrise a évoluée et est aujourd\'hui réalisée avec de la tequila, du jus d\'orange et du sirop de grenadine. Avec son dégradé rappelant le lever de soleil, c\'est un cocktail aussi agréable à siroter qu\'à contempler.', 1, 'Tequila_Sunrise.webp', 2),
(2, 'Margarita', 'La Margarita est un short drink qui aurait été créé, en tout cas sous ce nom-là, par une mexicaine du nom de Margaret Sames vers 1948, qui réalisait ce cocktail pour les invités de son richissime mari.', 1, 'Margarita.webp', 3),
(3, 'Paloma', 'Le Paloma est un long drink qui aurait été créé par Don Javier Delgado Corona du restaurant La Capilla à Mexico, c\'est devenu aujourd\'hui le cocktail préféré des mexicains, détrônant même la Margarita.', 1, 'Paloma.webp', 2),
(4, 'Mojito', 'Le Mojito fait partie des cocktails les plus connus et appréciés au monde, avec sa menthe fraîche et son citron vert c\'est véritablement devenu un incontournable des bars. Ernest Hemingway a contribué à la popularité de cette boisson qu\'il aimait déguster à Cuba au 20ème siècle, ramenant la recette avec lui en Amérique.', 1, 'Mojito.webp', 4),
(5, 'Aviation', 'Avec sa liqueur de violette qui lui donne toute sa couleur, le cocktail Aviation est un short drink très agréable à déguster, aux multiples saveurs de fruits et de fleurs. Il se réalise au shaker et se savoure très frais, servi dans une coupe.', 2, 'Aviation.webp', 3),
(6, 'Paper Plane', 'Le Paper Plane a été créé par un barman new-yorkais en 2007, c\'est un cocktail qui a la particularité d\'être réalisé avec de l\'Amaro Nonino, rendant ce short drink très riche en saveurs, avec des notes d\'herbes et d\'épices. C\'est une recette principalement destinée à l\'apéritif.', 1, 'Paper_plane.webp', 3),
(7, 'Moscow Mule', 'Le Moscow Mule est un cocktail devenu aujourd\'hui incroyablement à la mode, tellement que de nombreuses variantes ont vus le jour et en sont issues. Le Moscow Mule, comme toutes ses variantes, est historiquement servi dans une tasse en cuivre.', 1, 'Moscow_mule.webp', 2),
(8, 'Américano', 'Incontournable des cocktails apéritifs, voici l\'Americano qui trouve son origine au 19ème siècle du côté de Gaspare Campari, le bartender italien et créateur du Campari lui-même.', 1, 'Americano.webp', 2),
(9, 'Sex On The Beach', 'Le Sex On The Beach est un cocktail dont le nom sexy lui a valu en grande partie tout son succès. Son origine n\'est pas très ancienne mais sa grande célébrité a fait de lui l\'un des grands classiques modernes.', 1, 'Sex_On_The_Beach.webp', 3),
(10, 'Espresso Martini', 'Né dans les années 1980 grâce au barman londonien Dick Bradsell, le célèbre Espresso Martini est devenu un grand classique moderne. Un martini au café, c\'est une recette magique créée spécialement par son inventeur pour stimuler l\'organisme.', 1, 'Espresso_Martini.webp', 4),
(11, 'Manhattan', 'Le Manhattan est l\'un des plus grands classiques au monde, et ce depuis la fin du 19ème siècle où il était en Amérique l\'un des cocktails les plus à la mode. C\'est aujourd\'hui dans le monde entier que le Manhattan est le cocktail préféré d\'une quantité indénombrable de personnes !', 1, 'Manhattan.webp\r\n', 3),
(12, 'Vodka Martini', 'La Vodka Martini est aussi appelée Vodkatini, cette variante du Dry Martini a été popularisé entre autres par James Bond, le célèbre personnage créé par Ian Fleming, qui aime effectivement siroter ce short drink.', 1, 'Vodka_Martini.webp', 3),
(13, 'Caribbean Coffe', 'Ce cocktail signature de Destination Cocktails a été créé en collaboration avec CODERUM et les cafés Jacques Vabre dans le cadre de la Transat Jacques Vabre Le Havre Normandie édition 2023.', 3, 'Caribbean_Coffee.webp', 5);

-- --------------------------------------------------------

--
-- Structure de la table `difficulte`
--

DROP TABLE IF EXISTS `difficulte`;
CREATE TABLE IF NOT EXISTS `difficulte` (
  `Id_difficulte` int NOT NULL AUTO_INCREMENT,
  `Difficulte` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_difficulte`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `difficulte`
--

INSERT INTO `difficulte` (`Id_difficulte`, `Difficulte`) VALUES
(1, 'Facile'),
(2, 'Moyenne'),
(3, 'Difficile');

-- --------------------------------------------------------

--
-- Structure de la table `ingredient`
--

DROP TABLE IF EXISTS `ingredient`;
CREATE TABLE IF NOT EXISTS `ingredient` (
  `Ingredient_Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  PRIMARY KEY (`Ingredient_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `ingredient`
--

INSERT INTO `ingredient` (`Ingredient_Id`, `Name`) VALUES
(1, 'Tequila'),
(2, 'Jus d\'orange'),
(3, 'Sirop de grenadine'),
(4, 'Cointreau'),
(5, 'Jus de citron vert'),
(6, 'Jus de pamplemousse'),
(7, 'Sirop de sucre'),
(8, 'Eau gazeuse'),
(9, 'Rhum'),
(10, 'Menthe fraîche'),
(11, 'Sucre'),
(12, 'Gin'),
(13, 'Marasquin'),
(14, 'Liqueur de violette'),
(15, 'Bourbon'),
(16, 'Amaro'),
(17, 'Aperol'),
(18, 'Vodka'),
(19, 'Ginger beer'),
(20, 'Campari'),
(21, 'Vermouth rouge'),
(22, 'Liqueur de pêche'),
(23, 'Jus de canneberge'),
(24, 'Kahlua'),
(25, 'Café'),
(26, 'Sirop de Speculos'),
(27, 'Angostura bitters'),
(28, 'Crème de coco'),
(29, 'Crème fraîche'),
(30, 'Essence de vanille'),
(31, 'Vermouth blanc');

-- --------------------------------------------------------

--
-- Structure de la table `recette`
--

DROP TABLE IF EXISTS `recette`;
CREATE TABLE IF NOT EXISTS `recette` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Cocktail_Id` int NOT NULL,
  `Ingredient_Id` int NOT NULL,
  `Quantity` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Cocktail_Id` (`Cocktail_Id`),
  KEY `Ingredient_Id` (`Ingredient_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `recette`
--

INSERT INTO `recette` (`Cocktail_Id`, `Ingredient_Id`, `Quantity`) VALUES
-- Tequila Sunrise
(1, 1, '4 cl'), (1, 2, '8 cl'), (1, 3, '1 cl'),

-- Margarita
(2, 1, '5 cl'), (2, 4, '3 cl'), (2, 5, '2 cl'),

-- Paloma
(3, 1, '5 cl'), (3, 6, '10 cl'), (3, 5, '2 cl'), (3, 7, '2 cl'), (3, 8, 'Compléter'),

-- Mojito
(4, 9, '5 cl'), (4, 5, '1/2'), (4, 10, '10 feuilles'), (4, 11, '2 cuil. à café'), (4, 8, 'Compléter'),

-- Aviation
(5, 12, '4 cl'), (5, 5, '2 cl'), (5, 13, '1 cl'), (5, 14, '1 cl'),

-- Paper Plane
(6, 15, '3 cl'), (6, 16, '3 cl'), (6, 5, '2 cl'), (6, 17, '3 cl'),

-- Moscow Mule
(7, 18, '4 cl'), (7, 19, 'Compléter'), (7, 5, '2 cl'),

-- Americano
(8, 20, '3 cl'), (8, 21, '3 cl'), (8, 8, 'Compléter'),

-- Sex On The Beach
(9, 18, '4 cl'), (9, 22, '2 cl'), (9, 23, '4 cl'), (9, 2, '4 cl'),

-- Espresso Martini
(10, 18, '4 cl'), (10, 24, '2 cl'), (10, 25, '1 expresso'), (10, 7, '1 cl'),

-- Manhattan
(11, 15, '5 cl'), (11, 21, '2 cl'), (11, 11, '1/2 cuil. à café'), (11, 27, '1 trait'),

-- Vodka Martini
(12, 18, '6 cl'), (12, 31, '1 cl'),

-- Caribbean Coffe
(13, 9, '2 cl'), (13, 24, '1.5 cl'), (13, 26, '0.5 cl'), 
(13, 27, '1 trait'), (13, 28, '1.25 cl'), (13, 29, '1.25 cl'), 
(13, 30, '1.5 cl'), (13, 25, '5 g');

(153, 13, 25, '5 g');
fficulte` (`Id_difficulte`) ON DELETE SET NULL;

--
-- Contraintes pour la table `recette`
--
ALTER TABLE `recette`
  ADD CONSTRAINT `recette_ibfk_1` FOREIGN KEY (`Cocktail_Id`) REFERENCES `cocktail` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `recette_ibfk_2` FOREIGN KEY (`Ingredient_Id`) REFERENCES `ingredient` (`Ingredient_Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
