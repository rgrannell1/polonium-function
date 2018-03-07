
const express = require('express')
const constants = require('../../shared/constants')

module.exports = express.static(constants.paths.static)
