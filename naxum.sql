-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 22, 2023 at 09:21 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `naxum`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2y$10$.bnfreQWjoBlM4m/FL56PeNsXjyGhoVnGq7ROMjTeqY1TuoRpSHqu');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `user` bigint NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `mobile_number` varchar(12) NOT NULL,
  `email` varchar(113) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_22_124717_add_user_type_to_users_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 3, 'access_token', 'fadf7dc57ee7331eb438af26f277db2b185007b706e0b746a0e88e0120100f1f', '[\"*\"]', NULL, NULL, '2023-02-22 12:54:37', '2023-02-22 12:54:37'),
(2, 'App\\Models\\User', 4, 'access_token', '0b435ef0ee30eadde53fd4e89fa5adc13e281fdc5ea9a0ae64219a478f05ef7e', '[\"*\"]', NULL, NULL, '2023-02-22 12:56:27', '2023-02-22 12:56:27'),
(3, 'App\\Models\\Admin', 1, 'access_token', '5afa1dba9b38aa99f123c1d1adbf005b37142930510e9496fd030b9f9a2cd62c', '[\"*\"]', NULL, NULL, '2023-02-22 17:18:35', '2023-02-22 17:18:35'),
(4, 'App\\Models\\Admin', 1, 'access_token', '010db3ae1e085fc60063c12fbacfb297940c4585256f5f6bf8df5fcf52298586', '[\"*\"]', '2023-02-22 17:23:36', NULL, '2023-02-22 17:19:06', '2023-02-22 17:23:36'),
(5, 'App\\Models\\User', 5, 'access_token', '9730df785e6b45fe4207d9b221c418e2d8f3d55feb3dbc7a2892179f462497c5', '[\"*\"]', NULL, NULL, '2023-02-22 17:19:35', '2023-02-22 17:19:35'),
(6, 'App\\Models\\Admin', 1, 'access_token', '58de4f697bbe47e76e0e1fc26ea24262c24f7ce4d1f678d5fdc6eff5b996e937', '[\"*\"]', '2023-02-22 18:57:46', NULL, '2023-02-22 17:24:35', '2023-02-22 18:57:46'),
(7, 'App\\Models\\Admin', 1, 'access_token', '4e2d60262dc5e58f6be60c714528e7c80e69ba7178058fda9ab182c8536fe8e5', '[\"*\"]', NULL, NULL, '2023-02-22 17:48:19', '2023-02-22 17:48:19'),
(8, 'App\\Models\\Admin', 1, 'access_token', '7e3c3d8e3432ee7d9fdbd882405f0ebfeffda1c2060f7f9beb655d90ac1c29a9', '[\"*\"]', '2023-02-22 17:52:23', NULL, '2023-02-22 17:51:13', '2023-02-22 17:52:23'),
(9, 'App\\Models\\Admin', 1, 'access_token', '1fba5762d60e4a5ca95760b472a8fb365f33b66291a9e72383ea448181ee8cfe', '[\"*\"]', '2023-02-22 18:39:11', NULL, '2023-02-22 17:52:28', '2023-02-22 18:39:11'),
(10, 'App\\Models\\Admin', 1, 'access_token', '87b63807942d4052bbdf8ffda4a1791c8d23c59c8c0fef1504528f226f8f648b', '[\"*\"]', '2023-02-22 18:44:06', NULL, '2023-02-22 18:44:05', '2023-02-22 18:44:06'),
(11, 'App\\Models\\Admin', 1, 'access_token', 'f1c4e321097df36a8692e2d55d0731de4687fdf2e0391f14ce88bfdcf7701234', '[\"*\"]', '2023-02-22 19:29:51', NULL, '2023-02-22 18:44:50', '2023-02-22 19:29:51'),
(12, 'App\\Models\\User', 4, 'access_token', 'db289f60b926cc69adc00cb38646b3908113133ae20fe95102148f1297c98948', '[\"*\"]', '2023-02-22 19:46:52', NULL, '2023-02-22 19:00:00', '2023-02-22 19:46:52'),
(13, 'App\\Models\\Admin', 1, 'access_token', 'e1ba846653cbe336ecd930378851f764349a5461b3ec99fa6faf4c1b4449ba71', '[\"*\"]', '2023-02-22 19:47:17', NULL, '2023-02-22 19:33:31', '2023-02-22 19:47:17'),
(14, 'App\\Models\\User', 6, 'access_token', 'f3708a74d25df5fda7a0de1691e7d8751fe71ade1273d1de9dd7fb69bd85fde7', '[\"*\"]', NULL, NULL, '2023-02-22 19:42:13', '2023-02-22 19:42:13'),
(15, 'App\\Models\\Admin', 1, 'access_token', '363747b60b7d289c054842c7475c843bf91b662f8e57b6eece2b5aaadc815b5e', '[\"*\"]', '2023-02-22 19:48:09', NULL, '2023-02-22 19:48:08', '2023-02-22 19:48:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_number` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `username` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
