-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 29, 2022 at 11:46 AM
-- Server version: 5.7.38
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_usermaster`
--

DROP TABLE IF EXISTS `tbl_usermaster`;
CREATE TABLE IF NOT EXISTS `tbl_usermaster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `jsonData` longtext NOT NULL,
  `createdDate` datetime(6) NOT NULL,
  `modifiedOn` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_usermaster`
--

INSERT INTO `tbl_usermaster` (`id`, `fname`, `lname`, `email`, `mobile`, `username`, `city`, `state`, `zip`, `jsonData`, `createdDate`, `modifiedOn`) VALUES
(43, 'amit', 'kr', 'ak2806@yahoo.co.in', '+918235818948', 'gdfgf', 'Jamshedpurgg', '2', '831012', '{\"fname\":\"amit\",\"lname\":\"kr\",\"email\":\"ak2806@yahoo.co.in\",\"mobile\":\"+918235818948\",\"city\":\"Jamshedpurgg\",\"zip\":\"831012\",\"username\":\"gdfgf\",\"ustate\":\"2\",\"agree\":true}', '2022-11-14 00:00:00.000000', '2022-11-22 00:00:00.000000'),
(44, 'qqqq', 'awrwrw', 'werw@ewre.yr', 'ryrtyryyryt', 'yryty', 'rytty', '2', 'rytrty', '{\"fname\":\"qqqq\",\"lname\":\"awrwrw\",\"email\":\"werw@ewre.yr\",\"mobile\":\"ryrtyryyryt\",\"username\":\"yryty\",\"city\":\"rytty\",\"ustate\":\"2\",\"zip\":\"rytrty\",\"agree\":true}', '2022-11-14 00:00:00.000000', NULL),
(45, 'Amit', 'Kumar', 'ak2806@yahoo.co.in', '08797593740', 'fggfgdg', 'RANCHI', '2', '834004', '{\"fname\":\"Amit\",\"lname\":\"Kumar\",\"mobile\":\"08797593740\",\"city\":\"RANCHI\",\"zip\":\"834004\",\"username\":\"fggfgdg\",\"ustate\":\"2\",\"email\":\"ak2806@yahoo.co.in\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(46, 'Amit', 'Kumar', 'ak2806@yahoo.co.in', '08797593740', 'gfhgh', 'RANCHI', '2', '834004', '{\"fname\":\"Amit\",\"lname\":\"Kumar\",\"mobile\":\"08797593740\",\"city\":\"RANCHI\",\"zip\":\"834004\",\"username\":\"gfhgh\",\"email\":\"ak2806@yahoo.co.in\",\"ustate\":\"2\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(47, 'fghfg', 'fghfg', 'fdgdf@dg.gfh', 'gjh', 'ghj', 'gjh', '1', 'ghjjg', '{\"fname\":\"fghfg\",\"lname\":\"fghfg\",\"mobile\":\"gjh\",\"city\":\"gjh\",\"zip\":\"ghjjg\",\"username\":\"ghj\",\"email\":\"fdgdf@dg.gfh\",\"ustate\":\"1\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(48, 'amit', 'kr', 'ak2806@yahoo.co.in', '+918235818948', 'ghj', 'Jamshedpur', '2', '831012', '{\"fname\":\"amit\",\"lname\":\"kr\",\"mobile\":\"+918235818948\",\"city\":\"Jamshedpur\",\"zip\":\"831012\",\"username\":\"ghj\",\"email\":\"ak2806@yahoo.co.in\",\"ustate\":\"2\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(49, 'amit', 'kr', 'ak2806@yahoo.co.in', '+918235818948', 'gjhgh', 'Jamshedpur', '2', '831012', '{\"fname\":\"amit\",\"lname\":\"kr\",\"mobile\":\"+918235818948\",\"city\":\"Jamshedpur\",\"zip\":\"831012\",\"username\":\"gjhgh\",\"email\":\"ak2806@yahoo.co.in\",\"ustate\":\"2\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(50, 'gjhh', 'ghjj', 'gjgh@dfgf.gj', 'gjhj', 'gjhhj', 'gjh', '1', 'ghj', '{\"fname\":\"gjhh\",\"lname\":\"ghjj\",\"mobile\":\"gjhj\",\"city\":\"gjh\",\"zip\":\"ghj\",\"username\":\"gjhhj\",\"email\":\"gjgh@dfgf.gj\",\"ustate\":\"1\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(51, 'Sushil', 'Mistry', 'gjh@hfg.jjgh', '08797593740', 'gjhj', 'RANCHI', '3', '834004', '{\"fname\":\"Sushil\",\"lname\":\"Mistry\",\"mobile\":\"08797593740\",\"city\":\"RANCHI\",\"zip\":\"834004\",\"username\":\"gjhj\",\"email\":\"gjh@hfg.jjgh\",\"ustate\":\"3\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(52, 'amit', 'kr', 'ak2806@yahoo.co.in', '+918235818948', 'fgdf', 'Jamshedpur', '2', '831012', '{\"fname\":\"amit\",\"lname\":\"kr\",\"mobile\":\"+918235818948\",\"city\":\"Jamshedpur\",\"zip\":\"831012\",\"username\":\"fgdf\",\"email\":\"ak2806@yahoo.co.in\",\"ustate\":\"2\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(53, 'amit', 'kr', 'ak2806@yahoo.co.in', '+918235818948', 'dfgf', 'Jamshedpur', '2', '831012', '{\"fname\":\"amit\",\"lname\":\"kr\",\"mobile\":\"+918235818948\",\"city\":\"Jamshedpur\",\"zip\":\"831012\",\"username\":\"dfgf\",\"email\":\"ak2806@yahoo.co.in\",\"ustate\":\"2\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(55, 'amit', 'kr', 'ak2806@yahoo.co.in', '+918235818948', 'dfgf', 'Jamshedpur', '2', '831012', '{\"fname\":\"amit\",\"lname\":\"kr\",\"mobile\":\"+918235818948\",\"city\":\"Jamshedpur\",\"zip\":\"831012\",\"username\":\"dfgf\",\"email\":\"ak2806@yahoo.co.in\",\"ustate\":\"2\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(56, 'Amit', 'Kumar', 'dfg@gf.gj', '08797593740', 'dfgf', 'RANCHI', '2', '834004', '{\"fname\":\"Amit\",\"lname\":\"Kumar\",\"mobile\":\"08797593740\",\"city\":\"RANCHI\",\"zip\":\"834004\",\"username\":\"dfgf\",\"email\":\"dfg@gf.gj\",\"ustate\":\"2\",\"agree\":true}', '2022-11-16 00:00:00.000000', NULL),
(57, 'Amit', 'Kumar', 'dfgfg@g.dfg', '08797593740', 'dgdfg', 'RANCHI', '2', '834004', '{\"fname\":\"Amit\",\"lname\":\"Kumar\",\"mobile\":\"08797593740\",\"city\":\"RANCHI\",\"zip\":\"834004\",\"username\":\"dgdfg\",\"ustate\":\"2\",\"email\":\"dfgfg@g.dfg\",\"agree\":true}', '2022-11-17 00:00:00.000000', NULL),
(58, 'qqqqqqqqqq', 'qqqqqqqqqqqqq', 'qqq@qq.com', '11111111111', '11111111111', '1111111', '2', '1111111', '{\"fname\":\"qqqqqqqqqq\",\"lname\":\"qqqqqqqqqqqqq\",\"email\":\"qqq@qq.com\",\"mobile\":\"11111111111\",\"username\":\"11111111111\",\"city\":\"1111111\",\"ustate\":\"2\",\"zip\":\"1111111\",\"agree\":true}', '2022-11-21 00:00:00.000000', '2022-11-21 00:00:00.000000'),
(59, 'rrrrrrrrrrrrrrrrr11', 'rr@rr.com11', 'rr@rr.com', 'rrrr', 'rrrr', 'rrrrrrrrrrrrrrrrr11', '3', 'rrrrrrr', '{\"fname\":\"rrrrrrrr\",\"lname\":\"rrrrrrrrr\",\"email\":\"rr@rr.com\",\"mobile\":\"rrrr\",\"username\":\"rrrr\",\"city\":\"r\",\"ustate\":\"3\",\"zip\":\"rrrrrrr\",\"agree\":true}', '2022-11-23 00:00:00.000000', '2022-11-23 00:00:00.000000');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
