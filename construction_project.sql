-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2026 at 07:21 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `construction_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `slug`, `content`, `author`, `image`, `status`, `created_at`, `updated_at`) VALUES
(7, 'this si title title this si title title', 'this-is-slug', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem est consequuntur dicta, vitae natus optio quam nisi dignissimos. Cum beatae vel temporibus exercitationem hic aspernatur accusamus sequi perferendis eligendi impedit. Quo reiciendis iste natus dignissimos impedit recusandae molestias minus reprehenderit. A dignissimos quibusdam sit alias aliquid cum velit. Atque hic cupiditate deserunt accusamus aperiam, sunt est, impedit fugiat iusto nihil molestias ullam! Corrupti, dolorem et!</p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem est consequuntur dicta, vitae natus optio quam nisi dignissimos. Cum beatae vel temporibus exercitationem hic aspernatur accusamus sequi perferendis eligendi impedit. Quo reiciendis iste natus dignissimos impedit recusandae molestias minus reprehenderit. A dignissimos quibusdam sit alias aliquid cum velit. Atque hic cupiditate deserunt accusamus aperiam, sunt est, impedit fugiat iusto nihil molestias ullam! Corrupti, dolorem et!</p><br>', 'jutt', '17864236157.jfif', 1, '2026-07-26 09:51:11', '2026-08-11 00:02:04'),
(8, 'our newour newour newour new', 'new-work', '<p>Lorem ipsum dolor, sit amet consectetur adipisLorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officia quae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officia quae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officia quae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officia quae.icing elit. Odio, officia quae.</p>', 'CEO of compny', '17864234788.jpg', 1, '2026-07-26 09:52:53', '2026-08-11 00:05:16'),
(11, 'dummy article', 'dummy-article', '<p>dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article dummy article </p>', 'dummy article', '178642537011.jfif', 1, '2026-08-11 00:16:10', '2026-08-11 00:16:10'),
(13, 'titlle', 'title', '<p>aa</p>', 'jutt', '178642603713.jfif', 1, '2026-08-11 00:27:17', '2026-08-11 00:27:17'),
(14, '{   \"title\": \"jutt\",   \"slug\": \"jutt\",   \"author\": \"jutt\" }', 'title-jutt-slug-jutt-author-jutt', '<p>{<br>  \"title\": \"jutt\",<br>  \"slug\": \"jutt\",<br>  \"author\": \"jutt\"<br>}</p>', '{   \"title\": \"jutt\",   \"slug\": \"jutt\",   \"author\": \"jutt\" }', '178642611514.jfif', 1, '2026-08-11 00:28:34', '2026-08-11 00:28:35');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) NOT NULL,
  `linkedin_url` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `name`, `image`, `job_title`, `linkedin_url`, `status`, `created_at`, `updated_at`) VALUES
(7, 'DR. Jio', '17857389477.jfif', 'Web Designer', 'https://www.linkedin.com', 1, '2026-07-30 09:40:29', '2026-08-03 01:36:17'),
(15, 'jony bhi booom', '178573892415.jfif', 'youtuber', 'https://www.linkedin.com/checkpoint/challenge/AgFAUdXaI9_pVwAAAZ_GTt17mxLoAJycH7WnndgN8B2Sg4MU4rXa6SuvbYsOGR3_2ci0ihBbh1GXVKnE-ADsGPZ0snT9Mw?ut=2ZQ7FpuHQ48Yo1', 1, '2026-07-31 07:23:21', '2026-08-03 01:35:24'),
(17, 'Deo Jaan', '178573882017.jfif', 'Tester', 'https://www.linkedin.com', 1, '2026-08-03 01:30:59', '2026-08-03 01:33:40'),
(18, 'Harry Dev', '178573889418.jfif', 'Web Devloper', 'https://www.linkedin.com', 1, '2026-08-03 01:34:54', '2026-08-03 01:34:54');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_06_12_031229_create_personal_access_tokens_table', 2),
(5, '2026_06_14_133134_create_services_table', 3),
(6, '2026_06_15_014525_create_temp_images_table', 4),
(7, '2026_06_20_095719_create_projects_table', 5),
(8, '2026_07_07_051525_create_articles_table', 6),
(9, '2026_07_26_150200_create_testimonials_table', 7),
(10, '2026_07_28_005737_alter_testimonial_table', 8),
(11, '2026_07_30_134617_create_members_table', 9),
(12, '2026_08_14_000001_add_role_to_users_table', 10),
(13, '2026_08_14_000002_add_indexes_to_tables', 10);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(8, 'App\\Models\\User', 3, 'token', 'db6c36e6a0110d4a7f6ee352120d831a6c93d01669787e4cdc51a1f5875c3b55', '[\"*\"]', NULL, NULL, '2026-06-13 22:25:41', '2026-06-13 22:25:41'),
(9, 'App\\Models\\User', 3, 'token', '8845978b619fe1efb7acc1d22918de1466c59917f34ecb6a6cb58bc322eda420', '[\"*\"]', NULL, NULL, '2026-06-13 22:29:52', '2026-06-13 22:29:52'),
(10, 'App\\Models\\User', 3, 'token', '93957cb2d5c21a3aa1aa1a1a4799dceaa9485fa1726ce676fc287b51505248e9', '[\"*\"]', NULL, NULL, '2026-06-13 22:30:30', '2026-06-13 22:30:30'),
(11, 'App\\Models\\User', 3, 'token', '9f93b59b3216dd543e858edb63229198b69cccf1ff204fd249c9ba4f5a7366a9', '[\"*\"]', NULL, NULL, '2026-06-13 22:30:41', '2026-06-13 22:30:41'),
(12, 'App\\Models\\User', 3, 'token', 'f7fcba8da65b502a35cf9721127ae70ff74eeeb27e6f09e2c91ed19fa22089c8', '[\"*\"]', NULL, NULL, '2026-06-13 22:31:36', '2026-06-13 22:31:36'),
(13, 'App\\Models\\User', 3, 'token', 'ab3eae95df99ec35235fa954321f08a092fac164b927f3d42dad9bd4b2d37dce', '[\"*\"]', NULL, NULL, '2026-06-13 22:33:59', '2026-06-13 22:33:59'),
(14, 'App\\Models\\User', 3, 'token', '46a48233fc2dbbf3541a680ccb92d59e638cad44d805890c6ea86f15354f0e52', '[\"*\"]', NULL, NULL, '2026-06-13 22:35:06', '2026-06-13 22:35:06'),
(15, 'App\\Models\\User', 3, 'token', '55ebd326be9d797c583245533102507cddd0dff60b2ae224c3fe27e50fc8dca3', '[\"*\"]', NULL, NULL, '2026-06-14 02:20:51', '2026-06-14 02:20:51'),
(16, 'App\\Models\\User', 3, 'token', '78502bf86562df3a2ddc12e189950d4d1429fa1cc614cad191f3180721db9c9a', '[\"*\"]', NULL, NULL, '2026-06-14 02:21:51', '2026-06-14 02:21:51'),
(17, 'App\\Models\\User', 3, 'token', '71930450971f31f5b5117b38bd62ffb80c31cb7fd7a2636e48f9927ec180fd3a', '[\"*\"]', NULL, NULL, '2026-06-14 02:22:19', '2026-06-14 02:22:19'),
(18, 'App\\Models\\User', 3, 'token', 'd46ed190bf0efafa4036164d3392709eb423bab486efff9f1ea0f6acac1db867', '[\"*\"]', '2026-07-31 01:12:58', NULL, '2026-06-14 10:50:23', '2026-07-31 01:12:58'),
(19, 'App\\Models\\User', 3, 'token', 'c6439b316c32f68bcf7af1c49de4cfebb35cfda706e0cb28b4a9b04d8810f1ad', '[\"*\"]', NULL, NULL, '2026-06-14 19:33:52', '2026-06-14 19:33:52'),
(20, 'App\\Models\\User', 3, 'token', 'a3b141a7cfbec0476ed2f4b58e8eb162c169d27077a467dbb5c9f8ab2c704d03', '[\"*\"]', NULL, NULL, '2026-06-14 19:41:17', '2026-06-14 19:41:17'),
(21, 'App\\Models\\User', 3, 'token', 'c08c3a49472228e89e41754389ea2e03f5e8fc7f67358d323ecbd0cceb183ae0', '[\"*\"]', '2026-06-14 19:44:33', NULL, '2026-06-14 19:43:13', '2026-06-14 19:44:33'),
(22, 'App\\Models\\User', 3, 'token', '02eaf3b33e260ae478e9ddd23808f2fba2ca10c2876b244e7d0909c79cfddd5e', '[\"*\"]', '2026-08-11 00:25:09', NULL, '2026-06-14 19:48:46', '2026-08-11 00:25:09'),
(23, 'App\\Models\\User', 3, 'token', '19d08a948a2a6f9486eb429c49b788182e48ac6993fcaace2262b1975361d1fa', '[\"*\"]', '2026-08-12 00:20:13', NULL, '2026-06-21 22:56:02', '2026-08-12 00:20:13'),
(24, 'App\\Models\\User', 3, 'token', 'fae2b20ba0c3ca81933b0097355842951076aec53ae67688ee0dd97b2fef6f61', '[\"*\"]', NULL, NULL, '2026-06-23 04:02:19', '2026-06-23 04:02:19'),
(25, 'App\\Models\\User', 3, 'token', '7647beadc1f75d4390ff80638aabba3e3054f40c161edda9c732d92f1039ad7b', '[\"*\"]', NULL, NULL, '2026-06-23 04:03:17', '2026-06-23 04:03:17'),
(26, 'App\\Models\\User', 3, 'token', 'fd8f9aba233ff0484853973e8205a72d87843a00f14907115016ba31146ddb1a', '[\"*\"]', NULL, NULL, '2026-08-11 06:59:13', '2026-08-11 06:59:13'),
(27, 'App\\Models\\User', 3, 'token', '9ffbba4688244ee9481415d8320a2ed46b6a7e8763bd4c81d05342b47f1e398e', '[\"*\"]', NULL, NULL, '2026-08-11 07:00:25', '2026-08-11 07:00:25'),
(28, 'App\\Models\\User', 3, 'token', '81b2c5311a9987a4f78b5fa6d65373445c5f2083c69b0f09f45be871581d3404', '[\"*\"]', NULL, NULL, '2026-08-12 00:21:18', '2026-08-12 00:21:18'),
(29, 'App\\Models\\User', 3, 'token', 'e11f3ec061294b1ed49a22a1c3eb0cf8c994c90b44faffe052d33eef6cad7182', '[\"*\"]', NULL, NULL, '2026-08-12 00:22:15', '2026-08-12 00:22:15'),
(30, 'App\\Models\\User', 3, 'token', 'c96e3e930d1ce2bf85ffddd1e04cd6c83546ea0436d8b4a061f5fef332e881bf', '[\"*\"]', '2026-08-12 00:24:19', NULL, '2026-08-12 00:22:30', '2026-08-12 00:24:19'),
(31, 'App\\Models\\User', 3, 'token', 'e92a4fc4307c7fb595775f351e1629da4dcba5caf83fb0867295db8d1cf7cf8f', '[\"*\"]', NULL, NULL, '2026-08-12 00:38:06', '2026-08-12 00:38:06'),
(32, 'App\\Models\\User', 5, 'token', '374842a883565a211cac1999c1ec6bb087efc5e80b91d9ab55e312cfc08bb001', '[\"*\"]', NULL, NULL, '2026-08-12 00:45:39', '2026-08-12 00:45:39'),
(33, 'App\\Models\\User', 6, 'token', '54c7a4725375342fbffe3d798bd3d2382ddf6bf1d704ce03b3019e03ba42f2fd', '[\"*\"]', NULL, NULL, '2026-08-12 00:54:16', '2026-08-12 00:54:16'),
(34, 'App\\Models\\User', 6, 'token', '4c9bcde48cfdc65dff9c11aeda0bdbe72aed2729ad654a0ed522a449c3f0b24e', '[\"*\"]', NULL, NULL, '2026-08-12 00:54:31', '2026-08-12 00:54:31'),
(35, 'App\\Models\\User', 5, 'token', '6c4e60b804dc57fb7e813b4ab801f9f653ada35c9dfbee0841454664f79f2df6', '[\"*\"]', NULL, NULL, '2026-08-12 00:54:51', '2026-08-12 00:54:51'),
(36, 'App\\Models\\User', 7, 'token', '01f19db67ae153495ad651cb4bd7388e98fb35df96d54de1b61f4365541d87c5', '[\"*\"]', NULL, NULL, '2026-08-12 01:07:48', '2026-08-12 01:07:48'),
(37, 'App\\Models\\User', 7, 'token', '7bfe66b30a8127f0ad400bee5016aae25c161a21ab65981061848553d57a2fdb', '[\"*\"]', NULL, NULL, '2026-08-12 01:08:23', '2026-08-12 01:08:23'),
(38, 'App\\Models\\User', 5, 'token', '1b611956c27dedfd54655d720431efe93c04ed816adc48054fd8cd75c8e03598', '[\"*\"]', NULL, NULL, '2026-08-14 00:09:21', '2026-08-14 00:09:21'),
(39, 'App\\Models\\User', 5, 'token', 'c06fc37013c9b70aa9104775dbe850004dc539c86c922ccd8dc0a244fdf7cd7a', '[\"*\"]', NULL, NULL, '2026-08-14 05:44:52', '2026-08-14 05:44:52');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `short_desc` varchar(255) DEFAULT NULL,
  `construction_type` varchar(255) DEFAULT NULL,
  `sector` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `slug`, `short_desc`, `construction_type`, `sector`, `location`, `image`, `content`, `status`, `created_at`, `updated_at`) VALUES
(27, 'Modern Residential Complex', 'modern-residential-complex', 'A modern residential complex designed with high-quality construction, energy-efficient solutions, and premium amenities to provide a comfortable and sustainable living experience for families.', 'Industrial construction', 'Corporate', 'pakistan', '178254172527.jpg', '<p>A modern residential complex designed with high-quality construction, energy-efficient solutions, and premium amenities to provide a comfortable and sustainable living experience for families.</p>', 1, '2026-06-27 01:28:45', '2026-06-27 01:28:48'),
(28, 'Commercial Office Tower', 'commercial-office-tower', 'A state-of-the-art commercial office tower featuring modern architecture, smart facilities, spacious workspaces, and advanced safety standards for businesses.', 'Commercial construction', 'Corporate', 'Lahore', '178254178528.jpg', '<p>A state-of-the-art commercial office tower featuring modern architecture, smart facilities, spacious workspaces, and advanced safety standards for businesses.</p>', 1, '2026-06-27 01:29:45', '2026-06-27 01:29:47'),
(29, 'City Hospital Expansion', 'city-hospital-expansion', 'A healthcare infrastructure project focused on expanding medical facilities with advanced equipment, patient-friendly spaces, and efficient healthcare services.', 'Insfrastructure construction', 'Health', 'pakistan', '178254183429.jpg', '<p>A healthcare infrastructure project focused on expanding medical facilities with advanced equipment, patient-friendly spaces, and efficient healthcare services.</p>', 1, '2026-06-27 01:30:34', '2026-06-27 01:30:37'),
(30, 'Green Valley School Campus', 'green-valley-school-campus', 'A modern educational campus built with innovative classrooms, science laboratories, sports facilities, and eco-friendly infrastructure for quality education.', 'Insfrastructure construction', 'Education', 'pakistan', '178254189130.jpg', '<p>A modern educational campus built with innovative classrooms, science laboratories, sports facilities, and eco-friendly infrastructure for quality education.</p>', 1, '2026-06-27 01:31:31', '2026-06-27 01:31:36'),
(31, 'Industrial Manufacturing Plant', 'industrial-manufacturing-plant', 'A large-scale industrial facility designed to support efficient manufacturing processes with modern technology, safety measures, and sustainable operations.', 'Industrial construction', 'Corporate', 'pakistan', '178254263031.jpg', '<p>A large-scale industrial facility designed to support efficient manufacturing processes with modern technology, safety measures, and sustainable operations.</p><br><p>A large-scale industrial facility designed to support efficient manufacturing processes with modern technology, safety measures, and sustainable operations.</p><br><p>A large-scale industrial facility designed to support efficient manufacturing processes with modern technology, safety measures, and sustainable operations.</p><br>', 1, '2026-06-27 01:43:50', '2026-08-04 01:27:15'),
(32, 'Luxury Shopping Mall', 'luxury-shopping-mall', 'A premium shopping mall offering a modern retail experience with spacious stores, entertainment zones, food courts, and advanced security systems for visitors.', 'Insfrastructure construction', 'Corporate', 'pakistan', '178254269032.jpg', '<p>A premium shopping mall offering a modern retail experience with spacious stores, entertainment zones, food courts, and advanced security systems for visitors.</p>', 1, '2026-06-27 01:44:50', '2026-06-27 01:44:52');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `short_desc` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `slug`, `short_desc`, `content`, `image`, `status`, `created_at`, `updated_at`) VALUES
(26, 'project-management', 'project-management', 'Efficient project management services to ensure smooth construction operations.', '<p>Our project management team oversees every aspect of construction, including budgeting, scheduling, quality control, and resource allocation. We ensure projects are completed on time, within budget, and according to the highest quality standards.</p>', '178194912226.jpg', 1, '2026-06-19 19:58:45', '2026-06-20 04:52:04'),
(27, 'architecture-planning', 'architecture-planning', 'Innovative architectural planning services for residential and commercial projects.', '<p>We provide professional architectural design and planning services to ensure every project starts with a strong foundation. Our team develops detailed plans, layouts, and 3D concepts that maximize efficiency, aesthetics, and long-term value.</p>', '178194907027.jpg', 1, '2026-06-20 03:45:34', '2026-06-20 04:51:11'),
(28, 'interior-design', 'interior-design', 'Creative and functional interior design solutions tailored to your needs and lifestyle.', '<p>Our interior design team creates beautiful and practical spaces that reflect your personality and preferences. From space planning and furniture selection to lighting and décor, we focus on creating interiors that are both stylish and functional.</p>', '178194901828.jpg', 1, '2026-06-20 03:45:52', '2026-06-20 04:50:19'),
(29, 'Building Construction', 'building-construction', 'We provide complete residential and commercial building construction services with quality materials and expert workmanship.', '<p>Our building construction service covers every stage of the project, from planning and foundation work to final finishing. We focus on delivering durable, safe, and modern structures that meet industry standards. Our experienced team ensures quality craftsmanship, timely completion, and complete customer satisfaction.</p>', '178194893929.jpg', 1, '2026-06-20 04:39:39', '2026-06-20 04:49:00'),
(30, 'house-renovation', 'house-renovation', 'Upgrade your property with professional renovation services that improve comfort, style, and value.', '<p>We specialize in transforming old and outdated properties into modern living spaces. Our renovation services include remodeling, structural improvements, flooring, painting, and complete interior upgrades. We work closely with clients to bring their vision to life while staying within budget.</p>', '178194874330.jpg', 1, '2026-06-20 04:45:43', '2026-06-20 04:49:43');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('2YUCBL4wt9wUDibNE1Mju8jtQyLRAqZkzHqcgvVC', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.130.0 Chrome/148.0.7778.280 Electron/42.6.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib0RwVndvYlY5R1FoeFpJVjdZaFQ5UjNSYWNZZDlDM0JnOU5HdzJ0QyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1785832785),
('C8ITyiDffSDTXSXOCZw4Mnj65AvVEKlYxn1mz85p', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMU5VWEttRTRYd2txWUpScEF6eEtseDltYVZ2cXhnajJZS29yaTNnSyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1782533615),
('CTfKxFIz9fGyNLifPF7iqLaXmBgi0OPi7Rvy3cXt', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.131.0 Chrome/148.0.7778.280 Electron/42.7.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS283R3hiNDJsbXJwUloxUlJPQ1VjeHBsckVsNnV1VHNLRDVXcXFaeiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1786429109),
('Fp2cKGAvkUYDDoVVqxud0iYFAHhuSMlu1Gx6BcsK', NULL, '127.0.0.1', 'Thunder Client (https://www.thunderclient.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoia1JZNG9uMGFrYWlyU1pseWNYeTJPb1FlNGwydFJDeVdKQ3ZtRjkxMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1785833466),
('jvoXmtR24vK8KlSjGt0TuJWBIQeyqTC0GoCMn8O3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTDRuZG1NWE9YWXJ1bVFwUHR1U2Q2S1VRT2RzRnh0emZsTnc3VTU1SSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1781947506),
('XCRIugSBWp2DgEkAyY3iBnFWRqGNn1EQf8DjhyGA', NULL, '127.0.0.1', 'Thunder Client (https://www.thunderclient.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWGJjUU42b1BmOXBxTlh0MEZMYnZ6am40RllOalBkZW1SYVlkWkZQUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1785833316),
('xUjZzLkjuFbhdYtNgL7phrMqzZ6ZWD1IVGON7n6n', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWUZsQ01TSGRtOVpvUXl3NDVxRk5DdUhkRjljS1N6Z0dmTk9iWDFrNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1783402757),
('YfyNKPwWLDR73IlmvGqD0x05qmTKzyL10uRt7Pyf', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSGdWRnZhQnk4SnR4YmRZTjFLb2xoTWs1OTQ4UUREVkh5aWRoRDc5bCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1785905633),
('zkllkfYhjDYcb9EgbAR27aUDTNU55EeG4qrAhSWi', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoic0lNcWpEY25kWkFlZmxqWmNuckJLa3RxRG03MGhSbFlFWTR4czJSbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1785822718);

-- --------------------------------------------------------

--
-- Table structure for table `temp_images`
--

CREATE TABLE `temp_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `temp_images`
--

INSERT INTO `temp_images` (`id`, `name`, `created_at`, `updated_at`) VALUES
(37, '1781748589.png', '2026-06-17 21:09:49', '2026-06-17 21:09:49'),
(38, '1781749505.png', '2026-06-17 21:25:05', '2026-06-17 21:25:05'),
(39, '1781749631.png', '2026-06-17 21:27:11', '2026-06-17 21:27:11'),
(40, '1781750055.png', '2026-06-17 21:34:15', '2026-06-17 21:34:15'),
(41, '1781851546.png', '2026-06-19 01:45:46', '2026-06-19 01:45:46'),
(42, '1781851597.png', '2026-06-19 01:46:37', '2026-06-19 01:46:37'),
(43, '1781851933.png', '2026-06-19 01:52:13', '2026-06-19 01:52:13'),
(44, '1781852096.png', '2026-06-19 01:54:56', '2026-06-19 01:54:56'),
(45, '1781855070.png', '2026-06-19 02:44:30', '2026-06-19 02:44:30'),
(46, '1781855513.png', '2026-06-19 02:51:53', '2026-06-19 02:51:53'),
(47, '1781856157.png', '2026-06-19 03:02:37', '2026-06-19 03:02:37'),
(48, '1781856259.png', '2026-06-19 03:04:19', '2026-06-19 03:04:19'),
(49, '1781856396.png', '2026-06-19 03:06:36', '2026-06-19 03:06:36'),
(50, '1781857070.png', '2026-06-19 03:17:50', '2026-06-19 03:17:50'),
(51, '1781857149.png', '2026-06-19 03:19:09', '2026-06-19 03:19:09'),
(52, '1781857411.png', '2026-06-19 03:23:31', '2026-06-19 03:23:31'),
(53, '1781917122.png', '2026-06-19 19:58:42', '2026-06-19 19:58:42'),
(54, '1781918471.png', '2026-06-19 20:21:11', '2026-06-19 20:21:11'),
(55, '1781945133.png', '2026-06-20 03:45:33', '2026-06-20 03:45:33'),
(56, '1781945151.png', '2026-06-20 03:45:51', '2026-06-20 03:45:51'),
(57, '1781947674.png', '2026-06-20 04:27:54', '2026-06-20 04:27:54'),
(58, '1781948376.jfif', '2026-06-20 04:39:36', '2026-06-20 04:39:36'),
(59, '1781948439.jfif', '2026-06-20 04:40:39', '2026-06-20 04:40:39'),
(60, '1781948741.jpg', '2026-06-20 04:45:41', '2026-06-20 04:45:41'),
(61, '1781948935.jpg', '2026-06-20 04:48:55', '2026-06-20 04:48:55'),
(62, '1781949015.jpg', '2026-06-20 04:50:15', '2026-06-20 04:50:15'),
(63, '1781949067.jpg', '2026-06-20 04:51:07', '2026-06-20 04:51:07'),
(64, '1781949117.jpg', '2026-06-20 04:51:57', '2026-06-20 04:51:57'),
(65, '1781949158.jpg', '2026-06-20 04:52:38', '2026-06-20 04:52:38'),
(66, '1781953352.jpg', '2026-06-20 06:02:32', '2026-06-20 06:02:32'),
(67, '1781953440.jpg', '2026-06-20 06:04:00', '2026-06-20 06:04:00'),
(68, '1781953648.jfif', '2026-06-20 06:07:28', '2026-06-20 06:07:28'),
(69, '1781953690.jfif', '2026-06-20 06:08:10', '2026-06-20 06:08:10'),
(70, '1781953775.jfif', '2026-06-20 06:09:35', '2026-06-20 06:09:35'),
(71, '1781953805.png', '2026-06-20 06:10:05', '2026-06-20 06:10:05'),
(72, '1781953884.png', '2026-06-20 06:11:24', '2026-06-20 06:11:24'),
(73, '1781954232.png', '2026-06-20 06:17:12', '2026-06-20 06:17:12'),
(74, '1781954303.png', '2026-06-20 06:18:23', '2026-06-20 06:18:23'),
(75, '1781954427.png', '2026-06-20 06:20:27', '2026-06-20 06:20:27'),
(76, '1781954498.png', '2026-06-20 06:21:38', '2026-06-20 06:21:38'),
(77, '1781954527.png', '2026-06-20 06:22:07', '2026-06-20 06:22:07'),
(78, '1781954607.png', '2026-06-20 06:23:27', '2026-06-20 06:23:27'),
(79, '1781954663.png', '2026-06-20 06:24:23', '2026-06-20 06:24:23'),
(80, '1781954718.png', '2026-06-20 06:25:18', '2026-06-20 06:25:18'),
(81, '1781955254.png', '2026-06-20 06:34:14', '2026-06-20 06:34:14'),
(82, '1782094750.png', '2026-06-21 21:19:10', '2026-06-21 21:19:10'),
(83, '1782095151.png', '2026-06-21 21:25:51', '2026-06-21 21:25:51'),
(84, '1782106602.jpeg', '2026-06-22 00:36:42', '2026-06-22 00:36:42'),
(85, '1782106613.png', '2026-06-22 00:36:53', '2026-06-22 00:36:53'),
(86, '1782106713.jpg', '2026-06-22 00:38:33', '2026-06-22 00:38:33'),
(87, '1782111487.jpg', '2026-06-22 01:58:07', '2026-06-22 01:58:07'),
(88, '1782111581.webp', '2026-06-22 01:59:41', '2026-06-22 01:59:41'),
(89, '1782111587.jpg', '2026-06-22 01:59:47', '2026-06-22 01:59:47'),
(90, '1782111600.png', '2026-06-22 02:00:00', '2026-06-22 02:00:00'),
(91, '1782111615.png', '2026-06-22 02:00:15', '2026-06-22 02:00:15'),
(92, '1782111642.png', '2026-06-22 02:00:42', '2026-06-22 02:00:42'),
(93, '1782112461.png', '2026-06-22 02:14:21', '2026-06-22 02:14:21'),
(94, '1782112475.png', '2026-06-22 02:14:35', '2026-06-22 02:14:35'),
(95, '1782112480.png', '2026-06-22 02:14:40', '2026-06-22 02:14:40'),
(96, '1782112485.png', '2026-06-22 02:14:45', '2026-06-22 02:14:45'),
(97, '1782112489.png', '2026-06-22 02:14:49', '2026-06-22 02:14:49'),
(98, '1782112495.webp', '2026-06-22 02:14:55', '2026-06-22 02:14:55'),
(99, '1782112500.webp', '2026-06-22 02:15:00', '2026-06-22 02:15:00'),
(100, '1782112503.webp', '2026-06-22 02:15:03', '2026-06-22 02:15:03'),
(101, '1782112507.webp', '2026-06-22 02:15:07', '2026-06-22 02:15:07'),
(102, '1782112512.jpg', '2026-06-22 02:15:12', '2026-06-22 02:15:12'),
(103, '1782112515.webp', '2026-06-22 02:15:15', '2026-06-22 02:15:15'),
(104, '1782112519.webp', '2026-06-22 02:15:19', '2026-06-22 02:15:19'),
(105, '1782112544.png', '2026-06-22 02:15:44', '2026-06-22 02:15:44'),
(106, '1782112681.png', '2026-06-22 02:18:01', '2026-06-22 02:18:01'),
(107, '1782112811.png', '2026-06-22 02:20:11', '2026-06-22 02:20:11'),
(108, '1782112907.png', '2026-06-22 02:21:47', '2026-06-22 02:21:47'),
(109, '1782112968.png', '2026-06-22 02:22:48', '2026-06-22 02:22:48'),
(110, '1782113106.png', '2026-06-22 02:25:06', '2026-06-22 02:25:06'),
(111, '1782113478.png', '2026-06-22 02:31:18', '2026-06-22 02:31:18'),
(112, '1782113485.png', '2026-06-22 02:31:25', '2026-06-22 02:31:25'),
(113, '1782113595.png', '2026-06-22 02:33:15', '2026-06-22 02:33:15'),
(114, '1782113659.png', '2026-06-22 02:34:19', '2026-06-22 02:34:19'),
(115, '1782114118.png', '2026-06-22 02:41:58', '2026-06-22 02:41:58'),
(116, '1782114125.png', '2026-06-22 02:42:05', '2026-06-22 02:42:05'),
(117, '1782114138.jpg', '2026-06-22 02:42:18', '2026-06-22 02:42:18'),
(118, '1782114175.jpg', '2026-06-22 02:42:55', '2026-06-22 02:42:55'),
(119, '1782534252.jpeg', '2026-06-26 23:24:12', '2026-06-26 23:24:12'),
(120, '1782534343.jpeg', '2026-06-26 23:25:43', '2026-06-26 23:25:43'),
(121, '1782535746.jpg', '2026-06-26 23:49:06', '2026-06-26 23:49:06'),
(122, '1782536871.jpg', '2026-06-27 00:07:51', '2026-06-27 00:07:51'),
(123, '1782537188.jpeg', '2026-06-27 00:13:08', '2026-06-27 00:13:08'),
(124, '1782537497.jpeg', '2026-06-27 00:18:17', '2026-06-27 00:18:17'),
(125, '1782538879.jfif', '2026-06-27 00:41:19', '2026-06-27 00:41:19'),
(126, '1782538891.jfif', '2026-06-27 00:41:31', '2026-06-27 00:41:31'),
(127, '1782541721.jpg', '2026-06-27 01:28:41', '2026-06-27 01:28:41'),
(128, '1782541782.jpg', '2026-06-27 01:29:42', '2026-06-27 01:29:42'),
(129, '1782541831.jpg', '2026-06-27 01:30:31', '2026-06-27 01:30:31'),
(130, '1782541887.jpg', '2026-06-27 01:31:27', '2026-06-27 01:31:27'),
(131, '1782542627.jpg', '2026-06-27 01:43:47', '2026-06-27 01:43:47'),
(132, '1782542689.jpg', '2026-06-27 01:44:49', '2026-06-27 01:44:49'),
(133, '1783404716.png', '2026-07-07 01:11:56', '2026-07-07 01:11:56'),
(134, '1783484977.png', '2026-07-07 23:29:37', '2026-07-07 23:29:37'),
(135, '1783485565.png', '2026-07-07 23:39:25', '2026-07-07 23:39:25'),
(136, '1783485726.png', '2026-07-07 23:42:06', '2026-07-07 23:42:06'),
(137, '1783485766.png', '2026-07-07 23:42:46', '2026-07-07 23:42:46'),
(138, '1783486057.jfif', '2026-07-07 23:47:37', '2026-07-07 23:47:37'),
(139, '1783489838.jfif', '2026-07-08 00:50:38', '2026-07-08 00:50:38'),
(140, '1783490770.png', '2026-07-08 01:06:10', '2026-07-08 01:06:10'),
(141, '1785077466.jpg', '2026-07-26 09:51:06', '2026-07-26 09:51:06'),
(142, '1785077571.jpg', '2026-07-26 09:52:51', '2026-07-26 09:52:51'),
(143, '1785116305.jfif', '2026-07-26 20:38:25', '2026-07-26 20:38:25'),
(144, '1785116712.png', '2026-07-26 20:45:12', '2026-07-26 20:45:12'),
(145, '1785119164.jpg', '2026-07-26 21:26:04', '2026-07-26 21:26:04'),
(146, '1785119238.png', '2026-07-26 21:27:18', '2026-07-26 21:27:18'),
(147, '1785200123.jpg', '2026-07-27 19:55:23', '2026-07-27 19:55:23'),
(148, '1785201050.jpg', '2026-07-27 20:10:50', '2026-07-27 20:10:50'),
(149, '1785201905.png', '2026-07-27 20:25:05', '2026-07-27 20:25:05'),
(150, '1785205575.jpg', '2026-07-27 21:26:15', '2026-07-27 21:26:15'),
(151, '1785205722.jpg', '2026-07-27 21:28:42', '2026-07-27 21:28:42'),
(152, '1785205978.jpg', '2026-07-27 21:32:58', '2026-07-27 21:32:58'),
(153, '1785206020.png', '2026-07-27 21:33:40', '2026-07-27 21:33:40'),
(154, '1785206123.jpg', '2026-07-27 21:35:23', '2026-07-27 21:35:23'),
(155, '1785215903.png', '2026-07-28 00:18:23', '2026-07-28 00:18:23'),
(156, '1785216073.png', '2026-07-28 00:21:13', '2026-07-28 00:21:13'),
(157, '1785216253.png', '2026-07-28 00:24:13', '2026-07-28 00:24:13'),
(158, '1785422057.jpg', '2026-07-30 09:34:17', '2026-07-30 09:34:17'),
(159, '1785422380.png', '2026-07-30 09:39:40', '2026-07-30 09:39:40'),
(160, '1785425240.jfif', '2026-07-30 10:27:20', '2026-07-30 10:27:20'),
(161, '1785498943.jfif', '2026-07-31 06:55:43', '2026-07-31 06:55:43'),
(162, '1785498947.jfif', '2026-07-31 06:55:47', '2026-07-31 06:55:47'),
(163, '1785499007.jfif', '2026-07-31 06:56:47', '2026-07-31 06:56:47'),
(164, '1785499096.jfif', '2026-07-31 06:58:16', '2026-07-31 06:58:16'),
(165, '1785500596.jpeg', '2026-07-31 07:23:16', '2026-07-31 07:23:16'),
(166, '1785735300.jpeg', '2026-08-03 00:35:00', '2026-08-03 00:35:00'),
(167, '1785738308.png', '2026-08-03 01:25:08', '2026-08-03 01:25:08'),
(168, '1785738657.png', '2026-08-03 01:30:57', '2026-08-03 01:30:57'),
(169, '1785738818.jfif', '2026-08-03 01:33:38', '2026-08-03 01:33:38'),
(170, '1785738892.jfif', '2026-08-03 01:34:52', '2026-08-03 01:34:52'),
(171, '1785738922.jfif', '2026-08-03 01:35:22', '2026-08-03 01:35:22'),
(172, '1785738945.jfif', '2026-08-03 01:35:45', '2026-08-03 01:35:45'),
(173, '1785823532.jfif', '2026-08-04 01:05:32', '2026-08-04 01:05:32'),
(174, '1785823722.jfif', '2026-08-04 01:08:42', '2026-08-04 01:08:42'),
(175, '1785823755.jfif', '2026-08-04 01:09:15', '2026-08-04 01:09:15'),
(176, '1785823848.jpg', '2026-08-04 01:10:48', '2026-08-04 01:10:48'),
(177, '1785834424.jpg', '2026-08-04 04:07:04', '2026-08-04 04:07:04'),
(178, '1786423411.jfif', '2026-08-10 23:43:31', '2026-08-10 23:43:31'),
(179, '1786423416.jfif', '2026-08-10 23:43:36', '2026-08-10 23:43:36'),
(180, '1786423476.jpg', '2026-08-10 23:44:36', '2026-08-10 23:44:36'),
(181, '1786423614.jfif', '2026-08-10 23:46:54', '2026-08-10 23:46:54'),
(182, '1786425368.jfif', '2026-08-11 00:16:08', '2026-08-11 00:16:08'),
(183, '1786425416.jpg', '2026-08-11 00:16:56', '2026-08-11 00:16:56'),
(184, '1786425473.jfif', '2026-08-11 00:17:53', '2026-08-11 00:17:53'),
(185, '1786426034.jfif', '2026-08-11 00:27:14', '2026-08-11 00:27:14'),
(186, '1786426113.jfif', '2026-08-11 00:28:33', '2026-08-11 00:28:33'),
(187, '1786426162.jfif', '2026-08-11 00:29:22', '2026-08-11 00:29:22');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `testimonial` text NOT NULL,
  `citation` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `designation` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `testimonial`, `citation`, `image`, `status`, `designation`, `created_at`, `updated_at`) VALUES
(27, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, placeat nemo?', 'Jon Dev', '178520572427.jpg', 1, 'CEO', '2026-07-27 21:28:44', '2026-07-28 00:26:27'),
(28, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, placeat nemo?', 'Sarah', '178521590928.png', 1, 'Manager', '2026-07-28 00:18:29', '2026-07-28 00:25:32'),
(29, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, placeat nemo?', 'harry', '178521607729.png', 1, 'CCO', '2026-07-28 00:21:17', '2026-07-28 00:25:50'),
(30, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repudiandae?', 'yahooo', '178521625830.png', 1, 'katapa', '2026-07-28 00:24:18', '2026-08-04 01:31:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(5, 'jutt saab', 'juttsaab@gmail.com', 'user', NULL, '$2y$12$t9logtnGnXvFQm.W6OlI7umo2B3R6Yv/aVxqWB0eXg8kBbeqi3rzq', 'nwzWZCaj6N', '2026-06-20 05:41:24', '2026-06-20 05:41:24'),
(6, 'bot builders and branders', 'hellow.marketing.2@gmail.com', 'user', NULL, '$2y$12$soJe/DOWxmdtwcPxo7EFJufIe7z3NrsRIaftwMTDyY69wkGahzy7K', NULL, '2026-08-12 00:54:16', '2026-08-12 00:54:16'),
(7, 'juttjutt@gmail.com', 'juttjutt@gmail.com', 'user', NULL, '$2y$12$OkVgmYBkUfxlxGPKEtVuTehxWnBwNjl43skM16Ludp2jsRXg2aKYO', NULL, '2026-08-12 01:07:48', '2026-08-12 01:07:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `articles_slug_status_created_at_index` (`slug`,`status`,`created_at`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `members_status_created_at_index` (`status`,`created_at`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_slug_status_created_at_index` (`slug`,`status`,`created_at`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_slug_status_created_at_index` (`slug`,`status`,`created_at`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `temp_images`
--
ALTER TABLE `temp_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `testimonials_status_created_at_index` (`status`,`created_at`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `temp_images`
--
ALTER TABLE `temp_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
