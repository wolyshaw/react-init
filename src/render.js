import _regeneratorRuntime from 'babel-runtime/regenerator'
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator'

var _this = this

import fs from 'fs'
import path from 'path'
import util from 'util'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Application from './Application'
import config from '../config'

var context = {}

var renderFullContent = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var req = _ref.req
    var content, html
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            content = renderToString(React.createElement(
              StaticRouter,
              {
                basename: config['production'].basename,
                location: req.url,
                context: context
              },
              React.createElement(Application, null)
            ))
            _context.next = 3
            return util.promisify(fs.readFile)(path.join(__dirname, '../', 'dist', 'index.html')).then(function (file) {
              return file.toString()
            })

          case 3:
            html = _context.sent
            return _context.abrupt('return', html.replace('<div id="app"></div>', '<div id="app">' + content + '</div>'))

          case 5:
          case 'end':
            return _context.stop()
        }
      }
    }, _callee, _this)
  }))

  return function renderFullContent(_x) {
    return _ref2.apply(this, arguments)
  }
}()

export default (function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(req, res) {
    var h
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2
            return renderFullContent({ req: req })

          case 2:
            h = _context2.sent

            res.send(h)

          case 4:
          case 'end':
            return _context2.stop()
        }
      }
    }, _callee2, _this)
  }))

  return function (_x2, _x3) {
    return _ref3.apply(this, arguments)
  }
})()