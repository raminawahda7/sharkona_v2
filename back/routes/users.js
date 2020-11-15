
const express = require('express');
const router = express.Router();
const {User} = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const joi = require( "@hapi/joi");