"use strict";
import UserStorage from "../../models/todoStorage.js";
import User from "../../models/todoService.js";

export default {
  output: {
    main: (req, res) => {
      res.render("home/index");
    },
    getDescription: async (req, res) => {},
  },

  process: {
    appendDescription: async (req, res) => {},

    deleteDescription: async (req, res) => {},

    updateDescription: async (req, res) => {},

    checkbox: async (req, res) => {},
  },
};
