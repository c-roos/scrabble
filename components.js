var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { calcScore } from './utils.js';

var Word = function (_React$Component) {
    _inherits(Word, _React$Component);

    function Word() {
        _classCallCheck(this, Word);

        return _possibleConstructorReturn(this, (Word.__proto__ || Object.getPrototypeOf(Word)).apply(this, arguments));
    }

    _createClass(Word, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "card border-info mb-3 ml-1 mr-1" },
                React.createElement(
                    "div",
                    { className: "card-header" },
                    React.createElement(
                        "small",
                        null,
                        this.props.word
                    )
                ),
                React.createElement(
                    "div",
                    { className: "card-body" },
                    React.createElement(
                        "h5",
                        { className: "card-title" },
                        this.props.score
                    )
                )
            );
        }
    }]);

    return Word;
}(React.Component);

var WordContainer = function (_React$Component2) {
    _inherits(WordContainer, _React$Component2);

    function WordContainer(props) {
        _classCallCheck(this, WordContainer);

        var _this2 = _possibleConstructorReturn(this, (WordContainer.__proto__ || Object.getPrototypeOf(WordContainer)).call(this, props));

        _this2.state = { words: [] };
        return _this2;
    }

    _createClass(WordContainer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.words.map(function (w) {
                    return React.createElement(Word, { word: w, score: calcScore(w) });
                })
            );
        }
    }]);

    return WordContainer;
}(React.Component);

export { Word, WordContainer };