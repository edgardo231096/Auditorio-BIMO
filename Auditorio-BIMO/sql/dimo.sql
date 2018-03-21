-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2018 a las 23:55:07
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 7.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dimo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asiento`
--

CREATE TABLE `asiento` (
  `num_asiento` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `no_tarjeta` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asiento_funcion`
--

CREATE TABLE `asiento_funcion` (
  `num_asiento` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacionamiento`
--

CREATE TABLE `estacionamiento` (
  `num_cajon` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `no_tarjeta` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `folio` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcion`
--

CREATE TABLE `funcion` (
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_de_codigos_validos`
--

CREATE TABLE `lista_de_codigos_validos` (
  `codigo` varchar(12) NOT NULL,
  `estado` tinyint(1) DEFAULT '0',
  `num_promo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promocion`
--

CREATE TABLE `promocion` (
  `num_promo` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promocion_titular`
--

CREATE TABLE `promocion_titular` (
  `num_promo` int(11) NOT NULL,
  `no_tarjeta` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titular`
--

CREATE TABLE `titular` (
  `no_tarjeta` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asiento`
--
ALTER TABLE `asiento`
  ADD PRIMARY KEY (`num_asiento`,`folio`,`fecha`,`hora`,`no_tarjeta`),
  ADD KEY `folio` (`folio`,`fecha`,`hora`),
  ADD KEY `no_tarjeta` (`no_tarjeta`);

--
-- Indices de la tabla `asiento_funcion`
--
ALTER TABLE `asiento_funcion`
  ADD PRIMARY KEY (`num_asiento`,`folio`,`fecha`,`hora`),
  ADD KEY `folio` (`folio`,`fecha`,`hora`);

--
-- Indices de la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  ADD PRIMARY KEY (`num_cajon`,`folio`,`fecha`,`hora`),
  ADD KEY `folio` (`folio`,`fecha`,`hora`),
  ADD KEY `no_tarjeta` (`no_tarjeta`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`folio`);

--
-- Indices de la tabla `funcion`
--
ALTER TABLE `funcion`
  ADD PRIMARY KEY (`folio`,`fecha`,`hora`);

--
-- Indices de la tabla `lista_de_codigos_validos`
--
ALTER TABLE `lista_de_codigos_validos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `num_promo` (`num_promo`);

--
-- Indices de la tabla `promocion`
--
ALTER TABLE `promocion`
  ADD PRIMARY KEY (`num_promo`),
  ADD KEY `folio` (`folio`);

--
-- Indices de la tabla `promocion_titular`
--
ALTER TABLE `promocion_titular`
  ADD PRIMARY KEY (`num_promo`,`no_tarjeta`),
  ADD KEY `no_tarjeta` (`no_tarjeta`);

--
-- Indices de la tabla `titular`
--
ALTER TABLE `titular`
  ADD PRIMARY KEY (`no_tarjeta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asiento`
--
ALTER TABLE `asiento`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `asiento_funcion`
--
ALTER TABLE `asiento_funcion`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `funcion`
--
ALTER TABLE `funcion`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `lista_de_codigos_validos`
--
ALTER TABLE `lista_de_codigos_validos`
  MODIFY `num_promo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `promocion`
--
ALTER TABLE `promocion`
  MODIFY `num_promo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `promocion_titular`
--
ALTER TABLE `promocion_titular`
  MODIFY `num_promo` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asiento`
--
ALTER TABLE `asiento`
  ADD CONSTRAINT `asiento_ibfk_1` FOREIGN KEY (`folio`,`fecha`,`hora`) REFERENCES `funcion` (`folio`, `fecha`, `hora`),
  ADD CONSTRAINT `asiento_ibfk_2` FOREIGN KEY (`no_tarjeta`) REFERENCES `titular` (`no_tarjeta`);

--
-- Filtros para la tabla `asiento_funcion`
--
ALTER TABLE `asiento_funcion`
  ADD CONSTRAINT `asiento_funcion_ibfk_1` FOREIGN KEY (`folio`,`fecha`,`hora`) REFERENCES `funcion` (`folio`, `fecha`, `hora`),
  ADD CONSTRAINT `asiento_funcion_ibfk_2` FOREIGN KEY (`num_asiento`) REFERENCES `asiento` (`num_asiento`);

--
-- Filtros para la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  ADD CONSTRAINT `estacionamiento_ibfk_1` FOREIGN KEY (`folio`,`fecha`,`hora`) REFERENCES `funcion` (`folio`, `fecha`, `hora`),
  ADD CONSTRAINT `estacionamiento_ibfk_2` FOREIGN KEY (`no_tarjeta`) REFERENCES `titular` (`no_tarjeta`);

--
-- Filtros para la tabla `funcion`
--
ALTER TABLE `funcion`
  ADD CONSTRAINT `funcion_ibfk_1` FOREIGN KEY (`folio`) REFERENCES `evento` (`folio`);

--
-- Filtros para la tabla `lista_de_codigos_validos`
--
ALTER TABLE `lista_de_codigos_validos`
  ADD CONSTRAINT `lista_de_codigos_validos_ibfk_1` FOREIGN KEY (`num_promo`) REFERENCES `promocion` (`num_promo`);

--
-- Filtros para la tabla `promocion`
--
ALTER TABLE `promocion`
  ADD CONSTRAINT `promocion_ibfk_1` FOREIGN KEY (`folio`) REFERENCES `evento` (`folio`);

--
-- Filtros para la tabla `promocion_titular`
--
ALTER TABLE `promocion_titular`
  ADD CONSTRAINT `promocion_titular_ibfk_1` FOREIGN KEY (`num_promo`) REFERENCES `promocion` (`num_promo`),
  ADD CONSTRAINT `promocion_titular_ibfk_2` FOREIGN KEY (`no_tarjeta`) REFERENCES `titular` (`no_tarjeta`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
