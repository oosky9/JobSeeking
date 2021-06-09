document.addEventListener('DOMContentLoaded', function () {
    const acd = new AcdMenu();
});

class AcdMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelectorAll('.blog__question');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        let content = this.nextElementSibling;
        this.classList.toggle('acd-active');
        content.classList.toggle('acd-open');
    }

    _addEvent() {
        for (let i = 0; i<this.DOM.btn.length; i++) {
            this.DOM.btn[i].addEventListener(this.eventType, this._toggle.bind(this.DOM.btn[i]));
        }
    }

}


