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
(1, 'Tequila Sunrise', 'Inventée dans les années 1930 par Gene Sulit, barman de Phoenix en Arizona (U.S.A.), la recette de la Tequila Sunrise a évoluée et est aujourd\'hui réalisée avec de la tequila, du jus d\'orange et du sirop de grenadine. Avec son dégradé rappelant le lever de soleil, c\'est un cocktail aussi agréable à siroter qu\'à contempler.', 1, NULL, NULL),
(2, 'Margarita', 'La Margarita est un short drink qui aurait été créé, en tout cas sous ce nom-là, par une mexicaine du nom de Margaret Sames vers 1948, qui réalisait ce cocktail pour les invités de son richissime mari.', 1, NULL, NULL),
(3, 'Paloma', 'Le Paloma est un long drink qui aurait été créé par Don Javier Delgado Corona du restaurant La Capilla à Mexico, c\'est devenu aujourd\'hui le cocktail préféré des mexicains, détrônant même la Margarita.', 1, NULL, NULL),
(4, 'Paloma', 'Le Paloma est un long drink qui aurait été créé par Don Javier Delgado Corona du restaurant La Capilla à Mexico, c\'est devenu aujourd\'hui le cocktail préféré des mexicains, détrônant même la Margarita.', 1, NULL, NULL),
(5, 'Mojito', 'Le Mojito fait partie des cocktails les plus connus et appréciés au monde, avec sa menthe fraîche et son citron vert c\'est véritablement devenu un incontournable des bars. Ernest Hemingway a contribué à la popularité de cette boisson qu\'il aimait déguster à Cuba au 20ème siècle, ramenant la recette avec lui en Amérique.', 1, NULL, NULL),
(6, 'Mojito', 'Le Mojito fait partie des cocktails les plus connus et appréciés au monde, avec sa menthe fraîche et son citron vert c\'est véritablement devenu un incontournable des bars. Ernest Hemingway a contribué à la popularité de cette boisson qu\'il aimait déguster à Cuba au 20ème siècle, ramenant la recette avec lui en Amérique.', 1, NULL, NULL),
(7, 'Aviation', 'Avec sa liqueur de violette qui lui donne toute sa couleur, le cocktail Aviation est un short drink très agréable à déguster, aux multiples saveurs de fruits et de fleurs. Il se réalise au shaker et se savoure très frais, servi dans une coupe.', 2, NULL, NULL),
(8, 'Aviation', 'Avec sa liqueur de violette qui lui donne toute sa couleur, le cocktail Aviation est un short drink très agréable à déguster, aux multiples saveurs de fruits et de fleurs. Il se réalise au shaker et se savoure très frais, servi dans une coupe.', 2, NULL, NULL),
(9, 'Paper Plane', 'Le Paper Plane a été créé par un barman new-yorkais en 2007, c\'est un cocktail qui a la particularité d\'être réalisé avec de l\'Amaro Nonino, rendant ce short drink très riche en saveurs, avec des notes d\'herbes et d\'épices. C\'est une recette principalement destinée à l\'apéritif.', 1, NULL, NULL),
(10, 'Paper Plane', 'Le Paper Plane a été créé par un barman new-yorkais en 2007, c\'est un cocktail qui a la particularité d\'être réalisé avec de l\'Amaro Nonino, rendant ce short drink très riche en saveurs, avec des notes d\'herbes et d\'épices. C\'est une recette principalement destinée à l\'apéritif.', 1, NULL, NULL),
(11, 'Moscow Mule', 'Le Moscow Mule est un cocktail devenu aujourd\'hui incroyablement à la mode, tellement que de nombreuses variantes ont vus le jour et en sont issues. Le Moscow Mule, comme toutes ses variantes, est historiquement servi dans une tasse en cuivre.', 1, NULL, NULL),
(12, 'Moscow Mule', 'Le Moscow Mule est un cocktail devenu aujourd\'hui incroyablement à la mode, tellement que de nombreuses variantes ont vus le jour et en sont issues. Le Moscow Mule, comme toutes ses variantes, est historiquement servi dans une tasse en cuivre.', 1, NULL, NULL),
(13, 'Américano', 'Incontournable des cocktails apéritifs, voici l\'Americano qui trouve son origine au 19ème siècle du côté de Gaspare Campari, le bartender italien et créateur du Campari lui-même.', 1, NULL, NULL),
(14, 'Américano', 'Incontournable des cocktails apéritifs, voici l\'Americano qui trouve son origine au 19ème siècle du côté de Gaspare Campari, le bartender italien et créateur du Campari lui-même.', 1, NULL, NULL),
(15, 'Sex On The Beach', 'Le Sex On The Beach est un cocktail dont le nom sexy lui a valu en grande partie tout son succès. Son origine n\'est pas très ancienne mais sa grande célébrité a fait de lui l\'un des grands classiques modernes.', 1, NULL, NULL),
(16, 'Sex On The Beach', 'Le Sex On The Beach est un cocktail dont le nom sexy lui a valu en grande partie tout son succès. Son origine n\'est pas très ancienne mais sa grande célébrité a fait de lui l\'un des grands classiques modernes.', 1, NULL, NULL),
(17, 'Espresso Martini', 'Né dans les années 1980 grâce au barman londonien Dick Bradsell, le célèbre Espresso Martini est devenu un grand classique moderne. Un martini au café, c\'est une recette magique créée spécialement par son inventeur pour stimuler l\'organisme.', 1, NULL, NULL),
(18, 'Espresso Martini', 'Né dans les années 1980 grâce au barman londonien Dick Bradsell, le célèbre Espresso Martini est devenu un grand classique moderne. Un martini au café, c\'est une recette magique créée spécialement par son inventeur pour stimuler l\'organisme.', 1, NULL, NULL),
(19, 'Manhattan', 'Le Manhattan est l\'un des plus grands classiques au monde, et ce depuis la fin du 19ème siècle où il était en Amérique l\'un des cocktails les plus à la mode. C\'est aujourd\'hui dans le monde entier que le Manhattan est le cocktail préféré d\'une quantité indénombrable de personnes !', 1, NULL, NULL),
(20, 'Manhattan', 'Le Manhattan est l\'un des plus grands classiques au monde, et ce depuis la fin du 19ème siècle où il était en Amérique l\'un des cocktails les plus à la mode. C\'est aujourd\'hui dans le monde entier que le Manhattan est le cocktail préféré d\'une quantité indénombrable de personnes !', 1, NULL, NULL),
(21, 'Vodka Martini', 'La Vodka Martini est aussi appelée Vodkatini, cette variante du Dry Martini a été popularisé entre autres par James Bond, le célèbre personnage créé par Ian Fleming, qui aime effectivement siroter ce short drink.', 1, NULL, NULL),
(22, 'Vodka Martini', 'La Vodka Martini est aussi appelée Vodkatini, cette variante du Dry Martini a été popularisé entre autres par James Bond, le célèbre personnage créé par Ian Fleming, qui aime effectivement siroter ce short drink.', 1, NULL, NULL),
(23, 'Caribbean Coffe', 'Ce cocktail signature de Destination Cocktails a été créé en collaboration avec CODERUM et les cafés Jacques Vabre dans le cadre de la Transat Jacques Vabre Le Havre Normandie édition 2023.', 3, NULL, NULL);

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

INSERT INTO `recette` (`Id`, `Cocktail_Id`, `Ingredient_Id`, `Quantity`) VALUES
(103, 1, 1, '4 cl'),
(104, 1, 2, '8 cl'),
(105, 1, 3, '1 cl'),
(106, 2, 1, '5 cl'),
(107, 2, 4, '3 cl'),
(108, 2, 5, '2 cl'),
(109, 3, 1, '5 cl'),
(110, 3, 6, '10 cl'),
(111, 3, 5, '2 cl'),
(112, 3, 7, '2 cl'),
(113, 3, 8, 'Compléter'),
(114, 4, 9, '5 cl'),
(115, 4, 5, '1/2'),
(116, 4, 10, '10 feuilles'),
(117, 4, 11, '2 cuil. à café'),
(118, 4, 8, 'Compléter'),
(119, 5, 12, '4 cl'),
(120, 5, 5, '2 cl'),
(121, 5, 13, '1 cl'),
(122, 5, 14, '1 cl'),
(123, 6, 15, '3 cl'),
(124, 6, 16, '3 cl'),
(125, 6, 5, '2 cl'),
(126, 6, 17, '3 cl'),
(127, 7, 18, '4 cl'),
(128, 7, 19, 'Compléter'),
(129, 7, 5, '2 cl'),
(130, 8, 20, '3 cl'),
(131, 8, 21, '3 cl'),
(132, 8, 8, 'Compléter'),
(133, 9, 18, '4 cl'),
(134, 9, 22, '2 cl'),
(135, 9, 23, '4 cl'),
(136, 9, 2, '4 cl'),
(137, 10, 18, '4 cl'),
(138, 10, 24, '2 cl'),
(139, 10, 25, '1 expresso'),
(140, 10, 7, '1 cl'),
(141, 11, 15, '5 cl'),
(142, 11, 21, '2 cl'),
(143, 11, 11, '1/2 cuil. à café'),
(144, 11, 27, '1 trait'),
(145, 12, 18, '6 cl'),
(146, 12, 31, '1 cl'),
(147, 13, 9, '2 cl'),
(148, 13, 26, '0.5 cl'),
(149, 13, 27, '1 trait'),
(150, 13, 28, '1.25 cl'),
(151, 13, 29, '1.25 cl'),
(152, 13, 30, '1.5 cl'),
(153, 13, 25, '5 g');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cocktail`
--
ALTER TABLE `cocktail`
  ADD CONSTRAINT `cocktail_ibfk_1` FOREIGN KEY (`Id_difficulte`) REFERENCES `difficulte` (`Id_difficulte`) ON DELETE SET NULL;

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
